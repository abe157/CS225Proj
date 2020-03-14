package UCRCS225.TEST.service;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import UCRCS225.TEST.model.AppOrder;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public interface AppOrderService {
    void save(AppOrder order);
    AppOrder getOne(Integer id);
   List<AppOrder> findByFieldID(Integer fieldid);
   List<AppOrder> findByRecent(Integer fieldid);
    List<AppOrder>  updateAppOrderInventory(Integer fieldid, String dayCompleted);
   // long givenTwoDatesInDate4j_whenDifferentiating_thenWeGetSix(DateTime datecomp);
}
