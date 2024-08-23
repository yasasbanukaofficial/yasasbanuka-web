import React from 'react';
import '@/app/components/atoms/Letsconnectbutton.css'
import Link from 'next/link';

const Letsconnectbutton = () => {
    return (
        <div>
            <Link href='https://www.linkedin.com/in/yasasbanukagunasena/'>
                <button id='ex-linkButton'>Lets Connect</button>
            </Link>
        </div>
    )
}

export default Letsconnectbutton
