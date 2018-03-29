import React from 'react';
import Data from '../data/todo_items';

console.log(Data);

export default props => {
    const listItems = Data.map((item, index) =>{
        return (
            <div key={index} className='row '>
                <li key={index} className='collection-item pink darken-2 white-text'>{item.title}</li>
            </div>)
    }); 
    
    return(
        <ul className='collection center'>
            {listItems}
        </ul>
    )
}