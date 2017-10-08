package com.dat.easyscbackend;

import com.dat.easyscbackend.configuration.EasyScSecurityConfiguration;
import com.dat.easyscbackend.endpoint.PrivateUserEndpoint;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(EasyScSecurityConfiguration.class)
@ComponentScan(basePackageClasses = {PrivateUserEndpoint.class, EasyScSecurityConfiguration.class})
public class EasyScBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(EasyScBackendApplication.class, args);
    }

}

