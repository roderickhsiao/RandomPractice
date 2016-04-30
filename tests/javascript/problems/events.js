import eventTest from '../../../javascript/problems/event';

describe('#event', () => {
    it.only('output currect set', () => {
        var a = new eventTest({name: 'Roderick'});
        a.on('change:name', (a, b) => {
            console.log(a, b);
        });
        a.set('name', 'Rod');
    });
});
