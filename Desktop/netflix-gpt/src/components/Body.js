import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"/browse",
            element:<Browse/>,
        },
    ]);
  // onAuthStateChanged is written root of the component because it will be executed on signin/signout etc.  other wise we will have to write dispatch fn here and there randomly

  return (
    <div>
       <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body