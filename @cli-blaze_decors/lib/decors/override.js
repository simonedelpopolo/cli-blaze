import Blaze from './blaze.js'

/**
 * Extends String.prototype with a given prefix.
 * - Do Not pass argument prefix to Extend the String.prototype & Buffer.prototype without a prefix ⚠ not good practice anyway :)
 * - dynamically imports this same file and excludes this same function from being added to String.prototype
 *
 * @example
 * import { override, sym } from @cli-blaze/decors'
 *
 * // override
 * await override()
 * console.log('my string'.red())
 *
 * // prefixed
 * await override('prefix_')
 * console.log('my string'.prefix_red())
 *
 * // Symbolized
 * await override(undefined,true)
 * console.log('my_string'[sym('red')]())
 * @param {string?} prefix - for the String.prototype[function]
 * @param {boolean?} symbol - Extend String.prototype using Symbol.for
 */
export default function override( prefix, symbol ){

    if( ! prefix )
        prefix = ''

    if( ! symbol )
        symbol = false

    for ( const func in  Blaze ) {
        if ( symbol ){
            String.prototype[ Symbol.for ( `${ prefix }${ Blaze[ func ].name }` ) ] = Blaze[ func ]
            Buffer.prototype[ Symbol.for( `${ prefix }${ Blaze[ func ].name }` ) ] = Blaze[ func ]
        }else {
            String.prototype[ `${ prefix }${ Blaze[ func ].name }` ] = Blaze[ func ]
            Buffer.prototype[ `${ prefix }${ Blaze[ func ].name }` ] = Blaze[ func ]
        }
    }
}
