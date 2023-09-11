import React from 'react';
import Card from './Card'


  const details=[
    {
      id:1,
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Selenium-Interview-Questions-and-Answers.webp",
      title: "Top Selenium Interview Questions and Answers for 2023",
      description:
        "Testing is a very important phase in the software development lifecycle (SDLC) and thus, Selenium.",
      date: "24 August 2023",
      comments: "No Comments",
    },
    {
      id:2,
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Git-Interview-Questions-and-Answers.webp",
      title: "Top Git Interview Questions and Answers For 2023",
      description:
        "What is the basic required skill for any software developer job? Programming language? Yes.",
      date: "24 August 2023",
      comments: "No Comments",
    },
    {
      id:3,
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Jira-Interview-Questions-and-Answers.webp",
      title: "Top 45 JIRA Interview Questions and Answers (2023)",
      description:
        "The most tedious task in any organization is project management and that is JIRA.",
      date: "23 August 2023",
      comments: "No Comments",
    },
  ];
  function All() {
  return (
   <div className='App'>
   <h1>All</h1>
    
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

export default All