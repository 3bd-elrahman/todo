import React from 'react';
import './Board.css';

class Board extends React.Component{


    render(){
  const {users}=this.props;

  const {Delete}=this.props;
const length =users.length;

  const allUsers= length==0?(<div className="NoItemMessage"><span>No Items to show</span></div>):(
    users.map(u=>{

        return(
            <div key={u.id} className="items">

                <span className="new_item_name">{u.name}</span>
                <span className="new_item_age" >{u.age}</span>

                <span onClick={()=>Delete(u.id)} className="new_item_action" >&times;</span>
            </div>
        )
      })
  )
  
        return(
            <div className="container_board">
                <div className="header">
                    <span className="name">Name</span>
                    <span className="age">Age</span>
                    <span className="action">Action</span>
                </div>
            {allUsers}
               
            </div>
        )
    }
}

export default Board;