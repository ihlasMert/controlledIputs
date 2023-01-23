import React, { useState } from 'react'

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input type='text' id='firstName' name='firstName' value={email} />
          </div>
          <button type='submit'>add person</button>
        </form>
      </article>
    </>
  )
}

export default ControlledInputs
