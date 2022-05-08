import * as assert from 'node:assert/strict'
import * as tttt from 'trythistrythat'
import { Blaze } from '@cli-blaze/decors'
import { spawn } from 'node:child_process'
import { URL } from 'url'
import { exit, trace } from '@cli-blaze/activity'

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

  tttt.describe(
    Blaze.underline( Blaze.strong( Blaze.bg_yellow( '# spawn process receives exitCode=1' ) ) ),
    Blaze.bg_red( Blaze.color( 255, 'result of the test is delayed' ) ) )

  await tttt.separator()
  tttt.describe( '| spawned         ', ` ${Blaze.b_yellow( id )} `, '        process |' )
  await tttt.separator()

  let exitCode1 = spawn( `${__dirname}process/exitCode1.js`, { stdio:[ 'ignore', process.stdout, process.stderr, 'ipc' ] } )

  exitCode1.send( id )
  exitCode1.on( 'exit', async code => {

    try{
      assert.ok( code === 1 )
      await tttt.separator( 240, 75, '~' )
      await tttt.line()
      tttt.describe( Blaze.bg_red( Blaze.color( 255, 'spawned process exited with code' ) ), code )
      tttt.describe( Blaze.green( 'test passed' ) )

    } catch ( AssertionError ) {

      trace( AssertionError )
      tttt.failed( true )
      await tttt.separator( 240, 75, '~' )
      await tttt.line()
      tttt.describe( Blaze.red( 'test failed' ) )
    }
    tttt.end_test( id )
  } )

  try {
    tttt.describe( Blaze.underline( Blaze.bg_yellow( '## error_type argument requires to be instanceof Error throws/rejects' ) ) )
    await assert.rejects( exit( 'the message error', 'error_type requires to be instanceof Error' ) )
    const OftypesErrorRejection = await exit( 'the message error', 'error_type requires to be instanceof Error' ).catch( error => error )
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

  try {
    tttt.describe( Blaze.underline( Blaze.bg_yellow( '## exit_code argument requires to be Number throws/rejects' ) ) )
    await assert.rejects( exit( 'the message error', new Error( 'extra info and stack trace' ), { exit_code: 'must be Number' } ) )
    const OftypesErrorRejection = await exit( 'the message error', new Error( 'extra info and stack trace' ), { exit_code: 'must be Number' } ).catch( error => error )
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

  try {
    tttt.describe( Blaze.underline( Blaze.bg_yellow( '## message argument requires to be Uint8Array|Buffer|String throws/rejects' ) ) )
    await assert.rejects( exit( 3, new Error( 'extra info and stack trace' ), 1 ) )
    const OftypesErrorRejection = await exit( 3, new Error( 'extra info and stack trace' ), 1 ).catch( error => error )
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

  try {
    tttt.describe( Blaze.underline( Blaze.bg_yellow( '## message argument can be instanceof Error doesn\'t throws/rejects' ) ) )
    tttt.describe( Blaze.underline( Blaze.bg_yellow( '## setting process_exit to "false" return {string}' ) ) )
    await assert.doesNotReject( exit( new Error( 'message' ), new Error( 'extra info and stack trace' ), 1, false ) )
    tttt.describe( await exit( new Error( 'message' ), new Error( 'extra info and stack trace' ), 1, false ) )
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
}
