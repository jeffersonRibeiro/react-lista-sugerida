import React from 'react';

import Category from './Category/Category';

const ListCategory = (props) => props.categories.map( c => {
    return (
        <Category
            editCategoryTitle={props.editCategoryTitle}
            deleteCategory={props.deleteCategory}
            createList={props.createList}
            deleteList={props.deleteList}
            editListTitle={props.editListTitle}
            editListLink={props.editListLink}
            key={c.id}
            category={c}
        />
    )
});

export default ListCategory;