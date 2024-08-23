// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import NavBar from './Layout/NavBar';

// const SavedProjects = () => {
//   const [fileNames, setFileNames] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:5001/fileNames')
//       .then(response => {
//         setFileNames(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError('Error fetching the file names');
//         setLoading(false);
//       });
//   }, []);

//   const handleCardClick = (lasFilename) => {
//     window.location.href = `http://localhost:1234/examples/load_project.html?lasFilename=${encodeURIComponent(lasFilename)}`;
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <NavBar />
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', justifyContent: 'center' }}>
//         {fileNames.map((file, index) => (
//           <Card key={index} sx={{ maxWidth: 345 }}>
//             <CardActionArea onClick={() => handleCardClick(file.name)}>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image="/static/images/cards/file_icon.jpg" // Replace with your image path
//                 alt={file.name}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {file.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   This is a description for {file.name}. Click to open.
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SavedProjects;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import NavBar from './Layout/NavBar';

// const SavedProjects = () => {
//   const [fileNames, setFileNames] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/fileNames')
//       .then(response => {
//         setFileNames(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError('Error fetching the file names');
//         setLoading(false);
//       });
//   }, []);

//   const handleCardClick = (lasFilename) => {
//     window.location.href = `http://localhost:1234/examples/load_project.html?lasFilename=${encodeURIComponent(lasFilename)}`;
//   };

//   const handleDelete = (lasFilename) => {
//     axios.delete(`http://localhost:5000/api/fileNames/${encodeURIComponent(lasFilename)}`)
//       .then(response => {
//         setFileNames(prevFiles => prevFiles.filter(file => file.lasFilename !== lasFilename));
//       })
//       .catch(error => {
//         console.error('Error deleting file:', error);
//         setError('Error deleting the file');
//       });
//   };

//   const formatDateTime = (date) => {
//     if (date) {
//       const formattedDate = new Date(date);
//       return !isNaN(formattedDate.getTime()) ? formattedDate.toLocaleString() : 'Invalid Date';
//     }
//     return 'Date Not Available';
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <NavBar />
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', justifyContent: 'center' }}>
//         {fileNames.map((file, index) => (
//           <Card key={index} sx={{ maxWidth: 345 }}>
//             <CardActionArea onClick={() => handleCardClick(file.lasFilename)}>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image="/static/images/cards/file_icon.jpg" // Replace with your image path
//                 alt={file.lasFilename}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {file.lasFilename}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Date: {formatDateTime(file.date)}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Click to open the project.
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <IconButton aria-label="delete" onClick={() => handleDelete(file.lasFilename)}>
//               <DeleteIcon />
//             </IconButton>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SavedProjects;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import NavBar from './Layout/NavBar';

// const SavedProjects = () => {
//   const [fileNames, setFileNames] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/fileNames')
//       .then(response => {
//         setFileNames(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError('Error fetching the file names');
//         setLoading(false);
//       });
//   }, []);

//   const handleCardClick = (lasFilename) => {
//     const token = localStorage.getItem('token');
//     let url = `http://localhost:1234/examples/load_project.html?lasFilename=${encodeURIComponent(lasFilename)}`;
//     if (token) {
//       url += `&token=${encodeURIComponent(token)}`;
//     }
//     window.location.href = url;
//   };

//   const handleDelete = (lasFilename) => {
//     axios.delete(`http://localhost:5000/api/fileNames/${encodeURIComponent(lasFilename)}`)
//       .then(response => {
//         setFileNames(prevFiles => prevFiles.filter(file => file.lasFilename !== lasFilename));
//       })
//       .catch(error => {
//         console.error('Error deleting file:', error);
//         setError('Error deleting the file');
//       });
//   };

//   const formatDateTime = (date) => {
//     if (date) {
//       const formattedDate = new Date(date);
//       return !isNaN(formattedDate.getTime()) ? formattedDate.toLocaleString() : 'Invalid Date';
//     }
//     return 'Date Not Available';
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <NavBar />
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', justifyContent: 'center' }}>
//         {fileNames.map((file, index) => (
//           <Card key={index} sx={{ maxWidth: 345 }}>
//             <CardActionArea onClick={() => handleCardClick(file.lasFilename)}>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image="/static/images/cards/file_icon.jpg" // Replace with your image path
//                 alt={file.lasFilename}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {file.lasFilename}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Date: {formatDateTime(file.date)}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Click to open the project.
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <IconButton aria-label="delete" onClick={() => handleDelete(file.lasFilename)}>
//               <DeleteIcon />
//             </IconButton>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SavedProjects;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import NavBar from './Layout/NavBar';

