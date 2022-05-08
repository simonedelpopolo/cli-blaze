import * as tttt from 'trythistrythat'
import Blaze from '@cli-blaze/decors/lib/decors/blaze.js'

/**
 * Module filename - /Volumes/code/cli-blaze/tests/decors/red.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

  tttt.describe( '# ' )
  await tttt.separator( 240, 75, '~' )
  await tttt.line()

  console.log( Blaze.red( 'hello' ) )
  console.log( Blaze.b_red( 'hello' ) )
  console.log( Blaze.bg_red( 'hello' ) )
  console.log( Blaze.b_bg_red( 'hello' ) )

  tttt.end_test( id )
}
