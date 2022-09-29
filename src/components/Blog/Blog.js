import React from 'react';
import './Blog.css'

const Blog = () => {
   return (
      <div className="blog py-4 px-2 px-md-0">
         <div className="container">
            <div className="row">
               <div className="border border-info shadow-lg rounded">
                  <h1>Let's dive into Blog</h1>
               </div>
               <div className="border border-info bg-light shadow p-3 text-start rounded">
                  <h5>Q. How does React Work ?</h5>
                  <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                  <br />

                  <h5>Q. What's difference between props and state ?</h5>
                  <p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>
                  <br />

                  <h5>Q. What does useEffect() do except data fetching ?</h5>
                  <p>useEffect() hook runs the side-effect after initial rendering, and on later renderings only if the name value changes. <br />
                  By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Blog;