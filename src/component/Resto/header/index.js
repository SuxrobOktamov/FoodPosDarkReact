import React from 'react';

function Header({setFilterDatas, Datas}) {
    const searchFood = (e) => {
        const search = e.target.value.toLowerCase();
        const list = document.querySelectorAll('.card h3');
        list.forEach((item) => {
            const name = item.textContent.toLowerCase();
            if(name.indexOf(search) === 0) {
                item.parentNode.style.display = 'flex';
            }else {
                item.parentNode.style.display = 'none';
            }
        })
    }

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
        <header className="header">
            <div className="header-name">
                <h1>Jaego Resto</h1>
                <p>Tuesday, 2 Feb 2021</p>
            </div>
            <div className="header-search">
                <i className='bx bx-search search'></i>
                <input onChange={searchFood} type="search" placeholder="Search for food, coffe, etc.." />
            </div>
            <div className="header-menu">
                <ul onClick={ (e) =>{ menuListHandler(e)} } className="header-menu-list">
                    <li className="header-menu-item active">
                        Hot Dishes
                    </li>
                    <li className="header-menu-item">
                        Cold Dishes
                    </li>
                    <li className="header-menu-item">
                        Soup
                    </li>
                    <li  className="header-menu-item">
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
        </header>
    )
}

export default Header;