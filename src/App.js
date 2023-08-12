import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import InventoryDashboard from './pages/InventoryDashboard';
import DepartmentsPage from './pages/DepartmentsPage';
import ProductsList from './pages/ProductsList';
import ProductManagementPage from './pages/ProductManagementPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<InventoryDashboard />}></Route>
        <Route path='/departments' element={<DepartmentsPage />}></Route>
        <Route path='/products/:department' element={<ProductsList />}></Route>
        <Route path='/products/' element={<ProductsList />}></Route>
        <Route path='/addproducts' element={<ProductManagementPage />}></Route >
        <Route path='/product/:productId' element={<ProductDetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
