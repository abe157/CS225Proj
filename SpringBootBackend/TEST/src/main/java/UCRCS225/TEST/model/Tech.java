package UCRCS225.TEST.model;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table
@NamedQueries({
        // @NamedQuery(name="Order.submitOrder" , query="INSERT") -- save

})
public class Tech implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    public Tech(){}

    public void setId(int ID){this.id = ID;}
    public int getId(){return id;}

    public void setName(String name){this.name = name;}
    public String getName(){return name;}

    public String toString(){
        return id + ", "+name;
    }

    // fetch all teches
}
