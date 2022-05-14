import * as React from 'react';
import styled from '@emotion/styled';
import { Link, Route, Routes } from 'react-router-dom';
import { useRoute } from './hooks/useRoute';
import { Home } from './components/Home';
import { Logo } from './components/Logo';

const Header = styled.header`
  background: #282c34;
  padding: 12px;
`;

const Content = styled.main`
  padding: 16px;
`;

const Middle = styled.div`
  display: flex;
  align-items: center;
`;

const Wordmark = styled.h1`
  padding: 0 8px;
  font-size: 1.6em;
  color: #61dafb;
  display: inline;
`;

const PageTitle = styled.h2`
  color: #666666;
`;

export const App = () => {
  const route = useRoute();

  return (
    <React.Fragment>
      <Header>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Middle>
            <Logo width={48} />
            <Wordmark>A Tour of React</Wordmark>
          </Middle>
        </Link>
      </Header>
      <Content>
        <PageTitle>{route}</PageTitle>
        <br />
        <Routes>
          <Route index element={<Home />}></Route>
        </Routes>
      </Content>
    </React.Fragment>
  );
};
