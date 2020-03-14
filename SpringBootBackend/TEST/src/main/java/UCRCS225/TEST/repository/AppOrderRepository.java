package UCRCS225.TEST.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import UCRCS225.TEST.model.AppOrder;
import org.springframework.transaction.annotation.Propagation;

import org.springframework.transaction.annotation.Transactional;

import javax.persistence.NamedQuery;
import java.util.Date;
import java.util.List;

@Repository
public interface AppOrderRepository extends JpaRepository<AppOrder,Integer> {

    List<AppOrder> findByFieldID(@Param("fieldid") Integer fieldid);

    //@Query(value = "select * from AppOrder p where p.fieldid = :fieldid and p.dayCompleted is NOT and p.dayCompleted > DATE_SUB(NOW(), INTERVAL 7 DAY)", nativeQuery = true)
   // @Query(value = "select * from AppOrder p where p.fieldid = :fieldid and p.dayCompleted )", nativeQuery = true)
    @Query(value=" SELECT * FROM AppOrder p WHERE p.fieldid= : fieldid AND P.dayCompleted = convert(datetime, '0002-11-30 00:00:00.0')", nativeQuery = true)
    List<AppOrder> findByRecent(@Param("fieldid") Integer fieldid);
    AppOrder getOne(Integer id);

    @Modifying
    @Transactional
    @Query("UPDATE AppOrder p SET p.dayCompleted = :dayCompleted WHERE p.fieldid = :fieldid")
    List<AppOrder>  updateAppOrderInventory(@Param("fieldid") int fieldid, @Param("dayCompleted") String dayCompleted);


    //List<AppOrder> findRecent(@Param("dayComplete") Date complete, Date nowDate);
   // long givenTwoDatesInDate4j_whenDifferentiating_thenWeGetSix();
}
