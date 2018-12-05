/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React, {Fragment} from 'react';


export default props =>

    <Fragment>
        <h1>{props.name}</h1>
        <h3>{props.username}</h3>
        <p>{props.phone}</p>
        <small>{props.website}</small>
        {
            props.picture ? <img src={props.picture.medium} alt=""/> : ''
        }

    </Fragment>