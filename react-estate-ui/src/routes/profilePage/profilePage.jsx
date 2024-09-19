import List from '../../components/list/list'
import Chat from '../../components/chat/chat'
import './profilePage.scss'
function profilePage() {
  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
      <div className="title">
        <h1>User Info</h1>
        <button className="">updateProfile</button>
      </div>
      <div className="info">
        <span> Avatar <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''/> </span>
      <span>UserName: <b>Aditya Goswami</b></span>
      <span>E-mail:: <b>aditya@gmail.com</b></span>
      </div>
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

export default profilePage