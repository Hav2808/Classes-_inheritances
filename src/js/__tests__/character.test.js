import Character from '../character.js';

test('New character with invalid name (too short)', () => {
    expect(
        () => new Character ('O', 'Bowman', 100, 100),
    ).toThrow('Invalid name length');
});

test('New character with invalid name (too long)', () => {
    expect(
        () => new Character ('LooooooongName', 'Daemon', 100, 100),
    ).toThrow('Invalid name length');
});

test('Invalid character type throws an error', () => {
    expect(() => new Character('Bowy', 'BowBBman', 100, 100)).toThrow('Invalid character type');
});
