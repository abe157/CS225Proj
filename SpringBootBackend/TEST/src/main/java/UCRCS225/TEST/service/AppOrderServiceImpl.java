package UCRCS225.TEST.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import UCRCS225.TEST.model.AppOrder;
import UCRCS225.TEST.repository.AppOrderRepository;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class AppOrderServiceImpl implements AppOrderService {
    @Autowired
    private AppOrderRepository orderRepository;

    @Override
    public void save(AppOrder order) {
        orderRepository.save(order);
    }

    @Override
    public List<AppOrder> findByFieldID(Integer fieldid){

        return orderRepository.findByFieldID(fieldid);
    }

    @Override
    public List<AppOrder> findByRecent( Integer fieldid){


        return orderRepository.findByRecent(fieldid);
    }

    @Override
    public AppOrder getOne(Integer id) {
       // AppOrder p = sessionFactory.getCurrentSession().load(AppOrder.class, id);
        return orderRepository.getOne(id);
    }


//    @Override
//    public long givenTwoDatesInDate4j_whenDifferentiating_thenWeGetSix( DateTime dateComp) {
//
//        DateTime now = DateTime.now(TimeZone.getDefault());
//        DateTime sixDaysBehind = now.minusDays(7);
//
//        long diff = Math.abs(now.numDaysFrom(sixDaysBehind));
//
//        return diff;
//    }



    @Override
    public  List<AppOrder>  updateAppOrderInventory(Integer fieldid, String dayCompleted){
      //  List<AppOrder> pend = null;
       // List<AppOrder> order = orderRepository.findByFieldID(fieldid);
//        for(AppOrder o :order){
//            if(o.getDayCompleted() != null ){
//                pend.add(o);
//            }
//        }

        return orderRepository.updateAppOrderInventory(fieldid, dayCompleted);
    }
}
