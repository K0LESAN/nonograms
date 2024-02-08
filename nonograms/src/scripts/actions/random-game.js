import templates from '../data/templates';
import generatorTemplates from '../helpers/template-generator';

export default function () {
  const randomIndex = (arr) => Math.floor(Math.random() * arr.length);
  const sizes = Object.keys(templates);
  const randomSize = sizes[randomIndex(sizes)];
  const arrTemplates = templates[randomSize];
  const { name, template } = arrTemplates[randomIndex(arrTemplates)];
  const size = Number(randomSize.split('x')[0]);

  generatorTemplates(size, template, name);
}
