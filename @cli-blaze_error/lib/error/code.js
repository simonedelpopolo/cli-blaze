import error from '../error.js'
export default Object.defineProperties( error[ Symbol.for( 'error' ) ],
    {
        [ Symbol.for( 'error.code' ) ] : {
            enumerable: true,
            writable: false,
            configurable: false,

            /**
             * Object [ error.code ]
             * key:value constants for exitCode.
             *
             * @type {{COMMAND:1,FLAG:2,TYPE:3,INTERNAL:4}}
             */
            value: {
                /**
                 * @type {int}
                 */
                COMMAND: 1,
                FLAG: 2,
                TYPE: 3,
                INTERNAL: 4
            }
        },
        [ Symbol.for( 'error.add' ) ]:{
            enumerable: true,
            writable: false,
            configurable: false,

            /**
             * Object [ error.add ]
             * Add new property & exitCode.
             *
             * @param {string} key - property name
             * @param {number} value - exitCode
             * @returns {Promise<void>|void}
             */
            value: async function add( key, value ){
                let error_code = error[ Symbol.for( 'error' ) ][ Symbol.for( 'error.code' ) ]
                error_code[ key ] = value
            }
        },
        [ Symbol.for( 'error.replace' ) ]:{
            enumerable: true,
            writable: false,
            configurable: false,

            /**
             * Object [ error.replace ]
             * Replace exitCode for property
             *
             * @param {string} key - property name
             * @param {number} value - exitCode
             * @returns {Promise<void>|void}
             */
            value: async function replace( key, value ){
                let error_code = error[ Symbol.for( 'error' ) ][ Symbol.for( 'error.code' ) ]
                error_code[ key ] = value
            }
        }
    }
)

