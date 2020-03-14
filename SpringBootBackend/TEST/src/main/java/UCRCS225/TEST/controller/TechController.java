package UCRCS225.TEST.controller;

import UCRCS225.TEST.model.Tech;
import UCRCS225.TEST.repository.TechRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@RestController
public class TechController {

    @Autowired
    private TechRepository techRepository;

    @RequestMapping(value = "/api/findalltech", method = {RequestMethod.GET, RequestMethod.POST})
    public @ResponseBody
    Iterable<Tech> getAllTech() {
        List<Tech> list = techRepository.findAll();
        return list;
    }
}
