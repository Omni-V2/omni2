"use client"
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface AuthState {
  token: string | null;
}

interface AuthContextProps {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

type AuthAction = { type: 'SET_TOKEN'; payload: string } | { type: 'CLEAR_TOKEN' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'CLEAR_TOKEN':
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const isClientSide = typeof window !== 'undefined';

  const [state, dispatch] = useReducer(authReducer, {
    token: isClientSide ? localStorage.getItem('token') || null : null,
  });

  const setToken = (token: string) => {
    if (isClientSide) {
      localStorage.setItem('token', token);
      dispatch({ type: 'SET_TOKEN', payload: token });
      console.log(token,"vbbbb")
    }
  };

  const clearToken = () => {
    if (isClientSide) {
      localStorage.removeItem('token');
      dispatch({ type: 'CLEAR_TOKEN' });
    }
  };

  return (
    <AuthContext.Provider value={{ token: state.token, setToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
