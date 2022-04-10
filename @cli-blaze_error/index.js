import { createRequire } from 'module'
import { error__, error_code__ } from './lib/exports.js'

export const error = error__

/**
 * Object [ error.code ]
 * key:value constants for exitCode.
 *
 * @type {{COMMAND:1,FLAG:2,TYPE:3,INTERNAL:4}}
 */
export const error_code = error_code__[ Symbol.for( 'error.code' ) ]
/**
 * Object [ error.add ]
 * Add new property & exitCode.
 *
 * @param {string} key - property name
 * @param {number} value - exitCode
 * @returns {Promise<void>|void}
 */
export async function add( key, value ){
    return error_code__[ Symbol.for( 'error.add' ) ]( key, value )
}

/**
 * Object [ error.replace ]
 * Replace exitCode for property
 *
 * @param {string} key - property name
 * @param {number} value - exitCode
 * @returns {Promise<void>|void}
 */
export async function replace( key, value ) {
    return error_code__[ Symbol.for( 'error.replace' ) ]( key, value )
}

const require = createRequire( import.meta.url )
export const { version } = require( './package.json' )
