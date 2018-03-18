import React,  { Component } from 'react';
import ReactModal from 'react-modal';
import uuid from 'uuid';

import Header from './Header/Header';
import Footer from './Footer/Footer';     
import ListBlock from './ListBlock/ListBlock';
import ModalListConfig from './List/Modal/ModalListConfig';
import ModalExport from './Header/ModalExport';
import ModalImport from './Header/ModalImport';


ReactModal.setAppElement(document.getElementById('root'))

class ListaSugerida extends Component {
    constructor(){
        super()

        this.state = {
            listasSugerida: [],
            changes: [],
            isPreviewMode: false,
            modal: {
                showModal: false,
                modalContent: null,
                styles: {
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    },
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
        this.registerChange        = this.registerChange.bind(this)
        this.handleCloseModal      = this.handleCloseModal.bind(this)
        this.togglePreviewMode     = this.togglePreviewMode.bind(this)
        this.exportListaSugerida   = this.exportListaSugerida.bind(this)
        this.importListaSugerida   = this.importListaSugerida.bind(this)
        this.undo                  = this.undo.bind(this)

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
        this.editList             = this.editList.bind(this)
        this.onClickList          = this.onClickList.bind(this)

    }

    undo(){
        let listasSugerida = [...this.state.listasSugerida],
            changes = [...this.state.changes]
        

        if(!changes.length)
            return false

        listasSugerida = changes[changes.length -1].data
        
        changes.pop();

        this.setState({listasSugerida, changes})


    }

    registerChange(data, message){
        const limit = 10;
        const changes = [...this.state.changes]

        if(changes.length === limit)
            changes.shift();
        
        changes.push({data, message})

        this.setState({changes});

    }

    togglePreviewMode() {
        if(!this.state.listasSugerida.length)
            return false
        
        this.setState(prevState => ({
            isPreviewMode: !prevState.isPreviewMode
        }));
    }

    importListaSugerida() {
        const modal = {...this.state.modal}


        const handleSubmit = (e, form) => {
            e.preventDefault()

            const imported = JSON.parse(form.textarea.value)

            
            imported.forEach(b => {
                b.id = uuid.v4()
                b.categorias.forEach(c => {
                    c.id = uuid.v4()
                    c.listas.forEach(l => {
                        l.id = uuid.v4()
                    })
                })
            })

            this.registerChange(JSON.parse(JSON.stringify(this.state.listasSugerida)), 'Lista importada')
            
            modal.showModal = false

            

            this.setState({listasSugerida: imported, modal})

        }

        modal.content = (
            <ModalImport
                onSubmit={handleSubmit}
                closeModal={this.handleCloseModal}
            />
        )

        modal.showModal = true

        this.setState({ modal })

    }

    exportListaSugerida() {
        if(!this.state.listasSugerida.length)
            return false

        const modal = {...this.state.modal}

        modal.content = (
            <ModalExport
                ls={JSON.stringify(this.state.listasSugerida, null, 2)}
                closeModal={this.handleCloseModal}
            />
        )

        modal.showModal = true

        this.setState({modal})
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

    editList(_id) {
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


            this.registerChange(JSON.parse(JSON.stringify(this.state.listasSugerida)), 'Lista editada')
            
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

        if(this.state.isPreviewMode)
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
        if (this.state.isPreviewMode)
            return false
        
            
        let listasSugerida = [...this.state.listasSugerida];

        this.registerChange(JSON.parse(JSON.stringify(this.state.listasSugerida)), 'Lista deletada')
        
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

        this.registerChange(JSON.parse(JSON.stringify(this.state.listasSugerida)), 'Lista criada')
        
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

    onClickList(e){
        if(!this.state.isPreviewMode){
            e.preventDefault();
        }
    }

    deleteCategory(_id){
        const listasSugerida = [...this.state.listasSugerida];
        
        this.registerChange(JSON.parse(JSON.stringify(this.state.listasSugerida)), 'Categoria deletada')

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

        const listasSugerida = [...this.state.listasSugerida];

        this.registerChange(JSON.parse(JSON.stringify(this.state.listasSugerida)), 'Categoria Criada')

        listasSugerida.forEach( l => {
            if(l.id === _id)
                l.categorias.push(newCategory)
        })


        this.setState({listasSugerida})
    }

    editCategoryTitle(e, _id){
         if(this.state.isPreviewMode)
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
                >
                {this.state.modal.content}
                </ReactModal>

                <Header
                    undo={this.undo}
                    hasUndo={!!this.state.changes.length}
                    hasList={!!this.state.listasSugerida.length}
                    togglePreviewMode={this.togglePreviewMode}
                    isPreviewMode={this.state.isPreviewMode}
                    importListaSugerida={this.importListaSugerida}
                    exportListaSugerida={this.exportListaSugerida}
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
                    editList={this.editList}
                    onClickList={this.onClickList}
                    isPreviewMode={this.state.isPreviewMode}
                />

                <Footer/>

            </div>
        )
    }
}

export default ListaSugerida;