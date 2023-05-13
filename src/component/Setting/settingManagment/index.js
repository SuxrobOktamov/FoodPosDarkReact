import React from 'react';
import Dishes from './Dishes/index';
import HeaderMenu from './headerMenu';

function SettingManagement({Datas, SetDatas, setFilterDatas, filterDatas, isCorrect, setIsCorrect}) {
    return (
        <div className="setting-managment">
            <h2>Product Management</h2>
            <div className="manage-category">
                <i className='bx bx-category-alt'></i>
                <h3>Manage Category</h3>
            </div>
            <HeaderMenu 
                setFilterDatas={setFilterDatas} 
                Datas={Datas} />
            <Dishes 
                filterDatas={filterDatas} 
                Datas={Datas} 
                SetDatas={SetDatas}
                setFilterDatas={setFilterDatas}
                isCorrect={isCorrect} 
                setIsCorrect={setIsCorrect} />
        </div>
    )
}

export default SettingManagement;