import { exit_argument_type_check } from './exit/type.js'
import { stderr }  from '../../index.js'

/**
 * Object [ activity.exit ]
 * exit process with message and exit code
 *
 * @param {string|Buffer|Uint8Array} message - of error
 * @param {Error=} error_type - Default dynamically generated error message based on process.title
 * @param {number=} [exit_code=4] - for the process
 * @returns {Promise<void>|void}
 */
export default async function exit( message, error_type = Error( `${process.title} ♠ error - internal` ), exit_code = 4 ){

    let type
    for await ( const check of await exit_argument_type_check( message, error_type, exit_code ) ) {
        if( check instanceof Error ) {
            type = check
            break
        }
        type = check
    }

    if( !( type instanceof Error ) )
        await stderr( `\n${message}\n\n          [stacktrace]\n          ${error_type.stack}\n\n` )

    return new Promise( ( resolve, reject ) => {
        if( type instanceof Error ) reject( type )

        else process.exit( exit_code )
    } )
}
