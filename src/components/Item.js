import React, { Component } from 'react';
import { observer } from 'mobx-react'
import '../App.css';
import { timingSafeEqual } from 'crypto';


@observer
class Item extends Component {
    checkItem = (e) => {
      this.props.store.checkItem(e.target.value)
    }
      editItem = () => {
        let newLocation = prompt("Change location", "Super Sell");
        this.props.store.editItem(this.props.item.name, newLocation)
      }
      deleteItem = () => {
        console.log(this.props.item)
        this.props.store.deleteItem(this.props.item.name)
      }
    render() {
      let item = this.props.item
        return (
              <div className={item.completed ? 'crossed' : null}>
                <input type="checkbox" onClick = {this.checkItem} value={item.name}/>{item.name}  {item.location}
                <button className='editButton' onClick={this.editItem}>Edit</button>
                <button className='deleteButton' onClick={this.deleteItem}>Delete</button>
              </div>

            )
    }
}

export default Item