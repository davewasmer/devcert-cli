import { Command, flags } from '@oclif/command';
import { removeDomain, hasCertificateFor } from 'devcert';
import { writeFileSync as write } from 'fs';

export default class Generate extends Command {

  static description = 'delete the cached certificate for a domain';

  static flags = {};

  static args = [ { name: 'domain' } ];

  async run() {
    const { args } = this.parse(Generate);

    if (!args.domain) {
      this.error('You must supply a domain name that you want to disable.');
    }

    if (!hasCertificateFor(args.domain)) {
      this.error(`${ args.domain } doesn't appear to be configured yet.`);
    }

    removeDomain(args.domain);

    this.log(`${ args.domain } deleted`);
  }
}
