import React, { useEffect, useState } from 'react';
import ActivitySingle from '../ActivityCart/ActivitySingle';
import ActivitySummery from '../ActivitySummery/ActivitySummery';

const Activities = () => {
   const [activity, setActivity] = useState([]);
   const [activityDuration, setActivityDuration] = useState(0);
   
   const addActivity = (value) =>{
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
               <div className="col-xl-9">
                  <div className="activity-wrapper row text-start">
                     <h2>Daily Super Learning Activity</h2>

                     {
                        activity.map(activities => <ActivitySingle
                           props={activities}
                           key={activities.id}
                           addActivity = {addActivity}
                        ></ActivitySingle>)
                     }
                  </div>
               </div>
               <div className="col-xl-3 border">
                  <ActivitySummery
                  activityDuration = {activityDuration}
                  ></ActivitySummery>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Activities;