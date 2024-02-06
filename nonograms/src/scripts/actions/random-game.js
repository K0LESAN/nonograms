import templates from '../data/templates';
import generatorTemplates from '../template-generator';
import { controllerTime } from '../timer';

export default function () {
  const randomIndex = (arr) => Math.floor(Math.random() * arr.length);
  const sizes = Object.keys(templates);
  const randomSize = sizes[randomIndex(sizes)];
  const templateName = templates[randomSize][randomIndex(randomSize)].name;
  const randomTemplate =
    templates[randomSize][randomIndex(randomSize)].template;
  const size = Number(randomSize.split('x')[0]);

  controllerTime.stop();
  controllerTime.start();

  generatorTemplates(size, randomTemplate, templateName);
}
