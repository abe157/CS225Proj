package org.ucr225.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class AppRecord {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String Location;
    private String Product_name;
    private int Prod_amt;
    private int Prod_amt_unit;
    private long Date_sched;
    private long Date_app;
    private long Time_start;
    private long Time_end;

    public AppRecord(){

    }
    public AppRecord(String location, String name) {
        this.Location = location;
        this.Product_name = name;
    }

    public void setID(Integer ID){ this.id = ID; }
    public Integer getID(){
        return id;
    }

    public void setProduct_name(String name){
        this.Product_name = name;
    }
    public String getProduct_name(){
        return Product_name;
    }

    public void setLocation (String location) {this.Location = location;}
    public String getLocation() {return Location;}

    public void setProd_amt(Integer amt) {this.Prod_amt = amt;}
    public int getProd_amt(){return Prod_amt;}

    public void setProd_amt_unit(Integer unit){this.Prod_amt_unit = unit;}
    public int getProd_amt_unit(){return Prod_amt_unit;}

    public void setDate_sched(long timestamp){this.Date_sched = timestamp;}
    public long getDate_sched(){return Date_sched;}

    public void setDate_app(long timestamp){this.Date_app = timestamp;}
    public long getDate_app(){return Date_app;}

    public void setTime_start(long timestamp){this.Time_start = timestamp;}
    public long getTime_start(){return Time_start;}

    public void setTime_end(long timestamp){this.Time_end = timestamp;}
    public long getTime_end(){return Time_end;}

    @Override
    public String toString() {
        return id + ". " + Location + " - " + Product_name + " "+Date_sched+" "+Date_app+" "+Time_start+" "+Time_end;
    }
}
