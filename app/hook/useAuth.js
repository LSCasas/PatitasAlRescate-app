import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function useAuth() {
  const router = useRouter();
  const [token, setToken] = useState('');

  useEffect(() => {
    const tkn = localStorage.getItem('token');

    setToken(tkn);

    if (!tkn) {
      toast.error('Debes iniciar sesión de nuevo');
      router.push('/login');
      return;
    }
  }, [router]);

  return token;
}