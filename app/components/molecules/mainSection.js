import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/app/components/molecules/MainSection.css'

const mainSection = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
        </div>
    )
}

export default mainSection
