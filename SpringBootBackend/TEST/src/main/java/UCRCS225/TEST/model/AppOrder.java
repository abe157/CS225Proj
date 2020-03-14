package UCRCS225.TEST.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.web.bind.annotation.RequestBody;
import org.thymeleaf.util.DateUtils;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

//import org.apache.commons.lang.time.DateUtils;

@Entity
@Table
@NamedQueries({
       // @NamedQuery(name="Order.submitOrder" , query="INSERT") -- save
       //@NamedQuery(name="AppOrder.findByFieldID" , query=" SELECT p FROM AppOrder p WHERE p.fieldid= : fieldid AND p.dayCompleted is NULL"),
       @NamedQuery(name="AppOrder.findByFieldID" , query=" SELECT p FROM AppOrder p WHERE p.fieldid= : fieldid"),

      //  @NamedQuery(name="AppOrder.updateByID" ,query="UPDATE AppOrder p WHERE p.id = :id")
})
public class AppOrder implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    Integer fieldid;
    String Pesticide;
    String Rate;
    String REI;
    String PHI;
    String Equipment;
    String Technician;


  // @Type(type = "org.jadira.usertype.dateandtime.joda.tDateTime")
   //  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern ="yyyy-MM-dd HH:mm:ss")
    private Date dayScheduled; // time stamp
  // @Type(type = "org.jadira.usertype.dateandtime.joda.DateTime")
  //@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date dayCompleted;


    public AppOrder(){}

    public Integer getOrderFact(@RequestBody AppOrder order)
    {
        return order.getFieldid();
    }

    public void setId(Integer id){ this.id = id; }
    public Integer getId(){
        return id;
    }

    public void setFieldid(Integer fieldid) {this.fieldid = fieldid;}
    public  Integer getFieldid(){return fieldid;}

    public void setPesticide(String pesticide) {this.Pesticide = pesticide;}
    public  String getPesticide(){return Pesticide;}

    public void setRate(String rate) {this.Rate = rate;}
    public  String getRate(){return Rate;}

    public void setREI(String rei) {this.REI = rei;}
    public  String getREI(){return REI;}

    public void setPHI(String phi) {this.PHI = phi;}
    public  String getPHI(){return PHI;}

    public void setEquipment(String equipment){this.Equipment = equipment;}
    public  String getEquipment(){return Equipment;}

    public void setTechnician(String technician){this.Technician = technician;}
    public  String getTechnician(){return Technician;}

    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern ="yyyy-MM-dd HH:mm:ss")
    public void setDayScheduled(String timestamp) throws ParseException {
        LocalDateTime newDate = null;
        Timestamp times = null;
        DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm", Locale.ENGLISH);
        String schdate = (String) timestamp;
        Date date = formatter.parse(schdate);
        try {
            times = new java.sql.Timestamp(date.getTime());
           // newDate = LocalDateTime.parse(schdate, dtf);
        } catch (DateTimeParseException e) {
            throw e;
        }

        System.out.println("make date :"+times);
        this.dayScheduled = times;

    }

    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern ="yyyy-MM-dd HH:mm:ss")

    public String getDayScheduled(){
        return dayScheduled.toString();
    }



    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern ="yyyy-MM-dd HH:mm:ss")
    public void setDayCompleted(String timestamp) throws ParseException {
        Timestamp times = null;
        LocalDateTime newDate = null;
        DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm", Locale.ENGLISH);

            String schdate = (String) timestamp;
            Date date = formatter.parse(schdate);
            try {
                times = new java.sql.Timestamp(date.getTime());
                //newDate = LocalDateTime.parse(schdate, dtf);
            } catch (DateTimeParseException e) {
                throw e;
            }
            this.dayCompleted = date;


        System.out.println("make date :"+times);

    }


   // @JsonFormat(shape = JsonFormat.Shape.STRING, pattern ="yyyy-MM-dd HH:mm:ss")
    public  String getDayCompleted(){
        String curr = dayCompleted.toString();
        if(curr.equals("0002-11-30 00:00:00.0")){
            curr = "not completed";
        }
        return curr;
    }

    public String toString(){
        return this.id+", "+
                this.fieldid+
                ", "+this.Pesticide+
                ", "+this.PHI+", "+
                ", "+this.Rate+
                ", "+this.REI+", "+this.Equipment+", "+this.Technician+
                ", "+this.dayScheduled+", "+this.dayCompleted;
    }


}
