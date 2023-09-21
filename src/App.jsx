/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */


import './App.css'
import Daisynav from './components/Daisynav/Daisynav'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import Daisynav from './components/Daisynav/Daisynav'


function App() {
 
  return (
    <>
      <NavBar></NavBar>
     {/* <Daisynav></Daisynav> */}
      <h1 className='text-4xl bg-red-500 text-center font-bold'>Option ReactProject</h1>
     <PriceOptions></PriceOptions>
    <LineChart></LineChart>
     <Phones></Phones>
    </>
  )
}

export default App
