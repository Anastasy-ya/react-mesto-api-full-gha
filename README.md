*Read this in [Russian](README.rus.md)*

# mesto-full
*Practical work for studying React*

*Social network application with frontend and backend*  
  
## The application is deployed on the server. Links to the project are provided:

Frontend https://anastasy-ya.pet-project.nomoredomains.work

Backend https://s.anastasy-ya.pet-project.nomoredomains.work

## Technologies
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

The project was made with vanilla JavaScript [link](https://github.com/Anastasy-ya/mesto), <br>
and then remade with React

Full writing history:<br>
[Фронтенд](https://github.com/Anastasy-ya/react-mesto-auth)<br>
[Бэкенд](https://github.com/Anastasy-ya/express-mesto-gha)<br>

*Functionality:*
- Social network application with registration.
- Adaptive layout taking into account possible overflow of blocks.
- Receiving an array of cards, likes, the user's name, avatar, and information from the server.
- Adding and deleting: likes, cards.
- Changing: the user's name, avatar, and information by requesting the server.
- Smooth opening and closing of pop-ups.
- When opening the edit name and user information pop-up, the fields are filled with the values displayed on the page.
- Pop-ups open by clicking on the corresponding button and close by clicking on the "x", overlay, button ESC, form submit.
- Routes are protected by authentication.
- JWT token stored in local storage.
- A backend has been written for the project using Node.js.<br>

[Figma layout](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)

## To launch app (It may be necessary to change the frontend connection addresses and CORS settings for the backend)

1. Clone the project to your computer from [Github]() using the command:
```
git clone git@github.com:Anastasy-ya/react-mesto-api-full-gha.git
```
2. Next, for each folder frontend and backend in turn: Navigate to the project folder
```
cd .\backend\   cd .\frontend\
```
3. Install:
```
npm install
```
4. And launch app:
```
npm start
```


Repository address: https://github.com/Anastasy-ya/react-mesto-api-full-gha
