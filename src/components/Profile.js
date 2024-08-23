// import React from 'react';
// import Avatar from '@mui/material/Avatar';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme();

// export default function Profile({ name, email }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             {/* Display first letter of the name or a default icon */}
//             {name.charAt(0)}
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             {name}
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             {email}
//           </Typography>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './Layout/NavBar';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          axios.defaults.headers.common['x-auth-token'] = token;
          const response = await axios.get('http://localhost:5000/api/auth/user');
          setProfile(response.data);
        } else {
          setError('No authentication token found');
        }
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError('Failed to load profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column' }}>
        <h1>Profile</h1>
        {profile ? (
          <div style={{ textAlign: 'center' }}>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
              alt="Profile Silhouette" 
              style={{ 
                borderRadius: '50%', 
                width: '100px', 
                height: '100px', 
                marginBottom: '20px' 
              }} 
            />
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
          </div>
        ) : (
          <p>No profile data available</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
