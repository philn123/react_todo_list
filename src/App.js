import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/header'
import AddTodo from './components/AddTodo'

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
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});

  }
  addTodo = (title) => {
    const newTodo= {
      id: 4,
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  //49:51 video
  //https://www.youtube.com/watch?v=sBws8MSXN7A

  render() {

    return (
      <div className="App">
          <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo}/>
        </div>
      </div>

    );



  };


}

export default App;
