/**
 * Created by Raphael Karanja on 07/12/2018.
 */
import React, {Component} from 'react';
import {
    TextField
} from '@material-ui/core';

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
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-full-width"
                        label="Label"
                        style={{margin: 8}}
                        placeholder="Placeholder"
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField
                        id="standard-textarea"
                        label="With placeholder multiline"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textField}
                        margin="normal"
                    />

                </form>
            </div>
        )
    }
}

export default AddPost;