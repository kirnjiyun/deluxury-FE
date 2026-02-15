import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/layout/Header';
import Footer from '../components/Footer/Footer';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { useGetUser } from '../hooks/useGetUser';
import { setUser, logout } from '../action/userAction';
import { Spinner } from '../components/ui/Spinner';

function checkIsLoggedIn() {
  return sessionStorage.getItem('token') !== null;
}

export default function AppLayout({ children }) {
  const dispatch = useDispatch();
  const isLoggedIn = checkIsLoggedIn();
  const { data: userData, isLoading, isError } = useGetUser(isLoggedIn);

  useEffect(() => {
    if (userData) {
      dispatch(setUser(userData));
    } else if (isError) {
      dispatch(logout());
    }
  }, [dispatch, userData, isError]);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Spinner size="large" />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div style={{ flex: 1 }}>{children}</div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
