import React from 'react';
import logo from '../svg/logo-unilever.svg';

const Header = (props) => (
    <div className="react-header">
        <header>
            <img className="logo" src={logo} alt="Logo CompraUnilever"/>
            <div className="header-config">
                {/* <h1>Listas Sugeridas</h1> */}
            </div>
        </header>
        <ul className="banner-lists fullWidth">
            <div className="centerAll">
                <li className="banner-item">
                    <p className="title-list">Listas Sugeridas</p>
                    <p className="desc-list">Edite, crie e organize suas listas sem complicação</p>
                </li>
            </div>
        </ul>
    </div>
)

export default Header;