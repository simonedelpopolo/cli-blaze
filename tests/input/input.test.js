import * as input from '@cli-blaze/input'
import * as tttt from 'trythistrythat'



/**
 * Module filename - /Volumes/code/cli-blaze/tests/input/input.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    tttt.describe( '# UNIT test [ input ]' )
    await tttt.separator( 240, 75, '~' )
    await tttt.line()

    const logic = async ( argv ) => {return argv }
    console.trace( await input.entry_point( [ 'hello' ], { executable:[ '4t' ], '4t': logic } ) )

    tttt.end_test( id )
}
