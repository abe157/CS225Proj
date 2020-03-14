package UCRCS225.TEST.controller;

import UCRCS225.TEST.model.Products;
import UCRCS225.TEST.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductsController {
    @Autowired
    ProductsRepository productRepository;

    @RequestMapping(value = "/api/findallproduct", method = {RequestMethod.GET, RequestMethod.POST})
    public @ResponseBody
    Iterable<Products> getAllProduct() {
        List<Products> list = productRepository.findAll();
        return list;
    }
}
