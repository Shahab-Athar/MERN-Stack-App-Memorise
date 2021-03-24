import React, { useState } from 'react'
import { Paper, Typography, TextField, Button } from '@material-ui/core';

import useStyle from './styles'

const Form = () => {
    const classes = useStyle();
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    const handleSubmit = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating A Memory</Typography>
                <TextField
                    name="creator"
                    veriant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                    />
            </form>
        </Paper>
    )
}

export default Form