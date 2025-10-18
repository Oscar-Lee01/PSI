import React, { useEffect, useState, useMemo, useContext } from "react";
// import { useDropzone } from "react-dropzone"


import './Profile.css';
// Components
import UserDetails from "../components/UserDetails";

const Profile = () => {
  const [users, setUsers] = useState('')

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
    localStorage.setItem('profilePicture', e.target.files[0]);
  };

  // const [fileUrl, setFileUrl] = useState(null);

  // const onDrop = useCallback(async (acceptedFile) => {
  //   setFileUrl(acceptedFile[0]);
  // }, []);

  // const { getRootProps } = useDropzone({
  //   onDrop,
  //   accept: "image/*",
  //   maxSize: 5000000,
  // });

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:8080/api/user/:id')
      const json = await response.json();

      if (response.ok) {
        setUsers(json)
        console.log(json)
      }
    }

    fetchUsers();

    const storedImage = localStorage.getItem('profilePicture');
    if(storedImage) {
      setImage(storedImage)
    }

  }, [])

  
    return (
      <div className="profile-header">
        <h2>Profile</h2>
        <div className="profile">
          <div className="profile-picture">
            {preview ? (
              <img src={preview} alt="Profile Pic" />
            ) : (
              <img src="img9.jpg" alt="Default Profile Pic" />
            )}
            <input
             type="file"
             accept="image/"
             onChange={handleImageChange}
            />
          </div>
    
          <div className="profile-info">
            {users && users.map((user) => (
            <UserDetails key={user._id} user={user} />
            ))}
            <p>Name: Jack Reacher</p>
            <p>Age: 23</p>
          </div>
        </div>
        <div className="account-box">
          <div className="account-box-img" >

          </div>
            
        </div>
      </div>
    )
}


export default Profile;