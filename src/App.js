import React from 'react';
import Home from './pages/Home';
import CategoryMovies from './pages/CategoryMovies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routePath } from './constants/route';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={routePath.home} element={<Home />} />
                    <Route path={routePath.categories} element={<CategoryMovies />} />
                    <Route path={routePath.invalid} element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;