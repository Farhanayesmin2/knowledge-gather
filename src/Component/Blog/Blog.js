import React from 'react';

const Blog = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-5 m-12 md:grid-cols-2 sm:grid-cols-1 '>


    <div className="card   w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h1 className="card-title text-lg font-semibold"> Difference between Props and State?</h1>
    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components..The this.setState property is used to update the state values in the component.</p>
  </div>
  
</div>

            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h1 className="card-title text-lg font-semibold">How does work react?</h1>
    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
  </div>
  
</div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h1 className="card-title text-lg font-semibold">How does useState work?</h1>
    <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
  </div>
  
</div>
        
            <div className="card  w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h1 className="card-title text-lg font-semibold ">How does work useEffect without data load?</h1>
    <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.useEffect accepts two arguments. The second argument is optional.</p>
  </div>
  
</div>
        </div>
    );
};

export default Blog;