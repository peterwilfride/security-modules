package com.resource.resouceserver.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class helloController {

    @GetMapping
    @PreAuthorize("hasAnyAuthority('ROLE_USER')")
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok().body("hello world");
    }
}
