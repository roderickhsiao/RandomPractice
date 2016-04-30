const EventEmitter = require('events');

class Emitter extends EventEmitter {
    constructor (props) {
        super(props);
        var self = this;
        Object.keys(props).forEach((prop) => {
            self[prop] = props[prop];
        });
    }
    get (key) {
        return this[key]
    }
    set (key, val) {
        this.emit('change:'+ key, key, val);
        this[key] = val;
    }
    unset (key) {
        this[key] = null;
    }
}

export default Emitter;
