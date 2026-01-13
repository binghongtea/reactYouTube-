import React from 'react'
import './index.scss'
import { useNavigate } from "react-router";
const Index = ({ children }) => {
  let navigate = useNavigate()
  const handleNavigate = (url) => {
    navigate(url)
  }
  const urlList = [
    // {
    //   title: '/',
    //   url: '/',
    // },
    {
      title: 'login',
      url: '/login',
    },
    {
      title: 'home',
      url: '/home',
    },
  ]
  return (
    <div className='App-layout'>
        <div className='App-layout-header'>
            <span className='App-layout-header-title'>Movie App</span>
            <div className='App-layout-header-nav'>
                {
                    urlList.map((item, index) => (
                        <span key={index} className='App-layout-header-nav-item' onClick={() => handleNavigate(item.url)}>{item.title}</span>
                    ))
                }
            </div>
        </div>

        <div className='App-layout-content'>
            {children}
        </div>
    </div>
  )
}

export default Index