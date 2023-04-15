import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WatchPage from './components/WatchPage';
import Main from './components/Main';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideoResults from './components/VideoResults';
import Subscriptions from './components/Subscriptions';
import WatchHistory from './components/WatchHistory';
import Body from './components/Body';
import SignInPage from './components/SignInPage';
import { Provider } from 'react-redux';
import store from './utils/store';
import ProtectedRoutes from './components/ProtectedRoutes';
import WatchLater from './components/WatchLater';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />
      },
      {
        path: "watch",
        element: <WatchPage />
      },
      {
        path: "subscriptions",
        element: <ProtectedRoutes />,
        children: [
          {
            path: "",
            element: <Subscriptions />
          },
        ]
      },
      {
        path: "watchlater",
        element: <ProtectedRoutes />,
        children: [
          {
            path: "",
            element: <WatchLater />
          },
        ]
      },
      {
        path: "history",
        element: <ProtectedRoutes />,
        children: [
          {
            path: "",
            element: <WatchHistory />
          },
        ]
      },
      {
        path: "results",
        element: <VideoResults />
      }
    ]
  },
  {
    path: '/signin',
    element: <SignInPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
    <Provider store={ store }>
  <RouterProvider router={ appRouter }>
      <App />
  </RouterProvider> 
    </Provider>
  // <RouterProvider router={appRouter}><SignInPage /></RouterProvider> 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
