import React from 'react';
import AuthPage from '../components/pages/AuthPage';
import ErrorPage from '../components/pages/ErrorPage';
import HomePage from '../components/pages/HomePage';

import {useRoutes} from "react-router-dom";

const AppRouter = ( {isAuth = false} ) => {
    const UnauthorizedRoutes = [
        { path: "/login", element: <AuthPage register={false}/> },
        { path: "/register", element: <AuthPage register={true}/> },
        { path: "*", element: <AuthPage/> }
    ];

    const AuthorizedRoutes = [
        { path: "/", element: <HomePage/> },
        { path: "/login", element: <AuthPage register={false}/> },
        { path: "/register", element: <AuthPage register={true}/> },
        { path: "*", element: <ErrorPage/> }
    ];

    return useRoutes(isAuth ? AuthorizedRoutes : UnauthorizedRoutes);
}

export default AppRouter;