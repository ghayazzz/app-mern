import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Card, CardContent, Typography, IconButton, Grid, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import NavBar from './Layout/NavBar';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [savedProjects, setSavedProjects] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });
  const [newProject, setNewProject] = useState({ fileName: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/admin/users', {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchUserProjects = async (userId) => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/admin/user/savedProjects', {
        headers: { 'x-auth-token': localStorage.getItem('token') },
        params: { userId }
      });
      setSavedProjects(response.data);
    } catch (error) {
      console.error('Error fetching user projects:', error);
    }
  };

  const handleAddUser = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/admin/addUser', newUser, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      console.log('User added successfully:', response.data);
      setNewUser({ name: '', email: '', password: '' });
      fetchUsers();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/admin/deleteUser/${userId}`, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      console.log('User deleted successfully');
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleAddProject = async () => {
    try {
      await axios.post(`http://localhost:5000/api/auth/admin/user/savedProjects`, { fileName: newProject.fileName, userId: selectedUserId }, {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      console.log('Project added successfully');
      setNewProject({ fileName: '' });
      fetchUserProjects(selectedUserId);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleRemoveProject = async (fileName) => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/admin/user/savedProjects`, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
        data: { fileName, userId: selectedUserId }
      });
      console.log('Project removed successfully');
      fetchUserProjects(selectedUserId);
    } catch (error) {
      console.error('Error removing project:', error);
    }
  };

  return (
    <div>
      <NavBar />
      <div style={{ padding: '20px' }}>
        <Paper style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>Add New User</Typography>
              <TextField
                label="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddUser}
                startIcon={<AddIcon />}
                style={{ marginTop: '10px' }}
              >
                Add User
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>Select User to Manage Projects</Typography>
              <Grid container spacing={2}>
                {users.map((user) => (
                  <Grid item xs={12} sm={6} key={user._id}>
                    <Card style={{ marginBottom: '10px' }}>
                      <CardContent>
                        <Typography variant="h5">{user.name}</Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            setSelectedUserId(user._id);
                            fetchUserProjects(user._id);
                          }}
                          style={{ marginRight: '10px' }}
                        >
                          View Projects
                        </Button>
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleDeleteUser(user._id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        {selectedUserId && (
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>Manage Projects for Selected User</Typography>
            <TextField
              label="Project File Name"
              value={newProject.fileName}
              onChange={(e) => setNewProject({ fileName: e.target.value })}
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddProject}
              startIcon={<AddIcon />}
              style={{ marginTop: '10px' }}
            >
              Add Project
            </Button>

            <div style={{ marginTop: '20px' }}>
              {savedProjects.map((project) => (
                <Card key={project} style={{ marginBottom: '10px' }}>
                  <CardContent>
                    <Typography variant="h6">{project}</Typography>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleRemoveProject(project)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Paper>
        )}
      </div>
    </div>
  );
};

export default Admin;