import React from 'react';
import Card from './Card';


const details=[
  {
    id:1,
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
    title: "10 Best Data Science Online Courses for Beginners | 2023",
    description:
      "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most popular technology.",
    date: "14 August 2023",
    comments: "No Comments",
  },
  {
    id:2,
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-2048x1072.webp",
    title: "Data Science Webinars and Workshops",
    description:
      "In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data.",
    date: "9 August 2023",
    comments: "No Comments",
  },
  {
    id:3,
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks.webp",
    title: "10 Best Data Science Frameworks in 2023",
    description:
      "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
    date: "5 August 2023",
    comments: "No Comments",
  }
]

function DataScience() {
  return (
    <div className='App'>
    <h1>Data Science</h1>
    
    <div className="container-card">
        
          
        {details.map((data) => {
          return (
            <Card details={data} />
          )
        })}
     
    </div>
    </div>
  )
}

export default DataScience