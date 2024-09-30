import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Header from '../Components/Header/Header'
import Main from '../Components/Main/Main'


const Layouts = () => {
  return (
    <div >
      <Header />
      <div className='flex'>
        <div>
        <Sidebar />
        </div>
        <div>

          <Main />

        </div>





      </div>




      
    </div>
  )
}

export default Layouts
