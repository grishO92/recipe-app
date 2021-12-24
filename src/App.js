import { Route, Routes } from 'react-router';
import './App.css';
import styled from 'styled-components';

import { Catalog } from './components/Catalog/Catalog';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { MyRecipies } from './components/MyRecipies/MyRecipies';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';
import { Edit } from './components/Edit/Edit';
import { Details } from './components/Details/Details';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { ProtectedRoute } from './components/util/ProtectedRoute';

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <Create />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <ProtectedRoute>
                  <Edit />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-recipies" element={<MyRecipies />} />

            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Content>
      </UserAuthContextProvider>
    </>
  );
}

export default App;

const Content = styled.section`
  margin: 150px 0 60px 0;
`;
