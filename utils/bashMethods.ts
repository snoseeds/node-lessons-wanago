import * as fs from 'fs';
import * as util from 'util';

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const bashMethods = {
    touch(pathOfFile: string, contentOfFile: string) {
        writeFile(pathOfFile, contentOfFile)
            .then(() => {
                console.log('File created successfully')
            })
            .catch(err => {
                console.log(err)
            })
    },

    echo(content: string) {
        console.log(content)
    },

    cat(pathOfFile: string, encoding?: BufferEncoding) {
        readFile(pathOfFile, { encoding })
            .then((content) => {
                console.log(content);
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export default bashMethods;

// add a new method into bashMethods called cat and that behaves like the cat command