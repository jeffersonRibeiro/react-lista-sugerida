import React, { Component } from 'react';

class ModalExport extends Component {

    componentDidMount() {
        this.textarea.focus();
        this.textarea.select();
    }

    render() {
        return(
            <div className="modal">
                <p className="modal-title">JSON Lista Sugerida</p>
                <textarea defaultValue={this.props.ls} ref={(textarea) => this.textarea = textarea}></textarea>

                <button className="close-modal" onClick={this.props.closeModal}><i className="fa fa-times"></i></button>                
            </div>
        )
    }

}

export default ModalExport;