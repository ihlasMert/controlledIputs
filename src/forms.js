import React, { useState } from 'react'

const ControlledInputs = () => {
  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input type='text' id='firstName' name='firstName' />
          </div>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input type='text' id='firstName' name='firstName' />
          </div>
          <button type='submit'>add person</button>
        </form>
      </article>
    </>
  )
}

export default ControlledInputs
