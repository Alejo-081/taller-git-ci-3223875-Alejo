import test from 'node:test';
import assert from 'node:assert/strict';
function suma(a, b) {
  return a + b;
}
test('suma 2 + 3 = 5', () => {
  assert.equal(suma(8, 3), 5);
});
