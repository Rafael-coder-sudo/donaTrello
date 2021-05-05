//Componente Para os card de Tarefas

import React from 'react'
import * as Utils from '../styles/utils' //Importação de todos os estilos do arquivo Utils

import { useDrag } from 'react-dnd'


export default props => {

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })


  return (
    <Utils.CardItem ref={dragRef} isDragging={isDragging}>
      <div className="d-flex justify-content-between">
        <div className="d-flex">{props.tags.map((tags, index) =>
          <Utils.TagItem
            key={tags}
            color={props.tags[index]}
          />)}
        </div>
        <i className="fa fa-edit"></i>
      </div>

      <Utils.TitleItem>{props.title}</Utils.TitleItem>
      <Utils.InputDescItem
        className="form-control"
        value={props.desc} />

    </Utils.CardItem>
  )
}