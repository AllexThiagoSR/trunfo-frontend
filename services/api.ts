const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const login = async (email: string, password: string) => {
  console.log(email, password);
  
  const response = await fetch(
    `${BASE_API_URL}/users/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }
  )

  return response.json();
}

export const createUser = async (email: string, password: string, username: string, image?: string) => {
  const response = await fetch(
    `${BASE_API_URL}/users`,
    {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ email, password, username, image: image || undefined })
    }
  )

  return response.json();
} 
