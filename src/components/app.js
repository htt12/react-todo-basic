import 'materialize-css/dist/css/materialize.min.css'
import React, {Component} from 'react';
import List from './list';
import AddForm from './add_form'
import Data from '../data/todo_items';

class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            list: Data,
        }
    }

    addItem(item){
        this.setState({
            list: [item, ...this.state.list]
        })
    }
    render(){
        return (
            <div>
                <div className="container center">
                    <h1 className="center purple lighten-4">To Do List</h1>
                    <List list={this.state.list}/>
                    <AddForm add={this.addItem.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default App;
