import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Works from './components/Works';
import Sundry from './components/Sundry';
import Blogs from './components/Blogs';
import ErrorBoundary from './components/ErrorBoundary';
import { ChakraProvider } from '@chakra-ui/react'
// import { ThemespProvider } from './hooks/useThemes';
import './App.css';


const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ChakraProvider>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/works' element={<Works />} />
              <Route path='/sundry' element={<Sundry /> } />
              <Route path='/blogs' element={<Blogs />} />
            </Routes>
          <Footer />
        </ChakraProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App;
