import React, { useEffect, useState } from 'react';
import ActivitySingle from '../ActivityCart/ActivitySingle';
import ActivitySummery from '../ActivitySummery/ActivitySummery';

const Activities = () => {
   const [activity, setActivity] = useState([]);

   useEffect(() => {
      fetch('activityData.json')
         .then(response => response.json())
         .then(data => setActivity(data))
   }, []);

   return (
      <div>
         <div className="container">
            <div className="row">
               <div className="col-9">
                  <div className="activity-wrapper row">
                     {
                        activity.map(activities => <ActivitySingle
                        props = {activities}
                        key = {activities.id}
                        ></ActivitySingle>)
                     }
                  </div>
               </div>
               <div className="col-3 border">
                  <ActivitySummery></ActivitySummery>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Activities;