import React, {Component, Fragment} from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Authors from './Authors'
export default class extends Component {
    state = {
        authors: []
    };

    async componentDidMount() {
        const authors = await (await fetch('http://localhost:3004/authors') ).json();
        this.setState({authors});
    };

    render() {
        const {authors} = this.state;
        return (
            <BrowserRouter>
                <Fragment>
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/authors">Authors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/articles">Articles</Link>
                        </li>
                    </ul>
                    <div className="jumbotron">
                        <Switch>
                            <Route exact path="/"/>
                            <Route   path="/authors" render={props=><Authors {...props} authors={authors} />}/>
                            <Route  path="/articles"/>
                            <Route render={()=><div><h3>Not Found</h3></div>}/>
                        </Switch>
                    </div>
                </Fragment>
            </BrowserRouter>

        );
    }
};


