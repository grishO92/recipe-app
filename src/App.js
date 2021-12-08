import { Route, Routes } from 'react-router';
import './App.css';
import styled from 'styled-components';

import { Catalog } from './components/Catalog/Catalog';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { MyRecipies } from './components/MyRecipies/MyRecipies';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';

function App() {
  return (
    <>
      <Header className="header" />
      <Content>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/create" element={<Create />} />
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
  margin: 150px 0 60px 0;
`;
