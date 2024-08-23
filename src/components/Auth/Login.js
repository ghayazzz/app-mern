// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setIsAuthenticated }) => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const navigate = useNavigate(); // Replace useHistory with useNavigate

//   const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', formData);
//       localStorage.setItem('token', res.data.token);
//       setIsAuthenticated(true);
//       navigate('/'); // Replace history.push with navigate
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <div>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={onChange}
//           required
//         />
//       </div>
//       <div>
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={onChange}
//           required
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#757575', // Set primary color to grey
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ffffff', // White text
          backgroundColor: '#757575', // Grey background
          '&:hover': {
            backgroundColor: '#616161', // Darker grey on hover
          },
        },
      },
    },
  },
});

export default function Login({ setIsAuthenticated }) {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // useNavigate hook

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
      navigate('/'); // Redirect on successful login
    } catch (err) {
      setError("The email address or password is incorrect");
      console.error(err.response.data);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={onChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={onChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Signup"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
