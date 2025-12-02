import assert from 'assert';
import { suma } from '../SRC/app.js';

describe('suma', () => {
  it('suma 2 + 3 debe ser 5', () => {
    assert.strictEqual(suma(2, 3), 5);
  });
});