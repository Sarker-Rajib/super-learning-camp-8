import React from 'react';

const Blog = () => {
   return (
      <div className="blog pt-4">
         <div className="container">
            <div className="row gy-3">
               <div className="border shadow-lg rounded">
                  <h1>Let's dive into Blog</h1>
               </div>
               <div className="border shadow p-3 text-start rounded">
                  <h5>Q. How does React Work ?</h5>
                  <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                  <br />

                  <h5>Q. How does React Work ?</h5>
                  <p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>

               </div>
            </div>
         </div>
      </div>
   );
};

export default Blog;