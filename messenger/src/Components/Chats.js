import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';

// Components
import Navigation from './Navigation';

// Contexts
import { AuthContext } from '../Contexts/AuthContextProvider';

const Chats = () => {

  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useNavigate();

  useEffect(() => {
    if (!user) {
      history("/");
      return;
    }
    axios.get("https://api.chatengine.io/users/me", {
      headers: {
        "project-id": "a1f3d30a-8b80-456b-952d-c1a1807b1f5c",
        "user-name": user.email,
        "user-secret": user.uid,
      }
    })
      .then(() => {
        setLoading(false)
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL)
          .then(avatar => {
            formdata.append("avatar", avatar, avatar.name);
            axios.post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "68927ba3-82ff-4632-aaec-60781a18873f",
              }
            })
              .then(() => setLoading(false))
              .catch(error => console.log(error))
          })
      })
  }, [user, history])

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" })
  }

  const logoutHandler = async () => {
    await auth.signOut();
    history("/");
  }

  if (!user || loading) return "Loading..."

  return (
    <>
      <Navigation logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 65px)"
        projectID="a1f3d30a-8b80-456b-952d-c1a1807b1f5c"
        userName={user.email}
        userSecret={user.uid}
      />
    </>
  );
};

export default Chats;