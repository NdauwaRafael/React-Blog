/**
 * Created by Raphael Karanja on 07/12/2018.
 */
import React, {Component} from 'react';
import {
    TextField,
    Button,
    Icon
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    dense: {
        marginTop: 19,
    },
    button: {
        margin: theme.spacing.unit
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

class AddPost extends Component {
    state = {
        title: '',
        body: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <div style={{marginTop: 30}}>
                <div className="card">
                    <h5 className="card-header">Add Post</h5>
                    <div className="card-body">
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="standard-full-width"
                                label="Post Title"
                                style={{margin: 8}}
                                placeholder="Post Title"
                                fullWidth
                                margin="normal"
                                value={this.state.title}
                                onChange={this.handleChange('title')}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                id="standard-textarea"
                                label="Post Description"
                                placeholder="Post Description"
                                multiline
                                rows="4"
                                fullWidth
                                value={this.state.body}
                                onChange={this.handleChange('body')}
                                className={classes.textField}
                                margin="normal"
                            />
                        </form>
                        <Button variant="outlined" color="primary" className={classes.button}>
                            Save
                            <Icon className={classNames(classes.rightIcon, classes.iconSmall)}>send</Icon>
                        </Button>
                    </div>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(AddPost);