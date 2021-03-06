import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const date = String(this.props.dueDate);
        return (
            <div>
                <h2>{this.props.text}</h2>
                <h2>{this.props.priority}</h2>
                <h2>{date}</h2>
            </div>
        );
    }

}