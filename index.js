const EventEmitter = require('events');

class MeuEmissor extends EventEmitter {

};

const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';

meuEmissor.on(nomeEvento, (click) => {
  console.log('O usuário clicou ', click);
});

meuEmissor.emit(nomeEvento, 'no ok');
meuEmissor.emit(nomeEvento, 'na barra de tarefas');

setInterval(() => {
  meuEmissor.emit(nomeEvento, 'no botão');
}, 3000);



