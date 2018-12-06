/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React, {Fragment} from 'react';
import {Route, Link, Redirect} from 'react-router-dom';
import Author from './Author/index';
import NotFound from '../Errors/404'


export default ({match: {url}, authors}) =>
    <Fragment>
        <div className="row">
            <div className="col-3">
                <ul>
                    {authors.map(author =>
                        <li key={author.id}>
                            <Link to={`${url}/${author.id}`}>{author.name}</Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className="col-9">
                <Route exact  path={url} render={()=> <div><h3>Please select an Author from the above:</h3></div>} />
                <Route path={`${url}/:authorId`} render={props=> {
                    const author = authors.find(author => author.id === parseInt(props.match.params.authorId));
                    if(!author){
                        return <NotFound />
                    }else {
                      return  <Author {...props} {...author}/>
                    }
                }
                }/>
            </div>
        </div>

    </Fragment>