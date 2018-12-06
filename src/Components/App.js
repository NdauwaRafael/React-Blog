import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Authors from './Authors';
import NotFound from './Errors/404';
import Layout from './Layouts'
export default class extends Component {
    state = {
        authors: []
    };

    async componentDidMount() {
        const authors = await (await fetch('http://localhost:3004/authors?_embed=posts') ).json();
        this.setState({authors});
    };

    render() {
        const {authors} = this.state;
        return (
            <BrowserRouter>
                <Layout authors={authors}>
                    {/*<ul className="nav nav-pills nav-fill">*/}
                        {/*<li className="nav-item">*/}
                            {/*<Link className="nav-link" to="/">Home</Link>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                            {/*<Link className="nav-link" to="/authors">Authors</Link>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                            {/*<Link className="nav-link" to="/articles">Articles</Link>*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                    {/*<div className="jumbotron card">*/}
                        {/*<div className="container-fluid ">*/}

                        {/*</div>*/}
                    {/*</div>*/}

                    <Switch>
                        <Route exact path="/"/>
                        <Route   path="/authors" render={props=><Authors {...props} authors={authors} />}/>
                        <Route  path="/articles"/>
                        <Route component={NotFound}/>
                    </Switch>

                </Layout>
            </BrowserRouter>

        );
    }
};


