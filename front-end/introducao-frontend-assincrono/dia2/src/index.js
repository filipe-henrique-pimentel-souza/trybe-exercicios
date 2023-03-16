import { fillUsersSelect } from '../utils/updateUI';
import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = fetch('https://dummyjson.com/users')
  .then((response) => response.json())
  .then((data) => {
    const { users } = data;
    fillUsersSelect(users);
  });
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.

usersSelect.addEventListener('change', () => {
  // clearPageData();
  fetch(`https://dummyjson.com/posts/user/${userID}`).then((response) =>
    response.json()
  ).then((data) => console.log(data));
  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});
