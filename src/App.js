import react, {Component} from 'react'
import './App.css';
import TodoItems from './Components/TodoItems/TodoItems'
import AddItems from './Components/AddItems/AddItems'



class App extends Component {

  state = {
    items : [
      {id:1, name : "Ahmed" , age : 22},
      {id:2, name : "Mohamed" , age : 25},
      {id:3, name : "Hamza" , age : 21},
    ]
  }

  deleteItem = (id) =>{
    const items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }

  addItem = (item) => {
    item.id = Math.random();
    const I = this.state.items
    I.push(item)
    this.setState({items : I})
  }

  render(){
    return (
    <div className="App">
      <h1>List</h1>
      <TodoItems items= {this.state.items} deleteItem= {this.deleteItem}/>
      <AddItems addItem={this.addItem}/>
    </div>
    );
  }
}

export default App;
