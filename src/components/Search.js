import React from 'react'
import Button from 'react-bootstrap/Button'


const Search = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type='text' placeholder='Search for Movie by Title' onKeyUp={props.onInput}/>
            <Button type='submit' variant='primary'>Submit</Button>
        </form>

    )
}

export default Search