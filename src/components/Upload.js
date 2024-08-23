// import React, { useState } from 'react';
// import './Upload.css';
// import axios from 'axios';
// import { Oval } from 'react-loader-spinner';
// import NavBar from './Layout/NavBar';

// const Upload = () => {
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];

//     if (!file) {
//       alert('Please select a file first');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     const fileExtension = file.name.split('.').pop().toLowerCase();

//     if (fileExtension === 'obj') {
//       const objFileUrl = `http://localhost:1234/examples/index.html?cloudJS=${encodeURIComponent(file.name)}`;
//       window.location.href = objFileUrl;
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post('http://localhost:5000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('File uploaded successfully:', response.data);
//       const lasFilename = response.data.lasFilename;

//       window.location.href = `http://localhost:1234/examples/index.html?lasFilename=${encodeURIComponent(lasFilename)}`;
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <NavBar />
//       <div className='wrapper'>
//         {!loading ? (
//           <>
//             <div className='title'>UPLOAD YOUR POINT CLOUD</div>
//             <div className='fileUpload'>
//               <input type="file" className='fileInput' onChange={handleFileChange} />
//               <i className="fa fa-arrow-up" />
//             </div>
//           </>
//         ) : (
//           <div className='loadingWrapper'>
//             <span className='loadingText'>LOADING</span>
//             <Oval className="loading" color="#FFFFFF" height={40} width={40} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Upload;

//backup

// import React, { useState } from 'react';
// import './Upload.css';
// import axios from 'axios';
// import { Oval } from 'react-loader-spinner';
// import NavBar from './Layout/NavBar';

// const Upload = () => {
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
//     const token = localStorage.getItem('token');

//     if (!file) {
//       alert('Please select a file first');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     const fileExtension = file.name.split('.').pop().toLowerCase();

//     let url = `http://localhost:1234/examples/index.html?cloudJS=${encodeURIComponent(file.name)}`;

//     if (fileExtension !== 'obj') {
//       setLoading(true);
//       try {
//         const response = await axios.post('http://localhost:5000/upload', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         console.log('File uploaded successfully:', response.data);
//         const lasFilename = response.data.lasFilename;
//         url = `http://localhost:1234/examples/index.html?lasFilename=${encodeURIComponent(lasFilename)}`;
//       } catch (error) {
//         console.error('Error uploading file:', error);
//         setLoading(false);
//         return;
//       }
//     }

//     if (token) {
//       url += `&token=${encodeURIComponent(token)}`;
//     }

//     window.location.href = url;
//   };

//   return (
//     <div>
//       <NavBar />
//       <div className='wrapper'>
//         {!loading ? (
//           <>
//             <div className='title'>UPLOAD YOUR POINT CLOUD</div>
//             <div className='fileUpload'>
//               <input type="file" className='fileInput' onChange={handleFileChange} />
//               <i className="fa fa-arrow-up" />
//             </div>
//           </>
//         ) : (
//           <div className='loadingWrapper'>
//             <span className='loadingText'>LOADING</span>
//             <Oval className="loading" color="#FFFFFF" height={40} width={40} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Upload;

import React, { useState, useEffect } from 'react';
import './Upload.css';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import NavBar from './Layout/NavBar';

const Upload = () => {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
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
  }, []);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const token = localStorage.getItem('token');

    if (!file) {
      alert('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const fileExtension = file.name.split('.').pop().toLowerCase();

    let url = `http://localhost:1234/examples/index.html?cloudJS=${encodeURIComponent(file.name)}`;

    if (fileExtension !== 'obj') {
      setLoading(true);
      try {
        const response = await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('File uploaded successfully:', response.data);
        const lasFilename = response.data.lasFilename;
        url = `http://localhost:1234/examples/index.html?lasFilename=${encodeURIComponent(lasFilename)}`;
      } catch (error) {
        console.error('Error uploading file:', error);
        setLoading(false);
        return;
      }
    }

    if (userId) {
      url += `&userId=${encodeURIComponent(userId)}`;
    }

    if (token) {
      url += `&token=${encodeURIComponent(token)}`;
    }

    window.location.href = url;
  };

  return (
    <div>
      <NavBar />
      <div className='wrapper'>
        {!loading ? (
          <>
            <div className='title'>UPLOAD YOUR POINT CLOUD</div>
            <div className='fileUpload'>
              <input type="file" className='fileInput' onChange={handleFileChange} />
              <i className="fa fa-arrow-up" />
            </div>
          </>
        ) : (
          <div className='loadingWrapper'>
            <span className='loadingText'>LOADING</span>
            <Oval className="loading" color="#FFFFFF" height={40} width={40} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
