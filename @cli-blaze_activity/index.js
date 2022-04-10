import { createRequire } from 'module'
import {
    activity__,
    exit__,
    stderr__,
} from './lib/exports.js'

/**
 *
 * Object [ activity ]
 *
 * @private
 */

/**
 * Object [ activity.exit ]
 * exit process with message and exit code
 *
 * @param {string|Buffer|Uint8Array} message - of error
 * @param {Error=} error_type - Default dynamically generated error message based on process.title
 * @param {number=} [exit_code=4] - for the process
 * @returns {Promise<void>|void}
 */
export async function exit( message, error_type = Error( `${process.title} ♠ error - internal` ), exit_code = 4 ){
    return exit__( message, error_type, exit_code )
}

/**
 * Object [ activity.stderr ]
 * Wrapper for process.stderr.write.
 *
 * @param {Buffer|Uint8Array||ArrayBuffer|string} message - The message to the stderr.
 * @throws OftypesError
 * @returns {Promise<void>|void}
 */
export async function stderr( message ){
    return stderr__( message )
}

const require = createRequire( import.meta.url )
export const { version } = require( './package.json' )
export const activity = activity__
