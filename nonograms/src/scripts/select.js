import templates from './data/templates';
import templateGenerator from './template-generator';

function startNewTemplate(event) {
  const button = event.target.closest('.select__button');
  const selectMenu = event.currentTarget;
  const sizesSelect = selectMenu.children[0];
  const templatesSelect = selectMenu.children[1];
  console.log(button);
  if (!button) {
    return;
  }

  const sizeIndex = sizesSelect.options.selectedIndex;
  const templateIndex = templatesSelect.options.selectedIndex;

  const size = sizesSelect[sizeIndex].value;
  const templateName = templatesSelect[templateIndex].value;

  const { template } = templates[size].find(
    ({ name }) => templateName === name
  );

  templateGenerator(Number(size.split('x')[0]), template, templateName);
}

function renderOptions(event) {
  const sizesSelect = event.target.closest('.select-sizes');
  const selectMenu = event.currentTarget;
  const templatesSelect = selectMenu.children[1];

  if (!sizesSelect) {
    return;
  }

  const size = event.target.value;
  templatesSelect.innerHTML = '';

  for (const { name } of templates[size]) {
    const optionTemplate = document.createElement('option');
    optionTemplate.classList.add('select-sizes__item');
    optionTemplate.textContent = name;
    optionTemplate.value = name;
    templatesSelect.append(optionTemplate);
  }
}

export { startNewTemplate, renderOptions };
