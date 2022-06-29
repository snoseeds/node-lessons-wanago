import * as EventEmitter from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('slap', function(...data) {
    console.log(data);
    console.log('slapping is dehumanizing')
})

function adviceForAMuslim () {
    console.log('slapping is not allowed in Islam')
}

eventEmitter.on('slap', adviceForAMuslim);

const [,, isAMuslim ] = process.argv;

if (Boolean(+isAMuslim) === false) {
    eventEmitter.removeListener('slap', adviceForAMuslim)
}

eventEmitter.emit('slap');
// eventEmitter.emit('slap', {
//     slapper: "Oppresor A",
//     slappee: "Oppressed fellow"
// });