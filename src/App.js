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
import { Page404 } from './components/404/Page404';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { ProtectedRoute } from './components/util/ProtectedRoute';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
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

          <Route
            path="/my-recipies"
            element={
              <ProtectedRoute>
                <MyRecipies />
              </ProtectedRoute>
            }
          />

          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Content>
      <Footer />
    </UserAuthContextProvider>
  );
}

export default App;

const Content = styled.section`
  margin: 130px 0 60px 0;
`;

// const Footer = styled.footer`
//   background: #191911;
//   position: absolute;
//   inset: auto 0 0 0;
//   color: white;
// `;
