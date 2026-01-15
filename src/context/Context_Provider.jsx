import React, { useState } from 'react'
import UserContext from './User_context'


function Context_Provider({children}) {
    let [user , setUser] = useState("Zulkaif Ahmad");
  return (
    <UserContext.Provider value={{user , setUser}}>
        {children}
    </UserContext.Provider >
  )
}

export default Context_Provider

