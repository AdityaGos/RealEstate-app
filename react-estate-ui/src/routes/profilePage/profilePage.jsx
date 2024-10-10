import List from '../../components/list/list'
import Chat from '../../components/chat/chat'
import './profilePage.scss'
import apiRequest from '../../lib/apiRequest'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

function ProfilePage() {
  const {currentUser,updateUser} = useContext(AuthContext)
  const navigate = useNavigate() 
  const handleLogout= async()=>
  {

    try{
      await apiRequest.post('auth/logout')
      updateUser(null)
      navigate('/login')
    }catch(e){console.log(e)}
  }
  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
       <Link to='/profile/update'>
      <div className="info">
       <div className="userInfo">
      <span>{currentUser.username}</span>
      <span>{currentUser.email}</span>
       </div>
 
      <div className="avatarContainer">
     <img src={currentUser.avatar || '/noavatar.jpg'} alt=''/>
      </div>
      <button onClick={handleLogout}>Logout</button>
      </div>
       </Link>
     
      
      <div className="title">
        <h1>My List</h1>
        <button className="">Create New Post</button>
      </div>
      <List/>
      <div className="title">
        <h1>Saved List</h1>
      </div>
      {/* <List/> */}
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>

        </div>
      </div>
    </div>
  )
}

export default ProfilePage