import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ALogin, Cart, Kids, Layout, Shop, SingleProduct, Women } from '../Products/index';
// import Men from './Componenet/Men';
import Men from '../Products/Men';
function Routing_setup() {
  
  const router = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Shop />,
        },
        {
          path: '/men',
          element: <Men />,
          
        },
        {
          path: '/women',
          element: <Women />,
        },{
                path:"/product/:id",
                element:<SingleProduct/>
        },
        {
          path: '/kids',
          element: <Kids />,
        },
        
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/login',
          element: <ALogin />,
        },
      ],
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default Routing_setup;