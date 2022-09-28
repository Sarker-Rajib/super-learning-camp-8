import React from 'react';

const ActivitySingle = ({props}) => {
   const {img, title, details, duration} = props;

   return (
      <div className="col-md-6 col-xl-4 p-2">
         <div className="card">
            <img src={img} alt={title}/>
            <h1>title :{title}</h1>
            <p>{details}</p>
            <h6>Duration {duration} minutes</h6>
            <button className="btn btn-primary">Add to List</button>
         </div>
      </div>
   );
};

export default ActivitySingle;