import React, {Component} from 'react';
import SearchGIF from '../containers/SearchGIF'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ShowGIF from "./ShowGIF";

class App extends Component {

    localUrl="http://localhost:3000";

    render() {
        return (
            <div>
                <a href={`${this.localUrl}/searchGIF`}>Search</a>
                <a href={`${this.localUrl}/showGIF`}>Show</a>
                <Router>
                    <Switch>
                        <Route path="/searchGIF" component={SearchGIF}/>
                        <Route path="/showGIF" component={ShowGIF}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
