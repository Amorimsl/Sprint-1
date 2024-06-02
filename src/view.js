const donate = document.querySelector('#button-donate-view');
const modal = document.querySelector('dialog');
const buttonCancelDonate = document.getElementById('button-cancel-modal');
const valueInputEmail = document.getElementById('email-input-donate');
const msgErrorInput = document.getElementById('error-input-email');
const valuePrice = document.getElementById('priceInput');
const msgErrorPrice = document.getElementById('error-input-price');
const buttonHelp = document.getElementById('button-confirm-help');
const email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
const radiosPayment = document.querySelectorAll(
  '#radio-donate ,#radio-donate-credit ,#radio-donate-paypau'
);
const smallErrorPayment = document.getElementById('small-pix');

const divs = document.querySelectorAll(
  '#color-pix, #color-credit, #color-paypal'
);

donate.onclick = function () {
  modal.showModal();
  document.body.classList.add('modal-aberto');
  modal.style.left = '50%';
};

buttonCancelDonate.onclick = function () {
  modal.close();
  modal.style.left = '2606px';
  document.body.classList.remove('modal-aberto');
  //msgErrorInput.innerHTML = '';
  //msgErrorPrice.innerHTML = '';
};
radiosPayment.forEach((radio) => {
  radio.addEventListener('change', function () {
    divs.forEach((div, i) => {
      if (radiosPayment[i].checked) {
        div.classList.add('color-divs');
      } else {
        div.classList.remove('color-divs');
      }
    });
  });
});
const iWannaHelp = () => {
  buttonHelp.addEventListener('click', () => {
    let isValidHelp = true;
    if (valueInputEmail.value == 0) {
      msgErrorInput.innerHTML = 'Adicione um email';
      isValidHelp = false;
      //msgErrorInput.style.color = 'red';
    } else {
      msgErrorInput.innerHTML = '';
    }
    if (valuePrice.value == 0) {
      msgErrorPrice.innerHTML = 'Adicione um preço';
      isValidHelp = false;
    } else {
      msgErrorPrice.innerHTML = '';
    }
    if (!email.test(valueInputEmail.value)) {
      msgErrorInput.innerHTML = 'Adicione um email valido';
      // msgErrorInput.style.color = 'red';
      isValidHelp = false;
    } else {
      msgErrorInput.innerHTML = '';
    }

    let isChecked = false;
    radiosPayment.forEach((el) => {
      if (el.checked) {
        isChecked = true;
      }
    });

    if (!isChecked) {
      smallErrorPayment.innerHTML = 'Selecione um método de pagamento!';
      isValidHelp = false;
    } else {
      smallErrorPayment.innerHTML = '';
    }

    if (isValidHelp == true) {
      location.href = 'src/success.html';
    }
  });
};

iWannaHelp();
