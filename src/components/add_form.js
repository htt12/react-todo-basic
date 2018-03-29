import React, {Component} from 'react';

class AddForm extends Component {
    constructor(props){
        super(props);

        this.state={
            title: '',
            details:'',
        }
    }

    handleAddItem(e){
        e.preventDefault();
        
        this.props.add(this.state);

        this.setState({
            title: '',
            details:'',
        });
    }

    render(){
        const {title, details} = this.state;
        return (
            <form className='center row' onSubmit={this.handleAddItem.bind(this)}>
                
                <div className='col s6 offset-s3'>
                    <label>Item</label>
                    <input type='text' value={title} onChange={e=>this.setState({title: e.target.value})}/>
                </div>
                <div className='col s6 offset-s3'>
                    <label>Details</label>
                    <input type='text' value={details} onChange={e=>this.setState({details: e.target.value})}/>
                </div>
                <div className='center col s6 offset-s3'>
                    <button className="btn red darken-4">+</button>
                </div>
            </form>
        )
    }
}

export default AddForm;