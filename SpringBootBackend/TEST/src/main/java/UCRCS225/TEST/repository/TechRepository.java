package UCRCS225.TEST.repository;

import UCRCS225.TEST.model.Tech;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TechRepository extends JpaRepository<Tech,Integer> {

}
