import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"


function App(){
    return(
        <div className="container">
            <main>
                <Info />
                <About />
                <Interests />
            </main>
            <Footer />
        </div>
    )
}

export default App