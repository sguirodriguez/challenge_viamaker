module.exports = (plop) => {
  plop.setGenerator('page', {
    description: 'Generate a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter module page (in CamelCase):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/pages/{{name}}/{{name}}.controller.tsx',
        templateFile: './plops-templates/pages/controller.tsx.hbs',
      },
      {
        type: 'add',
        path: './src/pages/{{name}}/{{name}}.screen.tsx',
        templateFile: './plops-templates/pages/screen.tsx.hbs',
      },
      {
        type: 'add',
        path: './src/pages/{{name}}/{{name}}.styles.ts',
        templateFile: './plops-templates/pages/styles.tsx.hbs',
      },
    ],
  });
};