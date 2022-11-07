package br.gov.sead.pagrn.dto.cargo;

import br.gov.sead.pagrn.domain.type.Escolaridade;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@Setter
@ToString
public class CargoDtoRequest {

    private String denominacao;

    private LocalDate dataCriacao;

    private LocalDate dataExtincao;

    private Escolaridade escolaridade;

    // Entidade vai ser cascateada ou vai ser passada o ID?
    // private CategoriaFuncional categoriaFuncional;

}
