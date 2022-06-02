import React from 'react'
import { Spinner } from 'react-bootstrap'
import classes from '../style/all.module.css'

const Loading = () => {
    return (
        <div className="container">
            <div className='row'>
                <div className="col-12 text-center py-3">
                    <Spinner animation="border" className={classes.spinner} />
                </div>
            </div>
        </div>
    )
}

export default Loading