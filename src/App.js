import React, { Component } from 'react';
import ReactNestedMenu from './components/ReactNestedMenu';
//import ReactNestedMenu from './ReactNestedMenu';
import menu from './test-data/menu';
class App extends Component {
    constructor() {
        super();
        this.state = { menu: menu };
        
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="top-bar">
                        React Nested Menu
                    </div>
                </header>
                <div className="row">
                    <div className="columns">
                        <ReactNestedMenu
                            navParentClassname="vertical menu nested"
                            navTopLevelParentClassname="vertical menu"
                            menuData={this.state.menu}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
