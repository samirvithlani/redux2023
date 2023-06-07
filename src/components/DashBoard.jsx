import React from 'react'

export const DashBoard = (props) => {
    console.log(props);
  return (
    <div>
        <h1>DASHBOARD</h1>
        {
            props.loginUser && <h2>Welcome {props.loginUser.email}</h2>
        }
    </div>
  )
}
