package br.gov.sead.pagrn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
@EnableWebMvc
@EnableSwagger2
public class PagRnApplication extends SpringBootServletInitializer{

    public static void main(String[] args) {
        SpringApplication.run(PagRnApplication.class, args);
    }

}