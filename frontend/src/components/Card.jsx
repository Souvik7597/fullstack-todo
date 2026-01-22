// import  { useState } from 'react'
// import DeleteModal from './DeleteModal'
// import { useNavigate } from 'react-router-dom'

// const Card = ({ title, id, getAll }) => {
//     const [delModel, setDelModel] = useState(false)
//     const [todoId, setTodoId] = useState()
//     const navigate = useNavigate()

//     return (
//         <>
//             <div>
//                 {title}
//             </div>
//             <div>
                
//                 <button onClick={() => navigate(`/update/${id}`, { state: { title } })}>Update</button>
//                 <button onClick={() => { setDelModel(true); setTodoId(id) }}>delete</button>
//             </div>
//             {delModel && <DeleteModal setDelModel={setDelModel} todoId={todoId} getAll={getAll} />}
//         </>
//     )
// }

// export default Card



import { SlNote } from "react-icons/sl";
import { FiTrash } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from './DeleteModal'

const Card = ({ title, id, getAll }) => {
     const [delModel, setDelModel] = useState(false)
    const [todoId, setTodoId] = useState();
    return (
        <div className='flex p-3'>
            <div className="w-[500px] h-[92px] rounded overflow-hidden shadow-lg flex justify-between ">
                <div className=" w-[75%] px-6 py-4 overflow-scroll no-scrollbar">
                    <div className="font-bold text-xl mb-2 ">{title}</div>
                </div>
                {<div className='flex px-6 py-4 gap-5'>
                    <Link to={`/update/${id}`}>
                        <SlNote className="size=5 cursor-pointer" />

                    </Link>
                    <FiTrash className="size=5 cursor-pointer" onClick={() => { setDelModel(true); setTodoId(id) }} />
                </div>}

            </div>
            {delModel && <DeleteModal delModel={delModel} setDelModel={setDelModel} todoId={todoId} getAll={getAll} />}
        </div>
    )
}

export default Card