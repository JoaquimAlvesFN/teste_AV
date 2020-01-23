import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function VerPedido({ match, history }) {
    const [data, setData] = useState([]);
    const { id } = match.params;

    useEffect(() => {
        axios
        .get(`/api/pedidos/${id}`)
        .then(res => setData(res.data.body.retorno.pedidos))
        .catch(err => console.log(err))
    }, []);

  return (
    <div className="container">
        <p>Ver Pedido</p>
        {
            data.map(result => (
                <Form>
                    <FormGroup>
                        <Label for="numero">Nº Pedido</Label>
                        <Input id="numero" value={result.pedido.numero} readOnly/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="cliente">Cliente</Label>
                        <Input id="cliente" value={result.pedido.cliente.nome} readOnly/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="cnpj_cpf">CNPJ_CPF</Label>
                        <Input id="cnpj_cpf" value={result.pedido.cliente.cnpj} readOnly/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="valor">Valor Total</Label>
                        <Input id="valor" value={result.pedido.totalvenda} readOnly/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="vendedor">Vendedor</Label>
                        <Input id="vendedor" value={result.pedido.vendedor} readOnly/>
                    </FormGroup>
                    <Button onClick={() => {history.goBack()}} color="primary">Voltar</Button>
                </Form>
            ))
        }
    </div>
  );
}
