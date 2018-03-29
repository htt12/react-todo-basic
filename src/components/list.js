import React from 'react';



export default props => {
    const listItems = props.list.map((item, index) =>{
        return (
            <div key={index} className='row '>
                <div className='col s10 offset-s1'>
                <li key={index} className='collection-item pink darken-2 white-text'>{item.title}</li>
                </div>
            </div>)
    }); 
    
    return(
        <ul className='collection center'>
            {listItems}
        </ul>
    )
}