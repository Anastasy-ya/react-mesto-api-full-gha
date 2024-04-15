export const baseUrl = "http://s.anastasy-ya.pet-project.nomoredomains.work"; //"http://localhost:3000/" "https://s.anastasy-ya.pet-project.nomoredomains.work"

function checkResponce(res) {
  //повторяющийся кот (^˵◕ω◕˵^)(^˵◕ω◕˵^)(^˵◕ω◕˵^)
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
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
      "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    return checkResponce(res);
  });
};

  export const logOut = () => {
    return fetch(`${baseUrl}/signout`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => checkResponce(res));
  };

