import { useState } from "react";
import "./chat.scss";

function chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <h3>Messages</h3>
      <div className="messages">
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Aditya Goswami</span>
          <p> hello this is new property in the locality</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Aditya Goswami</span>
          <p> hello this is new property in the locality</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Aditya Goswami</span>
          <p> hello this is new property in the locality</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Aditya Goswami</span>
          <p> hello this is new property in the locality</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Aditya Goswami</span>
          <p> hello this is new property in the locality</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="" alt="" />
              Sonu
            </div>
            <div className="close" onClick={()=> setChat(false)}>X</div>
          </div>
          <div className="center">
            <div className="chatMessage own">
              <p>He there </p>
              <span>1hr ago </span>
            </div>
            <div className="chatMessage">
              <p>He there </p>
              <span>1hr ago </span>
            </div>
            <div className="chatMessage own">
              <p>He there </p>
              <span>1hr ago </span>
            </div>
            <div className="chatMessage">
              <p>He there </p>
              <span>1hr ago </span>
            </div>
            <div className="chatMessage">
              <p>He there </p>
              <span>1hr ago </span>
            </div>
          </div>
          <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default chat;
