import * as tttt from 'trythistrythat'
import { Blaze, override, sym } from '@cli-blaze/decors'

/**
 * Module filename - /Volumes/code/cli-blaze/tests/decors/decors.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    override()

    tttt.describe( '# UNIT test [ decors ]' )
    await tttt.separator( 240, 75, '~' )
    await tttt.line()

    tttt.describe( Blaze.rgb( [ 15, 52, 255 ], 'hello' ) )
    tttt.describe( Blaze.red( 'hello red' ) )
    tttt.describe(
        '.'.rgb(
            [ 255, 25, 0 ],
            'hello' )
    )

    tttt.describe( 'hello'.underline().strong().rgb( [ 255, 1, 25 ] ).bg_rgb( [ 14, 1, 25 ] ) )
    tttt.describe(
        '.'.bg_rgb(
            [ 255, 25, 0 ],
            Buffer.from( 'hello'.green( '        ' ) ) )
    )

    override( undefined, true )

    tttt.describe( 'hello from symbol call'[ sym( 'magenta' ) ]() )

    tttt.end_test( id )
}
