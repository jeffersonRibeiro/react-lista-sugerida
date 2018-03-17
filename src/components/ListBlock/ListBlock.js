import React from 'react';

import Block from './Block';


const ListBlock = (props) => {
    
    const lb = props.listasSugerida.map(block => {
        return (
            <Block
                createCategory={props.createCategory}
                editCategoryTitle={props.editCategoryTitle}
                createList={props.createList}
                deleteList={props.deleteList}
                editListTitle={props.editListTitle}
                block={block}
            />
        )
    })

    const classes = ['new-layout']

    if (props.isEditMode)
        classes.push('edit-mode')

    return (
        <div className={classes.join(' ')}>
            {lb}
        </div>
    )
}

export default ListBlock;