import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cart, Kids, Layout, Login, Shop, SingleProduct, Women } from './Componenet/index';
import Men from './Componenet/Men';

function App() {
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
          path: '/login',
          element: <Login />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;