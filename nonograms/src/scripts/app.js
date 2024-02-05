import generatorTemplates from './template-generator';
import sizes from './data/templates';

function main() {
  const defaultSize = 5;
  const templates = sizes[`${defaultSize}x${defaultSize}`];
  const { name, template } =
    templates[Math.floor(Math.random() * templates.length)];

  generatorTemplates(defaultSize, template);
}

window.addEventListener('load', main, {
  passive: true,
  once: true
});
