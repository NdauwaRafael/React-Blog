/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

export default ({authors}) =>
    <Fragment>
        <ul>
            {authors.map(author =>
            <li key={author.id}>
                <Link to={"authors/" + author.id}>{author.name}</Link>
            </li>
            )}
        </ul>
    </Fragment>