import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { loginUser, registerUser } from '../servicos/api';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [modo, setModo] = useState<'login' | 'register'>('login');
  
  // --- MUDANÇA AQUI ---
  const [name, setName] = useState(''); // <-- CORRIGIDO AQUI
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [erro, setErro] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErro(null);

    try {
      if (modo === 'login') {
        const data = await loginUser({ email, password });
        login(data);
        navigate('/treinos');
      } else {
        // --- MUDANÇA AQUI ---
        const data = await registerUser({ name, email, password }); // <-- CORRIGIDO AQUI
        login(data);
        navigate('/treinos');
      }
    } catch (err: any) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container" style={{ backgroundColor: '#121212', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main className="login-main">
        <div className="login-container">
          <h1 className="login-title">
            {modo === 'login' ? 'Aceder à Conta' : 'Criar Conta'}
          </h1>
          
          <form className="login-form" onSubmit={handleSubmit}>
            
            {modo === 'register' && (
              <div className="form-group">
                <label htmlFor="name">Nome</label> {/* Pode ser "Nome" */}
                <input
                  type="text"
                  id="name" // <-- CORRIGIDO AQUI
                  className="form-input"
                  placeholder="O seu nome"
                  value={name} // <-- CORRIGIDO AQUI
                  onChange={(e) => setName(e.target.value)} // <-- CORRIGIDO AQUI
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="seu.email@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            {erro && <p className="form-error">{erro}</p>}

            <button type="submit" className="form-button" disabled={loading}>
              {loading ? 'A processar...' : (modo === 'login' ? 'Entrar' : 'Registar')}
            </button>
          </form>

          <div className="toggle-modo">
            {modo === 'login' ? (
              <p>
                Não tem conta?{' '}
                <button onClick={() => { setModo('register'); setErro(null); }}>Registe-se</button>
              </p>
            ) : (
              <p>
                Já tem conta?{' '}
                <button onClick={() => { setModo('login'); setErro(null); }}>Faça Login</button>
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;