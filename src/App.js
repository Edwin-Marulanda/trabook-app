import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './app.css'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Home from './components/Home/Home'
import Sales from './components/Sales/Sales'
import Footer from './components/Footer/Footer'
import About from './components/Informativos/About'
import Blog from './components/Informativos/Blog'
import SignUp from './components/Gestion_Usuarios/SignUp'
import Comentario from './components/Comentarios/Comentario';
import Destination from './components/Destination/Destination';
import Login from './components/Gestion_Usuarios/Login'
import Plan from './components/Plan/Plan'


const App = () => {
    return (
        <div className='container w-75'>

            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={
                        <Fragment>
                            <Home />
                            <Content />
                            <Sales />
                            <Comentario/>
                            <Footer />
                        </Fragment>

                    } />
                    <Route path="/about" element={<About/>} />
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path='/destination' element={<Destination/>}/>
                    <Route path='/singup' element={<SignUp/>}/>
                    <Route path='/plans' element={<Plan/>}/>
                    <Route path='/login' element={<Login/>}/>

                </Routes>
            </Router>

            
        </div>

    )
}
export default App
