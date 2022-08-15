import React from 'react';
import "./Home.css";
import data from '../data';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="main">
                <div>
                    <h2>Professional Web Design</h2>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia unde praesentium facilis impedit
                        distinctio?
                    </p>
                </div>
            </div>
            <div className="subscribe">
                <div className="subscribe-h4">
                    <h4>Subscribe to Our Newsletter</h4>
                </div>
                <div className='subscribe-email'>
                    <input className="subscribe-input" type="email" name="emain" id="email" placeholder="Enter Email..."/>
                    <input type="submit" value="Subscribe" className="subscribe-button"/>
                </div>
            </div>
            
            <div className="section">
                {data.map((course) => {
                    const { id, name, text, img } = course;
                    return (
                        <div className="box" key={id}
                            onClick={() => navigate(`/Courses/${id}`, { state: course })}
                            style={{ cursor: 'pointer' }}>
                                <img src={img} alt="" className="box-img" />
                                <h4 className="box-title">{name}</h4>
                                <p className="box-p">{text}</p>
                        </div>
                    )
                }
                )}
            </div>
            
        </div>
            
      
  )
}

export default Home