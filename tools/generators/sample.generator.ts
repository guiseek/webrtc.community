import { Listr } from 'listr2'
import { prompt } from 'enquirer'
import { createTask } from '../utilities'

const params = {
  style: `scss`,
  directory: `sample`,
  buildable: true,
  lazy: true,
  linter: `eslint`,
  prefix: `comm`,
  publishable: true,
  routing: true,
  simpleModuleName: true,
  tags: `side:client,type:feat,scope:sample`,
}

interface InitPrompt {
  name: string
  confirm?: boolean
}

prompt<InitPrompt>([
  {
    type: 'input',
    name: 'name',
    message: 'Qual o nome do exemplo?',
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: 'Pronto para criar?',
  },
]).then(async ({ name, confirm }) => {
  if (confirm) {

    const clean = (str: string) => str.replace(/[^A-Z0-9]+/gi, '-')

    const sample = clean(name)

    const parameters = Object.entries(params).map(([prop, value]) => {
      return `--${prop}=${typeof value !== 'boolean' ? value : value}`
    })

    const tasks = new Listr([
      createTask('Create sample', 'nx', [
        'generate',
        '@nrwl/angular:library',
        `--name=${sample}`,
        `--importPath=@webrtc-comm/${sample}`,
        ...parameters,
      ]),
    ])
    await tasks.run().catch(({ message }) => console.error(message))
  }
})
