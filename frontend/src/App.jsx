import UpdateModal from "./components/UpdateModal"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<UpdateModal />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
