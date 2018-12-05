/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React, {Fragment} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Author from './Author/index';


export default ({match: {url}, authors}) =>
    <Fragment>
        <ul>
            {authors.map(author =>
            <li key={author.id}>
                <Link to={`${url}/${author.id}`}>{author.name}</Link>
            </li>
            )}
        </ul>
        <Switch>
            <Route exact  path={url} render={()=> <div><h3>Please select an Author from the above:</h3></div>} />
            <Route path={`${url}/:authorId`} render={({match})=> <Author  {...authors.find(author => author.id === parseInt(match.params.authorId))}/>}/>
            <Route render={()=><div><h3>Not found</h3></div>}/>
        </Switch>
    </Fragment>