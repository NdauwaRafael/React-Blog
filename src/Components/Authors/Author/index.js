/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React, {Fragment} from 'react';
import {Route, Link} from 'react-router-dom';
import Post from '../Post';
import NotFound from '../../Errors/404';
export default (props) => {
    const {posts} = props,
    name = props.name;
    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card " >
                        {
                            <img className="card-img-top" src={props.picture} alt=""/>
                        }

                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <h2 className="card-text">
                                {props.username}
                            </h2>
                        </div>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{props.email}</li>
                            <li className="list-group-item">{props.phone}</li>
                        </ul>

                        <div className="card-body">
                            <a href="#" className="card-link">{props.website}</a>
                        </div>

                    </div>
                </div>

                {/*<div className="col-lg-1"> </div>*/}
                <div className="card col-lg-8">
                    <h3>Posts shared by {props.username}</h3>
                    <ul className="list-group list-group-flush">
                        {
                            props.posts.map(({id, title})=>
                                <li className="list-group-item" key={id}>
                                    <Link to={`${props.match.url}/posts/${id}`}>{title}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>

            <Route path={`${props.match.url}/posts/:postId`} render={props=>{
                const post = posts.find( ({id})=>id === parseInt(props.match.params.postId));
                if(!post){
                    return <NotFound />
                }else{
                    return <Post {...props} {...post} name={name} />
                }
            }}/>
        </Fragment>
    );
}

