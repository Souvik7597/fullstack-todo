import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MainSection from "../components/MainSection"
import axios from "axios"
import toast from "react-hot-toast"

const Home = () => {

    const [todo, setTodo] = useState([])
    const [text, setText] = useState("")
    const [flag,setFlag]=useState(false)

    const getAll = async () => {
        try {
            const res = await axios.get(`http://localhost:8001/todo/getAll`)
            console.log(res.data.data)
            setTodo(res.data.data)

        } catch (error) {
            console.log("Data Not Found", error)
        }
    }

    const handleTodo = async (text) => {
        const data = {
            "title": text
        }
        try {
            setFlag(false)
            const res = await axios.post(`http://localhost:8001/todo/create`, data)
            console.log(res)
            toast.success(res.data.message)
            setFlag(true)
            setText('')

        } catch (error) {
            console.log("Data Not Created",error)
            toast.error(error.response.data.errors || error.response.data.message)
            setText("")
        }
    }

    useEffect(() => {
        getAll()
    }, [flag])

    return (
        <div className="text-center pt-20">
            <Header />
            <div>
                <input onChange={(e) => setText(e.target.value)} value={text} type="text" placeholder="add todo" />
                <button onClick={() => handleTodo(text)}>Add</button>
            </div>
            <MainSection todo={todo} getAll={getAll} />
            <Footer />


        </div>
    )
}

export default Home