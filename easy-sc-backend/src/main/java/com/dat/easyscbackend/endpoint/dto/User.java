package com.dat.easyscbackend.endpoint.dto;

import java.io.Serializable;

/**
 * Created by Pham Tien Dat on 24/09/2017.
 */
public class User implements Serializable {
    private String username;
    private String password;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
