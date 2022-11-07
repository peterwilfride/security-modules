package com.resource.resouceserver.controllers;

import org.keycloak.KeycloakPrincipal;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.representations.AccessToken;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
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

    @GetMapping("/readtoken")
    @PreAuthorize("hasAnyAuthority('ROLE_USER')")
    public ResponseEntity<String> readToken() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Jwt principal = (Jwt) authentication.getPrincipal();

        //System.out.println(principal.getHeaders());

        principal.getClaims();

        //AccessToken token = principal.getKeycloakSecurityContext().getToken();

        return ResponseEntity.ok().body("hello world");
    }
}
