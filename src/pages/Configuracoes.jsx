import React, { useState } from 'react';

// Importe o arquivo CSS correspondente que você moveu para a pasta de estilos
import '../assets/styles/configuracao.css';
import '../assets/styles/style.css'; 
const Configuracoes = () => {
  // --- Gerenciamento de Estado (State) ---
  // Usamos useState para "lembrar" os valores dos campos.
  
  // Estado para o formulário de Configurações Gerais
  const [username, setUsername] = useState('Maria Silva');
  const [email,] = useState('maria.silva@email.com');
  const [language, setLanguage] = useState('pt-br');

  // Estado para os interruptores de Segurança e Privacidade
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [isProfilePublic, setIsProfilePublic] = useState(true);

  // Estado para os interruptores de Notificações
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [systemNotifications, setSystemNotifications] = useState(true);

  // Função para lidar com o envio do formulário
  const handleSaveChanges = (event) => {
    event.preventDefault(); // Impede o recarregamento da página
    console.log("Salvando alterações:", {
      username,
      language,
    });
    alert('Alterações salvas com sucesso!');
  };

  return (
    <div className="settings-grid">
      <div className="settings-card card">
        <h3>Configurações Gerais</h3>
        <form onSubmit={handleSaveChanges}>
          <div className="form-group">
            {/* O atributo "for" do HTML vira "htmlFor" no JSX */}
            <label htmlFor="username">Nome de Usuário</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              disabled 
            />
          </div>
          <div className="form-group">
            <label htmlFor="language">Idioma</label>
            <select 
              id="language" 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="pt-br">Português (Brasil)</option>
              <option value="en-us">Inglês (EUA)</option>
              <option value="es-es">Espanhol</option>
            </select>
          </div>
          <button type="submit" className="save-button">Salvar Alterações</button>
        </form>
      </div>

      <div className="settings-card card">
        <h3>Segurança e Privacidade</h3>
        <div className="setting-item">
          <label>Autenticação de Dois Fatores (2FA)</label>
          <div className="toggle-switch">
            <input 
              type="checkbox" 
              id="2fa-toggle" 
              checked={isTwoFactorEnabled} 
              onChange={() => setIsTwoFactorEnabled(!isTwoFactorEnabled)} 
            />
            <label htmlFor="2fa-toggle" className="slider"></label>
          </div>
        </div>
        <div className="setting-item">
          <label>Visibilidade Pública do Perfil</label>
          <div className="toggle-switch">
            <input 
              type="checkbox" 
              id="profile-visibility-toggle" 
              checked={isProfilePublic} 
              onChange={() => setIsProfilePublic(!isProfilePublic)} 
            />
            <label htmlFor="profile-visibility-toggle" className="slider"></label>
          </div>
        </div>
        <button className="change-password-button">Alterar Senha</button>
      </div>

      <div className="settings-card card">
        <h3>Notificações</h3>
        <div className="setting-item">
          <label>Receber promoções por e-mail</label>
          <div className="toggle-switch">
            <input 
              type="checkbox" 
              id="email-notifications-toggle" 
              checked={emailNotifications} 
              onChange={() => setEmailNotifications(!emailNotifications)}
            />
            <label htmlFor="email-notifications-toggle" className="slider"></label>
          </div>
        </div>
        <div className="setting-item">
          <label>Notificações de atividades no App</label>
          <div className="toggle-switch">
            <input 
              type="checkbox" 
              id="system-notifications-toggle" 
              checked={systemNotifications} 
              onChange={() => setSystemNotifications(!systemNotifications)}
            />
            <label htmlFor="system-notifications-toggle" className="slider"></label>
          </div>
        </div>
      </div>
    </div>
    
    // O footer não foi incluído aqui, pois ele pode ser um componente separado
    // ou pertencer ao componente Layout principal, para não se repetir em todas as páginas.
  );
};

export default Configuracoes;