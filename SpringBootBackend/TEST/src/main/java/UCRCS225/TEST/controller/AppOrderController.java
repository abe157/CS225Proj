package UCRCS225.TEST.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import UCRCS225.TEST.model.AppOrder;
import UCRCS225.TEST.repository.AppOrderRepository;

import javax.persistence.NamedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import java.net.URISyntaxException;
import java.text.SimpleDateFormat;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.*;

@RestController
public class AppOrderController {

    @Autowired
    private AppOrderRepository orderRepository;
    private Object Optional;

    @RequestMapping(value="/api/getrecentplotinfo",method = {RequestMethod.GET, RequestMethod.POST})
    List<AppOrder> getRecent(@RequestBody AppOrder apporder){
        int field = apporder.getFieldid();
        System.out.println("plot_num : "+ field);
       List<AppOrder> order = orderRepository.findByRecent(field);
       // List<AppOrder> order = orderRepository.findByFieldID(field);
        System.out.println("complete find "+ order);
        return order;

    }

    @RequestMapping(value="/api/submitorder",method = {RequestMethod.GET, RequestMethod.POST})
    public @ResponseBody String submitOrder(@RequestBody Map<String, Object> apporder ) throws URISyntaxException {

        try{
            AppOrder order = new AppOrder();

            System.out.println(apporder.toString());
            order.setFieldid(Integer.parseInt((String) apporder.get("fieldid").toString()));
            order.setPesticide((String) apporder.get("Pesticide"));
            order.setRate((String) apporder.get("Rate"));
            order.setREI((String) apporder.get("REI"));
            order.setPHI((String) apporder.get("PHI"));
            order.setEquipment((String) apporder.get("Equipment"));
            order.setTechnician((String) apporder.get("Technician"));
           // SimpleDateFormat formatter = new SimpleDateFormat("YYYY-MM-DD hh:mm:ss", Locale.US);
            String schdate = (String) apporder.get("dayScheduled");

           // Date dt  = formatter.parse(schdate);

            System.out.println("date "+schdate);
            order.setDayScheduled(schdate);
           order.setDayCompleted("0000-00-00 00:00:00");
            //order.setDayCompleted((LocalDateTime.parse(apporder.get("dayCompleted").toString())));

            orderRepository.save(order);
            //int field = apporder.getFieldid();
            return "{\"msg\":\"success\"}";
        }catch(Exception e){
            System.out.println("ERROR: "+e);
        }
        return "{\"msg\":\"Failed\"}";

    }

    @RequestMapping(value="api/findbyfield",method = {RequestMethod.GET, RequestMethod.POST})
    public @ResponseBody
   List<AppOrder> findByFieldID(@RequestBody AppOrder apporder){
        int field = apporder.getFieldid();
        System.out.println("plot_num : "+ field);
        List<AppOrder> order = orderRepository.findByFieldID(field);
        return order;

    }



    @RequestMapping(value="api/submitdoc",method = {RequestMethod.GET, RequestMethod.POST})
    public String submitDoc(@RequestBody Map<String, Object> apporder){
        try{
           AppOrder order = null;

            System.out.println(apporder.toString());
            List <AppOrder> orders = orderRepository.findByFieldID(Integer.parseInt((String) apporder.get("fieldid").toString()));
           int  orderID = Integer.parseInt((String) apporder.get("fieldid").toString());
            String dateComp =apporder.get("dayCompleted").toString();
           // order.setDayCompleted(dateComp);
         // List <AppOrder> orders = orderRepository.updateAppOrderInventory(orderID,dateComp);
          if(!orders.isEmpty()){
              order = orders.get(0);
             // DateTimeFormatter formatter = DateTimeFormat.forPattern("YYYY-MM-DD hh:mm:ss");
              //Date dt = formatter.parseDateTime(dateComp);
              SimpleDateFormat formatter = new SimpleDateFormat("YYYY-MM-DD hh:mm:ss", Locale.US);
             // String schdate = (String) apporder.get("dayScheduled");

             // Date dt  = formatter.parse(dateComp);
              //order.setDayScheduled(dt);
              order.setDayCompleted(dateComp);
              int id = order.getId();
             // orderRepository.findById(id);
              order = orderRepository.getOne(id);
              order.setDayCompleted(dateComp);
              orderRepository.save(order);
              System.out.println("After update "+orderRepository.getOne(id).toString());

          }
            //orderRepository.save(order);



            //int field = apporder.getFieldid();
            return "{\"msg\":\"success\"}";
        }catch(Exception e){
            System.out.println("ERROR: "+e);
        }
        return "{\"msg\":\"Failed\"}";

    }
}
