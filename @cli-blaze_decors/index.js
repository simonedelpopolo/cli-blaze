export { default as override } from './lib/decors/override.js'
export { default as Blaze } from './lib/decors/blaze.js'

/**
 * Returns a Symbol object from the global symbol registry matching the given key if found. Otherwise, returns a new symbol with this key.
 *
 * @type {(key: string) => symbol}
 */
export const sym = Symbol.for


