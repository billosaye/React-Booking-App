
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import List from './pages/list/list';
import Hotel from './pages/hotel/hotel';



function App() {
  return (
    <BrowserRouter> {/*This component uses the `BrowserRouter` from `react-router-dom` to enable client-side routing.*/}
      <Routes>
        <Route path="/" element={<Home />} />  {/*The home page, rendered by the `Home` component. */}
        <Route path="/hotels" element={<List />} />   {/*The list of hotels page, rendered by the `List` component. */}
        <Route path="/hotels/:id" element={<Hotel />} />    {/*The hotel details page, rendered by the `Hotel` component, where `:id` is a parameter that represents the hotel ID */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;