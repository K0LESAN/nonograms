import templates from './data/templates';
import templateGenerator from './template-generator';

const button = document.querySelector('.select');

function main(event) {
  const button = event.target.closest('.select__button');
  const selectMenu = event.currentTarget;
  const sizesSelect = selectMenu.children[0];
  const templatesSelect = selectMenu.children[1];

  if (!button) {
    return;
  }

  const sizeIndex = sizesSelect.options.selectedIndex;
  const templateIndex = templatesSelect.options.selectedIndex;

  const size = sizesSelect[sizeIndex].value;
  const templateName = templatesSelect[templateIndex].value;

  const { template } = templates[`${size}x${size}`].find(
    ({ name }) => templateName === name
  );

  templateGenerator(Number(size), template, templateName);
}

button.addEventListener('click', main, {
  passive: true
});
