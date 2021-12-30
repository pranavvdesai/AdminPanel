import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import Slide from '@material-ui/core/Slide';
import { withStyles } from "@material-ui/core/styles";

const theme = createTheme();

const styles = theme => ({
  multilineColor:{
      color:'red'
  }
});
export default function Login({classes}) {
    const [name, setName ] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [logged, isLogged] = React.useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function handleSubmit(e) {
    e.preventDefault();
      axios
        .post('https://recportal-iete.herokuapp.com/auth/adminlogin/', {
         email: name,
         password
        
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {

        console.log(response);
        if (response.data.jwt) {
          enqueueSnackbar('Logged in Succesfully', {
            variant: 'success',
            autoHideDuration: 2000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            TransitionComponent: Slide,
          })
          localStorage.setItem("HH", response.data.jwt);
          isLogged(true);
          window.location.href = "/landing";
        }
        console.log(response.data.jwt);
        return response.data;
      }).catch((error) => {
        enqueueSnackbar('Invalid Credentials', {
          variant: 'error',
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          TransitionComponent: Slide,
        })
      }
      );
    
    }
  return (
    <div className=" md:-ml-64">
           
      <div className="flex items-center justify-center h-screen">
  <div className="bg-gray-800 flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
  <div className="text-white mt-10">
    <h1 className="font-bold text-4xl">Login</h1>
    <p className="font-semibold">Admin Panel</p>
  </div>
  <form className="flex flex-col space-y-8 mt-10" onSubmit={handleSubmit}>
    <input type="text" placeholder="Email" name="email" class="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500"               onChange={(e) => setName(e.target.value)}
/>
    <input type="password" placeholder="Password" name="password" class="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500"               onChange={(e) => setPassword(e.target.value)}
 />
    <button type="submit" className="border border-green-500 bg-green-500 text-white rounded-lg py-3 font-semibold">Submit</button>
  </form>
</div>
</div>
      </div>
  );
}