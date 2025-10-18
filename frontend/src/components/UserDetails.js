import React from "react";
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineHttp, MdOutlineContentCopy } from 'react-icons/md'

import './UserDetails.css';

const UserDetails = ({ user }) => {
    return (
        <div className="user-details">
            <h4>{user.matricnumber}</h4>
            <p><strong>Lastname: </strong>{user.lastname}</p>
            <p><strong>Firstname: </strong>{user.firstname}</p>
            <p><strong>Middlename: </strong>{user.middlename}</p>
            <p><strong>Level: </strong>{user.level}</p>
            <p><strong>Gender: </strong>{user.gender}</p>
            <div className="email-box-input">
            <div className="email-box-input-box">
            <p><strong>Email: </strong>{user.email}</p>
            <div className="email-box-icon">
                <HiOutlineMail />
            </div>
            </div>
            </div>
            <p><strong>Mobile Number: </strong>{user.contact}</p>
            <p><strong>Bio: </strong>{user.about}</p>
            {/* <p>{user.level}</p> */}
        </div>
    )
}

export default UserDetails;