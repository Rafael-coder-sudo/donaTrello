//Arquivo responsavél por renderizar todos os componentes

import React from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'


import ColumnItems from './components/ColumnItems';
import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import { loadLists } from './libs/tasks' //Dados estaticos para testes


function App() {
  const list = loadLists()
  
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyle />
      <Header />
      <div className="d-flex ">
      {list.map((list) => 
        <ColumnItems 
        key={list.id} 
        data={list}
        />)}
      </div>

    </DndProvider>
  );
}

export default App;
