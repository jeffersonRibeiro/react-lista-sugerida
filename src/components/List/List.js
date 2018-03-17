import React from 'react';

const List = (props) => {

    const titleMaxLength = 22;

    return(
        <div className="link" data-hasdiscount="true">
            {props.lista.icone &&
                <img className="lista-ico" src={props.lista.icone} alt={props.lista.titulo} />
            }
            
            <a onClick={(e) => e.preventDefault()} href={props.lista.link} draggable="false">
                <input onChange={(e) => props.editListTitle(e, props.lista.id)} maxLength={titleMaxLength} placeholder="Editar título..." className="list-title input-change-text" type="text" value={props.lista.titulo}/>
                {props.lista.desconto &&
                    <span className="lista-desconto">{props.lista.desconto}%
                    <br />
                        <span>Off</span>
                    </span>
                }
                <i onClick={() => props.deleteList(props.lista.id)} className="edit-mode-only delete-icon fa fa-times"></i>
                <i className="edit-mode-only config-icon fa fa-wrench"></i>
            </a>
        </div>
    )
}

export default List;