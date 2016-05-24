class LinkedList {
    constructor () {
        this.head = null;
    }

    add (data) {
        var node = {
            data: data,
            next: null
        };
        var current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            // search for tail
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
    }

    remove (index) {
        if (index > -1) {
            var current = this.head;
            var previous;
            var i = 0;
            var removedItem;
            if (index === 0) {
                this.head = current.next;
            } else {
                while (i++ < index && current) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            return current ? current.data : null;
        } else {
            return null;
        }
    }

    get (index) {
        if (index > -1) {
            var current = this.head;
            var i = 0;
            if (index === 0) {
                return this.head;
            }
            while (i++ < index && current) {
                current = current.next;
            }
            return current ? current.data : null;
        } else {
            return null;
        }
    }

    size () {
        var count = 0;
        var current = this.head;
        while (current) {
            current = current.next;
            count++;
        }

        return count;
    }
};

export default LinkedList;
