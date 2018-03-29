import React from 'react';



export default props => {
    console.log('list,', props)
    const listItems = props.list.map((item, index) =>{
        return (
            <li key={index} className='collection-item row yellow darken-2'>
                <div className='valign-wrapper col s10'>
                    {item.title}
                </div>    
                <div className='col s2 darken-2 white-text'>
                    <div>
                       <button className='btn btn-floating green darken-2' onClick={()=>props.delete(index)}>–</button>
                    </div>
                </div>
            </li>)
    }); 
    
    return(
        <ul className='collection'>
            {listItems}
        </ul>
    )
}