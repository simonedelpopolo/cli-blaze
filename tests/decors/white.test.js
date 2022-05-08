import * as tttt from 'trythistrythat'
import Blaze from '@cli-blaze/decors/lib/decors/blaze.js'

/**
 * Module filename - /Volumes/code/cli-blaze/tests/decors/white.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

  tttt.describe( '# ' )
  await tttt.separator( 240, 75, '~' )
  await tttt.line()

  console.log( Blaze.white( 'hello' ) )
  console.log( Blaze.b_white( 'hello' ) )
  console.log( Blaze.bg_white( 'hello' ) )
  console.log( Blaze.b_bg_white( 'hello' ) )

  tttt.end_test( id )
}
