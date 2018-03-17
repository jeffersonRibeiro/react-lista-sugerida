import React from 'react';

import Block from './Block/Block';


const ListBlock = (props) => {
    
    const lb = props.listasSugerida.map(block => {
        return (
            <Block
                createCategory={props.createCategory}
                editCategoryTitle={props.editCategoryTitle}
                createList={props.createList}
                deleteList={props.deleteList}
                editListTitle={props.editListTitle}
                editListIcon={props.editListIcon}
                key={block.id}
                block={block}
            />
        )
    })

    const classes = ['react-list-block', 'new-layout']

    if (props.isPreviewMode)
        classes.push('preview-mode')

    return (
        <div className={classes.join(' ')}>
            {lb}
        </div>
    )
}

export default ListBlock;