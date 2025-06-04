// import React from "react";
// import './Experience.css';

// function Experience() {
//     return (
//         <>
//             <div className="experience">
//                 <div className="description">
//                     <p>Our Experience</p>
//                     <h1>Experts with experience</h1>
//                     <p>
//                         With years of experience, we have developed multiple solutions and large enterprise applications,
//                         proving our prowess in the design and development of software solutions. We have unmatched deep
//                         industry expertise and experience to harness the latest IT advancements to deliver custom solutions
//                         that perfectly fit the needs and behavior of your users.
//                     </p>
//                 </div>
//                 <div className="projected">
//                     <div className="projectedone">
//                         <div className="card">
//                             <h1>75<i className="fa-solid fa-plus"></i></h1>
//                             <p>Happy Clients</p>
//                         </div>

//                         <div className="card">
//                             <h1>100<i className="fa-solid fa-plus"></i></h1>
//                             <p>Team Members</p>
//                         </div>
//                     </div>

//                     <div className="projectedtwo">
//                         <div className="card">
//                             <h1>10<i className="fa-solid fa-plus"></i></h1>
//                             <p>Years of Experience</p>
//                         </div>

//                         <div className="card">
//                             <h1>200<i className="fa-solid fa-plus"></i></h1>
//                             <p>Projects Delivered</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>

//     );
// }

// export default Experience;


import React from "react";
import './Experience.css';

function Experience() {
  return (
    <div className="experience">
      <div className="experience-description">
        <p className="subtitle">Our Experience</p>
        <h1 className="title">Experts<br />with experience</h1>
        <p className="paragraph">
          With years of experience, we have developed multiple solutions and large enterprise applications,
          proving our prowess in the design and development of software solutions. We have unmatched deep industry
          expertise and experience to harness the latest IT advancements to deliver custom solutions that perfectly
          fit the needs and behavior of your users.
        </p>
      </div>

      <div className="experience-stats">
        <div className="stat-card">
          <h1>75<span className="plus">+</span></h1>
          <p>Happy Clients</p>
        </div>
        <div className="stat-card">
          <h1>100<span className="plus">+</span></h1>
          <p>Team Members</p>
        </div>
        <div className="stat-card">
          <h1>10<span className="plus">+</span></h1>
          <p>Years of Experience</p>
        </div>
        <div className="stat-card">
          <h1>200<span className="plus">+</span></h1>
          <p>Projects Delivered</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
