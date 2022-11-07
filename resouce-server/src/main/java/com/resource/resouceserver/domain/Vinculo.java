package com.resource.resouceserver.domain;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

public class Vinculo {

    @ManyToOne
    @JoinColumn(name = "servidor_id")
    protected Servidor servidor;

    /*@OneToOne
    protected Setor setor;

    @OneToOne
    protected UnidadeOrganizacional unidadeOrganizacional;*/
}
