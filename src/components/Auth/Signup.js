// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate

// const Signup = ({ setIsAuthenticated }) => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
//       localStorage.setItem('token', res.data.token);
//       setIsAuthenticated(true);
//       navigate('/'); // Use navigate instead of history.push
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <div>
//         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={onChange} required />
//       </div>
//       <div>
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={onChange} required />
//       </div>
//       <div>
//         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={onChange} required />
//       </div>
//       <button type="submit">Signup</button>
//     </form>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
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

export default function SignUp({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // useNavigate hook

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
      navigate('/'); // Redirect on successful signup
    } catch (err) {
      setError("An error occurred during signup.");
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
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={formData.name}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            {error && <Typography color="error">{error}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
