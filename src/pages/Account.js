import React, { useEffect, useState } from 'react';
import user from '../utils/User';
import transactions from '../utils/Transactions';
import refund from '../utils/Refund';
import '../styles/Profile.css';
// AUTHOR(s): Justin Cote , Liam Garrett
// ACCOUNT PAGE
// displays information about the users account
// previous transactions, refunded items, user info 

const Account = () => {

  // keeps track of the view of account page
  const page_state = ['profile', 'transaction', 'refund'];
  const [pageView, setPageView] = useState(page_state[0]);

  const getTransactions = async () => {
    const response = await transactions.getTransactions(user.user_ID, 'DESC');
    if (response.status) {
      console.log(transactions.transactions);
    } else {
      console.error('Error Fetching Transactions:', response.error);
    }
  }

  const getRefunds = async () => {
    const response = await refund.getRefunds(user.user_ID);
    if (response.status) {
    } else {
      console.error('Error Fetching Refunds:', response.error);
    }
  }

  useEffect(() => {
    getTransactions()
    getRefunds();
  }, [])

  // switches the view based off user input
  const getView = () => {
    switch (pageView) {
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

  return (
    <div className='sub-page'>
      <div style={{ marginTop: '10px' }}>
        <button style={{ marginRight: '10px' }} onClick={() => setPageView(page_state[0])}>Profile</button>
        <button style={{ marginRight: '10px' }} onClick={() => setPageView(page_state[1])}>Transactions</button>
        <button onClick={() => setPageView(page_state[2])}>Refund</button>
      </div>
      {getView()}
    </div>
  );
}

const Profile = () => {
  const [thisUser, setThisUser] = useState(user.getUser());
  const [team, setTeam] = useState('');
  const [address, setAddress] = useState('');
  const updateUser = async () => {
    const response = await user.updateUser(address,team);
    if (response.status) {
      setThisUser(user.getUser());
      setTeam('');
      setAddress('');
    } else {
      console.error('Error Updating Profile:', response.error);
    }
  }
  return (
    <div className='profile-body'>
      <div>Email: {thisUser.email}</div>
      <div>Name: {thisUser.fname} {thisUser.lname}</div>
      <div>Favorite Team: {thisUser.team}</div>
      <div>Current Address: {thisUser.pr_address}</div>
      <div style={{ marginBottom: '45px' }}>Sign UP Date: {new Date(thisUser.sign_date).toLocaleDateString('en-US')}</div>

      <div> Edit User Info </div>
      <input
        className='profile-field'
        type="text"
        placeholder="Enter new team"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
      />
      <input
        className='profile-field'
        type="text"
        placeholder="Enter new address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      {/* Button to update user info */}
      <button className='profile-button' onClick={()=>updateUser()}>Update User Info</button>
    </div>
  )
}

const Transaction = () => {
  const [trans, setTransactions] = useState(transactions.transactions);
  const [sort, setSort] = useState('DESC');
  const getTransactions = async (filter) => {
    console.log(filter);
    const response = await transactions.getTransactions(user.user_ID, filter);
    if (response.status) {
      setTransactions(transactions.transactions);
      setSort(filter);
    } else {
      console.error('Error Fetching Transactions:', response.error);
    }
  }
  // makes call to backend and calls to refresh page
  const handleRefund = async (row) => {
    const response = await refund.postRefund(user.user_ID, row.product_ID, row.trans_ID);
    if (response.status) {
      alert(`Refunded Product:${row.product_ID} on Transaction:${row.trans_ID}.`);
      getTransactions(sort);
    } else {
      console.error('Error Posting Refund:', response.error);
    }
  }

  // groups trans_ID's by the same color for display
  const [colors, setcolors] = useState({});
  const getColors = () => {
    var color = 'grey';
    var correlationTable = {};
    var prev = null;
    for (const trans of transactions.transactions) {
      if (trans.trans_ID !== prev) {
        prev = trans.trans_ID;
        correlationTable[trans.trans_ID] = color;
        if (color === 'white') {
          color = 'grey';
        } else {
          color = 'white';
        }
      }
    }
    setcolors(correlationTable);
  }

  // get colors on load
  useEffect(() => {
    getColors();
  }, []);

  return (
    <div className="table-container">
      {transactions.transactions.length > 0 ?
        <>
          <div style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
            <button onClick={() => getTransactions('DESC')} style={{ marginRight: "5px" }}>Sort By Recent</button>
            <button onClick={() => getTransactions('ASC')} >Sort By Oldest</button>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>TRANS ID</th>
                <th>Purchase Date</th>
                <th>Total</th>
                <th>PRODUCT ID</th>
                <th>Price</th>
                <th>Gender</th>
                <th>Title</th>
                <th>Details</th>
                <th>Team</th>
                <th>Color</th>
                <th>size</th>
                <th>Refund Date (if applicable)</th>
              </tr>
            </thead>
            <tbody>
              {trans.map((row, index) => (
                <tr key={index} style={{ backgroundColor: colors[row.trans_ID] }}>
                  <td>{row.trans_ID}</td>
                  <td>{new Date(row.pdate).toLocaleDateString('en-US')}</td>
                  <td>{row.total}</td>
                  <td>{row.product_ID}</td>
                  <td>{row.price}</td>
                  <td>{row.gender}</td>
                  <td>{row.title}</td>
                  <td>{row.details}</td>
                  <td>{row.team}</td>
                  <td>{row.color}</td>
                  <td>{row.size}</td>
                  <td style={{ backgroundColor: "red", textAlign: 'center' }}>{row.rdate ? new Date(row.rdate).toLocaleDateString('en-US') :

                    <div onClick={() => handleRefund(row)} style={{ backgroundColor: "green", textAlign: 'center' }}>
                      Make Refund
                    </div>

                  }</td>
                </tr>
              ))}
            </tbody>
          </table></> :
        <div>No Transactions Posted</div>
      }
    </div>)
}

const Refund = () => {
  const getRefunds = async () => {
    const response = await refund.getRefunds(user.user_ID);
    if (response.status) {
    } else {
      console.error('Error Fetching Refunds:', response.error);
    }
  }
  useEffect(() => {
    getRefunds()
  }, [])
  return (
    <div className="table-container">
      <div>Sometimes Refunds Don't appear right away. Click back to transactions then to refunds to see update.</div>
      {
        refund.refunds.length > 0 ?
          <table className="data-table">
            <thead>
              <tr>
                <th>REFUND ID</th>
                <th>Refund Date</th>
                <th>TRANS ID</th>
                <th>PRODUCT ID</th>
                <th>Purchase Date</th>
                <th>Price</th>
                <th>Gender</th>
                <th>Title</th>
                <th>Details</th>
                <th>Team</th>
                <th>Color</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              {
                refund.refunds.map((row, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'grey' : 'white' }}>
                    <td>{row.rfnd_ID}</td>
                    <td>{new Date(row.rdate).toLocaleDateString('en-US')}</td>
                    <td>{row.trans_ID}</td>
                    <td>{row.product_ID}</td>
                    <td>{new Date(row.pdate).toLocaleDateString('en-US')}</td>
                    <td>{row.price}</td>
                    <td>{row.gender}</td>
                    <td>{row.title}</td>
                    <td>{row.details}</td>
                    <td>{row.team}</td>
                    <td>{row.color}</td>
                    <td>{row.size}</td>
                  </tr>
                ))}
            </tbody>
          </table> :
          <div>No Refunds Posted</div>
      }
    </div>
  );
}


export default Account;