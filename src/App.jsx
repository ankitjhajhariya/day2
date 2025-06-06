import './App.scss'
import '@fontsource/poppins';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './component/Layout';
import AboutUsM from './component/aboutusm';
import Nav from './component/Nav'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Nav /><Layout /></>
    },
    {
      path: "/aboutus",
      element: <><Nav /><AboutUsM /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
