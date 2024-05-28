const controls = document.querySelectorAll('.arrow-left, .arrow-right');
const radios = document.querySelectorAll('.input-boxes');
const items = document.querySelectorAll('.item');
const itemsPerGroup = 4; // Defina o número de itens por grupo
let groupIndex = 0; // variavel que define

const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener('click', () => {
    const isLeft = control.classList.contains('arrow-right');

    if (isLeft) {
      groupIndex -= 1;
      console.log(groupIndex);
    } else {
      groupIndex += 1;
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

    items.forEach((item, index) => {
      const isInGroup =
        index >= startIndex && index < startIndex + itemsPerGroup;
      item.classList.toggle('first', isInGroup);
    });

    if (isLeft) {
      items[startIndex].scrollIntoView({
        inline: 'start',
        behavior: 'smooth',
      });
    } else {
      items[startIndex + itemsPerGroup - 1].scrollIntoView({
        inline: 'end',
        behavior: 'smooth',
      });
    }
    // Marcar apenas o botão de rádio correspondente ao grupo atual
    radios[startIndex / itemsPerGroup].checked = true;
  });
});

//function nextOne() {
//const slideDogOne = document.getElementById('slide_dog1');
//const slideDogTwo = document.getElementById('slide-dog2');
//const checkSlide = document.getElementById('slide1');

//slideDogOne.classList.add('hidden');
//checkSlide.checked = false;
//slideDogTwo.classList.remove('hidden');
//checkSlide.checked = true;
//}

//slides.addEventListener('click', nextOne);

//function checkRadio() {
//const radios = document.getElementsByName('radio-btn');
//const slideDogTwo = document.getElementById('slide-dog2');
//const slideDogOne = document.getElementById('slide_dog1');
//radios.forEach((radio) => {
//if (radio.checked) {
//if (radio.id === 'slide2') {
//slideDogOne.classList.add('hidden');
//slideDogTwo.classList.remove('hidden');
// }
// console.log(`${radio.id} is checked`);
//}
//});
//}
//checkRadio();
