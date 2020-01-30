import React from 'react';
import { Todo } from './Todo';

export class TodoList extends React.Component {

   

    render() {
        const list = this.props.todoList;
        const todolist = list.map((e, i) =>(
            <li key={i}>
                {
                <Todo
                    text={e.text}
                    priority={e.priority}
                    dueDate={e.dueDate} />
                }
            </li>
        ));
        return <ul>{todolist}</ul>;
          //Add your code here to represent a TODO
        
    }

}