import  { useState } from 'react'
import DeleteModal from './DeleteModal'
import { useNavigate } from 'react-router-dom'

const Card = ({ title, id, getAll }) => {
    const [delModel, setDelModel] = useState(false)
    const [todoId, setTodoId] = useState()
    const navigate = useNavigate()

    return (
        <>
            <div>
                {title}
            </div>
            <div>
                <button onClick={() => navigate(`/update/${id}`, { state: { title } })}>Update</button>
                <button onClick={() => { setDelModel(true); setTodoId(id) }}>delete</button>
            </div>
            {delModel && <DeleteModal setDelModel={setDelModel} todoId={todoId} getAll={getAll} />}
        </>
    )
}

export default Card