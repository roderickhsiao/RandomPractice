import eventTest from '../../../javascript/problems/event';

describe('#event', () => {
    it('binding correct event', () => {
        var a = new eventTest({name: 'Roderick'});
        a.on('change:name', (a, b) => {
            console.log(a, b);
        });
        a.set('name', 'Rod');
    });
});
