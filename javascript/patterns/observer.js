// Subject: maintains a list of observers, facilitates adding or removing observers
// Observer: provides a update interface for objects that need to be notified of a Subject's changes of state
// ConcreteSubject: broadcasts notifications to observers on changes of state,
//                  stores the state of ConcreteObservers
// ConcreteObserver: stores a reference to the ConcreteSubject,
//                   implements an update interface for the Observer to ensure state is consistent with the Subject's

function ObserverList () {
    this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
    this.observerList.push(obj);
}

ObserverList.prototype.get = function (index) {
    //TODO defensive code against index
    return this.observerList[index];
}

ObserverList.prototype.count = function () {
    return this.observerList.length;
}

ObserverList.prototype.indexOf = function (obj, startIndex) {
    return this.observerList.indexOf(obj, startIndex);
}

ObserverList.prototype.removeAt = function (index) {
    this.observerList.splice(index, 1);
}

/**
 * SUBJECT
 */
function Subject () {
    this.observers = new ObserverList();
}

Subject.prototype.addObserver = function (observer) {
    this.observers.add(observer);
}
Subject.prototype.removeObserver = function (observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
}
Subject.prototype.notify = function (context) {
    var observersCount = this.observers.count();
    for (var i = 0; i < observersCount; i++) {
        var observer = this.observers.get(i);
        observer.update(context);
    }
}

/**
 * observer
 */
function Observer () {

}
Observer.prototype.update = function (context) {

}
