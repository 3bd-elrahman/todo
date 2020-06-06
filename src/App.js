import React from 'react';
import Board from './component/Board/Board';
import Form from './component/Form/Form';
import './App.css';

class App extends React.Component {

  state={
    users:[
      
    ]
  }
  ///delete method/////////
  Delete=(id)=>{
  let {users}= this.state;
  for(var i=0;i<users.length;i++){
    if(users[i].id==id){
      break;
    }else{
continue;
    }
  }
  users.splice(i,1);
  this.setState({users});
  }


  //////add method/////////////

  add=(user)=>{
    
    user.id=Math.random();
    let users= this.state.users;
    users.push(user);
 this.setState({users});
 console.log(this.state);
  }
  render(){
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Board  users={this.state.users} Delete={this.Delete}/>
      <Form  add={this.add}/>
      
    </div>
  )
  }
}

export default App;
