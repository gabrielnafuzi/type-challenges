module.exports = plop => {
  plop.setGenerator('question', {
    description: 'question name',
    prompts: [
      {
        type: 'input',
        name: 'questionName',
        message: 'question name please'
      },
      {
        type: 'input',
        name: 'typeName',
        message: 'question Type name'
      },
      {
        name: 'questionLevel',
        message: 'question level',
        type: 'list',
        choices: ['easy', 'medium', 'hard', 'extreme']
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/questions/{{questionLevel}}/{{questionName}}.ts',
        templateFile: 'templates/index.ts.hbs'
      }
    ]
  })
}
