package org.ucr225.service;

import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.ucr225.model.Product;
import org.ucr225.repository.ProductRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> findAll(){
        return productRepository.findAll();
    }

    @Override
    public List<Product> findByiChemNo(Integer iChemNo){

        return productRepository.findByiChemNo(iChemNo);

    }
}
