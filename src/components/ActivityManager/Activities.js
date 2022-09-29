import React, { useEffect, useState } from 'react';
import ActivitySingle from '../ActivityCart/ActivitySingle';
import ActivitySummery from '../ActivitySummery/ActivitySummery';

const Activities = () => {
   const [activity, setActivity] = useState([]);
   const [activityDuration, setActivityDuration] = useState(0);

   const addActivity = (value) => {
      const totalTime = activityDuration + parseInt(value);
      setActivityDuration(totalTime);
   }

   useEffect(() => {
      fetch('activityData.json')
         .then(response => response.json())
         .then(data => setActivity(data))
   }, []);

   return (
      <div>
         <div className="container pt-2">
            <div className="row">
               <div className="text-start">
               <h2 className="pt-3 fs-1 text-info">Daily Super Learning</h2>
               <h4 className="pb-3">Select today's Learning</h4>
               </div>

               <div className="col-xl-9 ps-xl-0">
                  <div className="activity-wrapper row gy-3 text-start">

                     {
                        activity.map(activities => <ActivitySingle
                           props={activities}
                           key={activities.id}
                           addActivity={addActivity}
                        ></ActivitySingle>)
                     }
                  </div>
               </div>
               <div className="col-xl-3 border rounded">
                  <ActivitySummery
                     activityDuration={activityDuration}
                  ></ActivitySummery>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Activities;