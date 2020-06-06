import React from 'react';
import './Form.css';

class Form extends React.Component{

state={
    name:'',
    age:''
}
handlechange=(e)=>{

this.setState({[e.target.id]:e.target.value});

}
handlesubmit=(e)=>{
e.preventDefault();
this.props.add(this.state);
this.setState({name:'',age:''});
}


    render(){
  const {add}=this.props;
        return(
            <div className="form_container">
               <form onSubmit={this.handlesubmit}>
                  <input type="text" id="name" required  placeholder="Enter name" onChange={this.handlechange} className="nameinput" value={this.state.name}/>
                   <input type="number" id="age"  required placeholder="Enter age" onChange={this.handlechange} className="ageinput" value={this.state.age}/>
                   <input type="submit" value="add" className="addbutton" />

               </form>
            </div>
        )
    }
}

export default Form;