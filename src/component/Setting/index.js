import React, { useState } from 'react'
import AddItem from './addItem';
import EditItem from './EditItem';
import SettingManagement from './settingManagment';
import SettingOption from './settingOption';


function Setting({Datas, SetDatas, setFilterDatas, filterDatas}) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditId, setIsEditId] = useState(0);
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
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            setIsEditId={setIsEditId}
            />
          {isCorrect? <AddItem 
            Datas={Datas}
            SetDatas={SetDatas}
            isCorrect={isCorrect} 
            setIsCorrect={setIsCorrect} /> : null}
          {isEdit ? <EditItem 
            Datas={Datas}
            SetDatas={SetDatas}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            isEditId={isEditId}
          /> : null}
        </div>
    </div>
  )
}

export default Setting;