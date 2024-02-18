import Bowman from '../bowman.js';

test ('New Bowman', () => {
    const bowman = new Bowman('Bowm');
    expect(bowman).toEqual({
        name: 'Bowm',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});