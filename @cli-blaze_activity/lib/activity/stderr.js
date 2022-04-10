import activity from '../activity.js'
import { stderr_type__ } from '../exports.js'

const symbol = Symbol.for( 'activity.stderr' )
const stderr = Object.defineProperties( activity,
    {
        [ symbol ]: {
            enumerable: true,
            writable: false,
            configurable: false,

            /**
             * Object [ activity.stderr ]
             * Wrapper for process.stderr.write.
             *
             * @param {Buffer|Uint8Array|string} message - The message to the stderr.
             * @throws OftypesError
             * @returns {Promise<void>|void}
             */
            value: async function stderr( message ){

                let type
                for await ( const check of await stderr_type__( message ) )
                    type = check

                return new Promise( ( resolve, reject ) => {

                    if( type instanceof Error ) reject( type )

                    else {
                        resolve( type )
                        process.stderr.write( message )
                    }
                } )
            }
        }
    }
)
export default stderr[ symbol ]
