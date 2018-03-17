import React from 'react';

import ListCategory from '../ListCategory/ListCategory';

const Block = (props) => {
    return(
        <div className={'wrap-buy-size-store ' + props.block.specialClass}>
            <div className="list-option">
                <div className="box">
                    <span className="ico-p">
                        <img src={props.block.icone} alt={props.block.titulo}/>
                    </span>
                </div>
                <h3 className="title">{props.block.titulo}</h3>
                <ListCategory
                    categories={props.block.categorias}
                    editCategoryTitle={props.editCategoryTitle}
                    createList={props.createList}
                    deleteList={props.deleteList}
                    editListTitle={props.editListTitle}
                />
                <button onClick={() => props.createCategory(props.block.id)} className="edit-mode-only create-new-category">
                    Nova Categoria
                </button>
            </div>
        </div>
    )
}

export default Block;