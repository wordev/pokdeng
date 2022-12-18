const _deck = require('../deck/deck');

describe('Testing Deck', () => {

    test('deck should be length = 52', () => {
        let deck = _deck.DeckCard()
        expect(deck.length).toBe(52);
    });

});