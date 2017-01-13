
var BigEvent = function() {
};

BigEvent.prototype.on = function(eventName, func) {
    this._listeners = this._listeners || {};
    this._listeners[eventName] = this._listeners[eventName] || [];
    this._listeners[eventName].push(func);
};

BigEvent.prototype.off = function(eventName, func) {
    this._listeners = this._listeners || {};
    this._listeners[eventName].splice(this._listeners[eventName].indexOf(func), 1);
};

BigEvent.prototype.trigger = function(eventName) {
    this._listeners = this._listeners || {};

    var dataArgument = arguments[1] ? arguments[1] : null;
    var events = this._listeners[eventName] || [];

    for(var i = 0; i < events.length; i++) {
        var ev = events[i]

        if(dataArgument) {
            ev.call(this, dataArgument);
        } else {
            ev.call(this);
        }
    };
};

BigEvent.extend = function(obj) {
    var functions = [
        'on',
        'off',
        'trigger'
    ];
    
    for(var i = 0; i < functions.length; i++) {
        var func = functions[i];

        if(typeof obj === 'function') {
            obj.prototype[func] = BigEvent.prototype[func];
        } else {
            obj[func] = BigEvent.prototype[func];
        }
    };
};

var Bigview = function () {
    // payload={domid, html='',}
    this.view = function(payload) {
        this.trigger('pageletArrave', payload);

        if(payload.domid) {
            this.trigger(payload.domid, payload);
        }
    };
    
    this.ready = function(data) {
        console.log('ready')
        this.trigger('ready', data)
    };
    
    this.end = function(data) {
        console.log('end')
        this.trigger('end', data)
    };
    
    this.error = function(payload) {
        console.log('error')
        this.trigger('error', payload)
    };

    this.on('pageletArrive', function(payload) {
        console.log(payload)
        if(payload.error) {
          this.trigger('error', payload)  
        }
    });
};

BigEvent.extend(Bigview);

window.bigview = new Bigview();

if (typeof window.define === 'function' && window.define.amd) {
    window.define('bigview', [], function() {
        return window.bigview;
    });
}
