import React from 'react'
import "./Services.css"

const Services = () => {
    return (
        <div>
            <div className="subscribe">
                <div className="subscribe-h4">
                    <h4>Subscribe to Our Newsletter</h4>
                </div>
                <div className='subscribe-email'>
                    <input className="subscribe-input" type="email" name="emain" id="email" placeholder="Enter Email..."/>
                    <input type="submit" value="Subscribe" className="subscribe-button"/>
                </div>
            </div>
            <div className="service">
                <div className="left-side">
                    <h4>Services</h4>
                    <div className="service-box">
                        <h4>Website Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dignissimos velit iste dolorem.</p>
                        <p>Pricing $1,000 - $3,000</p>
                    </div>
                    <div className="service-box">
                        <h4>Website Maintenance</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat perferendis praesentium similique.</p>
                        <p>Pricing $250 per month</p>
                    </div>
                    <div className="service-box">
                        <h4>Website Hosting</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eaque sit laudantium delectus?</p>
                        <p>Pricing $25 per month</p>
                    </div>
                </div>
            
                <div className="form">
                    <form action="./result.html">
                    <h4>Get a Quote</h4>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email Address" />
                    <label for="message">Message</label>
                    <textarea name="message" id="message" cols="66" rows="2" placeholder="Message"></textarea>
                    <button type="submit">Send</button>

                    </form>
                    
                </div>
            </div>
        </div>
                            )
}

                            export default Services