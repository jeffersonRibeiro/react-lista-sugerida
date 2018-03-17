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
            {!props.lista.icone &&
                <i onClick={props.editListIcon} className="lista-ico no-ico fa fa-photo"></i>
            }
            
            <a onClick={(e) => e.preventDefault()} href={props.lista.link} draggable="false" className={props.lista.link === '' ? 'no-link' : ''}>
                <input onChange={(e) => props.editListTitle(e, props.lista.id)} maxLength={options.titleMaxLength} placeholder={options.titlePlaceholder} className="list-title input-change-text" type="text" value={props.lista.titulo}/>
                {props.lista.desconto &&
                    <span className="lista-desconto">{props.lista.desconto}%
                    <br />
                        <span>Off</span>
                    </span>
                }
                <i onClick={() => props.deleteList(props.lista.id)} className="delete-icon fa fa-times"></i>
                <i className="config-icon fa fa-link"></i>
            </a>
        </div>
    )
}

export default List;