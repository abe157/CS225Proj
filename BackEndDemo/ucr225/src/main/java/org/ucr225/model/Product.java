package org.ucr225.model;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import lombok.Data;
import org.springframework.context.annotation.Primary;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@NamedQueries({
        @NamedQuery(name="Product.findByiChemNo" , query=" SELECT p FROM Product p WHERE p.iChemNo= : iChemNo")
})

public class Product implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    @Column
    private int iChemNo;
    @Column
    private String strEpaNo;

    public void setId(Integer id){ this.id = id; }
    public Integer getId(){
        return id;
    }

    public void setiChemNo(Integer chemNo){ this.iChemNo = chemNo; }
    public Integer getiChemNo(){
        return iChemNo;
    }

    public void setStrEpaNo(String epaNo){this.strEpaNo = strEpaNo;}
    public String getStrEpaNo(){return strEpaNo;}

    @Override
    public String toString() {
        return iChemNo + " - " + strEpaNo ;
    }


}
