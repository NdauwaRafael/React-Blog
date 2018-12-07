/**
 * Created by Raphael Karanja on 07/12/2018.
 */
import React, {Component} from 'react';
import {
    TextField,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
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
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-full-width"
                        label="Label"
                        style={{margin: 8}}
                        placeholder="Placeholder"
                        helperText="Post Title"
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
                        label="With placeholder multiline"
                        placeholder="Post Description"
                        multiline
                        fullWidth
                        value={this.state.body}
                        onChange={this.handleChange('body')}
                        className={classes.textField}
                        margin="normal"
                    />

                </form>
            </div>
        )
    }
}

export default withStyles(styles)(AddPost);