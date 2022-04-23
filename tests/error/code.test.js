import * as error from '@cli-blaze/error'
import * as tttt from 'trythistrythat'

/**
 * Module filename - /Volumes/code/cli-blaze/@cli-blaze_error/tests/code.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    tttt.describe( '# UNIT test [ error.code ]' )
    await tttt.separator( 240, 75, '~' )
    await tttt.line()

    console.dir( error, { depth:null } )

    error.add( 'APPLICATION', 6 )

    console.dir( error.error_code, { depth:null } )

    error.replace( 'APPLICATION', 165 )

    console.dir( error.error_code, { depth:null } )

    tttt.end_test( id )
}
