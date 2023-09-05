import React from 'react'
import './Input.css'
export default function Input() {
  return (
    <div className='Form--Container'>
        <p className='Input--Title'>Fale Conosco</p>
      <form>

        <label htmlFor="">Seu email</label>
        <input type="Email"placeholder='scrs@#$2.com'/>
        <button>Send</button>
      </form>
    </div>
  )
}
