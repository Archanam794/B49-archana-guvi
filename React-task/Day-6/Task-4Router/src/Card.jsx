import React from 'react'

function Card(data) {
  return (
   <div className="card"  key={data.details.id}>
    <div className="card-menu">
      <img className="image" src={data.details.image} alt="..."></img>
      <div className="card-body">
        <h3 className="course-title">{data.details.title}</h3>
        <p className="course-description">{data.details.description}</p>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <hr className="card-hr"></hr>
        <span className="span-div">
          {data.details.date} &#x2022; {data.details.comments}
        </span>
      </div>
    </div>
  </div>
  
  )
}

export default Card