import { useState } from 'react'

const Card = ({title}) => {
  const [hasLiked,setHasLiked] = useState(false) 

  return (
    <div className='card'>
      <h2>{title}</h2>
      <button onClick={() => {
        setHasLiked(!hasLiked)
      }}>{ hasLiked ? '已喜欢' : '喜欢'}</button>
    </div>
  )
}

const App = () => {
  return (
    <div className='card-container'>
     <Card title={'hello card'} />
     <Card title={'hello card1'} />
     <Card title={'hello card2'} />
    </div>
  )
}

export default App
