import React, { Component } from 'react';

class ListLink extends Component {

    componentDidMount() {
        this.listLink.focus();
        this.listLink.select();
    }

    render() {
        return(
            <form className="modal" onSubmit={(e) => this.props.onSubmit(e, this.listLink.value)}>
                <p>{this.props.lista.titulo}</p>
                <p>Insira o link da lista</p>
                <input defaultValue={this.props.lista.link} type="text" ref={(listLink) => this.listLink = listLink} placeholder="http://www.example.com" />
                <input type="submit" value="ok" />

                <button onClick={this.handleCloseModal}>close</button>
            </form>
        )
    }

}

export default ListLink;