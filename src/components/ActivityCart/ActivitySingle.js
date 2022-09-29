import React from 'react';
import './Activity-single.css'

const ActivitySingle = (props) => {
   const { img, title, details, duration } = props.props;
   const { addActivity } = props;

   return (
      <div className="col-md-6 col-xl-4 px-2">
         <div className="card p-2">
            <img src={img} className="img-fluid rounded" alt={title} />
            <h3 className="pt-1">{title}</h3>
            <p>{details}</p>
            <h6 className="duration">Duration {duration} minutes</h6>
            <button onClick={() => addActivity(duration)} className="item-card-button py-1 w-100">Add to List</button>
         </div>
      </div>
   );
};

export default ActivitySingle;