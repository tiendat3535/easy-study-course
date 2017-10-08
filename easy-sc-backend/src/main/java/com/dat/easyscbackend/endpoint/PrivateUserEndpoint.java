package com.dat.easyscbackend.endpoint;

import com.dat.easyscbackend.endpoint.dto.User;
import com.google.common.collect.Lists;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Pham Tien Dat on 24/09/2017.
 */
@RestController
@RequestMapping(path = "private")
public class PrivateUserEndpoint {

    @RequestMapping(path = "/users", method = RequestMethod.GET)
    public ResponseEntity<?> listUser() {
        return new ResponseEntity(getUsers(), HttpStatus.OK);
    }

    private List<User> getUsers() {
        return Lists.newArrayList(new User("user", "user"));
    }

    @RequestMapping(path = "/user", method = RequestMethod.GET)
    public ResponseEntity<?> user() {
        return new ResponseEntity(new User("user", "user"), HttpStatus.OK);
    }


}
