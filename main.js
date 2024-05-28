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
