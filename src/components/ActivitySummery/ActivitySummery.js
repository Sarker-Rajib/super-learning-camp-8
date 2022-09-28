import React from 'react';
import "./ActivitySummery.css"

const ActivitySummery = () => {
   return (
      <div>
         <div className="user-details text-start">
            <div className="d-flex align-items-center pt-5 pb-4">
               <div className="image pe-3 flex-shrink-0">
                  <img width="50" height="50" src="data:image/png;base64,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" alt="" />
               </div>

               <div className="text">
                  <h5 className="m-0">Rajib Sarker</h5>
                  <p className="m-0">Dhaka, Bangladesh</p>
               </div>
            </div>


            <div className="card p-2 shadow text-center">
               <div className="row">
                  <div className="col-4">
                     <p className="m-0">Weight</p>
                     <h6 className="m-0">64kg</h6>
                  </div>
                  <div className="col-4">
                     <p className="m-0">Height</p>
                     <h6 className="m-0">5.7</h6>
                  </div>
                  <div className="col-4">
                     <p className="m-0">Age</p>
                     <h6 className="m-0">29 <small>Yrs</small></h6>
                  </div>
               </div>
            </div>
         </div>

         <div className="break mt-4 p-2 rounded text-start border shadow">
            <h4>Add a Break</h4>
            <div className="buttons d-flex justify-content-between">
               <button>10m</button>
               <button>20m</button>
               <button>30m</button>
               <button>40m</button>
               <button>50m</button>
            </div>
         </div>

         <div className="exercise mt-4 p-2 rounded text-start border shadow">
            <h4 className="pb-2">Exercise Details</h4>
            <div className="d-flex border rounded justify-content-between p-2 my-2">
               <h6 className="m-0">Exercise time</h6>
               <p className="m-0"><span>200</span> Seconds</p>
            </div>
            <div className="d-flex border rounded justify-content-between p-2 my-2">
               <h6 className="m-0">Break time</h6>
               <p className="m-0"><span>200</span> Seconds</p>
            </div>
         </div>

         <div className="py-3">
            <button className="btn btn-primary w-100">
               Activity Completed
            </button>
         </div>
      </div>
   );
};

export default ActivitySummery;