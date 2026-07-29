import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import "./Form.css"
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Form() {
  const standardPasswordId = React.useId();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Paper className='paper-style-form'>
      <Typography className='text-title-form'>
        Create Account.
      </Typography>
      <form>
        <TextField
          className='form-input'
          label="Full Name"
          fullWidth
          type="text"
          variant='standard'
        />
        <TextField
          className='form-input'
          label="E-Mail"
          fullWidth
          type="email"
          variant='standard'
        />
        <FormControl className='form-input' sx={{ m: 0, width: '30ch' }} variant="standard">
          <InputLabel htmlFor={`${standardPasswordId}-input`}>Password</InputLabel>
          <Input
            id={`${standardPasswordId}-input`}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          type='submit'
          size="large"
          variant="contained"
          fullWidth
          className='button-form'
        >
          Sign-in
        </Button>
      </form>
    </Paper>
  )
}
