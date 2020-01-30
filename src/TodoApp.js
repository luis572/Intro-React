import React from 'react';
import { TodoList } from './TodoList';

export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
        items: [
          { text: "write TODO App", priority: 3, dueDate: new Date(2020, 1, 30) }
        ],
        text: "",
        priority: "",
        dueDate:Date.now()
      };
      
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeText = this.handleChangeText.bind(this);
      this.handleChangePriority = this.handleChangePriority.bind(this);
      this.handleChangeDueDate = this.handleChangeDueDate.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList todoList={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              Text :
            </label>
            <input
              id="new-todo"
              onChange={this.handleChangeText}
              value={this.state.text}
            />
            <br/>
            <label htmlFor="new-todo-priority">
              Priority:
            </label>
            <input
              id="new-todo-priority"
              onChange={this.handleChangePriority}
              value={this.state.priority}
              type="number"
            />
            <br/>
            <label htmlFor="new-todo-date">
              Due Date
            </label>
            <input
              id="new-todo-date"
              type="date"
              onChange={this.handleChangeDueDate}
              value={this.state.dueDate}
            /><br/> 
            <button>
              Add {this.state.items.length + 1}
            </button>
          </form>
          
        </div>
      );
    }
  
    
    handleChangeText(e) {
      this.setState({ text: e.target.value });
    }
    handleChangePriority(e) {
      this.setState({ priority: e.target.value });
    }
    handleChangeDueDate(e){
      this.setState({dueDate: e.target.value});
  }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        priority: this.state.priority,
        dueDate: new Date(Date.parse(this.state.dueDate)),
        id: Date.now()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }