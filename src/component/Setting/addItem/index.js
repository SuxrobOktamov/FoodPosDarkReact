import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import Img from '../../../img/image.png';

function AddItem({isCorrect, setIsCorrect, Datas, SetDatas}) {
    const [count, setCount] = useState(0);

    const FoodName = useRef();
    const FoodPrice = useRef();
    const FoodBowls = useRef();
    const FoodType = useRef();
    useEffect(()=>{
        setCount(Datas[Datas.length-1].id + 1);
    }, [])
    const savaFormHandler = (e) => {
        e.preventDefault();
        SetDatas([
            ...Datas,
            {
                id:count, 
                text:FoodName.current.value, 
                price: FoodPrice.current.value,
                bowls: FoodBowls.current.value,
                img: Img,
                count:0,
                foodType: FoodType.current.value
            }
        ])
        setIsCorrect(!isCorrect)

    }

    const cancelFormHandler = () => {
        setIsCorrect(!isCorrect)
    }

  return (
    <form className='addItem' onSubmit={savaFormHandler}>
        <div className='control'>
            <div className='form-control'>
                <label htmlFor='name'>Food name</label>
                <input ref={FoodName} required id='name' type='text' placeholder='Soup' />
            </div>
            <div className='form-control'>
                <label htmlFor='number'>Food price</label>
                <input ref={FoodPrice} required id='number' type='number' placeholder='2.99 $' />
            </div>
        </div>
        <div className='form-control'>
            <label htmlFor='name'>Food Bowls</label>
            <input ref={FoodBowls} required id='name' type='number' placeholder='10' />
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

export default AddItem;