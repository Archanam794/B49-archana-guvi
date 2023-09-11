import React from 'react'
import Card from './Card';


const details=[
  {
    id:1,
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-How-long-it-would-take-to-learn-Motion-Graphics.webp",
    title: "How Long Would it Take to Learn Motion Graphics?",
    description:
      "Motion graphics is like creating moving pictures with design and animation.",
    date: "20 August 2023",
    comments: "No Comments",
  },
  {
    id:2,
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-How-to-Become-a-Motion-Graphics-Designer.webp",
    title: "How to Become a Motion Graphics Designer – Complete Career Roadmap",
    description:
      "Imagine if pictures could come to life, telling stories and conveying messages with movement.",
    date: "20 August 2023",
    comments: "No Comments",
  },
  {
    id:3,
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Skills-Required-to-Become-a-Digital-Marketer.webp",
    title: "Top Skills Required to Become a Digital Marketer",
    description:
      "Digital marketing is one of the most dynamic industries that has transformed how businesses connect.",
    date: "16 August 2023",
    comments: "No Comments",
  }
];

function Career() {
  return (
    <div className='App'>
    <h1>Career</h1>
    
    <div className="container-card">
        
          
        {details.map((data) => {
          return (
            <Card details={data} />
          )
        })}
     
    </div></div>
  )
}

export default Career