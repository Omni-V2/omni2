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
  const [state, dispatch] = useReducer(authReducer, { token: localStorage.getItem('token') || null });

  const setToken = (token: string) => {
    localStorage.setItem('token', token);
    dispatch({ type: 'SET_TOKEN', payload: token });
  };

  const clearToken = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'CLEAR_TOKEN' });
  };

  return (
    <AuthContext.Provider value={{ token: state.token, setToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): any => {
  const context = useContext(AuthContext);
  if (!context) {
console.log("err")
  }
  else 
  return context;
};

export { AuthProvider, useAuth };

