// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Grid, Typography, Container } from '@mui/material';

// const API_BASE_URL = 'http://localhost:5000/api/auth';

// const UserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });

//   // Function to fetch users
//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get(`${API_BASE_URL}/users`, {
//         headers: { 'x-auth-token': localStorage.getItem('token') }
//       });
//       setUsers(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const handleAddUser = async () => {
//     try {
//       await axios.post(`${API_BASE_URL}/admin/addUser`, newUser, {
//         headers: { 'x-auth-token': localStorage.getItem('token') }
//       });
//       setNewUser({ name: '', email: '', password: '' });
//       // Re-fetch users
//       fetchUsers();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleDeleteUser = async (email) => {
//     try {
//       await axios.delete(`${API_BASE_URL}/admin/deleteUser`, {
//         headers: { 'x-auth-token': localStorage.getItem('token') },
//         data: { email } // Send email in the request body
//       });
//       // Re-fetch users
//       fetchUsers();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <Container sx={{ mt: 4, p: 3 }}>
//       <Typography variant="h4" sx={{ mb: 2 }}>
//         User Management
//       </Typography>
//       <Grid container spacing={2} sx={{ mb: 3 }}>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             label="Name"
//             value={newUser.name}
//             onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//             variant="outlined"
//             sx={{ mr: 2 }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             label="Email"
//             value={newUser.email}
//             onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//             variant="outlined"
//             sx={{ mr: 2 }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             value={newUser.password}
//             onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
//             variant="outlined"
//           />
//         </Grid>
//       </Grid>
//       <Button
//         onClick={handleAddUser}
//         variant="contained"
//         color="primary"
//         sx={{ mb: 2 }}
//       >
//         Add User
//       </Button>

//       <TableContainer component={Paper} sx={{ mt: 2 }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.email}>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>
//                   <Button
//                     onClick={() => handleDeleteUser(user.email)}
//                     variant="contained"
//                     color="secondary"
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Container>
//   );
// };

// export default UserManagement;

//good
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Grid, Typography, Container } from '@mui/material';

// const API_BASE_URL = 'http://localhost:5000/api/auth';

// const UserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });

//   // Function to fetch users
//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get(`${API_BASE_URL}/users`, {
//         headers: { 'x-auth-token': localStorage.getItem('token') }
//       });
//       setUsers(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const handleAddUser = async () => {
//     try {
//       await axios.post(`${API_BASE_URL}/admin/addUser`, newUser, {
//         headers: { 'x-auth-token': localStorage.getItem('token') }
//       });
//       setNewUser({ name: '', email: '', password: '' });
//       // Re-fetch users
//       fetchUsers();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleDeleteUser = async (email) => {
//     try {
//       await axios.delete(`${API_BASE_URL}/admin/deleteUser`, {
//         headers: { 'x-auth-token': localStorage.getItem('token') },
//         data: { email } // Send email in the request body
//       });
//       // Re-fetch users
//       fetchUsers();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <Container sx={{ mt: 4, p: 3 }}>
//       <Typography variant="h4" sx={{ mb: 2 }}>
//         User Management
//       </Typography>
//       <Grid container spacing={2} sx={{ mb: 3 }}>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             label="Name"
//             value={newUser.name}
//             onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//             variant="outlined"
//             sx={{ mr: 2, backgroundColor: 'white', fontWeight: 'bold' }} // Set background color to white and make text bold
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             label="Email"
//             value={newUser.email}
//             onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//             variant="outlined"
//             sx={{ mr: 2, backgroundColor: 'white', fontWeight: 'bold' }} // Set background color to white and make text bold
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             value={newUser.password}
//             onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
//             variant="outlined"
//             sx={{ backgroundColor: 'white', fontWeight: 'bold' }} // Set background color to white and make text bold
//           />
//         </Grid>
//       </Grid>
//       <Button
//         onClick={handleAddUser}
//         variant="contained"
//         color="primary"
//         sx={{ mb: 2 }}
//       >
//         Add User
//       </Button>

//       <TableContainer component={Paper} sx={{ mt: 2, maxWidth: '100%', overflowX: 'auto' }}>
//         <Table sx={{ minWidth: 650 }}>
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ whiteSpace: 'nowrap' }}>Name</TableCell>
//               <TableCell sx={{ whiteSpace: 'nowrap' }}>Email</TableCell>
//               <TableCell sx={{ whiteSpace: 'nowrap' }}>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.email}>
//                 <TableCell sx={{ whiteSpace: 'nowrap' }}>{user.name}</TableCell>
//                 <TableCell sx={{ whiteSpace: 'nowrap' }}>{user.email}</TableCell>
//                 <TableCell>
//                   <Button
//                     onClick={() => handleDeleteUser(user.email)}
//                     variant="contained"
//                     color="secondary"
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Container>
//   );
// };

// export default UserManagement;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import NavBar from './Layout/NavBar';

const SavedProjects = () => {
  const [fileNames, setFileNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSavedProjects = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/user', {
          headers: { 'x-auth-token': token }
        });
        setFileNames(response.data.savedFiles || []); // Assuming 'savedFiles' is an array of filenames
        setLoading(false);
      } catch (error) {
        setError('Error fetching the file names');
        setLoading(false);
      }
    };

    fetchSavedProjects();
  }, []);

  const handleCardClick = (lasFilename) => {
    const token = localStorage.getItem('token');
    let url = `http://localhost:1234/examples/load_project.html?lasFilename=${encodeURIComponent(lasFilename)}`;
    if (token) {
      url += `&token=${encodeURIComponent(token)}`;
    }
    window.location.href = url;
  };

  const handleDelete = async (lasFilename) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/user/files/${encodeURIComponent(lasFilename)}`, {
        headers: { 'x-auth-token': token }
      });
      setFileNames(prevFiles => prevFiles.filter(file => file.lasFilename !== lasFilename));
    } catch (error) {
      console.error('Error deleting file:', error);
      setError('Error deleting the file');
    }
  };

  const formatDateTime = (date) => {
    if (date) {
      const formattedDate = new Date(date);
      return !isNaN(formattedDate.getTime()) ? formattedDate.toLocaleString() : 'Invalid Date';
    }
    return 'Date Not Available';
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', justifyContent: 'center' }}>
        {fileNames.map((file, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => handleCardClick(file.lasFilename)}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/file_icon.jpg" // Replace with your image path
                alt={file.lasFilename}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {file.lasFilename}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {formatDateTime(file.date)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Click to open the project.
                </Typography>
              </CardContent>
            </CardActionArea>
            <IconButton aria-label="delete" onClick={() => handleDelete(file.lasFilename)}>
              <DeleteIcon />
            </IconButton>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SavedProjects;
