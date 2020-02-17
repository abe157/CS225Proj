package org.ucr225.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.ucr225.model.AppRecord;
import org.ucr225.repository.AppRecordRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AppRecordServiceImpl implements AppRecordService {
    @Autowired
    private AppRecordRepository appRecordRepository;

    @Override
    public List<AppRecord> findAll(){
        return appRecordRepository.findAll();
    }
    @Override
    public void save(AppRecord appRecord) {
        appRecordRepository.save(appRecord);
    }

    @Override
    public Optional<AppRecord> findById(Integer id){
        return appRecordRepository.findById(id);
    }

    @Override
    public int update(Integer id){
        Optional<AppRecord> appRecord = appRecordRepository.findById(id);
        AppRecord record = appRecord.get();
        record.setTime_end(1222222222);
        appRecordRepository.save(record);
        return record.getID();
        //appRecordRepository.update(id);
    }
}
