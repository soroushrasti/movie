import React, { PureComponent } from 'react';

const ListGroup = (props) => {
    const {items,textProperty, valueProperty, onItemSelect}=props;
    return <ul className="list-group">
         {items.map(item=> <li key={item[valueProperty]} onClick={()=>onItemSelect(item)} className="list-group-item">{item[textProperty]} </li> )}
       
    </ul>
}
 
export default ListGroup;