import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import Boton from './components/Boton';
import Formulario from './components/Formulario';
import './App.css';

function App() {
  const todos = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a todo app' },
    { id: 3, text: 'Deploy to production' }
  ];

  return (
    <div className="app">
      <h2>Componente Global</h2>
      <Header />
      <main>
        <TodoList todos={todos} />
      </main>
      <Boton/>
      <Footer />
      <Formulario/>
    </div>
  );
}

export default App;

