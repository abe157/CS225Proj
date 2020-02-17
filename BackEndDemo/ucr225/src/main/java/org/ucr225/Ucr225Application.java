package org.ucr225;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.ucr225.model.AppRecord;

@SpringBootApplication
public class Ucr225Application {

	public static void main(String[] args) {
		SpringApplication.run(Ucr225Application.class, args);
	}


}
