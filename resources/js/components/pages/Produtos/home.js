import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert, Button } from 'reactstrap';

export default function Home({ history }) {
    const [data, setData] = useState([]);
    const [erro, setErro] = useState('');

    useEffect(() => {
        async function loadProducts () {
            await axios
            .get('/api/produtos')
            .then(res => {
                console.log(res.data);
                if(res.data.code >= 400){
                    setErro(res.data.body);
                }else{
                    setData(res.data.body.retorno.produtos);
                }
            })
            .catch(error => console.log(error))
        }

        loadProducts();
    }, []);

    const handleDelete = async (props) => {
        await axios
        .delete(`/api/produtos/${props.codigo}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));

        loadProducts();
    }

  return (
    <div className="container">
        <p>Produtos&nbsp;
            <Button
                color="primary"
                onClick={() => {history.push('/cadastrarProduto')}}
            >
                Cadastrar Produto
            </Button>
        </p>
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
                {
                    data != false &&
                    data.map((result) => (
                    <tbody key={result.produto.codigo}>
                        <tr>
                            <th scope="row">{result.produto.codigo}</th>
                            <td>{result.produto.descricao}</td>
                            <td>{result.produto.preco}</td>
                            <td>{result.produto.situacao}</td>
                            <td>
                                <Button color="success">Ver</Button>&nbsp;
                                <Button onClick={() => history.push(`/editarProduto/${result.produto.codigo}`)} color="primary">Editar</Button>&nbsp;
                                <Button onClick={() => handleDelete(result.produto.codigo)} color="danger">Excluir</Button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
            }
    </div>
  );
}
