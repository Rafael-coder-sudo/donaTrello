//Componente de Modal para inserir e editar Tasks

import React from 'react'

import {
  Modal,
  Button,
  InputGroup,
  FormControl,
  Dropdown
} from 'react-bootstrap'
import * as Utils from '../styles/utils'


export default props => (
  <Modal show={props.show} centered >
    <Modal.Header closeButton onClick={() => props.close()}>
      <Modal.Title>Adicionar Tarefa</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Titulo"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          as="textarea"
          placeholder="Descrição"
          rows="6"
          aria-label="With textarea" />
      </InputGroup>
      <Utils.TagsFields>
        <div className="d-flex justify-content-between">
          <h5>Tags</h5>

          {/*Inserir novas Tags */}
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" variant="default">
              <icons className="fa fa-plus"></icons>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <div className="d-flex">
                  <Utils.Tags />- Urgente
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <div className="d-flex">
                  <Utils.Tags />- Urgente
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <div className="d-flex">
                  <Utils.Tags />- Urgente
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/*Tags Inseridas */}
        <Utils.Tags></Utils.Tags>

      </Utils.TagsFields>
    </Modal.Body>
    <Modal.Footer>
      <Button
        variant="secondary"
        onClick={() => props.close()} >
        Cancelar
          </Button>
      <Button variant="success">
        Salvar
          </Button>
    </Modal.Footer>
  </Modal>
)