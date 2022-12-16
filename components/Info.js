import React from "react"

function Info(){
    return(
        <div>
            <img src="../images/photo.jpg" className="photo"/>
            <h2 className="my-name">Valeriia Rohatynska</h2>
            <p className="my-profession">Frontend Developer</p>
            <p className="my-website"><a href="https://www.valerier.com">valerier.com</a></p>

            <div className="buttons">
                <a href="mailto:valeriiarohatynska@gmail.com">
                    <button type="button" className="button email"><span><i className="fa fa-envelope"></i></span>Email</button>
                </a>
                <a href="https://www.linkedin.com/in/valerier2000">
                    <button type="button" className="button linkedin"><span><i className="fa fa-linkedin"></i></span>LinkedIn</button>
                </a>
            </div>
        </div>
    )
}

export default Info