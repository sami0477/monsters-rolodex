import React from 'react'
import './search-box.styles.css'


export const SearchBox = ( { placeholder, handleChange } ) => (
    <input 
    className='search'
    onChange={handleChange} 
    type='search' 
    placeholder={placeholder} 
    />

)


// Function components UNLIKE class components dont have access to state
// because they dont have access to constructor method and they also dont
// have access to life-cycle methods
