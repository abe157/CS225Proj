package org.ucr225.service;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.ucr225.model.Product;

import java.util.List;
import java.util.Optional;

@Service
public interface ProductService{
    List<Product> findAll();

    List<Product> findByiChemNo( Integer iChemNo);
}
