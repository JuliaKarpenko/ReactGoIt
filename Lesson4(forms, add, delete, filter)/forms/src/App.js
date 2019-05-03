import React, { Component } from 'react';
import './App.css';
import Form from './SingupForm';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import v4 from 'uuid/v4';
import NoteFilter from './NoteFilter';

const filterForNotes = (filter, notes) => {
  return notes.filter(note => 
    note.text.toLowerCase().includes(filter.toLowerCase())
  )
}

class App extends Component {
  state = {
    filter: '',
    notes: [{id: '1', text: 'qwerty'}, {id: '21', text: 'qQQwerty'}]
  }

  handleAddNode = text => {
    this.setState(prevState => ({
      notes: [{id: v4(), text },...prevState.notes]
    }))
  }

  handleDeleteNode = id => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => id !== note.id)
    }))
  }

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value
    })
  }

  render() {

    const { notes, filter } = this.state;
    const filterNotes = filterForNotes(filter, notes)

    return (
      <div className="App">
        <Form/>
        <h1>Form in React</h1>
        <NoteFilter filter={filter} onFilterChange={this.handleFilterChange}/>
        <NoteEditor onSubmit={this.handleAddNode}/>
        <NoteList notes={filterNotes} onDeleteNote={this.handleDeleteNode}/>
      </div>
    );
  }
}

export default App;
