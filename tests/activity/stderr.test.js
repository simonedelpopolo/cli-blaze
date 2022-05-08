import * as assert from 'node:assert/strict'
import * as tttt from 'trythistrythat'
import { Blaze } from '@cli-blaze/decors'
import { stderr, trace } from '@cli-blaze/activity'


/**
 * Module filename - /Volumes/code/shell-input/tests/activity/stderr.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

  tttt.describe( Blaze.magenta( '# UNIT test [ activity.stderr ]' ) )
  await tttt.separator( 240, 75, '~' )
  await tttt.line()

  try {
    tttt.describe( Blaze.underline( Blaze.bg_yellow( '## String doesn\'t throws/rejects' ) ) )
    await assert.doesNotReject( stderr( 'process.stderr.write({String})' ) )
    await tttt.line()
    tttt.describe( Blaze.green( 'test passed' ) )
    await tttt.line()
    await tttt.separator( 240, 75, '~' )
    await tttt.line()
  }catch ( AssertionError ) {
    trace( AssertionError )
    await tttt.line()
    await tttt.separator( 240, 75, '~' )
    await tttt.line()
    tttt.failed ( true )
  }

  try {
    tttt.describe( Blaze.underline( Blaze.bg_yellow( '## Buffer doesn\'t throws/rejects' ) ) )
    await assert.doesNotReject( stderr( Buffer.from( 'process.stderr.write({Buffer})' ) ) )
    await tttt.line()
    tttt.describe( Blaze.green( 'test passed' ) )
    await tttt.line()
    await tttt.separator( 240, 75, '~' )
    await tttt.line()
  }catch ( AssertionError ) {
    trace( AssertionError )
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

    tttt.describe( Blaze.underline( Blaze.bg_yellow( '## Uint8Array doesn\'t throws/rejects' ) ) )
    await assert.doesNotReject( stderr( messageBufferView ) )
    await tttt.line()
    tttt.describe( Blaze.green( 'test passed' ) )
    await tttt.line()
    await tttt.separator( 240, 75, '~' )
    await tttt.line()

  }catch ( AssertionError ) {
    trace( AssertionError )
    await tttt.line()
    await tttt.separator( 240, 75, '~' )
    await tttt.line()
    tttt.failed ( true )
  }

  try {
    tttt.describe( Blaze.underline( Blaze.bg_yellow( '## Number throws/rejects' ) ) )
    await assert.rejects( stderr( 3 ) )
    const OftypesErrorRejection = await stderr( 3 ).catch( error => error )
    tttt.describe( OftypesErrorRejection.message )
    tttt.describe( Blaze.green( 'test passed' ) )
    await tttt.line()
    await tttt.separator( 240, 75, '~' )
    await tttt.line()
  }catch ( AssertionError ) {
    trace( AssertionError )
    await tttt.line()
    await tttt.separator( 240, 75, '~' )
    await tttt.line()
    tttt.failed ( true )
  }

  tttt.end_test( id )
}
