import * as tttt from 'trythistrythat'
import Blaze from '@cli-blaze/decors/lib/decors/blaze.js'

/**
 * Module filename - /Volumes/code/cli-blaze/tests/decors/rgb.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

  tttt.describe( '# ' )
  await tttt.separator( 240, 75, '~' )
  await tttt.line()

  console.log( Blaze.rgb( [ 136, 75, 55 ], 'hello' ) )
  console.log( Blaze.bg_rgb( [ 138, 15, 55 ], 'hello' ) )

  tttt.end_test( id )
}
