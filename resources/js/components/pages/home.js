import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'reactstrap';

export default function Home() {
const [data, setData] = useState([]);
const [erro, setErro] = useState(false);

useEffect(() => {
    axios
    .get('/api/produtos')
    .then(res => {
        if(res.data.code >= 400){
            setErro(res.data.raw_body);
        }else{
            setData(res.data.body.retorno.produtos);
        }
    })
    .catch(error => console.log(error))
}, []);

  return (
    <div className="container">
        <p>Produtos</p>
            {
                erro ? <Alert color="danger">{erro}</Alert> :
            <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Cód</th>
                            <th scope="col">Descricao</th>
                            <th scope="col">Preço</th>
                            <th scope="col">Situação</th>
                            <th>Ver / Editar / Excluir</th>
                        </tr>
                    </thead>
                {data.map((result) => (
                    <tbody>
                        <tr>
                            <th scope="row">{result.produto.codigo}</th>
                            <td>{result.produto.descricao}</td>
                            <td>{result.produto.preco}</td>
                            <td>{result.produto.situacao}</td>
                            <td>
                                <Button color="success">Ver</Button>&nbsp;
                                <Button color="primary">Editar</Button>&nbsp;
                                <Button color="danger">Excluir</Button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
            }
    </div>
  );
}
