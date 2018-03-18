import React, { Component } from 'react';

class ModalImport extends Component {
    constructor(props){
        super(props)

        this.form = {}
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <form className="modal" onSubmit={(e) => this.props.onSubmit(e, this.form)}>
                <p className="modal-title">Importar Lista Sugerida</p>
                <textarea ref={(textarea => this.form.textarea = textarea)} placeholder="[Cole aqui o JSON]"></textarea>

                <input type="submit" value="Importar" />

                <button className="close-modal" onClick={this.props.closeModal}><i className="fa fa-times"></i></button>                
            </form>
        )
    }

}

export default ModalImport;