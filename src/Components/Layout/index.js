/**
 * Created by Raphael Karanja on 06/12/2018.
 */
import React, {Component, Fragment} from 'react';
import {
    AppBar,
    CssBaseline,
    Toolbar,
    IconButton,
    Typography,
    Hidden,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuList,
    MenuItem
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {withStyles} from '@material-ui/core/styles';
import {Link, withRouter} from 'react-router-dom';
import {compose} from 'recompose';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class Layout extends Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({mobileOpen: !state.mobileOpen}));
    };

    render() {
        const {classes, children, authors, location: {pathname}} = this.props;
        const {mobileOpen} = this.state;

        const drawer = (

            <div>
                <Hidden xsDown>
                    <div className={classes.toolbar}/>
                </Hidden>

                <MenuList>
                    <Divider/>
                    <MenuItem component={Link} to="/" className={classes.menuItem} selected={'/'===pathname}>
                        Home
                    </MenuItem>
                    <MenuItem component={Link} to="/authors" className={classes.menuItem} selected={'/authors' === pathname}>
                        Authors
                    </MenuItem>

                    <MenuList>
                        {
                            authors.map(({id, name}) =>
                                <MenuItem className={classes.nested} component={Link} to={`/authors/${id}`} key={id} selected={`/authors/${id}` === pathname}>
                                    {name}
                                </MenuItem>
                            )
                        }

                    </MenuList>

                    <MenuItem component={Link} to="/articles" className={classes.menuItem}>
                        Articles
                    </MenuItem>


                </MenuList>

            </div>
        );
        return (
            <Fragment>
                <CssBaseline/>
                <div className={classes.root}>
                    <CssBaseline/>
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.menuButton}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" color="inherit" noWrap>
                                Responsive drawer
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <nav className={classes.drawer}>
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                        <Hidden smUp implementation="css">
                            <Drawer
                                container={this.props.container}
                                variant="temporary"
                                open={mobileOpen}
                                onClose={this.handleDrawerToggle}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden xsDown implementation="css">
                            <Drawer
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                variant="permanent"
                                open
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                    </nav>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>
                        {children}
                    </main>
                </div>
            </Fragment>
        );
    }
};

export default compose(
    withRouter,
    withStyles(styles, {withTheme: true})
)  (Layout);