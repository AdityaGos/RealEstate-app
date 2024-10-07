import { useContext, useEffect, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/authContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import UploadImage from "../../components/uploadImage/UploadImage";
function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("")
  const [avatar, setAvatar] = useState(currentUser?.avatar ==null ? "" : currentUser.avatar)
  console.log(currentUser)
  console.log(avatar)

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
   const {username,email,password} = Object.fromEntries(formData)
   try{

    console.log("updating profile")
    const response = await toast.promise(
      apiRequest.put(`/users/${currentUser.id}`,{username,email,password,avatar}),
      {
        // pending: 'Updating Profile',
        pending: {
          render(){
            return "Updating Profile";
          },
          icon: true,
        },
        success: {
          render({data}){
            updateUser(data?.data)
            
            return `Profile Updated`
          },
          onClose: () => navigate('/profile'),
          autoClose:2000,
          // other options
          icon:true,
        },
        error: 'Promise rejected 🤯'
      }
  );

  // toast.success('Profile updated 👌', {
  //   autoClose: 2000, // Same as the promise autoClose
  //   onClose: () => navigate('/profile'), // Navigate after the toast is done
  // });
  // navigate('/profile')
// console.log("updated succesfully")
    // const res  = await apiRequest.put(`/users/${currentUser.id}`,{username,email,password})
    // console.log(res)
    
    // 
    // navigate('/profile')

   }
   catch(err) { 
    console.log("err"+err);
     setError(err); } 
  };

  const notify = () => toast("Wow so easy !");
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {!!error && <span>{error}</span> }
        </form>
      </div>
      <div>
      </div>
      <div className="sideContainer">
        <img
          src={avatar|| "/noavatar.jpg"}
          alt=""
          className="avatar"
        />
        <UploadImage uwConfig={{
          cloudName:"dqwxjvdpq",
          uploadPreset:"estate",
          multiple:false,
          // maxImageFileSize:20000000,
          folder:"avatar"
        }}
        setAvatar={setAvatar} />
        <ToastContainer  pauseOnHover={false} pauseOnFocusLoss={false}/>
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
