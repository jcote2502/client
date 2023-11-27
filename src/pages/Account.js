import React, { useEffect, useState } from 'react';
import Axios from 'axios';
const Account = ({ navbar }) => {
  const init_state = {
    user_ID: null,
    fname: null,
    lname: null,
    email: null,
    pr_address: null,
    sign_date: null,
  }
  const [profileInfo, setProfileInfo] = useState(init_state);
  const getUserInfo = async () => {
    console.log(navbar.getUid());
    try {
      const response = await Axios.get('http://localhost:3004/db/user',{
        params:{
          uid:navbar.getUid()
        }
      });
      setProfileInfo(response.data.user);
    } catch (error) {
      console.error('Error Fetching products:', error);
    }
  }
  useEffect(()=>{
    getUserInfo();
  },[])

  return (
    <div>
      <h2>Account Page</h2>
      {/* Add content for the about page */}
      <div>{profileInfo.fname}</div>
      <div>{profileInfo.lname}</div>
      <div>{profileInfo.email}</div>
    </div>
  );
}

export default Account;