// const SavedProjects = () => {
//   const [fileNames, setFileNames] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Use the new endpoint to fetch saved projects
//     axios.get('http://localhost:5000/api/auth/user/savedProjects', {
//       headers: { 'x-auth-token': localStorage.getItem('token') }
//     })
//       .then(response => {
//         setFileNames(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError('Error fetching the file names');
//         setLoading(false);
//       });
//   }, []);

//   const handleCardClick = (lasFilename) => {
//     const token = localStorage.getItem('token');
//     let url = `http://localhost:1234/examples/load_project.html?lasFilename=${encodeURIComponent(lasFilename)}`;
//     if (token) {
//       url += `&token=${encodeURIComponent(token)}`;
//     }
//     window.location.href = url;
//   };

//   const handleDelete = (fileName) => {
//     axios.delete('http://localhost:5000/api/auth/user/savedProjects', {
//       headers: { 'x-auth-token': localStorage.getItem('token') },
//       data: { fileName: fileName } // Send fileName in the request body
//     })
//       .then(response => {
//         setFileNames(prevFiles => prevFiles.filter(file => file !== fileName));
//       })
//       .catch(error => {
//         console.error('Error deleting file:', error);
//         setError('Error deleting the file');
//       });
//   };
  

//   const formatDateTime = (date) => {
//     if (date) {
//       const formattedDate = new Date(date);
//       return !isNaN(formattedDate.getTime()) ? formattedDate.toLocaleString() : 'Invalid Date';
//     }
//     return 'Date Not Available';
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <NavBar />
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', justifyContent: 'center' }}>
//         {fileNames.map((file, index) => (
//           <Card key={index} sx={{ maxWidth: 345 }}>
//             <CardActionArea onClick={() => handleCardClick(file)}>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image="/static/images/cards/file_icon.jpg" // Replace with your image path
//                 alt={file}
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {file}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Date: {formatDateTime(file.date)}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Click to open the project.
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <IconButton aria-label="delete" onClick={() => handleDelete(file)}>
//               <DeleteIcon />
//             </IconButton>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SavedProjects;


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
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Fetch user ID
    const fetchUserId = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch('http://localhost:5000/api/auth/user', {
            method: 'GET',
            headers: {
              'x-auth-token': token
            }
          });
          if (response.ok) {
            const userData = await response.json();
            setUserId(userData._id);
          }
        } catch (error) {
          console.error('Error fetching user ID:', error);
        }
      }
    };
    fetchUserId();

    // Fetch saved projects
    axios.get('http://localhost:5000/api/auth/user/savedProjects', {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    })
      .then(response => {
        setFileNames(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching the file names');
        setLoading(false);
      });
  }, []);

  const handleCardClick = (lasFilename) => {
    const token = localStorage.getItem('token');
    let url = `http://localhost:1234/examples/load_project.html?lasFilename=${encodeURIComponent(lasFilename)}`;

    if (userId) {
      url += `&userId=${encodeURIComponent(userId)}`;
    }

    if (token) {
      url += `&token=${encodeURIComponent(token)}`;
    }

    window.location.href = url;
  };

  const handleDelete = (fileName) => {
    axios.delete('http://localhost:5000/api/auth/user/savedProjects', {
      headers: { 'x-auth-token': localStorage.getItem('token') },
      data: { fileName: fileName } // Send fileName in the request body
    })
      .then(response => {
        setFileNames(prevFiles => prevFiles.filter(file => file !== fileName));
      })
      .catch(error => {
        console.error('Error deleting file:', error);
        setError('Error deleting the file');
      });
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
            <CardActionArea onClick={() => handleCardClick(file)}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/file_icon.jpg" // Replace with your image path
                alt={file}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {file}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {formatDateTime(file.date)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Click to open the project.
                </Typography>
              </CardContent>
            </CardActionArea>
            <IconButton aria-label="delete" onClick={() => handleDelete(file)}>
              <DeleteIcon />
            </IconButton>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SavedProjects;
