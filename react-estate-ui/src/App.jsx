import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import Login from "./routes/login/login";
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout />,
      children:[
        {
          path: "/",
          element:<HomePage />,
        },
        {
          path: "/login",
          element:<Login />,
        },
        {
          path: "/:id",
          element:<SinglePage />,
        },
        {
          path: "/list",
          element:<ListPage />,
        }
      ]
  
    }
  ]);
  return (
   
    <RouterProvider router={router}/>
  );
}

export default App;
