import React from "react";
import './TodoItems.css';

function TodoItems(props){

    const {items, deleteItem} = props
    const length = items.length

    const listItem = length ? (
        items.map(item => {
            return(
                <div className="Items" key={item.id}>
                    <div className="name">{item.name}</div>
                    <div className="age">{item.age}</div>
                    <div className="action" onClick={() => deleteItem(item.id)}>&times;</div>
                </div>
            )
        })
    ) : (
        <div className="Items"> Nothing</div>
    )

    return(
        <div className="listItem">
            <div className="head">
                <div className="name">Name</div>
                <div className="age">Age</div>
                <div className="action">Action</div>
            </div>
            <div >
                {listItem}
            </div>
        </div>
    )
}

export default TodoItems;
