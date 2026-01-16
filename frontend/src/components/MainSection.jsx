import React from 'react'
import Card from './Card'

const MainSection = ({ todo }) => {
    return (
        <div>
            {todo.map((item) => {
                return <Card key={item._id} title={item.title} />
            })}
        </div>
    )
}

export default MainSection