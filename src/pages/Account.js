import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import user from '../utils/User';
import transactions from '../utils/Transactions';
import refund from '../utils/Refund';
// AUTHOR(s): Justin Cote , Liam Garrett
// ACCOUNT PAGE
// displays information about the users account
// previous transactions, refunded items, user info 

const Account = () => {

  // keeps track of the view of account page
  const page_state = ['profile','transaction','refund'];
  const [pageView, setPageView] = useState(page_state[0]);

  // switches the view based off user input
  const getView = () => {
    switch (pageView){
      case 'profile':
        return <Profile />
      case 'transaction':
        return <Transaction />
      case 'refund':
        return <Refund />
      default:
        return <Profile />

    }
  }

  const getTransactions = async () => {
    const response = await transactions.getTransactions(user.user_ID);
    if (response.status){
      console.log(transactions.transactions);
    }else{
      console.error('Error Fetching Transactions:',response.error);
    }
  }

  const getRefunds = async () => {
    const response = await refund.getRefunds(user.user_ID);
    if (response.status){
      console.log(refund.refunds);
    }else{
      console.error('Error Fetching Refunds:', response.error);
    }
  }

  useEffect(()=>{
    getRefunds();
    getTransactions();
  },[])
  return (
    <div>
      <div className='top-row'>
        <button onClick={() => setPageView(page_state[0])}>Profile</button>
        <button onClick={() => setPageView(page_state[1])}>Transactions</button>
        <button onClick={() => setPageView(page_state[2])}>Refund</button>
      </div>
      {getView()}
    </div>
  );
}

const Profile = () => {
  return(
    <div>
      <div>Profile</div>
      <div>{user.user.email}</div>
      <div>{user.user.fname}</div>
      <div>{user.user.lname}</div>
      <div>{user.user.sign_date}</div>
      <div>{user.user.team}</div>
      <div>{user.user.pr_address}</div>
    </div>
  )
}

const Transaction = () => {
  return(
    <div>Transaction</div>
  )
}

const Refund = () => {
  return(
    <div>Refund</div>
  )
}


export default Account;