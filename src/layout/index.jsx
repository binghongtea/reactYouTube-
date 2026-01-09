import React from 'react'
import './index.scss'

const index = ({ children }) => {
  return (
    <div className='App-layout'>
        <div className='App-layout-header'>
            <span className='App-layout-header-title'>Movie App</span>

        </div>

        <div className='App-layout-content'>
            {children}
        </div>
    </div>
  )
}

export default index