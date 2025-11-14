// 1. CORREÇÃO: Importamos 'React' para termos acesso ao 'React.ReactNode'
import React, { createContext, useState, useContext, useEffect } from 'react';

// 2. CORREÇÃO: O caminho está correto, mas o ficheiro api.ts (em baixo)
//    TEM de exportar a interface 'UserInfo'
import type { UserInfo } from '../servicos/api';
// 1. Definir o tipo do Contexto
interface AuthContextType {
  userInfo: UserInfo | null;
  login: (data: UserInfo) => void;
  logout: () => void;
}

// 2. Criar o Contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. Criar o "Provedor"
// 3. CORREÇÃO: Usamos 'React.ReactNode' em vez de 'ReactNode'
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  // Efeito para carregar dados do localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  const login = (data: UserInfo) => {
    setUserInfo(data);
    localStorage.setItem('userInfo', JSON.stringify(data));
  };

  const logout = () => {
    setUserInfo(null);
    localStorage.removeItem('userInfo');
  };

  return (
    <AuthContext.Provider value={{ userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 4. Criar um "Hook" para facilitar o uso
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};