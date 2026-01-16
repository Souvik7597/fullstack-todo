import React from 'react'

const Card = ({title}) => {

    return (
        <div className='flex gap-5'>
            <div>
                {title}
            </div>
            <div className='flex gap-5'>
                <button>update</button>
                <button>delete</button>
            </div>
        </div>
    )
}

export default Card