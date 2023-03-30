import React, { useEffect, useState } from 'react'
// import './myCart.css'
// import SearchAppBar from '../../pages/Home/searchbar'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
// import Header from '../../Header/Header';
// import Footer from '../Home/footer';
import Button from '@mui/material/Button'
// import image1 from '../../assets/image.jpg'
import book from "../assests/book.png"
import PinDropIcon from '@mui/icons-material/PinDrop';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import { findCartById } from '../../services/cart.service';
// import addedToCart from '../../services/cart.service';

import { addedToCart } from '../services/CartServices';
// import { minusBookToCart } from '../../services/cart.service';
// import { removeFromCart } from '../../services/cart.service';

import AddressSetup from "../components/Address/address";


function MyCart(props) {
    const [state1, setState1] = useState({
        bookDataInCart: [], realDta: [], condition: true
    })
    const [st1, setSt1] = useState([])
    // const addToCartSetToBooks = async () => {
    //     const response = await findCartById()
    //     console.log("Add to  cart", response.data.data.books);
    //     // await setState1((prev) => ({
    //     //   ...prev, bookDataInCart: [response.data.data.books]
    //     // }))
    //     // let data = state1.bookDataInCart[0]
    //     // await setState1((prev) => ({
    //     //   ...prev, realDta: [data]
    //     // }))
    //     await setSt1(response.data.data.books)
    //     console.log(st1, "ssssssss");
    // }

    // const onClickPlus = async (id1, book1) => {

    //     console.log("so", st1);
    //     console.log("id", id1, "  ---", book1);
    //     let response = await addedToCart(id1, book1)
    //     console.log(response.data.data);
    //     addToCartSetToBooks()
    // }

    // const onClickMinus = async (id, book) => {
    //     let response = await minusBookToCart(id, book)
    //     addToCartSetToBooks()
    // }
    // const onClickRemoveButton = async (id, book) => {
    //     let respone = await removeFromCart(id, book)
    //     console.log(respone.data);
    //     addToCartSetToBooks()
    // }

    // useEffect(() => {
    //     addToCartSetToBooks()
    // }, [])

    const chnageState = () => {
        props.placeOrderClick(false)
        setState1((prev) => ({
            ...prev, condition: false
        }))
    }
    // let arr = props.array[0]
    // let arr = state1.bookDataInCart[0]
    // const clcked = async () => {
    //   console.log("clo", state1.realDta);
    //   await setState1((prev) => ({
    //     ...prev, condition: true, realDta: state1.bookDataInCart
    //   }))
    // }
    // useEffect(() => {
    //   addToCartSetToBooks()

    // }, [])
    // console.log(arr);
    return (
        <>
            {/* <Header /> */}
            <div className='mainMyCArtt'>
                {/* headings */}
                <div className='HeadingOfMyCartog'>
                    <div className='MycartLeftHeading'>My Cart(1)</div>
                    <div className='MycartLeftHeading' style={{ marginRight: '0px', width: '275px', height: '40px' }} >
                        <div className='locationMyCart'>
                            <div>  <PinDropIcon sx={{ marginLeft: '10px', color: '#A03037', marginTop: '9px' }} /> </div>
                            <div style={{ marginTop: '12px', marginLeft: '3px', fontSize: '14px' }}>Use current location</div>
                        </div>
                    </div>
                </div>
                {/* headings */}
                <div className='bookSectionOfmyCart'>
                    {
                        st1.map((x) => (
                            <div className='booksArrayMyArt'>
                                <div className='imgInMyCartOfBook'>
                                    <img src={book} height={'85px'} width={'60px'}></img>
                                </div>
                                <div className='bookrightcontntmtcrt'>
                                    <div className='titleMybookcrt'>{x.bookName}</div>
                                    <div className='author' style={{ display: 'flex', alignItems: 'center', height: '25px', marginLeft: 'auto' }}>by {x.author} </div>

                                    <div className='price111cart' >RS {x.price}</div>
                                    <div className='buttonOperationsMycrt'>
                                        {/* <RemoveCircleOutlineIcon onClick={() => onClickMinus(x.productID, x)} sx={{ height: '24px' }} /> */}
                                        <RemoveCircleOutlineIcon sx={{ height: '24px' }} />
                                        <div className='counterFormycrtt'>{x.quantity}</div>
                                        {/* <AddCircleOutlineIcon onClick={() => onClickPlus(x.productID, x)} sx={{ height: '24px' }} /> */}
                                        <AddCircleOutlineIcon sx={{ height: '24px' }} />
                                        {/* <div onClick={() => { onClickRemoveButton(x.productID, x) }} style={{ marginLeft: '14px', fontSize: '13px', backgroundColor: 'whitesmoke', border: '1px solid black', padding: '1.2px' }}>Remove</div> */}
                                        <div onClick={() => { }} style={{ marginLeft: '14px', fontSize: '13px', backgroundColor: 'whitesmoke', border: '1px solid black', padding: '1.2px' }}>Remove</div>
                                    </div>
                                </div>

                            </div>
                        )
                        )
                    }

                    <div className='butnnsLasplcor'>
                        {state1.condition && <Button onClick={() => { chnageState() }} className='butnplceOrder' size='small' variant="contained">PLACE ORDER</Button>}
                    </div>

                </div>

            </div>

        </>
    )
}

export default MyCart