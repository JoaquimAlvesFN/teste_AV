import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'reactstrap';

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
            setData(res.data)
        }
    })
    .catch(error => console.log(error))
}, [])

  return (
    <div className="container">
        <p>Notas Fiscais</p>
        {
            erro ? <Alert color="danger">{erro}</Alert> :

            <p>Criar uma table!</p>
        }
    </div>
  );
}
