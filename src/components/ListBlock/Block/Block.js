import React from 'react';

import ListCategory from '../../ListCategory/ListCategory';

const Block = (props) => {
    
    const classes = ['react-block', 'wrap-buy-size-store', props.block.specialClass]

    return(
        <div className={classes.join(' ')}>
            <i onClick={() => props.changeBlockColor(props.block.id)} className="fa fa-paint-brush change-block-color"></i>

            <div className="list-option">
                <div className="box">
                    <span className="ico-p">
                        <img src={props.block.icone} alt={props.block.titulo}/>
                    </span>
                </div>
                <h3 className="title">{props.block.titulo}</h3>
                <ListCategory
                    categories={props.block.categorias}
                    deleteCategory={props.deleteCategory}
                    editCategoryTitle={props.editCategoryTitle}
                    createList={props.createList}
                    deleteList={props.deleteList}
                    editListTitle={props.editListTitle}
                    editListLink={props.editListLink}
                />
                <button onClick={() => props.createCategory(props.block.id)} className="create-new-category">
                    <i className="fa fa-list fa-fw"></i>Criar categoria
                </button>
            </div>
        </div>
    )
}

export default Block;