import React from 'react';

const ActivitySingle = (props) => {
   const { img, title, details, duration } = props.props;
   const { addActivity } = props;

   return (
      <div className="col-md-6 col-xl-4 p-2">
         <div className="card p-2">
            <img src={img} className="img-fluid rounded" alt={title} />
            <h3 className="pt-1">{title}</h3>
            <p>{details}</p>
            <h6>Duration {duration} minutes</h6>
            <button onClick={() => addActivity(duration)} className="btn btn-primary w-100">Add to List</button>
         </div>
      </div>
   );
};

export default ActivitySingle;