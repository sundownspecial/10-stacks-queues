'use strict';

const Node = require('./node')


module.exports = class {
    constructor(){
        this.storage = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    enqueue(value) {
        // Check to see if value is defined
        if (value) {
            this.storage[this.count] = value;
            this.count++;
        }
    }

    dequeue() {
        // Check to see if queue is empty
        if (this.count - this.lowestCount === 0) {
            return undefined;
        }
    
        var result = this.storage[this.lowestCount];
        delete this.storage[this.lowestCount];
        this.lowestCount++;
        return result;
    }

}

