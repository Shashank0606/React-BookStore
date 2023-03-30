// import './Cart.css'

import Header from '../components/header/header12'
import mainCart from './maincart'
import React, { useState } from 'react'
import AddressDetails from './AddressDetails'

import AddressSetup from '../components/Address/address'

// import OrderSummary from './OrderSummary'
import OrderSummary from './OrderSummary'

function Cart1(props) {
    const arr = props.bookDataInCart
    console.log(arr, "in Cart");
    const [state1, setState1] = useState({
        AddressDeatilsVal: true, AddressSetUpsVal: false, OrderSumUnit: false, orderSum: true
    })
    const placeOrderClick = (value) => {
        setState1((prev) => ({
            ...prev, AddressDeatilsVal: value, AddressSetUpsVal: !value
        }))
    }

    const clickOnContinue = (value) => {
        setState1((prev) => ({
            ...prev, orderSum: value, OrderSumUnit: !value
        }))
    }
    return (
        <>
            <Header />
            <div className='cartMainBox'>

                <div className='cartHeadNames'>
                    <div className='headings' > Home / </div>
                    <div className='headings' style={{ color: 'black', font: 'small-caption', fontSize: '11px' }}> My Cart</div>

                </div>

                <mainCart placeOrderClick={placeOrderClick} array={arr} />

                {state1.AddressDeatilsVal && <AddressDetails placeOrderClick={placeOrderClick} value={"Address Details"} />}
                {state1.AddressSetUpsVal && <AddressSetup clickOnContinue={clickOnContinue} />}
                {state1.orderSum && <AddressDetails value={"Order summary"} />}
                {state1.OrderSumUnit && <OrderSummary />}
            </div>
        </>
    )
}

export default Cart1