import React from "react"

import TextField from '@material-ui/core/TextField'
// import { withStyles } from '@material-ui/core/styles';


const TextEditor = () => (
    <TextField
      helperText="Insert some text."
      onKeyPress={(ev) => {
        if (ev.key === 'Enter') {
          console.log(`Pressed keyCode ${ev.key}`);
          // Do code here
          ev.preventDefault();
        }
      }}
      defaultValue="Demo text."
      fullWidth={true}
      // onChange={(event) => {
        // console.log(event.target.value);
      // }}
    >
    </TextField>
)

export default TextEditor
