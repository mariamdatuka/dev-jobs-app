import React from 'react'
import { Fieldset } from './Styles';
import icon from '../assets/desktop/icon-location.svg'

const Vacancy = () => {
  return (
    <>
    <Fieldset>
      <legend>
        <img src={icon} alt='icon'/>
      </legend>
      <div>
         <p>5h ago <span>Full Time</span></p>
         <h3>Senior Developer</h3>
         <span>Scoot</span>
         <h5>United Kingdom</h5>
      </div>
    </Fieldset>
    </>
  )
}

export default Vacancy