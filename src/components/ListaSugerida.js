import React,  { Component } from 'react';
import ReactModal from 'react-modal';
import uuid from 'uuid';

import ConfigPanel      from './ConfigPanel';
import ListBlock        from './ListBlock/ListBlock';
import ModalListConfig    from './List/Modal/ListConfig';

ReactModal.setAppElement(document.getElementById('root'))

class ListaSugerida extends Component {
    constructor(){
        super()

        this.state = {
            listasSugerida: [{
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
            }],
            isPreviewMode: true,
            modal: {
                showModal: false,
                modalContent: null,
                styles: {
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)'
                    }
                }
            }
        }

        /* General */
        this.handleCloseModal     = this.handleCloseModal.bind(this);
        this.togglePreviewMode    = this.togglePreviewMode.bind(this)
        this.printListaSugerida   = this.printListaSugerida.bind(this)

        /* Block */
        this.changeBlockColor     = this.changeBlockColor.bind(this);
        
        /* Category */
        this.deleteCategory       = this.deleteCategory.bind(this)
        this.createCategory       = this.createCategory.bind(this)
        this.editCategoryTitle    = this.editCategoryTitle.bind(this)
        
        /* List */
        this.createList           = this.createList.bind(this)
        this.deleteList           = this.deleteList.bind(this)
        this.editListTitle        = this.editListTitle.bind(this)
        this.editListLink         = this.editListLink.bind(this)

    }

    togglePreviewMode() {
        this.setState(prevState => ({
            isPreviewMode: !prevState.isPreviewMode
        }));
    }

    printListaSugerida() {
        console.log(JSON.stringify(this.state.listasSugerida, null, 2));
    }

    handleCloseModal() {
        const modal = {...this.state.modal}
        modal.showModal = false

        this.setState({modal})
    }

    changeBlockColor(_id){
        const colors = ['layout-pink', 'layout-blue'];
        const listasSugerida = [...this.state.listasSugerida];

        listasSugerida.forEach(b => {
            if(b.id === _id){
                const idx = colors.findIndex((c) => c === b.specialClass)
                b.specialClass = (idx === colors.length -1) ? colors[0] : colors[idx + 1]
            }
        })

        this.setState({listasSugerida})
    }

    editListLink(_id) {
        const listasSugerida = [...this.state.listasSugerida],
              modal = {...this.state.modal}
        
        let lista = {}

        listasSugerida.forEach(b => {
            b.categorias.forEach(c => {
                c.listas.forEach(l => {
                    if (l.id === _id)
                        lista = l
                })
            })
        })

        const handleSubmit = (e, form) => {
            e.preventDefault()

            lista.link = form.listLink.value;
            lista.icone = form.listIconLink.value;
            lista.desconto = form.listDiscount.value;

            modal.showModal = false;

            this.setState({ listasSugerida, modal })
        }



        modal.content = (
            <ModalListConfig
                onSubmit={handleSubmit}
                lista={lista}
            />
        )

        modal.showModal = true;
        
        this.setState({modal})
    }

    editListTitle(e, _id) {
        if(!this.state.isPreviewMode)
            return false
        
        let listasSugerida = [...this.state.listasSugerida];
        listasSugerida.forEach(b => {
            b.categorias.forEach( c => {
                c.listas.forEach( l => {
                    if(l.id === _id){
                        l.titulo = e.target.value
                    }
                })
            })
        })

        this.setState({listasSugerida})
        
    }
    
    deleteList(_id) {
        if (!this.state.isPreviewMode)
            return false

            
        let listasSugerida = [...this.state.listasSugerida];
        listasSugerida.forEach(b => {
            b.categorias.forEach(c => {
                let i = c.listas.findIndex(l => l.id === _id);
                if (i >= 0) {
                    c.listas.splice(i, 1);
                }
            })
        })

        this.setState({listasSugerida})
    }

    createList(_id) {
        const newList = {
            id: uuid.v4(),
            titulo: "",
            link: ""
        }

        let listasSugerida = this.state.listasSugerida;
        listasSugerida.forEach( b => {
            b.categorias.forEach( c => {
                if(c.id === _id){
                    c.listas.push(newList);
                }
            })
        } )

        this.setState({listasSugerida})
    }

    deleteCategory(_id){
        const listasSugerida = this.state.listasSugerida;
        listasSugerida.forEach(l => {
            let i = l.categorias.findIndex(c => c.id === _id);
            if (i >= 0)
                l.categorias.splice(i, 1);
        })

        this.setState({ listasSugerida })
    }

    createCategory(_id){
        const newCategory = {
            id: uuid.v4(),
            titulo: "",
            listas: []
        }

        const listasSugerida = this.state.listasSugerida;
        listasSugerida.forEach( l => {
            if(l.id === _id)
                l.categorias.push(newCategory)
        })

        this.setState({listasSugerida})
    }

    editCategoryTitle(e, _id){
         if(!this.state.isPreviewMode)
            return false;
        
        let listasSugerida = this.state.listasSugerida;
        listasSugerida.forEach(b => {
            b.categorias.forEach( c => {
                if(c.id === _id){
                    c.titulo = e.target.value
                }
            })
        })

        this.setState({listasSugerida})
    }


    render() {

        return (
            <div>
                <ReactModal
                    isOpen={this.state.modal.showModal}
                    style={this.state.modal.styles}
                    contentLabel="Minimal Modal Example"
                >
                {this.state.modal.content}
                </ReactModal>

                <ConfigPanel
                    togglePreviewMode={this.togglePreviewMode}
                    isPreviewMode={this.state.isPreviewMode}
                    printListaSugerida={this.printListaSugerida}
                />

                <ListBlock
                    listasSugerida={this.state.listasSugerida}
                    changeBlockColor={this.changeBlockColor}  
                    deleteCategory={this.deleteCategory}                  
                    createCategory={this.createCategory}
                    editCategoryTitle={this.editCategoryTitle}
                    createList={this.createList}
                    deleteList={this.deleteList}
                    editListTitle={this.editListTitle}
                    editListLink={this.editListLink}
                    isPreviewMode={this.state.isPreviewMode}
                />
                

            </div>
        )
    }
}

export default ListaSugerida;