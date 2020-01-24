import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default function ImplantarPedido({ history }) {
    const [nome, setNome] = useState('');
    const [item, setItem] = useState('');
    const [qtde, setQtde] = useState('');

    const handleSave = (e) => {
        e.preventDefault();

        axios
        .post('/api/pedidos',{
            "pedido":[
                {
                    "cliente":[
                        {
                            "nome": nome
                        }
                    ],
                    "transporte":[
                        {
                            "volumes":[
                                {
                                    "volume":[
                                        {
                                            "servico":"teste2"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "itens":[
                        {
                            "item":[
                                {
                                    "codigo":"1",
                                    "descricao":item,
                                    "qtde":qtde,
                                    "vlr_unit":"10"
                                }
                            ]
                        }
                    ],
                    "parcelas":[
                        {
                            "parcela":[
                                {
                                    "vlr":"100"
                                }
                            ]
                        }
                    ]
                }
            ]
        })
        .then(res => {
            if (res.status == 200) {
                setNome('');
                setItem('');
                setQtde('');
                history.push('/pedidos');
            }
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
                <FormGroup>
                    <Label for="qtde">Quantidade</Label>
                    <Input type="text" name="qtde" id="qtde" value={qtde} onChange={e => setQtde(e.target.value)}/>
                </FormGroup>
                <Button type="submit" color="primary">Enviar</Button> &nbsp;
                <Button onClick={() => {history.goBack()}} color="danger">Cancelar</Button>
            </Form>
        </div>
    </div>
  );
}
