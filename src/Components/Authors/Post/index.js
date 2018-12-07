/**
 * Created by Raphael Karanja on 06/12/2018.
 */
import React, {Fragment} from 'react';

export default (props)=> {
    const {name, title, body} = props;
    return (
        <Fragment>
            <div className="card"  >
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">by: {name}</h6>
                    <p className="card-text">{body}.</p>
                    <a href="#" className="card-link">Edit</a>
                    <a href="#" className="card-link">Delete</a>
                </div>
            </div>
        </Fragment>
    )
}
