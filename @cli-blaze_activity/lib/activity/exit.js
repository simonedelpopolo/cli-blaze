import activity from '../activity.js'
import { exit_type__ } from '../exports.js'
import { stderr } from '../../index.js'

const symbol = Symbol.for( 'activity.exit' )
const exit = Object.defineProperties( activity,
    {
        [ symbol ] : {
            enumerable: true,
            writable: false,
            configurable: false,

            /**
             * Object [ activity.exit ]
             * exit process with message and exit code
             *
             * @param {string|Buffer|Uint8Array} message - of error
             * @param {Error=} error_type - Default dynamically generated error message based on process.title
             * @param {number=} [exit_code=4] - for the process
             * @returns {Promise<void>|void}
             */
            value: async function exit( message, error_type = Error( `${process.title} ♠ error - internal` ), exit_code = 4 ){

                let type
                for await ( const check of await exit_type__( message, error_type, exit_code ) ) {
                    if( check instanceof Error ) {
                        type = check
                        break
                    }
                    type = check
                }

                return new Promise( ( resolve, reject ) => {

                    if( type instanceof Error ) reject( type )

                    else {
                        stderr( `\n${message}\n\n          [stacktrace]\n          ${error_type.stack}\n\n` )
                        resolve( type )
                        process.exit( exit_code )
                    }
                } )
            }
        }

    }
)
export default exit[ symbol ]
