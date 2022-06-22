import * as fs from 'fs';
import * as util from 'util';

const writeFile = util.promisify(fs.writeFile);

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

    echo: function echo(content: string) {
        console.log(content)
    }
}

export default bashMethods;

// add a new method into bashMethods called cat and that behaves like the cat command