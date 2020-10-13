import React, { Fragment } from 'react';
import Card from '../components/card/index';
import {colleges} from '../data/colleges.json';
// import './main.css';
// console.log(colleges);

const MainScreen = () => {
    const renderCollgesCards = () =>{
        return colleges.map((data)=>{
            return (
                <Card college={data} />
            )
        })
    }
    return (
        <Fragment>
            <h2 className='main-heading'>Colleges in North India</h2>
            <div className='grid' >
                {renderCollgesCards()}
            </div>
        </Fragment>
    )
}

export default MainScreen
