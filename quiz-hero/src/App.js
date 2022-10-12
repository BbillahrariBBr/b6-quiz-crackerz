import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import About from './components/About/About';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';
import Eror404 from './components/Eror404/Eror404';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>,
        },
        {
          path: '/blog',
          loader: () => fetch('questions.json'),
          element: <Blog></Blog>,
        },
        {
          path: '/quiz/:qId',
          loader: async ({ params }) => {
            // console.log(params.qId);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.qId}`)
          },
          element: <Quiz></Quiz>

        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
    { path: '*', element: <Eror404></Eror404> },
  ])
  return (
    <div className="App">
      {/* <Main></Main> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
