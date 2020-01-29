import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default function EditarProduto({match, history}) {
    const [data, setData] = useState([]);

    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [precocusto, setPrecocusto] = useState('');
    const [estoque, setEstoque] = useState('');

    const { id } = match.params;

    useEffect(() => {
        axios
        .get(`/api/produtos/${id}`)
        .then(res => setData(res.data.body.retorno.produtos))
        .catch(err => console.log(err));
    },[]);

    const handleUpdate = (e) => {
        e.preventDefault();

        axios
        .put(`/api/produtos/${id}`, {
            descricao,
            preco,
            precocusto,
            estoque
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

  return (
    <div className="container">
        <p>Atualizar Produto</p>
            {
                data.map(result => (
                    <Form key={result.produto.codigo} onSubmit={handleUpdate}>
                        <FormGroup>
                            <Label for="numero">Cód Produto</Label>
                            <Input id="numero" value={result.produto.codigo} readOnly/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="descricao">Descrição</Label>
                            <Input id="descricao" value={result.produto.descricao} onChange={e => setDescricao(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="situacao">Situação</Label>
                            <Input id="situacao" value={result.produto.situacao} readOnly/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="preco">Preço</Label>
                            <Input id="preco" value={result.produto.preco} onChange={e => setPreco(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="precoCusto">Preço de Custo</Label>
                            <Input id="precoCusto" value={result.produto.precoCusto} onChange={e => setPrecocusto(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="estoque">Estoque</Label>
                            <Input id="estoque" value={result.produto.estoque} onChange={e => setEstoque(e.target.value)} />
                        </FormGroup>
                        <Button type="submit" color="primary">Atualizar</Button> &nbsp;
                        <Button onClick={() => {history.goBack()}} color="danger">Cancelar</Button>
                    </Form>
                ))
            }
    </div>
  );
}
