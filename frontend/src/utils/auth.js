export const baseUrl = "http://localhost:3000";

const checkResponce = (res) => {
  console.log('auth.checkResponce проверка на 200 ответ', res.json().then((res) => console.log(res)));
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const register = ({ email, password }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    console.log('получено от сервера в ответ на регистрацию', res);
    checkResponce(res);
  });
};

export const login = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResponce(res));
};

export const checkToken = () => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      // Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    console.log(res, 'тута');
    checkResponce(res);
  });
};
