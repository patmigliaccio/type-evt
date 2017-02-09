import {Evt} from '../src/type-evt';

function statusUpdate(){
    console.log('App has emitted a status update.');
}

function listClosure(){
    console.log(eventer.events());
}

let eventer = new Evt();
eventer.subscribe('status', statusUpdate);
eventer.subscribe('list', listClosure);

eventer.emit('status');
eventer.emit('list');
