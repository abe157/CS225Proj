package UCRCS225.TEST.service;

import UCRCS225.TEST.model.Products;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductsService {
    List<Products> findAll();
}
