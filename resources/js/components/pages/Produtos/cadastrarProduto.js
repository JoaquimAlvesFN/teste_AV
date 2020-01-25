import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default function CadastrarProduto({ history }) {
    const [codigo, setCodigo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        axios
        .post('/api/produtos', {
            "produto":[
                {
                    "codigo": codigo,
                    "descricao":descricao,
                    "situacao":"Ativo",
                    "descricaoCurta":"teste",
                    "descricaoComplementar":"teste",
                    "un":"teste",
                    "vlr_unit":valor,
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
            if (res.status == 200) {
                history.push('/');
            }
        })
        .catch(err => console.log(err));
    }

  return (
    <div className="container">
        <p>Cadastro de Produto</p>
        <div>
            <Form onSubmit={handleSave}>
                <FormGroup>
                    <Label for="codigo">Código</Label>
                    <Input type="text" name="codigo" id="codigo" value={codigo} onChange={e => setCodigo(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="descricao">Descrição</Label>
                    <Input type="text" name="descricao" id="descricao" value={descricao} onChange={e => setDescricao(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="=valor">Valor</Label>
                    <Input type="text" name="=valor" id="=valor" value={valor} onChange={e => setValor(e.target.value)}/>
                </FormGroup>
                <Button type="submit" color="primary">Enviar</Button> &nbsp;
                <Button onClick={() => {history.goBack()}} color="danger">Cancelar</Button>
            </Form>
        </div>
    </div>
  );
}
