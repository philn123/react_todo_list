import React from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'OOf',
        completed: false
      },
      {
        id: 2,
        title: 'Oof 2',
        completed: false
      },
      {
        id: 3,
        title: 'Oof 3',
        completed: false
      },

    ]
  }

  //toggle Complete change name later
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });

  }

  //49:51 video
  //https://www.youtube.com/watch?v=sBws8MSXN7A

  render() {

    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>

    );



  };


}

export default App;
