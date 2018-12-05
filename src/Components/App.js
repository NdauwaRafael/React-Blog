import React, {Component, Fragment} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
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
                <Fragment className="App">
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

                    <Route exact path="/"/>
                    <Route exact path="/authors" render={()=><Authors authors={authors} />}/>
                    <Route exact path="/articles"/>
                </Fragment>
            </BrowserRouter>

        );
    }
};


