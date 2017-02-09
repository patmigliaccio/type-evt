export class Evt {
    private _events: Array<any>;

    constructor(){
        this._events = [];
    }

    subscribe(eventName: string, handler: Function){
        this._events.push({
            name: eventName,
            handler: handler
        });
    }

    emit(eventName: string){
        let evts = this._events.filter(x => x.name == eventName);

        if (evts.length < 1) return;

        evts.forEach(x => x.handler());
    }

    remove(eventName: string){
        this._events = this._events.filter(x => x.name != eventName);
    }

    destroy(): void{
        this._events = [];
    }

    events(): Array<string>{
        return this._events.map(x => x.name);
    }
}