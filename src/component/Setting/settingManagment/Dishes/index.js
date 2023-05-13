import React from 'react';

function Dishes({filterDatas, Datas, SetDatas, setFilterDatas, isCorrect, setIsCorrect, isEdit, setIsEdit, setIsEditId}) {

  const addItemHandler = () => {
    setIsCorrect(!isCorrect)
  }

  const editItemHandler = (id) => {
    setIsEditId(id);
    setIsEdit(!isEdit)
  }

  return (
    <div className="Dishes">
        <div className="addDish" onClick={addItemHandler}>
              <div className="plus">
                  <span>+</span>
                  <h3>Add new dish</h3>
              </div>
        </div>
        {filterDatas.map(item => (
          <div key={item.id} className="editDishes" >
              <img src={item.img} alt="dish" />
              <h3>{item.text}</h3>
              <span>${item.price} - {item.bowls} Bowls </span>
              <div className="edit-btn" onClick={()=>{editItemHandler(item.id)}}>
                <i className='bx bx-edit-alt' ></i> 
                  <span>Edit dish</span>
              </div>
          </div>
        ))}
        
    </div>
  )
}

export default Dishes;