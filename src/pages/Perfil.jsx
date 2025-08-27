import React from 'react';
import { Link } from 'react-router-dom'; // Para criar links de navegação

// Importando o CSS da página
import '../assets/styles/perfil.css';
import '../assets/styles/style.css'; 

// Em uma aplicação real, estes dados viriam de uma API.
// Aqui, centralizamos em um objeto para organizar.
const userData = {
  name: 'Maria Silva',
  avatarUrl: 'https://placehold.co/150x150/1abc9c/ffffff?text=MS',
  title: 'Gerente de Projeto Sênior',
  bio: 'Especialista em metodologias ágeis e gestão de equipes multidisciplinares. Focada em resultados e inovação.',
  email: 'maria.silva@email.com',
  phone: '+55 (11) 98765-4321',
  location: 'São Paulo, Brasil',
  fullName: 'Maria de Souza Silva',
  birthday: '15 de Outubro',
  userId: '#USER-20250816',
  notifications: 'Ativadas',
  language: 'Português (Brasil)',
  timezone: 'GMT-3'
};

const Perfil = () => {
  return (
    <main className="container">
      <div className="profile-layout">
        
        {/* Card Principal do Perfil */}
        <div className="profile-card card">
          <div className="profile-avatar">
            <img src={userData.avatarUrl} alt="Avatar do Usuário" />
          </div>
          <div className="profile-info">
            <h3>{userData.name}</h3>
            <p className="profile-title">{userData.title}</p>
            <p className="profile-bio">{userData.bio}</p>
            <div className="profile-contact">
              <p><i className="fas fa-envelope"></i> {userData.email}</p>
              <p><i className="fas fa-phone"></i> {userData.phone}</p>
              <p><i className="fas fa-map-marker-alt"></i> {userData.location}</p>
            </div>
          </div>
        </div>

        {/* Grid com Detalhes Adicionais */}
        <div className="profile-details-grid">
          <div className="details-card card">
            <h4>Informações Pessoais</h4>
            <ul>
              <li><strong>Nome Completo:</strong> {userData.fullName}</li>
              <li><strong>Aniversário:</strong> {userData.birthday}</li>
              <li><strong>ID de Usuário:</strong> {userData.userId}</li>
            </ul>
            {/* Este botão poderia levar a uma página/modal de edição */}
            <button className="edit-button">
              <i className="fas fa-edit"></i> Editar Perfil
            </button>
          </div>

          <div className="details-card card">
            <h4>Configurações de Conta</h4>
            <ul>
              <li><strong>Notificações:</strong> {userData.notifications}</li>
              <li><strong>Idioma:</strong> {userData.language}</li>
              <li><strong>Fuso Horário:</strong> {userData.timezone}</li>
            </ul>
            {/* Usamos <Link> para navegar para a página de configurações */}
            <Link to="/configuracoes" className="edit-button">
              <i className="fas fa-cog"></i> Configurações
            </Link>
          </div>
        </div>
      </div>
    </main>
    
    // O footer não é incluído pois deve pertencer ao componente Layout.
  );
};

export default Perfil;