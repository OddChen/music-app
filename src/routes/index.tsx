import { createBrowserRouter, useRoutes } from 'react-router-dom'
import Recommend from '../pages/Recommend'
import Singers from '../pages/Singers'
import Rank from '../pages/Rank'
import Home from '../pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Recommend />,
      },
      {
        path: 'singers',
        element: <Singers />,
      },
      {
        path: 'rank',
        element: <Rank />,
      },
    ],
  },
])

export default routes
