package org.ucr225.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.ucr225.common.ServiceResultEnum;
import org.ucr225.model.AppRecord;
import org.ucr225.repository.AppRecordRepository;
import org.ucr225.service.AppRecordService;
import org.ucr225.util.Result;
import org.ucr225.util.ResultGenerator;
import sun.misc.MessageUtils;

import javax.annotation.Resource;
import java.util.Optional;

@Controller
public class AppRecordController {

    @Autowired
    private AppRecordRepository appRecordRepository;


    @GetMapping(path="/api/all")
    public @ResponseBody Iterable<AppRecord> getAllAppRecord() {
        return appRecordRepository.findAll();
    }

    @GetMapping(path="api/find")
    public @ResponseBody Optional<AppRecord> findById(Integer id){
        return appRecordRepository.findById(id);
    }

}
