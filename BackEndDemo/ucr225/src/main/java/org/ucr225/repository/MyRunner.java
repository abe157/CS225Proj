package org.ucr225.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.ucr225.model.AppRecord;
import org.ucr225.service.AppRecordService;


@Component
public class MyRunner  implements CommandLineRunner {
    private static final Logger logger = LoggerFactory.getLogger(MyRunner.class);

    @Autowired
    private AppRecordService appRecordService;
    @Override
    public void run(String...args) throws Exception {
        //appRecordService.save(new AppRecord("location2", "Product3"));

        int id1 = 2;
//        appRecordService.findById(1).ifPresent(System.out::println);
//        //appRecordService.update(1);
//        System.out.println("check update");
//        appRecordService.findById(appRecordService.update(1)).ifPresent(System.out::println);

}
}
