import React,  { Component } from 'react';
import ReactModal from 'react-modal';
import uuid from 'uuid';

import ConfigPanel from './ConfigPanel';
import ListBlock from './ListBlock/ListBlock';

class ListaSugerida extends Component {
    constructor(){
        super()

        this.state = {
            listasSugerida: [],
            isEditMode: true,
            showModal: false
        }

    }

    componentWillMount() {
        this.setState(() => ({
            listasSugerida: [
                {
                    id: uuid.v4(),
                    titulo: "Mais vendidos",
                    icone: 'http://i-unilever.a8e.net.br/static/images/ico-mais-vendidos.png',
                    specialClass: 'layout-blue',
                    categorias: [
                        {
                            id: uuid.v4(),
                            titulo: "Cuidados Pessoais, Alimentos, Roupa e Casa",
                            isHPF: true,
                            listas: [
                                {
                                    id: uuid.v4(),
                                    titulo: "20 mais vendidos",
                                    desconto: 5,
                                    icone: "http://i-unilever.a8e.net.br/static/images/icon-produtos-20.png",
                                    link: "https://www-unilever-hcp.infracommerce.com.br/static/preview_unilever-listas-dos-20-produtos-mais-vendidos"
                                },
                                {
                                    id: uuid.v4(),
                                    titulo: "30 mais vendidos",
                                    desconto: 7,
                                    icone: "http://i-unilever.a8e.net.br/static/images/icon-produtos-30.png",
                                    link: "https://www-unilever-hcp.infracommerce.com.br/static/preview_unilever-listas-dos-30-produtos-mais-vendidos"
                                },
                                {
                                    id: uuid.v4(),
                                    titulo: "40 mais vendidos",
                                    desconto: 10,
                                    icone: "http://i-unilever.a8e.net.br/static/images/icon-produtos-40.png",
                                    link: "https://www-unilever-hcp.infracommerce.com.br/static/preview_unilever-listas-dos-40-produtos-mais-vendidos"
                                }]
                        },
                        {
                            id: uuid.v4(),
                            titulo: "Roupa e Casa",
                            listas: [
                                {
                                    id: uuid.v4(),
                                    titulo: "20 mais vendidos",
                                    desconto: 5,
                                    icone: "http://i-unilever.a8e.net.br/static/images/icon-produtos-20.png",
                                    link: "https://www-unilever-hcp.infracommerce.com.br/static/preview_unilever-listas-dos-20-produtos-mais-vendidos-roupa-casa-alimentos"
                                },
                                {
                                    id: uuid.v4(),
                                    titulo: "30 mais vendidos",
                                    desconto: 7,
                                    icone: "http://i-unilever.a8e.net.br/static/images/icon-produtos-30.png",
                                    link: "https://www-unilever-hcp.infracommerce.com.br/static/preview_unilever-listas-dos-30-produtos-mais-vendidos-roupa-casa-alimentos"
                                },
                                {
                                    id: uuid.v4(),
                                    titulo: "40 mais vendidos",
                                    desconto: 5,
                                    icone: "http://i-unilever.a8e.net.br/static/images/icon-produtos-40.png",
                                    link: "https://www-unilever-hcp.infracommerce.com.br/static/preview_unilever-listas-dos-40-produtos-mais-vendidos-roupa-casa-alimentos"
                                }]
                        },
                        {
                            id: uuid.v4(),
                            titulo: "Cuidados Pessoais",
                            listas: [
                                {
                                    id: uuid.v4(),
                                    titulo: "20 mais vendidos",
                                    desconto: 5,
                                    icone: "http://i-unilever.a8e.net.br/static/images/icon-produtos-20.png",
                                    link: "https://www-unilever-hcp.infracommerce.com.br/static/page_unilever-listas-dos-20-produtos-mais-vendidos-cuidados-pessoais"
                                },
                                {
                                    id: uuid.v4(),
                                    titulo: "30 mais vendidos",
                                    desconto: 7,
                                    icone: "http://i-unilever.a8e.net.br/static/images/icon-produtos-30.png",
                                    link: "https://www-unilever-hcp.infracommerce.com.br/static/page_unilever-listas-dos-30-produtos-mais-vendidos-cuidados-pessoais"
                                },
                                {
                                    id: uuid.v4(),
                                    titulo: "40 mais vendidos",
                                    desconto: 5,
                                    icone: "http://i-unilever.a8e.net.br/static/images/icon-produtos-40.png",
                                    link: "https://www-unilever-hcp.infracommerce.com.br/static/page_unilever-listas-dos-40-produtos-mais-vendidos-cuidados-pessoais"
                                }]
                        }],
                    oldLayout: true
                },
                {
                    id: uuid.v4(),
                    titulo: "Lançamentos",
                    icone: "http://i-unilever.a8e.net.br/static/images/ico-lancamentos.png",
                    specialClass: 'layout-pink',
                    categorias: [
                        {
                            id: uuid.v4(),
                            titulo: "Ultimos três meses",
                            listas: [
                                {
                                    id: uuid.v4(),
                                    titulo: "Cuidados com Roupa e Casa",
                                    desconto: 5,
                                    icone: "http://i-unilever.a8e.net.br/static/images/icon-lancamento-casa.png",
                                    link: "https://www-unilever-hcp.infracommerce.com.br/static/page_cuidados-com-a-roupa-e-com-a-casa"
                                },
                                {
                                    id: uuid.v4(),
                                    titulo: "Alimentos e Chás",
                                    desconto: 5,
                                    icone: "http://i-unilever.a8e.net.br/static/images/icon-lancamento-alimentos.png",
                                    link: "https://www-unilever-hcp.infracommerce.com.br/static/page_unilever-listas-alimentos-e-chas"
                                },
                                {
                                    id: uuid.v4(),
                                    titulo: "Cuidados Pessoais",
                                    desconto: 5,
                                    icone: "http://i-unilever.a8e.net.br/static/images/icon-lancamento-cuidados.png",
                                    link: "https://www-unilever-dev.infracommerce.com.br/static/preview_unilever-listas-dos-20-produtos-mais-vendidos"
                                }]
                        }]
                },
                {
                    id: uuid.v4(),
                    titulo: "Recomendados",
                    icone: 'http://i-unilever.a8e.net.br/static/images/ico-recomendados.png',
                    specialClass: 'layout-blue',
                    categorias: [
                        {
                            id: uuid.v4(),
                            titulo: "Sortimento Prioritário",
                            listas: [
                                {
                                    id: uuid.v4(),
                                    titulo: "Cuidados com a Roupa",
                                    desconto: 5,
                                    link: "https://www-unilever-dev.infracommerce.com.br/static/preview_unilever-listas-dos-20-produtos-mais-vendidos"
                                },
                                {
                                    id: uuid.v4(),
                                    titulo: "Cuidados com a Roupa",
                                    desconto: 15,
                                    link: "https://www-unilever-dev.infracommerce.com.br/static/preview_unilever-listas-dos-20-produtos-mais-vendidos"
                                },
                                {
                                    id: uuid.v4(),
                                    titulo: "Temperos e Caldos",
                                    desconto: 10,
                                    link: "https://www-unilever-dev.infracommerce.com.br/static/preview_unilever-listas-dos-20-produtos-mais-vendidos"
                                },
                                {
                                    id: uuid.v4(),
                                    titulo: "Cuidados com o Cabelo",
                                    link: "https://www-unilever-dev.infracommerce.com.br/static/preview_unilever-listas-dos-20-produtos-mais-vendidos"
                                },
                                {
                                    id: uuid.v4(),
                                    titulo: "Desodorantes",
                                    desconto: 20,
                                    link: "https://www-unilever-dev.infracommerce.com.br/static/preview_unilever-listas-dos-20-produtos-mais-vendidos"
                                },
                                {
                                    id: uuid.v4(),
                                    titulo: "Desodorantes",
                                    desconto: 20,
                                    link: "https://www-unilever-dev.infracommerce.com.br/static/preview_unilever-listas-dos-20-produtos-mais-vendidos"
                                }
                            ]
                        }]
                }]
        }), () => {
            // console.log(this.state);
        })
    }

