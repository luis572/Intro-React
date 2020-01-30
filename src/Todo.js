import React from 'react';

export class Todo extends React.Component {


    render() {
        return (  
            <div>
                <p>{'Text: '+this.props.text}</p><br/>
                <p>{'Priority: '+this.props.priority}</p><br/>
                <p> {'Due date: '+this.props.dueDate}</p> <br/>
                <br/>
                <br/>
            </div>
          //Add your code here to represent a TODO
        );
    }

}