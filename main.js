const controls = document.querySelectorAll('.arrow-left, .arrow-right');
const radios = document.querySelectorAll('.input-boxes');
const items = document.querySelectorAll('.item');
const itemsPerGroup = 4; // Defina o número de itens por grupo
let groupIndex = 0; // variavel que define

const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener('click', (event) => {
    event.preventDefault();
    const isRight = control.classList.contains('arrow-right');
    if (isRight) {
      groupIndex += 1;
      console.log(groupIndex);
    } else {
      groupIndex -= 1;
      console.log(groupIndex);
    }
    if (groupIndex >= Math.ceil(items.length / itemsPerGroup)) {
      groupIndex = 0;
    }

    if (groupIndex < 0) {
      groupIndex = Math.ceil(items.length / itemsPerGroup) - 1;
      console.log(groupIndex);
    }

    const startIndex = groupIndex * itemsPerGroup;

    if (isRight) {
      items[startIndex].scrollIntoView({
        inline: 'start',
        behavior: 'smooth',
        block: 'nearest',
      });
    } else {
      items[startIndex + itemsPerGroup - 1].scrollIntoView({
        inline: 'end',
        behavior: 'smooth',
        block: 'nearest',
      });
    }
    // Marcar apenas o botão de rádio correspondente ao grupo atual
    radios[startIndex / itemsPerGroup].checked = true;
  });
});

const donate = document.querySelectorAll(
  '#donate-id, #donate-id2 ,#button-donate-view'
);
const adopt = document.querySelectorAll(
  '#Apply-id  , #apply-page4 ,#button-last-page'
);
const cancelApply = document.getElementById('button-cancel-apply');
const dialogApply = document.querySelector('.apply-dialog');
//const donateHeader = document.getElementById('donate-id2');
const modal = document.querySelector('dialog');
const buttonCancelDonate = document.getElementById('button-cancel-modal');
console.log(cancelApply);
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
// show modal Apply to Adopt
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
};
