const controls = document.querySelectorAll('.arrow-left, .arrow-right');
const radios = document.querySelectorAll('.input-boxes');
const items = document.querySelectorAll('.item');
const itemsPerGroup = 4;
let groupIndex = 0;

const cancelApply = document.querySelector('#button-cancel-apply');
const dialogApply = document.querySelector('.apply-dialog');
const modal = document.querySelector('dialog');
const buttonCancelDonate = document.getElementById('button-cancel-modal');
console.log(cancelApply);

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

const inputEmailAdopt = document.getElementById('email-adopt');
const msgErrorAdopt = document.getElementById('error-input-email-adopt');
const fullNameInput = document.getElementById('fullNameInput');
const msgErrorName = document.getElementById('error-input-name');
const buttonAdopt = document.getElementById('button-adopt');
const fullName = /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ \'-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
const email2 = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
const RadioAgree = document.getElementById('radio-agree');
const ErrorAgree = document.getElementById('small-agree');
const dataDay = document.getElementById('day');
const dataMonth = document.getElementById('month');
const dataYear = document.getElementById('year');
const smallErrorData = document.getElementById('error-data');

const divs = document.querySelectorAll(
  '#color-pix, #color-credit, #color-paypal'
);

controls.forEach((control) => {
  control.addEventListener('click', () => {
    const isRight = control.classList.contains('arrow-right');
    if (isRight) {
      groupIndex += 1;
    } else {
      groupIndex -= 1;
    }

    if (groupIndex >= Math.ceil(items.length / itemsPerGroup)) {
      groupIndex = 0;
    }

    if (groupIndex < 0) {
      groupIndex = Math.ceil(items.length / itemsPerGroup) - 1;
    }

    const startIndex = groupIndex * itemsPerGroup;
    const endIndex = Math.min(startIndex + itemsPerGroup, items.length);

    items.forEach((item) => {
      item.classList.add('active');
    });

    for (let i = startIndex; i < endIndex; i++) {
      items[i].classList.remove('active');
    }

    radios[startIndex / itemsPerGroup].checked = true;
  });
});

const donate = document.querySelectorAll(
  '#donate-id, #donate-id2 ,#button-donate-view'
);
const adopt = document.querySelectorAll(
  '#Apply-id  , #apply-page4 ,#button-last-page'
);

donate.forEach(function (el) {
  el.addEventListener('click', () => {
    modal.showModal();
    document.body.classList.add('modal-aberto');
    modal.style.left = '50%';
    modal.style.right = '50%';
  });
});

buttonCancelDonate.onclick = function () {
  modal.close();
  modal.style.left = '2606px';
  document.body.classList.remove('modal-aberto');
};

adopt.forEach(function (el) {
  el.addEventListener('click', () => {
    dialogApply.showModal();
    document.body.classList.add('modal-aberto');
    dialogApply.style.left = '30%';
  });
});

cancelApply.onclick = function () {
  dialogApply.close();
  dialogApply.style.left = '2606px';
  document.body.classList.remove('modal-aberto');
  msgErrorAdopt.innerHTML = '';
  msgErrorName.innerHTML = '';
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

function formatPrice() {
  var input = document.getElementById('priceInput');
  var valor = input.value;

  var valorNumber = parseFloat(valor);

  if (!isNaN(valorNumber)) {
    input.value = 'R$ ' + valorNumber.toFixed(2);
  } else {
    input.value = '';
  }
}
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

const iWannaAdopt = () => {
  let daySelect = dataDay.options[dataDay.selectedIndex].text;
  let monthSelect = dataMonth.options[dataMonth.selectedIndex].text;
  let yearSelect = dataYear.options[dataYear.selectedIndex].text;

  buttonAdopt.addEventListener('click', () => {
    let isValid = true;
    if (inputEmailAdopt.value == 0) {
      msgErrorAdopt.innerHTML = 'Digite um email';
      inputEmailAdopt.focus();
      isValid = false;
    } else {
      msgErrorAdopt.innerHTML = '';
    }
    if (email2.test(inputEmailAdopt.value) === false) {
      console.log(email.test(inputEmailAdopt.value));
      msgErrorAdopt.innerHTML = 'Digite um email valido';
      inputEmailAdopt.focus();
      isValid = false;
    } else {
      msgErrorAdopt.innerHTML = '';
    }

    if (!fullName.test(fullNameInput.value)) {
      msgErrorName.innerHTML = 'Digite um nome valido';
      fullNameInput.focus();
      isValid = false;
    } else {
      msgErrorName.innerHTML = '';
    }

    if (!RadioAgree.checked) {
      ErrorAgree.innerHTML = 'Voce precisa concordar com os termos';
      RadioAgree.focus();
      isValid = false;
    } else {
      ErrorAgree.innerHTML = '';
    }

    if (daySelect == 'Day' || monthSelect == 'Month' || yearSelect == 'Year') {
      smallErrorData.innerHTML = 'Selecione uma Data';
      isValid = false;
    } else {
      smallErrorData.innerHTML = '';
    }

    if (isValid == true) {
      location.href = 'src/success.html';
    }
  });
};

iWannaAdopt();

const buttonSubscribe = document.getElementById('button-Subscribe');
const emailSubscribe = document.getElementById('email-Subscribe');
const inputSmall = document.getElementById('small-subscribe');

buttonSubscribe.addEventListener('click', () => {
  let isValid2 = true;
  if (email2.test(emailSubscribe.value) === false) {
    inputSmall.innerHTML = 'Escreva um Email Valido';
    inputSmall.focus();
    isValid2 = false;
  } else {
    inputSmall.innerHTML = '';
  }

  if (isValid2 == true) {
    location.href = 'src/success.html';
  }
});
