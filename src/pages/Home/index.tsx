import React from 'react'
import { Outlet } from 'react-router'
import { Top } from './style'

const Home: React.FC = () => {
  return (
    <div>
      <Top>
        <h1>HOME</h1>
      </Top>
      <Outlet />
    </div>
  )
}

export default React.memo(Home)
