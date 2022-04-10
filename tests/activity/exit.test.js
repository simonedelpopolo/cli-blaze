import * as assert from 'node:assert/strict'
import * as tttt from 'trythistrythat'
import { exit } from '@cli-blaze/activity'
import { spawn } from 'node:child_process'
import { URL } from 'url'

const __dirname = new URL( '.', import.meta.url ).pathname

/**
 * Module filename - /Volumes/code/shell-input/tests/activity/exit.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    tttt.describe( '# UNIT test [ activity.exit ]' )
    await tttt.separator( 240, 75, '~' )
    await tttt.line()

    tttt.describe( '# spawn process receives exitCode=1'.bg_yellow().underline().strong(), 'result of the test is delayed'.bg_red().color( 255 ) )

    const exitCode1 = spawn( `${__dirname}process/exitCode1.js`, { stdio:[ 'ignore', process.stdout, process.stderr ] } )

    exitCode1.on( 'exit', async code => {
        console.trace( code )
        try{
            assert.ok( code === 1 )
            await tttt.separator( 240, 75, '~' )
            await tttt.line()
            tttt.describe( 'spawned process exited with code'.bg_red().color( 255 ), code )
            tttt.describe( 'test passed'.green() )

        } catch ( AssertionError ) {

            tttt.describe( AssertionError )
            tttt.failed( true )
            await tttt.separator( 240, 75, '~' )
            await tttt.line()
            tttt.describe( 'test failed'.red() )
        }
        tttt.end_test( id )
    } )

    try {
        tttt.describe( '## error_type argument requires to be instanceof Error throws/rejects'.underline().bg_yellow()  )
        await assert.rejects( exit( 'the message error', 'error_type requires to be instanceof Error' ) )
        const OftypesErrorRejection = await exit( 'the message error', 'error_type requires to be instanceof Error' ).catch( error => error )
        tttt.describe( OftypesErrorRejection.message )
        tttt.describe( 'test passed'.green() )
        await tttt.line()
        await tttt.separator( 240, 75, '~' )
        await tttt.line()
    }catch ( AssertionError ) {
        console.trace( AssertionError )
        await tttt.line()
        await tttt.separator( 240, 75, '~' )
        await tttt.line()
        tttt.failed ( true )
    }

    try {
        tttt.describe( '## exit_code argument requires to be Number throws/rejects'.underline().bg_yellow()  )
        await assert.rejects( exit( 'the message error', new Error( 'extra info and stack trace' ), { exit_code: 'must be Number' } ) )
        const OftypesErrorRejection = await exit( 'the message error', new Error( 'extra info and stack trace' ), { exit_code: 'must be Number' } ).catch( error => error )
        tttt.describe( OftypesErrorRejection.message )
        tttt.describe( 'test passed'.green() )
        await tttt.line()
        await tttt.separator( 240, 75, '~' )
        await tttt.line()
    }catch ( AssertionError ) {
        console.trace( AssertionError )
        await tttt.line()
        await tttt.separator( 240, 75, '~' )
        await tttt.line()
        tttt.failed ( true )
    }

    try {
        tttt.describe( '## message argument requires to be Uint8Array|Buffer|String throws/rejects'.underline().bg_yellow()  )
        await assert.rejects( exit( 3, new Error( 'extra info and stack trace' ), 1 ) )
        const OftypesErrorRejection = await exit( 3, new Error( 'extra info and stack trace' ), 1 ).catch( error => error )
        tttt.describe( OftypesErrorRejection.message )
        tttt.describe( 'test passed'.green() )
        await tttt.line()
        await tttt.separator( 240, 75, '~' )
        await tttt.line()
    }catch ( AssertionError ) {
        console.trace( AssertionError )
        await tttt.line()
        await tttt.separator( 240, 75, '~' )
        await tttt.line()
        tttt.failed ( true )
    }
}
