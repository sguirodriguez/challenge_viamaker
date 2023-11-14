import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProductsController from '../pages/products/products.controller';
import HomeController from '../pages/home/home.controller';
import UsersController from '../pages/users/users.controller';

const RouterRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path={'/dashboard'} element={<HomeController />} />
        <Route path={'/dashboard/produtos'} element={<ProductsController />} />
        <Route path={'/dashboard/usuarios'} element={<UsersController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterRoot;
