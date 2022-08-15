import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';



import data from '../data';

const Courses = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const course = data.find(dat => String(dat.id) === id);

    

  
    return (
        
      <div 
      className=".container-sm text-center mt-5 w-50 mx-auto bg-light"
      key={id}>
        <img
          className=""
          src={course.img}
          alt=""
        />
        <h3 className="fs-4 fw-bold ">{course.name}</h3>
        
        <h4 className="fs-6 fst-italic text-start">{course.text2}</h4>

        <div>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            Go Back
          </button>
        </div>
        </div>
        );
  
};


export default Courses