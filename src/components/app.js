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

    deleteItem(index){
        const newList = [...this.state.list];
        newList.splice(index, 1);

        console.log('Old:', this.state.list);
        console.log('New:', newList);
        
        this.setState({
            list: newList,
        })
    }

    render(){
        return (
            <div>
                <div className="container">
                    <h1 className="center purple lighten-4">To Do List</h1>
                    <List list={this.state.list} delete={this.deleteItem.bind(this)}/>
                    <AddForm add={this.addItem.bind(this)} />
                </div>
            </div>
        );
    }
}

export default App;
