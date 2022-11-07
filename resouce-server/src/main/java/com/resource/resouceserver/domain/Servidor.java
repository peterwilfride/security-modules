package com.resource.resouceserver.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity(name = "servidores")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Servidor extends AbstractEntity {

    @OneToOne
    @JoinColumn(name = "pessoa_fisica_id")
    private PessoaFisica pessoaFisica;

    @Column(unique = true)
    private String matricula;
}
