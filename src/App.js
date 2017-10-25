import React, { Component } from 'react';
import ReactNestedMenu from './components/ReactNestedMenu';
import menu from './test-data/menu';
class App extends Component {
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
                            menuData={menu}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
