import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SetNewPassWordPage = () => {
    const [userName, setUserName]=useState("");
    const [newPassWord, setNewPassWord]=useState("");
    const userNameChangeHandler=(e)=>{
        setUserName(e.target.value);
    }
    const newPassWordChangeHandler=(e)=>{
        setNewPassWord(e.target.value);
    }
    const navigate = useNavigate();
    const saveHandler=async()=>{
        const res =await axios({
            method: "post",
            url: "http://localhost:4000/newPassWordData",
            data: {
              userName: userName,
              passWord: newPassWord
            },
          });
      console.log("response updated to backend", res.data);

      if(res.data === "Password Updated"){
        alert("password updated");
        navigate('/homePage');
      }else{
        alert("something went wrong")
      }

    }
  return (
    <div>
      <form  method='post'>
        <label >Username</label>
        <input type="text" onChange={userNameChangeHandler} value={userName}/>
        <label >NewPassWord</label>
        <input type="text" onChange={newPassWordChangeHandler} value={newPassWord}/>
      </form>
        <button onClick={saveHandler}>Save</button>
    </div>
  );
}

export default SetNewPassWordPage;
