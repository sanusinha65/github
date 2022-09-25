import React from 'react';
import { useState, useEffect } from 'react';
import Styles from './userdetails.module.css'
const UsersDetails = () => {
    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users${window.location.pathname}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <div>
      <div style={{backgroundColor: "#121212"}}>
        <table width="50%" style={{marginLeft: "5%"}}>
            <tr>
            <td width="20%"><img className={Styles.img} src={users.avatar_url} alt="Avatar" /></td>
            <td width="20%"> <h1 style={{color: "white"}}> {users.name}</h1>
                    <p style={{color: "white"}}>    {users.bio}</p>
                        <p style={{color: "white"}}>       {users.location}</p>
                        <p style={{color: "white"}}>   
                Twitter Username: {users.twitter_username}
                </p>
            </td>
            </tr>
            <tr>
                <td>
                <p style={{color: "white"}}>   
                <strong>Github Link:</strong>   {users.html_url}
                </p>
                </td>
            </tr>
        </table>
        
        </div>
      </div>

    );
  }
}

export default UsersDetails;