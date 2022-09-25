import React from 'react';
import { useState, useEffect } from 'react';
import Styles from './reposdetails.module.css';

const ReposDetails = () => {
    const[error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect((page_no) => {
    fetch(`https://api.github.com/users${window.location.pathname}/repos?per_page=10&page=${page_no}`)
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
<div className={Styles.container}>    
        {users.map(user => (
          <>
          <ul className={Styles.ul}>
          <li className={Styles.li}>
                {user.name}
                <br />
                <br />
        {
        user.description
        }
        </li>
        </ul>
        </>
        ))}
    
    </div>
    );
  }
}

export default ReposDetails;