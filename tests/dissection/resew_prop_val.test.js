import * as tttt from 'trythistrythat'
import { resew_prop_val } from '@cli-blaze/dissection'
import { trace } from '@cli-blaze/activity'

/**
 * Module filename - /Volumes/code/cli-blaze/tests/dissection/resew_prop_val.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

  tttt.describe( '# ' )
  await tttt.separator( 240, 75, '~' )
  await tttt.line()

  trace( await resew_prop_val( { ok:'string' } ).catch( error => error ) )
  trace( await resew_prop_val( undefined ).catch( error => error ) )
  trace( await resew_prop_val( {} ).catch( error => error ) )

  tttt.end_test( id )
}
