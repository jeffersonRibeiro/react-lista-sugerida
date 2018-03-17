
import React from 'react';

import List from '../../List/List';

const Category = (props) => {

    const options = {
        titleMaxLength: 22,
        titlePlaceholder: '[Editar título categoria]'
    }


    const lists = props.category.listas.map( l => {
        return (
            <List
            deleteList={props.deleteList}
            editListTitle={props.editListTitle}
            editListIcon={props.editListIcon}
            key={l.id}
            lista={l}
            />
        )
    })

    const classes = ['react-category', 'categoria'];


    return(
        <div className={classes.join(' ')}>
            <input onChange={(e) => props.editCategoryTitle(e, props.category.id)} maxLength={options.titleMaxLength} placeholder={options.titlePlaceholder} className="category-title input-change-text" type="text" value={props.category.titulo}/>
            <div className="single-deliver show">
                {lists}
                <button onClick={() => props.createList(props.category.id)} className="create-new-list">
                    Adicionar lista
                </button>
            </div>
        </div>
    )
}

export default Category;