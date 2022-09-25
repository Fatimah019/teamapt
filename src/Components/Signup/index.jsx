import React from 'react'

const Signup = () => {
   const handleSubmit = () => {
      console.log("submitted")
   }
   return (
      <form onSubmit={handleSubmit}>
         <input type="username" placeholder='username' />
         <button type='submit'>Continue</button>
      </form>
   )
}

export default Signup
