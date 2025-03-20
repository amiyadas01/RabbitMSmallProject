import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function LoginBtn() {
    const { loginWithRedirect,logout,isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <button
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          className=" hover:text-red-700 text-red-500 font-bold py-2 px-4 rounded"
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => loginWithRedirect()}
          className=" hover:text-red-700 text-red-500 font-bold py-2 px-4 rounded"
        >
          Log In
        </button>
      )}
    </div>
  )
}

export default LoginBtn