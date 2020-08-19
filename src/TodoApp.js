
import React from 'react';
import { TodoList } from './TodoList';
import {KeyboardDatePicker} from '@material-ui/pickers';

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' ,fecha: Date.now(),prioridad: 0};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    
    return (
      <div>
        <h3>TODO</h3>
        <TodoList todoList={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
            </label>
          <input
            id="new-todot"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <br></br>
          <label htmlFor="new-todo">
            Date
            </label>
          <input
            id="new-todof"
            type="Date"
            onChange={this.handleChange}
            value={this.state.fecha}
          />
          <br></br>
          <label htmlFor="new-todo">
            Priority
            </label>
          <input
            id="new-todop"
            onChange={this.handleChange}
            value={this.state.prioridad}
          />
          <br></br>
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    
    if(e.target.id==="new-todot"){
        this.setState({ text: e.target.value });
    }else if(e.target.id==="new-todof"){
      this.setState({ fecha: e.target.value });
    }else if(e.target.id==="new-todop"){
      this.setState({ prioridad: e.target.value });
    }
    
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      dueDate: this.state.fecha,
      priority: this.state.prioridad
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}