import { default as stderr } from '../stderr.js'
import { oftype_, OftypesError } from 'oftypes'

const symbol = Symbol.for( 'activity.stderr.type' )
const stderr_type = Object.defineProperties( stderr,
    {
        [ symbol ] : {
            enumerable: true,
            writable: false,
            configurable: false,

            /**
             * [ activity.stderr.type ]
             *
             * @param {any} message - to check type for.
             * @yields
             * @returns {AsyncGenerator<null|OftypesError, Promise<null>, void>}
             */
            value: async function* stderr_argument_type_check( message ){
                yield await oftype_( message ) === 'Buffer' ||
                      await oftype_( message ) === 'Uint8Array'||
                      await oftype_( message ) === 'String'
                    ? null
                    : OftypesError( `♠ ${symbol.description} - error - ${await oftype_( message ) } not allowed argument`.b_red() )
            }
        }
    }
)

export default stderr_type[ symbol ]
