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

import Home from './components/pages/home';
import Pedidos from './components/pages/pedidos';
import Notas from './components/pages/notas';

import ImplantarPedido from './components/pages/implantarPedido';
import VerPedido from './components/pages/verPedido';

import CadastrarProduto from './components/pages/cadastrarProduto';

export default function Index() {
        return (
                <div className="container">
                    <Router>
                        <Navbar color="light" light expand="md">
                            <NavbarBrand href="/">Aumenta Venda</NavbarBrand>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/">Produtos</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/pedidos">Pedidos</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/notas">Notas Fiscais</Link>
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
                        </div>
                    </Router>
                </div>
        );
}

ReactDOM.render(<Index />, document.getElementById('root'));
