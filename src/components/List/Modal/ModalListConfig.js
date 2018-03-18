import React, { Component } from 'react';

class ModalListConfig extends Component {
    constructor(props){
        super(props);

        this.form = {}

    }

    componentDidMount() {
        this.form.listLink.focus();
        this.form.listLink.select();
    }

    render() {
        return(
            <form className="modal-list-config modal" onSubmit={(e) => this.props.onSubmit(e, this.form)}>
                <p className="modal-title">{this.props.lista.titulo ? this.props.lista.titulo : '[Lista sem título]'}</p>
                
                <label><i className="fa fa-link fa-fw"></i>Link da lista:
                    <input className="list-input" defaultValue={this.props.lista.link} type="text" ref={(listLink) => this.form.listLink = listLink} placeholder="[Url lista]" />
                </label>

                <label className="list-discount">Desconto %:
                    <input className="list-input" defaultValue={this.props.lista.desconto} type="text" ref={(listDiscount) => this.form.listDiscount = listDiscount} placeholder="0%" />
                </label>

                <label className="list-ico"><i className="fa fa-photo fa-fw"></i>Icone (tamanho - 55x40):
                    <input className="list-input" defaultValue={this.props.lista.icone} type="text" ref={(listIconLink) => this.form.listIconLink = listIconLink} placeholder="[Url icone]" />
                </label>
                
                <input type="submit" value="Alterar" />

                <button className="close-modal" onClick={this.handleCloseModal}><i className="fa fa-times"></i></button>
            </form>
        )
    }

}

export default ModalListConfig;