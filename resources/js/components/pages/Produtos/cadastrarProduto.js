import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default function CadastrarProduto({ history }) {

    const handleSave = (e) => {
        e.preventDefault();
        axios
        .post('/api/produtos', {
            "produto":[
                {
                    "codigo":"223435780",
                    "descricao":"Caneta Azul",
                    "situacao":"Ativo",
                    "descricaoCurta":"teste",
                    "descricaoComplementar":"teste",
                    "un":"teste",
                    "vlr_unit":"10",
                    "preco_custo":"5",
                    "peso_bruto":"5",
                    "peso_liq":"5",
                    "class_fiscal":"1000.01.01",
                    "marca":"sem marca",
                    "origem":"0",
                    "estoque":"100",
                    /*"deposito":[
                        {
                            "id":"",
                            "estoque":"",
                        }
                    ],*/
                    "gtin":"223435780",
                    "gtinEmbalagem":"54546",
                    "largura":"11",
                    "altura":"21",
                    "profundidade":"31",
                    "estoqueMinimo":"1.00",
                    "estoqueMaximo":"100.00",
                    "cest":"28.040.00",
                    "idGrupoProduto":"12345",
                    "condicao":"Novo",
                    "freteGratis":"N",
                    "linkExterno":"",
                    "observacoes":"Observações do meu produto",
                    "producao":"P",
                    "dataValidade":"20/11/2019",
                    "descricaoFornecedor":"Descrição do fornecedor",
                    "idFabricante":"",
                    "codigoFabricante":"",
                    "unidadeMedida":"Centímetros",
                    "garantia":"4",
                    "itensPorCaixa":"2",
                    "volumes":"2",
                    "urlVideo":"",
                    "imagens":[
                        {
                            "url":"",
                        }
                    ],
                    "camposCustomizados":[
                        {

                        }
                    ],
                }
            ]
        })
        .then(res => {
            console.log(res);
            /*if (res.status == 200) {
                history.push('/');
            }*/
        })
        .catch(err => console.log(err));
    }

  return (
    <div className="container">
        <p>Cadastro de Produto</p>
        <div>
            <Form onSubmit={handleSave}>
                <Button type="submit" color="primary">Enviar</Button> &nbsp;
                <Button onClick={() => {history.goBack()}} color="danger">Cancelar</Button>
            </Form>
        </div>
    </div>
  );
}
