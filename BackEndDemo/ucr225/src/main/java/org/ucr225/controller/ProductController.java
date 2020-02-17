package org.ucr225.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.ucr225.model.AppRecord;
import org.ucr225.model.Product;
import org.ucr225.repository.ProductRepository;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Controller
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping(path="/api/allproduct")
    public @ResponseBody Iterable<Product> getAllProduct(){
        return productRepository.findAll();
    }

    @GetMapping(path="api/findbychem/{iChemNo}")
    public @ResponseBody
    List<Product> findByiChemNo(@PathVariable Integer iChemNo){
        return productRepository.findByiChemNo(iChemNo);
    }
}
