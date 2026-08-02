const API = process.env.REACT_APP_API_URL;

export default async function Registration(user) {
  const response = await fetch(`${API}/auth/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response.json();
}
