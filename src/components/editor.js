import React from "react"

import TextField from '@material-ui/core/TextField'


const TextEditor = () => (
    <TextField
      helperText="Insert some text."
      defaultValue="Demo text."
      fullWidth={true}
    >
    </TextField>
)

export default TextEditor
