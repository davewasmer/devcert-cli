import { Command, flags } from '@oclif/command';
import { certificateFor } from 'devcert';
import { writeFileSync as write } from 'fs';

export default class Generate extends Command {

  static description = 'generate an SSL/TLS private key and certificate for a domain';

  static flags = {
    skipCertutilInstall: flags.boolean({
      description: "don't attempt to install nss / certutil tooling (needed on some platforms to automate setup)"
    }),
    skipHostsFile: flags.boolean({
      description: "don't attempt to modify the /etc/hosts file to support custom domains"
    })
  };

  static args = [ { name: 'domain' } ];

  async run() {
    const { flags, args } = this.parse(Generate);

    if (!args.domain) {
      this.error('You must supply a domain name to use for the generated certificates');
    }

    let { key, cert } = await certificateFor(args.domain, <any>flags);

    write(`${ args.domain }.key`, key);
    write(`${ args.domain }.cert`, cert);

    this.log(`${ args.domain }.key and ${ args.domain }.cert generated`);
  }
}
