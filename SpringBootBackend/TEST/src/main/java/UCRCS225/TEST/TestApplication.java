package UCRCS225.TEST;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.util.ResourceUtils;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@SpringBootApplication
public class TestApplication {
	@Bean
	WebMvcConfigurer configurer () {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addResourceHandlers (ResourceHandlerRegistry registry) {
				registry.addResourceHandler().
						addResourceLocations("classpath:/template/index.html");
			}
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(TestApplication.class, args);
	}


}
