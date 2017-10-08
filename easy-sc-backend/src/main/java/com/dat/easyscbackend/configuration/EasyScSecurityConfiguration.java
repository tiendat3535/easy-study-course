package com.dat.easyscbackend.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

/**
 * Created by Pham Tien Dat on 24/09/2017.
 */
@Configuration
@EnableWebSecurity
public class EasyScSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private EasyScAuthenticationEntryPoint easyScAuthenticationEntryPoint;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .sessionFixation()
                .newSession()
                .and()
                .authorizeRequests()
                .antMatchers("/private/**").authenticated()
                .anyRequest().permitAll()
                .and().httpBasic().realmName("TEST REALM").authenticationEntryPoint(easyScAuthenticationEntryPoint);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().withUser("user").password("user").roles("USER");
    }
}
