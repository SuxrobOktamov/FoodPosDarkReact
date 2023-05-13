import React, { useEffect } from 'react'

function HeaderMenu({setFilterDatas, Datas}) {

    useEffect(()=>{
        setFilterDatas(Datas)
    }, [Datas])
    const menuListHandler = (e) => {
        if(e.target.textContent === 'Hot Dishes'){
            setFilterDatas(Datas)
        }else if(e.target.textContent === 'Cold Dishes'){
            setFilterDatas(Datas.filter(item => item.foodType === 'ColdDishes'))
        }else if(e.target.textContent === 'Soup'){
            setFilterDatas(Datas.filter(item => item.foodType === 'Soup'))
        }else if(e.target.textContent === 'Gril'){
            setFilterDatas(Datas.filter(item => item.foodType === 'Gril'))
        }else if(e.target.textContent === 'Appetizer'){
            setFilterDatas(Datas.filter(item => item.foodType === 'Appetizer'))
        }else if(e.target.textContent === 'Dessert'){
            setFilterDatas(Datas.filter(item => item.foodType === 'Dessert'))
        }
    }

    const headrMenu = document.querySelectorAll('.header-menu-list li');

    headrMenu.forEach(item => {
        item.addEventListener('click', () => {
            headrMenu.forEach(el => {
                el.classList.remove('active');
                item.classList.add('active');
            })
        })
    })

    return (
        <div className="header-menu">
            <ul onClick={(e) => {menuListHandler(e)}} className="header-menu-list">
                <li className="header-menu-item active">
                    Hot Dishes
                </li>
                <li className="header-menu-item ">
                    Cold Dishes
                </li>
                <li className="header-menu-item">
                    Soup
                </li>
                <li className="header-menu-item">
                    Gril
                </li>
                <li className="header-menu-item">
                    Appetizer
                </li>
                <li className="header-menu-item">
                    Dessert
                </li>
            </ul>
        </div>
    )
}

export default HeaderMenu;