package UCRCS225.TEST.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table
@NamedQueries({
        // @NamedQuery(name="Order.submitOrder" , query="INSERT") -- save

})
public class Products implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private int iChemNo;
    private String strChemical;

    public void setId(int ID){this.id = ID;}
    public int getId(){return id;}

    public void setiChemNo(int iChemNo){this.iChemNo = iChemNo;}
    public int getiChemNo(){return iChemNo;}

    public void setStrChemical(String strChemical){this.strChemical = strChemical;}
    public String getStrChemical(){return strChemical;}

}
