import React from 'react'
import Card from './Card'

const MainSection = ({ todo, getAll }) => {
    return (
        <div>
            {todo.map((item) => {
                return <Card key={item._id} title={item.title} id={item._id} getAll={getAll} />
            })}
        </div>
    )
}

export default MainSection