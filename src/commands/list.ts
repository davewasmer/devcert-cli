import { Command } from '@oclif/command';
import { configuredDomains } from 'devcert';

export default class List extends Command {

  static description = 'list the domains that devcert has generated a certificate for';

  static examples = [
    `$ devcert list
Configured domains:

my-app.test
client-project.test
`
  ];

  static flags = {};

  static args = [];

  async run() {
    this.log(`Configured domains:\n`);
    this.log(`  ${ configuredDomains().join('\n  ') }`);
  }

}
