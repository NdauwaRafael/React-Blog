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
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/authors">Authors</Link>
                        </li>
                        <li>
                            <Link to="/articles">Articles</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/"/>
                        <Route   path="/authors" render={props=><Authors {...props} authors={authors} />}/>
                        <Route  path="/articles"/>
                        <Route render={()=><div><h3>Not Found</h3></div>}/>
                    </Switch>
                </Fragment>
            </BrowserRouter>

        );
    }
};


