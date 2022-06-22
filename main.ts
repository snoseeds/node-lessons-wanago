import bash from './utils/bashMethods';

const { touch, echo } = bash;

const [, , command, path, strToWrite ] = process.argv;

if (command && path) {
    switch (command) {
      case 'touch': {
        touch(path, strToWrite);
        break;
      }

      case 'echo': {
        echo(process.argv[3]);
        break;
      }

      default: {
        console.log('Unknown command');
      }
    }
} else {
    console.log('Command missing');
}
