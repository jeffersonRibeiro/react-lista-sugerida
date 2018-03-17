
import React from 'react';

import CategoryList from '../List/List';

const Category = (props) => {

    const titleMaxLength = 22;
    
    const lists = props.category.listas.map( l => {
        return (
            <CategoryList
            deleteList={props.deleteList}
            editListTitle={props.editListTitle}
            lista={l}
            />
        )
    })


    return(
        <div className="categoria">
            <input onChange={(e) => props.editCategoryTitle(e, props.category.id)} maxLength={titleMaxLength} placeholder="[Editar título categoria]" className="category-title input-change-text" type="text" value={props.category.titulo}/>
            <div className="single-deliver show">
                {lists}
                <button onClick={() => props.createList(props.category.id)} className="create-new-list edit-mode-only">
                    Adicionar lista
                </button>
            </div>
        </div>
    )
}

export default Category;