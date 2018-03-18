import React from 'react';
import logo from '../../svg/logo-unilever.svg';

const Header = (props) => (
    <div className="react-header">
        <header>
            <img className="logo" src={logo} alt="Logo CompraUnilever"/>
        </header>
        <ul className="banner-lists fullWidth">
            <div className="centerAll">
                <li className="banner-item">
                    <p className="title-list">Listas Sugeridas</p>
                    <p className="desc-list">Edite, crie e organize suas listas sem complicação</p>
                </li>
            </div>
        </ul>

        <div className="header-tools">
            <div className="tool first"><i className="fa fa-undo"></i><p>Undo</p></div>
            <div onClick={props.togglePreviewMode} className={props.isPreviewMode ? 'tool preview-active' : 'tool'}><i className="fa fa-eye"></i><p>Preview</p></div>
            <div onClick={props.importListaSugerida} className="tool"><i className="fa fa-code"></i><p>Import</p></div>
            <div onClick={props.exportListaSugerida} className="tool last"><i className="fa fa-save"></i><p>Export</p></div>

            <div className="clearfix"></div>
        </div>
    </div>
)

export default Header;