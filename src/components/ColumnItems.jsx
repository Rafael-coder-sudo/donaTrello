//Componente referente as colunas!

import React, { useState } from 'react'


import { ColumnsItem } from '../styles/utils'
import CardItems from './CardItems'
import ModalAdd from './ModalAdd'

export default ({ data }) => {

  const [show, onShow] = useState(false)

  //Função para abrir ou fechar modal de Adicionar Tarefa
  const showOrHidden = () => {
    onShow(!show)
  }


  return (
    <ColumnsItem>
      <div className="d-flex justify-content-between">
        <h4>{data.title}</h4>
        <icon className="fa fa-plus" onClick={() => showOrHidden()}></icon>
        <ModalAdd
          show={show}
          close={showOrHidden} />
      </div>

      {/*Map para Listar todos os dados das tasks*/}
      {data.cards.map(card =>
        <CardItems
          key={card.id}
          title={card.title}
          desc={card.content}
          tags={card.tags} />
      )}
    </ColumnsItem>
  )
}