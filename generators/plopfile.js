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
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../questions/{{questionName}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      }
    ]
  })
}
