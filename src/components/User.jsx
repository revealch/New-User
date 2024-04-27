import React from 'react'

const User = async() => {
  const response=await fetch("https://randomuser.me/api/",{
    method:"GET"
  });
  return (await response).json();
}

export default User
