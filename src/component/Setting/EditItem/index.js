import { Button } from '@mui/material';
import React, { useRef, useState } from 'react'

function EditItem({Datas, SetDatas, isEdit, setIsEdit, isEditId }) {
    const FoodName = useRef();
    const FoodPrice = useRef();
    const FoodBowls = useRef();
    const FoodType = useRef();

    const savaFormHandler = (e) => {
        e.preventDefault();
        SetDatas(Datas.map(item => {
            if (item.id === isEditId ){
                item.text = FoodName.current.value;
                item.price = FoodPrice.current.value;
                item.bowls = FoodBowls.current.value;
                item.foodType = FoodType.current.value;
            }
            return item;
        }))
        setIsEdit(!isEdit)
    }

    const cancelFormHandler = () => {
        setIsEdit(!isEdit)
    }
  return (
    <form className='addItem' onSubmit={savaFormHandler}>
        <div className='control'>
            <div className='form-control'>
                <label htmlFor='name'>Food name</label>
                <input ref={FoodName} required type='text' placeholder='Soup' />
            </div>
            <div className='form-control'>
                <label htmlFor='number'>Food price</label>
                <input ref={FoodPrice} required type='number' placeholder='2.99 $' />
            </div>
        </div>
        <div className='form-control'>
            <label htmlFor='name'>Food Bowls</label>
            <input ref={FoodBowls} required type='number' placeholder='10' />
        </div>
        <div className='form-control'>
            <label htmlFor='number'>Select FoodType</label>
            <select ref={FoodType}>
                <option value='ColdDishes'>ColdDishes</option>
                <option value='Appetizer'>Appetizer</option>
                <option value='Soup'>Soup</option>
                <option value='Gril'>Gril</option>
                <option value='Dessert'>Dessert</option>
            </select>
        </div>
        <div className="change-btns">
            <Button onClick={cancelFormHandler} variant="outlined" color='error' >Discard Changes</Button>
            <Button variant="contained" color='success' type='submit' >Save Changes</Button>
        </div>
    </form>
  )
}

export default EditItem;