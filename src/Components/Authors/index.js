/**
 * Created by Raphael Karanja on 05/12/2018.
 */
import React, {Fragment} from 'react';
import {Route, Link} from 'react-router-dom';
import Author from './Author/index';
import NotFound from '../Errors/404';
import { withStyles } from '@material-ui/core/styles';
import {
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton
}from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});

const Authors =  ({match: {url}, authors, classes}) => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-12">
                    <div className={classes.root}>
                        <GridList className={classes.gridList} cols={2.5}>
                            {authors.map(author =>(
                                <GridListTile key={author.id}>
                                    <img src={author.picture} alt={author.name} />
                                    <GridListTileBar
                                        component={Link}
                                        title={author.name}
                                        classes={{
                                            root: classes.titleBar,
                                            title: classes.title,
                                        }}
                                        actionIcon={
                                            <IconButton >
                                                <StarBorderIcon className={classes.title} />
                                            </IconButton>
                                        }
                                        to={`${url}/${author.id}`}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </div>
                <div className="col-12">
                    <Route exact  path={url} render={()=> <div><h3>Please select an Author from the above:</h3></div>} />
                    <Route  path={`${url}/:authorId`} render={props=> {
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
    );
};


export default withStyles(styles)(Authors);