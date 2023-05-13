import React, { useState } from 'react'
import AddItem from './addItem';
import SettingManagement from './settingManagment';
import SettingOption from './settingOption';

function Setting({Datas, SetDatas, setFilterDatas, filterDatas}) {
  const [isCorrect, setIsCorrect] = useState(false);
  return (
    <div className='settings'>
        <h1>Settings</h1>
        <div className="Setting-options">
          <SettingOption />
          <SettingManagement 
            Datas={Datas} 
            SetDatas={SetDatas}
            setFilterDatas={setFilterDatas} 
            filterDatas={filterDatas} 
            isCorrect={isCorrect}
            setIsCorrect={setIsCorrect}
            />
          {isCorrect? <AddItem 
            Datas={Datas}
            SetDatas={SetDatas}
            isCorrect={isCorrect} 
            setIsCorrect={setIsCorrect} /> : null}
        </div>
    </div>
  )
}

export default Setting;