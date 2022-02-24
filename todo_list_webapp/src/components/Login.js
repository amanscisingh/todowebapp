import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Intro = () => {
    const dispatch = useDispatch()
    const email = useSelector(state => state.email)

    const handleChangeEmail = (value) => {
        dispatch({
            type: 'CHANGE_EMAIL',
            payload: value
        })
    }

    function handleSubmit () {
        dispatch({
            type: 'SUBMIT_EMAIL'
        })
    }

    return (
        <div className='App'>
            <form className='form-group' onSubmit={handleSubmit}>
                <div className='form-element'>
                    <label htmlFor='email'>Enter Email To Continue On TO Do Web App</label>
                    <input value={email} onChange={ (e)=> handleChangeEmail(e.target.value) } type='email' className='form-control' id='email' placeholder='abcd@xyz.com' />
                    <input type="submit" className='btn' value="Enter" />
                </div>
            </form>
        </div>
    )
}

export default Intro
