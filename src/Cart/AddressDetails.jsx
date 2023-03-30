import React from 'react'
// import './AddressDetails.css'
function AddressDetails(props) {
    return (
        <div className='adbokDeatils'>
            <div style={{ marginLeft: '40px' }}>{props.value}</div>

        </div>
    )
}

export default AddressDetails