import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/app/components/molecules/MainSection.css'

const mainSection = (props) => {
    return (
        <div id='card1'>
            <h1 className='title'>{props.title}</h1>
            <h3 className='description'>{props.description}</h3>
        </div>
    )
}

export default mainSection
