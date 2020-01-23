import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default function ImplantarPedido() {
    const [nome, setNome] = useState('');
    const [item, setItem] = useState('');

    const handleSave = (e) => {
        e.preventDefault();

        axios
        .post('/api/pedidos',{
            nome,
            item
        })
        .then(res => {
            console.log(res);
            setNome('');
            setItem('');
        })
        .catch(err => console.log(err));
    }

  return (
    <div className="container">
        <p>Implantar Pedido</p>
        <div>
            <Form onSubmit={handleSave}>
                <FormGroup>
                    <Label for="cliente">Nome Cliente</Label>
                    <Input type="text" name="cliente" id="cliente" value={nome} onChange={e => setNome(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="item">Item</Label>
                    <Input type="text" name="item" id="item" value={item} onChange={e => setItem(e.target.value)}/>
                </FormGroup>
                <Button type="submit" color="primary">Enviar</Button>
            </Form>
        </div>
    </div>
  );
}