    toggleEditMode() {
        this.setState(prevState => ({
            isEditMode: !prevState.isEditMode
        }));
    }

    printListaSugerida() {
        console.log(JSON.stringify(this.state.listasSugerida, null, 2));
    }

    handleCloseModal() {
        this.setState({
            showModal: false
        })
    }

    editListTitle(e, _id) {
        if(!this.state.isEditMode)
            return false
        
        let ls = [...this.state.listasSugerida];
        ls.forEach(b => {
            b.categorias.forEach( c => {
                c.listas.forEach( l => {
                    if(l.id === _id){
                        l.titulo = e.target.value
                    }
                })
            })
        })

        this.setState({
            listasSugerida: ls
        })
        
    }
    
    deleteList(_id) {
        if (!this.state.isEditMode)
            return false

            
        let ls = [...this.state.listasSugerida];
        ls.forEach(b => {
            b.categorias.forEach(c => {
                let i = c.listas.findIndex(l => l.id === _id);
                if (i >= 0) {
                    c.listas.splice(i, 1);
                }
            })
        })

        this.setState({
            listasSugerida: ls
        })
    }

    createList(_id) {
        const newList = {
            id: uuid.v4(),
            titulo: "",
            desconto: 5,
            link: "#"
        }

        let ls = this.state.listasSugerida;
        ls.forEach( b => {
            b.categorias.forEach( c => {
                if(c.id === _id){
                    c.listas.push(newList);
                }
            })
        } )

        this.setState({
            listasSugerida: ls
        })
    }

    createCategory(_id){
        const newCategory = {
            id: uuid.v4(),
            titulo: "",
            listas: []
        }

        let ls = this.state.listasSugerida;
        ls.forEach( l => {
            if(l.id === _id)
                l.categorias.push(newCategory)
        })

        this.setState({
            listasSugerida: ls
        })
    }

    editCategoryTitle(e, _id){
         if(!this.state.isEditMode)
            return false;
        
        let ls = this.state.listasSugerida;
        ls.forEach(b => {
            b.categorias.forEach( c => {
                if(c.id === _id){
                    c.titulo = e.target.value
                }
            })
        })

        this.setState({
            listasSugerida: ls
        })
    }


    render() {

        return (
            <div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <button onClick={this.handleCloseModal.bind(this)}>Close Modal</button>
                </ReactModal>

                <ConfigPanel
                    toggleEditMode={this.toggleEditMode.bind(this)}
                    isEditMode={this.state.isEditMode}
                    printListaSugerida={this.printListaSugerida.bind(this)}
                />

                <ListBlock
                    listasSugerida={this.state.listasSugerida}
                    createCategory={this.createCategory.bind(this)}
                    editCategoryTitle={this.editCategoryTitle.bind(this)}
                    createList={this.createList.bind(this)}
                    deleteList={this.deleteList.bind(this)}
                    editListTitle={this.editListTitle.bind(this)}
                    isEditMode={this.state.isEditMode}
                />
                

            </div>
        )
    }
}

export default ListaSugerida;