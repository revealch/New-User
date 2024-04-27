import React from 'react'

const UserCard = (props) => {
  return (
    <div>
      <h1>{props.data.name.title} {props.data.name.first} {props.data.name.last}</h1>
      <h1>{props.data.gender}</h1>
      <h1>{props.data.location.city}, {props.data.location.country}</h1>
    </div>
  )
}

export default UserCard
