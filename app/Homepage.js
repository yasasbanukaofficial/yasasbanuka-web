import React from 'react'
import Welcome from './components/templates/Welcome'
import About from './components/templates/About'
import Fadein from './components/molecules/Fadein'

const Homepage = () => {
    return (
        <div>
            <Welcome />
            <About />
        </div>
    )
}

export default Homepage
