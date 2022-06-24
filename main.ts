import bash from './utils/bashMethods';

const { touch, echo, cat } = bash;

const [, , command ] = process.argv;

if (command) {
    switch (command) {
      case 'touch': {
        const [,,, path, content ] = process.argv;
        if (path) {
            if (content) {
                touch(path, content);
            } else {
                touch(path, '')
            }
        } else {
            console.log('path is not provided')
        }
        break;
      }

      case 'echo': {
        const [,,, contentToEcho ] = process.argv
        echo(contentToEcho);
        break;
      }

      case 'cat': {
        const [,,, path, encoding ] = process.argv;
        if (path) {
          if (encoding) {
            let allowedEncoding = new Set(
              `"ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "base64url" | "latin1" | "binary" | "hex"`
                .split(' | ')
                .map(str => str.substring(1, str.length - 2))
            );
    
            if (allowedEncoding.has(encoding)) {
              cat(path, encoding as BufferEncoding);
            } else {
              console.log('The passed encoding is not allowed');
            }
          } else {
            cat(path)
          }
        } else {
          console.log('path is not provided')
        }
        break;
      }

      default: {
        console.log('Unknown command');
      }
    }
} else {
    console.log('Command missing');
}
