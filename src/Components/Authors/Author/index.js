/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
export default props =>

    <Fragment>
        <div className="row">
            <div className="card col-lg-4" >
                {
                    props.picture ? <img className="card-img-top" src={props.picture.large} alt=""/> : ''
                }

                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">
                        <h2>{props.username}</h2>
                    </p>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.email}</li>
                    <li className="list-group-item">{props.phone}</li>
                </ul>

                <div className="card-body">
                    <a href="#" className="card-link">{props.website}</a>
                </div>

            </div>
            <div className="col-lg-1"> </div>
            <div className="card col-lg-7">
                <h3>Posts shared by {props.username}</h3>
                <ul className="list-group list-group-flush">
                    {
                        props.posts.map(({id, title})=>
                            <li className="list-group-item">
                                <Link to={`${props.match.url}/posts/${id}`}>{title}</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    </Fragment>