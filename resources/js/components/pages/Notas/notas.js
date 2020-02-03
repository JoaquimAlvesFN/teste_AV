import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert, Table } from 'reactstrap';

export default function Notas() {
const [data, setData] = useState([]);
const [erro, setErro] = useState(false);

useEffect(() => {
    axios
    .get('/api/notas')
    .then(res => {
        if(res.data.code >= 400){
            setErro(res.data.body.retorno.erros.erro.msg);
        }else{
            setData(res.data.body.retorno.notasfiscais)
        }
    })
    .catch(error => console.log(error))
}, [])

  return (
    <div className="container">
        <p>Notas Fiscais</p>
        {
            erro ? <Alert color="danger">{erro}</Alert> :

            <Table>
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Série</th>
                        <th>Cliente</th>
                        <th>Situação</th>
                    </tr>
                </thead>
                {
                    data.map(result => (
                        <tbody key={result.notafiscal.numero}>
                            <tr>
                                <th scope="row">{result.notafiscal.numero}</th>
                                <td>{result.notafiscal.serie}</td>
                                <td>{result.notafiscal.cliente.nome}</td>
                                <td>{result.notafiscal.situacao}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </Table>
        }
    </div>
  );
}
