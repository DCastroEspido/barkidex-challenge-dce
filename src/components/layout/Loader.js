import React from 'react'
import loader from '../../images/pokeball.png'
import './Loader.css'

const Loader = () => {
    return (
        <>
            <div className='loader'>
                <img className='loader-icon' alt='loading' src={loader}></img>
                <br></br>
                <p>Loading...</p>
            </div>
        </>
    )
}

export default Loader;