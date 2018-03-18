import React from 'react';

const List = (props) => {

    const options = {
        titleMaxLength: 22,
        titlePlaceholder: 'Editar título...'
    }

    const classes = ['react-list', 'link']

    return(
        <div className={classes.join(' ')} data-hasdiscount={props.lista.desconto ? 'true' : 'false'}>
            {props.lista.icone &&
                <img className="lista-ico" src={props.lista.icone} alt={props.lista.titulo} />
            }
            
            <a onClick={(e) => e.preventDefault()} href={props.lista.link} title={props.lista.link ? props.lista.link : '[Lista sem link cadastrado]'} draggable="false" className={props.lista.link === '' ? 'no-link' : ''}>
                <input onChange={(e) => props.editListTitle(e, props.lista.id)} maxLength={options.titleMaxLength} placeholder={options.titlePlaceholder} className="list-title input-change-text" type="text" value={props.lista.titulo}/>
                {props.lista.desconto &&
                    <span className="lista-desconto">{props.lista.desconto}%
                    <br />
                        <span>Off</span>
                    </span>
                }
                <i onClick={() => props.deleteList(props.lista.id)} className="delete-icon fa fa-times"></i>
                <i onClick={() => props.editListLink(props.lista.id)} className="config-icon fa fa-link"></i>
            </a>
        </div>
    )
}

export default List;