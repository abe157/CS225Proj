package UCRCS225.TEST.repository;

import UCRCS225.TEST.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsRepository extends JpaRepository<Products,Integer> {


}
