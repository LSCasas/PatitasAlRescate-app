const API_URL = 'http://localhost:5500';

// REGISTER
// CREATE USER 
export async function createUser(data) {
    try {
        const res = await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        
        if (!res.ok) {
            const errorJson = await res.json();
            console.error("Respuesta de error del servidor:", errorJson); 
            throw new Error(`Error: ${errorJson.message || 'Error desconocido'}`);
        }

        const json = await res.json();
        return json.data; 
    } catch (error) {
        console.error("Error en createUser:", error);
        throw error; 
    }
}

// LOGIN 
export async function login(email, password) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error in login request:', error);
    throw new Error('Error in login request. Please try again later.');
  }
}
