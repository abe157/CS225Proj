package UCRCS225.TEST.service;

import UCRCS225.TEST.model.Products;
import UCRCS225.TEST.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductsServiceImpl implements ProductsService {
    @Autowired
    ProductsRepository productRepository;

    @Override
    public List<Products> findAll(){
        return productRepository.findAll();
    }

}
