import React, { useContext } from 'react'
import Usercontext from '../context/Usercontext'

function Dashb() {
    const {user} = useContext(Usercontext)
    
    if(!user) return <>Please login</>
    return <>{user.username}</>
}

export default Dashb
