import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom"

export default function UpdateModal() {
    const location = useLocation()
    const {title} = location.state || {};

    const [newText, setNewText] = useState(title)
    
    const { id } = useParams()
    const navigate = useNavigate()
   
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:8001/todo/update/${id}`, { title: newText })
            console.log(res)
            navigate("/")
toast.success(res.data.message)
        } catch (error) {
            console.log(error.response.data.message)
            toast.error(error.response.data.errors)
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-80">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Edit Todo
                </h2>
                <form onSubmit={handleSubmit}>
                    <input
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={()=>navigate("/")}
                            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
