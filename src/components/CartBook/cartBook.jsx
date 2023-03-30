// import React from 'react'
// import { Box, Button } from '@mui/material';

// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

// import { removeFromCart, addedToCart } from '../../services/CartServices';
// // import "../CartBook/CartBook.css";;
// import "../CartBook/cartbook.css";

// function CartBook(props) {


//     const [count, setCount] = React.useState(props.cart.quantity)

//     const bookRemove = () => {
//         console.log("book id", props.cart.bookId);
//         removeFromCart(props.cart.bookId)
//             .then((resp) => {
//                 console.log(resp, "resp.data.data");
//             })
//             .catch((err) => { console.log(err); })
//     }

//     const increment = () => {
//         let data = {
//             increase: true
//         }
//         addedToCart(data, props.cart._id)
//             .then((response) => {
//                 console.log(response);
//                 setCount(prevcount => prevcount + 1)
//             })
//             .catch((error) => { console.log(error) })
//     }

//     const decrement = () => {
//         let data = {
//             increase: false
//         }
//         addedToCart(data, props.cart._id)
//             .then((response) => {
//                 console.log(response)
//                 setCount(prevcount => prevcount - 1)
//             })
//             .catch((error) => { console.log(error) })
//     }

//     return (

//         <Box className="bookInCart">

//             <Box className="bookDetail">
//                 <Box className="bookImg">
//                     <img
//                         //src="../CartBook/imag4353es.jpg"
//                         src={props.cart.bookImage}
//                         alt='bookimage'
//                         width='85px'
//                         height='100px' />
//                 </Box>
//                 <Box className="bookContent">
//                     <Box style={{ display: 'flex', flexDirection: 'column' }}>
//                         <h1 style={{
//                             font: 'normal normal normal 20px/23px Lato',
//                         }}>
//                             {props.cart.bookName}
//                             {/* Don't Make Me Think */}
//                         </h1>
//                         <h3 style={{
//                             font: 'normal normal normal 15px/19px Lato',
//                             color: '#9D9D9D',
//                         }}>
//                             {props.cart.author}
//                             {/* by Steve Krug */}
//                         </h3>
//                     </Box>
//                     <Box style={{ display: 'flex', alignItems: 'center' }}>
//                         <Box className='discountPrice'>
//                             Rs.{props.cart.discountPrice}
//                             {/* Rs. 1500 */}
//                         </Box>
//                         <Box className='mainPrice'>
//                             Rs.{props.cart.price}
//                             {/* Rs. 2000 */}
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>
//             < Box className='counterMainBox'>
//                 <Box className='countbox'>
//                     <RemoveOutlinedIcon fontSize='small' style={{
//                         border: '1px solid grey',
//                         borderRadius: '100px'
//                     }}
//                         onClick={decrement}
//                     />
//                     <Box className='countvalueBoxshow' >
//                         {count}
//                     </Box>
//                     <AddOutlinedIcon fontSize='small' style={{
//                         border: '1px solid grey',
//                         borderRadius: '100px'
//                     }}
//                         onClick={increment}
//                     />
//                 </Box>
//                 <Box className='removeButton'>
//                     <Button
//                         sx={{
//                             width: '45px',
//                             height: '15px',
//                             color: '#0A0102',
//                         }}
//                         onClick={bookRemove}
//                     >
//                         Remove
//                     </Button>
//                 </Box>
//             </Box>
//         </Box>
//     )
// }

// export default CartBook



import { Box, Button } from '@mui/material';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

import { removeFromCart, addedToCart } from '../../services/CartServices';
// import "../CartBook/CartBook.css";;
import "../CartBook/cartbook.css";
import React, { useState } from 'react';
import './cartbook.css';

function CartBook(props) {
    const { book } = props;
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleRemove = () => {
        removeFromCart(book.id)
            .then((resp) => {
                console.log(resp, "resp.data.data");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="book">
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-details">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <div className="book-price">
                    <span className="real-price">{book.price}</span>
                    <span className="discounted-price">{book.discountedPrice}</span>
                </div>
                <div className="book-quantity">
                    <button className="quantity-button" onClick={handleDecrement}>-</button>
                    <span className="quantity">{quantity}</span>
                    <button className="quantity-button" onClick={handleIncrement}>+</button>
                    <button className="remove-button" onClick={handleRemove}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartBook;


