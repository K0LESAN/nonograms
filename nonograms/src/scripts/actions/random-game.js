import templates from '../data/templates';
import generatorTemplates from '../template-generator';

export default function () {
  const randomIndex = (arr) => Math.floor(Math.random() * arr.length);
  const sizes = Object.keys(templates);
  const randomSize = sizes[randomIndex(sizes)];
  const templateName = templates[randomSize][randomIndex(randomSize)].name;
  const randomTemplate =
    templates[randomSize][randomIndex(randomSize)].template;
  const size = Number(randomSize.split('x')[0]);

  generatorTemplates(size, randomTemplate, templateName);
}
