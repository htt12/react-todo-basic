import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import List from './list'

const App = () => (
    <div>
        <div className="container center'">
            
            <h1 className="center purple lighten-4">TO DO LIST</h1>
            <List/>
        </div>
    </div>
);

export default App;
