import React from 'react';

import Category from './Category/Category';

const ListCategory = (props) => props.categories.map( c => {
    return (
        <Category
            editCategoryTitle={props.editCategoryTitle}
            createList={props.createList}
            deleteList={props.deleteList}
            editListTitle={props.editListTitle}
            editListIcon={props.editListIcon}
            key={c.id}
            category={c}
        />
    )
});

export default ListCategory;