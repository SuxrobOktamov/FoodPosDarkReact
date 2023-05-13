
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../component/Dashboard';
import Discount from '../component/discount';
import LogOut from '../component/LogOut';
import Message from '../component/Message';
import Notification from '../component/Notification';
import Resto from '../component/Resto';
import Payment from '../component/Payment/index';
import Setting from '../component/Setting';
import Sidebar from '../component/sidebar/sidebar';
import {Data} from '../Data/index';

function Home() {

  const [nun , setNun] = useState(true);
  const [Datas, SetDatas] = useState([]);
  const [filterDatas, setFilterDatas] = useState([]);


  useEffect(()=>{
    SetDatas(Data)
  }, [])

  return (
    <>
        <Sidebar />
        <main>    
          <Routes>
            <Route path='/Home' element={<Resto
               nun={nun} 
               setNun={setNun}
               Datas={Datas}
               SetDatas={SetDatas}
               filterDatas={filterDatas}
               setFilterDatas={setFilterDatas}
               />} />
            <Route path='/Discount' element={<Discount />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Message' element={<Message />} />
            <Route path='/Notification' element={<Notification />} />
            <Route path='/Setting' element={<Setting
               Datas={Datas}
               SetDatas={SetDatas}
               setFilterDatas={setFilterDatas}
               filterDatas={filterDatas}
             />} />
            <Route path='/LogOut' element={<LogOut />} />
          </Routes>
          <Payment nun={nun} setNun={setNun} />
        </main>
    </>
  )
}

export default Home;