import * as tttt from 'trythistrythat'
import { Blaze } from '@cli-blaze/decors'
import { dissect_prop_val } from '@cli-blaze/dissection'

/**
 * Module filename - /Volumes/code/cli-blaze/tests/dissection/dissect_prop_val.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

  tttt.describe( '# ' )
  await tttt.separator( 240, 75, '~' )
  await tttt.line()

  let data = await dissect_prop_val( 'string:json|activate:true', '|', true )

  let result = await tttt.deeeeepStrictEqual( () => {
    return tttt.resolvers( data, { string:'json', activate: 'true' } )
  } )

  if( result instanceof Error ){
    tttt.describe( Blaze.red( 'test failed' ) )
    tttt.failed( true )
  }
  else tttt.describe( Blaze.green( 'test passed' ) )

  data = await dissect_prop_val( undefined, '|', true ).catch( error => error )

  result = await tttt.oki( () => {
    return tttt.resolvers( data instanceof Error, true )
  } )

  if( result instanceof Error ){
    tttt.describe( Blaze.red( 'test failed' ) )
    tttt.failed( true )
  }
  else tttt.describe( Blaze.green( 'test passed' ) )

  data = await dissect_prop_val( '', '|', true ).catch( error => error )

  result = await tttt.oki( () => {
    return tttt.resolvers( data.message, 'body argument must NOT be empty' )
  } )

  if( result instanceof Error ){
    tttt.describe( Blaze.red( 'test failed' ) )
    tttt.failed( true )
  }
  else tttt.describe( Blaze.green( 'test passed' ) )

  data = await dissect_prop_val( 'string:json|activate', '|', true ).catch( error => error )

  result = await tttt.oki( () => {
    return tttt.resolvers( data.message, 'this method accept only Array that have at least two entries or multiple of 2' )
  } )

  if( result instanceof Error ){
    tttt.describe( Blaze.red( 'test failed' ) )
    tttt.failed( true )
  }
  else tttt.describe( Blaze.green( 'test passed' ) )

  data = await dissect_prop_val( 'string:json|activate:true', '|' )

  result = await tttt.deeeeepStrictEqual( () => {
    return tttt.resolvers( data, JSON.stringify( { string:'json', activate: 'true' } ) )
  } )

  if( result instanceof Error ){
    tttt.describe( Blaze.red( 'test failed' ) )
    tttt.failed( true )
  }
  else tttt.describe( Blaze.green( 'test passed' ) )

  tttt.end_test( id )
}
