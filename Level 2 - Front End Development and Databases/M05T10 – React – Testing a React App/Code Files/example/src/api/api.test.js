import fetchData from './api';
import { test, expect, describe } from 'vitest';

// Investigate Line 5 of the `pretty-print` version of
// https://pokeapi.co/api/v2/pokemon/squirtle/
describe('PokeAPI data check', () => {
  test('the first ability of Squirtle is "torrent"', async () => {
    const ability = await fetchData('squirtle');
    expect(ability).toBe('torrent');
  });

  // test('garbage input throws an error', async () => {
  //   await expect(fetchData('foobar')).rejects.toThrow();
  // });
});
