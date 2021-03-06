import { Button, TextField } from '@material-ui/core';
import React from 'react';
import {ListItem,ListItemIcon,ListItemText} from '@material-ui/core'
import './Todo.css'
import GroupIcon from '@material-ui/icons/Group';

import DeleteIcon from '@material-ui/icons/Delete';



class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  //incorporating local storage 
  // componentDidMount() {
  //   this.hydrateStateWithLocalStorage();

  //   // add event listener to save state to localStorage
  //   // when user leaves/refreshes the page
  //   window.addEventListener(
  //     "beforeunload",
  //     this.saveStateToLocalStorage.bind(this)
  //   );
  // }

  // componentWillUnmount() {
  //   window.removeEventListener(
  //     "beforeunload",
  //     this.saveStateToLocalStorage.bind(this)
  //   );

  //   // saves if component has a chance to unmount
  //   this.saveStateToLocalStorage();
  // }

  // hydrateStateWithLocalStorage() {
  //   // for all items in state
  //   for (let key in this.state) {
  //     // if the key exists in localStorage
  //     if (localStorage.hasOwnProperty(key)) {
  //       // get the key's value from localStorage
  //       let value = localStorage.getItem(key);

  //       // parse the localStorage string and setState
  //       try {
  //         value = JSON.parse(value);
  //         this.setState({ [key]: value });
  //       } catch (e) {
  //         // handle empty string
  //         this.setState({ [key]: value });
  //       }
  //     }
  //   }
  // }

  // saveStateToLocalStorage() {
  //   // for every item in React state
  //   for (let key in this.state) {
  //     // save to localStorage
  //     localStorage.setItem(key, JSON.stringify(this.state[key]));
  //   }
  //   console.log(localStorage);
  // }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
 
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }
  
  render() {
    return (
      <>
        
        <div>
        <div >

          
          <TextField
          label="Enter Previous TeamName"
          variant="outlined"
          style={{width:"800px",marginRight:"10px"}}
            type="text"
            
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <Button
            className="btn"
            color="primary"
            variant="contained"
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          >
            <i className="material-icons" style={{marginTop:"10px",paddingBottom:"5px"}}>Add Team-Name</i>
          </Button>
          <br /> <br />
          <ol>
            {this.state.list.map(item => {
              return (
                <ListItem style={{border:"1px solid black",width:"700px",borderRadius:"5px"}} key={item.key}>
                    <ListItemIcon>
                        <GroupIcon color="primary"/>
                    </ListItemIcon>
                    <ListItemText key={item.key} primary={"TeamName:  "+item.value}/>
                    <Button color="secondary">{<DeleteIcon fontSize="small" onClick={()=>this.deleteItem(item.id)} />}</Button>
                </ListItem>
              );
            })}
          </ol>
        </div>
      </div>
      </>
    );
  }
}



export default Todo


{/* <li key={item.id}>
                  {item.value}
                  <button className="btn btn-floating" onClick={() => this.deleteItem(item.id)}>
                    <i class="material-icons">x</i>
                  </button> </li>
 */}




{/* <ListItem button >
                        <ListItemIcon>
                           <GitHubIcon color="primary"/>
                        </ListItemIcon>
                        <a href="//www.github.com/yadhindrasrivarshan" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>{<ListItemText primary="Github"/>}</a>
</ListItem> */}
                   
                    