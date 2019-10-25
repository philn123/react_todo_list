import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: 'AliceBlue',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }

    todoComplete = () => {

    }
    render() {

        //destructuring 
        //instead of typing this.props.todo.title
        //we can just use title & id
        const { id, title } = this.props.todo

        //we are passing the id up with the markComplete
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                {title}
                <button onClick={this.props.delTodo.bind(this,id)} style={buttonStyle}>x</button>
            </div>
        )
    }
}

const buttonStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    float: 'right',
    cursor: 'pointer',
}

//first part is name of class
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired

}

export default TodoItem
