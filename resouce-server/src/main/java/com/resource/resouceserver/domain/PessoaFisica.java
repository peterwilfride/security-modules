package com.resource.resouceserver.domain;

import lombok.*;
import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "pessoas_fisicas")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class PessoaFisica extends AbstractEntity implements Serializable {

    private String nome;

    private String cpf;

    private String email;
}

