import * as React from 'react'
import {
  container,
  heading
} from './investors.module.css'

const Investors = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Investors