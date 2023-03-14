import './style.css';
import validator from 'validator';

const inputName = document.getElementById('name');
const inputValidador = document.getElementById('validador');
const inputSelect = document.getElementById('select');

const validaEmail = () => {
  inputValidador.removeEventListener('click', validaNumero);
  inputValidador.addEventListener('click', () =>
    console.log(validator.isEmail(inputName.value))
  );
};

const validaNumero = () => {
  inputValidador.removeEventListener('click', validaEmail);
  inputValidador.addEventListener('click', () =>
    console.log(validator.isFloat(inputName.value))
  );
};

const qualValidacao = (qual) => {
  if (qual === 'email') validaEmail();
  if (qual === 'numero') validaNumero();
  console.log(qual);
};

inputSelect.addEventListener('change', (event) => {
  qualValidacao(event.target.value);
});
