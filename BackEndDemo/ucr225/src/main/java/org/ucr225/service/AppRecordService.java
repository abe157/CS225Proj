package org.ucr225.service;


import org.ucr225.model.AppRecord;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface AppRecordService {


    List<AppRecord> findAll();
    void save(AppRecord appRecord);
    Optional <AppRecord> findById(Integer id);
    int update(Integer id);

}
