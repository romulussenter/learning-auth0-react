import React from 'react';


const Profile = props => (
    <div>
        <h1>Nickname{props.Profile.name}</h1>
        <img src={props.picture} style={{borderRadius: 100}} />
    </div>
)

export default Profile;