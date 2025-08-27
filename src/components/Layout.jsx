// Ficheiro: src/components/Layout.jsx

import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';
import { useAuth } from '../hooks/useAuth.js'; 

import '../assets/styles/style.css'; 

const Layout = () => {
  // 1. OBTEMOS OS DADOS DO UTILIZADOR LOGADO
  const { user } = useAuth();

  // Para depuração: Veja no console o que está dentro do objeto 'user'
  useEffect(() => {
    console.log("Utilizador disponível no Layout:", user);
  }, [user]);

  // Lógica de tema (mantida)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        {/* 2. A CORREÇÃO ESTÁ AQUI: Passamos a prop com o nome 'nome_completo' */}
        {/* que o seu Header.jsx espera. */}
        <Header 
          nome_completo={user?.nome}
          onToggleTheme={toggleTheme}
          theme={theme}
        />
        <main className="container">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default Layout;
