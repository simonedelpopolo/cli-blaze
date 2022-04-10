import * as assert from 'node:assert/strict'
import * as tttt from 'trythistrythat'
import { stderr } from '@cli-blaze/activity'

/**
 * Module filename - /Volumes/code/shell-input/tests/activity/stderr.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    tttt.describe( '# UNIT test [ activity.stderr ]'.magenta() )
    await tttt.separator( 240, 75, '~' )
    await tttt.line()

    try {
        tttt.describe( '## String doesn\'t throws/rejects'.underline().bg_yellow()  )
        await assert.doesNotReject( stderr( 'process.stderr.write({String})' ) )
        await tttt.line()
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
        tttt.describe( '## Buffer doesn\'t throws/rejects'.underline().bg_yellow() )
        await assert.doesNotReject( stderr( Buffer.from( 'process.stderr.write({Buffer})' ) ) )
        await tttt.line()
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
        // - generating Uint8Array form string[] of characters.
        let messageArray = Array.from( 'process.stderr.write({Uint8Array})' )
        const message_length = messageArray.length
        const messageBufferView = new Uint8Array( message_length )
        for ( const char in messageArray ) messageBufferView[ char ] = messageArray[ char ].codePointAt( 0 )

        tttt.describe( '## Uint8Array doesn\'t throws/rejects'.underline().bg_yellow() )
        await assert.doesNotReject( stderr( messageBufferView ) )
        await tttt.line()
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
        tttt.describe( '## Number throws/rejects'.underline().bg_yellow()  )
        await assert.rejects( stderr( 3 ) )
        const OftypesErrorRejection = await stderr( 3 ).catch( error => error )
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

    tttt.end_test( id )
}
