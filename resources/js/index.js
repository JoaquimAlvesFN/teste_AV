import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Produtos/home';
import Pedidos from './components/pages/Pedidos/pedidos';
import Notas from './components/pages/Notas/notas';

import ImplantarPedido from './components/pages/Pedidos/implantarPedido';
import VerPedido from './components/pages/Pedidos/verPedido';

import CadastrarProduto from './components/pages/Produtos/cadastrarProduto';
import EditarProduto from './components/pages/Produtos/editarProduto';

export default function Index() {
        return (
                <div className="container">
                    <Router>
                        <Navbar color="light" light expand="md">
                            <NavbarBrand href="/">Aumenta Venda</NavbarBrand>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/">
                                        Produtos
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/pedidos">
                                        Pedidos
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/notas">
                                        Notas Fiscais
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                        <div>
                            <Route path="/" exact component={Home} />
                            <Route path="/pedidos" exact component={Pedidos} />
                            <Route path="/notas" exact component={Notas} />
                            <Route path="/implantarPedido" exact component={ImplantarPedido} />
                            <Route path="/verPedido/:id" exact component={VerPedido} />
                            <Route path="/cadastrarProduto" exact component={CadastrarProduto} />
                            <Route path="/editarProduto/:id" exact component={EditarProduto} />
                        </div>
                    </Router>
                </div>
        );
}

ReactDOM.render(<Index />, document.getElementById('root'));
