import react, {Component} from 'react'
import './AddItems.css';



class AddItems extends Component {
  
  state = {
    name: '',
    age : ''
  }
  handelChange = (e) =>{
     this.setState({
        [e.target.id]: e.target.value
      })
  }

  handelSubmit = (e) => {
      e.preventDefault()
      this.props.addItem(this.state)
      this.setState({
        name : '',
        age: ''
      })
  }
  
  
  render(){
    return (
    <div className="AddItems">
       <form onSubmit={this.handelSubmit}>
          <input type="text" placeholder="enter your name" id="name" value={this.state.name} onChange={this.handelChange} />
          <input type="nubmer" placeholder="enter age" id="age" value={this.state.age} onChange={this.handelChange} />
          <input type="submit" id="action" value="add"/>
       </form>
    </div>
    );
  }
}

export default AddItems;
