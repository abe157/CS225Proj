package UCRCS225.TEST.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;


import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by toutou on 2018/10/27.
 */
@Configuration
public class WebConfig extends WebMvcConfigurationSupport{

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedMethods("*")
                .allowedOrigins("*")
                .allowedHeaders("*");
        super.addCorsMappings(registry);
    }



    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(
                "/webjars/**",
                "/img/**",
                "/css/**",
                "/js/**",
                "/file/**",
                "/bootstrap-4.4.1-dist/**",
                "/leaflet/**"
                )
                .addResourceLocations(
                        "classpath:/META-INF/resources/webjars/",
                        "classpath:/static/img/",
                        "classpath:/static/css/",
                        "classpath:/static/js/",
                        "classpath:/static/file/",
                        "classpath:/static/bootstrap-4.4.1-dist/",
                        "classpath:/static/leaflet/"
                        );
    }

//    @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/static/**").addResourceLocations(
//                "classpath:/file/",
//                "classpath:/css/",
//              "classpath:/js/"
//                );
//    }
}

