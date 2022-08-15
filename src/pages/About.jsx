import React from 'react'
import "./About.css"

const About = () => {
    return (
        <>
            <div className="subscribe">
                <div className="subscribe-h4">
                    <h4>Subscribe to Our Newsletter</h4>
                </div>
                <div className='subscribe-email'>
                    <input className="subscribe-input" type="email" name="emain" id="email" placeholder="Enter Email..."/>
                    <input type="submit" value="Subscribe" className="subscribe-button"/>
                </div>
            </div>
            <div className="about-text">
                <div className="left">
                    <h4>About Us</h4>
                    <p className="left-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore veritatis incidunt necessitatibus, iste eveniet facilis at officiis maiores velit soluta deleniti debitis ratione neque quasi quaerat numquam vero rem deserunt totam laudantium saepe, quo odit amet. Eum iure blanditiis maxime deleniti explicabo, laboriosam asperiores excepturi dolores doloribus, facere consectetur obcaecati.</p>
                    <p className="left-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nemo ratione, at a voluptatem quis eaque eius assumenda totam eligendi similique voluptatum tempore mollitia ipsam dolore nulla quisquam ducimus cupiditate nesciunt. Numquam aspernatur quidem obcaecati officia repudiandae quae ea commodi aliquid vitae autem sint ipsum, sequi suscipit ex delectus sit!</p>
                </div>
                <div className="right">
                    <h4>What We Do</h4>
                    <p className="right-dark">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ex omnis dicta libero optio ipsam blanditiis fugiat, perferendis debitis esse praesentium, corporis, dolorem amet consequatur?</p>
                </div>
            </div>


        </>
        
            )
}

            export default About