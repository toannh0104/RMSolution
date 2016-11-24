package com.mitrais.rms.common.authorization.configuration;

import com.mitrais.rms.EmployeeManageApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;

/**
 * Created by Toan_H on 11/24/2016.
 */

public class WebInitializer extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(EmployeeManageApplication.class);
    }

}