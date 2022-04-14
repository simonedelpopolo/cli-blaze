import { error_, number_, oftype_, OftypesError } from 'oftypes'

/**
 * [ activity.exit.type ]
 *
 * @param {any} message - to check type for.
 * @param {any} error_type - to check type for.
 * @param {any} exit_code - to check type for.
 * @yields
 * @returns {AsyncGenerator<null|OftypesError, Promise<null>, void>}
 */
export async function* exit_argument_type_check( message, error_type, exit_code ){

    yield await oftype_( message ) === 'Buffer' ||
          await oftype_( message ) === 'Uint8Array'||
          await oftype_( message ) === 'String'
        ? null
        : OftypesError( `♠ activity.exit.type - error - <oftype>${await oftype_( message ) }</oftype> not allowed for <argument>message</argument>`.b_red() )

    yield await error_( error_type )
        ? null
        : OftypesError( `♠ activity.exit.type - error - <oftype>${await oftype_( error_type ) }</oftype> not allowed for <argument>error_type</argument>`.b_red() )

    yield await number_( exit_code, undefined, undefined, false )
        ? null
        : OftypesError( `♠ activity.exit.type - error - <oftype>${await oftype_( exit_code ) }</oftype> not allowed for <argument>exit_code</argument>`.b_red() )
}
