import * as tttt from 'trythistrythat'
import { trace } from '@cli-blaze/activity'

/**
 * Module filename - /Volumes/code/cli-blaze/tests/activity/trace.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

  tttt.describe( '# trace something' )
  await tttt.separator( 240, 75, '~' )
  await tttt.line()

  trace( 'hello', { object:'somewhat' }, new SyntaxError( 'trace this' ) )

  tttt.end_test( id )
}
