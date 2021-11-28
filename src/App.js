import { Route, Routes } from 'react-router';
import './App.css';
import styled from 'styled-components';

import { Catalog } from './components/Catalog/Catalog';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { MyRecipies } from './components/MyRecipies/MyRecipies';
import { Register } from './components/Register/Register';

function App() {
  return (
    <>
      <Header className="header" />
      <Content>
        <Routes>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-recipies" element={<MyRecipies />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;

const Content = styled.div`
  margin-top: 150px;
`;
