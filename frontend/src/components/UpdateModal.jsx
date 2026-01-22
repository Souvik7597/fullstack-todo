// import axios from "axios"
// import { useState } from "react"
// import toast from "react-hot-toast";
// import { useLocation, useNavigate, useParams } from "react-router-dom"

// export default function UpdateModal() {
//     const location = useLocation()
//     const { title } = location.state || {};

//     const [newText, setNewText] = useState(title)

//     const { id } = useParams()
//     const navigate = useNavigate()

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         try {
//             const res = await axios.put(`http://localhost:8001/todo/update/${id}`, { title: newText })
//             console.log(res)
//             navigate("/")
//             toast.success(res.data.message)
//         } catch (error) {
//             console.log(error.response.data.message)
//             toast.error(error.response.data.errors)
//         }
//     }

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
//             <div className="bg-white rounded-xl shadow-lg p-6 w-80">
//                 <h2 className="text-lg font-semibold text-gray-800 mb-4">
//                     Edit Todo
//                 </h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         value={newText}
//                         onChange={(e) => setNewText(e.target.value)}
//                         className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     />
//                     <div className="flex justify-end gap-3">
//                         <button
//                             type="button"
//                             onClick={() => navigate("/")}
//                             className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
//                         >
//                             Cancel
//                         </button>
//                         <button
//                             type="submit"
//                             className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
//                         >
//                             Save
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }


import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateModal = () => {
  const { register, handleSubmit, formState, setValue } = useForm({

  })

  const { id } = useParams()
  console.log("id", id)

  const navigate = useNavigate()

  const getTodo = async () => {
    try {

      const res = await axios.get(`http://localhost:8001/todo/getById/${id}`)
      // console.log("note", res);
      const title = res.data.data.title

      setValue('title', title)
    } catch (error) {
      console.log(error)
    }

  }

  const updateTodo = async (data) => {
    try {

      const res = await axios.put(`http://localhost:8001/todo/update/${id}`, data,
      )
      console.log("res", res);
      toast.success("Todo updated Successfully")
      navigate("/")

    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const handleCancel = () => {
    navigate('/')
  }


  useEffect(() => {
    getTodo()
  }, [id])


  return (
    <div>
      <form onSubmit={handleSubmit(updateTodo)}>
        <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
          <div className="mb-6">
            <label htmlFor="title" className="text-sm font-semibold leading-7 text-gray-600 mt-3">
              Title
            </label>
            <input
              type="text"
              name="title"
              {...register('title')}
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
            <p className='text-xs text-red-600 font-semibold'>{formState.errors.name?.message}</p>
          </div>

          <div className='flex justify-center gap-5'>

            <button className="rounded border-0 mt-5 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none" type='submit'>
              Update
            </button>
            <button className="rounded border-0 mt-5 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none" type='button' onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdateModal
