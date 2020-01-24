import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert, Button } from 'reactstrap';

export default function Pedidos({ history }) {
const [data, setData] = useState([]);
const [erro, setErro] = useState(false);
useEffect(() => {
    axios
    .get('/api/pedidos')
    .then(res => {
        if(res.data.code >= 400){
            setErro(res.data.body.retorno.erros.erro.msg);
        }else{
            setData(res.data.body.retorno.pedidos);
        }
    })
    .catch(error => console.log(error))
}, [])
  return (
    <div className="container">
        <p>Pedidos &nbsp;
            <Button
                color="primary"
                onClick={() => {history.push('/implantarPedido')}}
            >
                Implantar Pedido
            </Button>
        </p>
        {
            erro ? <Alert color="danger">{erro}</Alert> :
            <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Cód</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Situação</th>
                            <th scope="col">Valor Pedido</th>
                            <th>Ver / Editar / Excluir</th>
                        </tr>
                    </thead>
                {
                    data.map(result => (
                        <tbody key={result.pedido.numero}>
                            <tr>
                                <th scope="row">{result.pedido.numero}</th>
                                <td>{result.pedido.cliente.nome}</td>
                                <td>{result.pedido.situacao}</td>
                                <td>{result.pedido.totalvenda}</td>
                                <td>
                                    <Button onClick={() => {history.push(`/verPedido/${result.pedido.numero}`)}} color="success">Ver</Button>&nbsp;
                                    <Button color="primary">Editar</Button>&nbsp;
                                    <Button color="danger">Excluir</Button>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
                </table>
        }
    </div>
  );
}
