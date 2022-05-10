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

  tttt.describe( '# data given correctly' )
  let data = await dissect_prop_val( 'string:json|activate:true', '|', true ).catch( error => error )

  let result = await tttt.deeeeepStrictEqual( async () => {
    return tttt.resolvers( data, { string:'json', activate: 'true' } )
  } )

  if( result instanceof Error ){
    tttt.describe( Blaze.red( 'test failed' ) )
    tttt.failed( true )
  }
  else tttt.describe( Blaze.green( 'test passed' ) )

  tttt.describe( '# data undefined' )
  data = await dissect_prop_val( undefined, '|', true ).catch( error => error )

  result = await tttt.oki( async () => {
    return tttt.resolvers( data, 'body argument must be provided' )
  } )

  if( result instanceof Error ){
    tttt.describe( Blaze.red( 'test failed' ) )
    tttt.failed( true )
  }
  else tttt.describe( Blaze.green( 'test passed' ) )

  tttt.describe( '# data EMPTY' )
  data = await dissect_prop_val( '', '|', true ).catch( error => error )

  result = await tttt.oki( async () => {
    return tttt.resolvers( data, 'body argument must NOT be empty' )
  } )

  if( result instanceof Error ){
    tttt.describe( Blaze.red( 'test failed' ) )
    tttt.failed( true )
  }
  else tttt.describe( Blaze.green( 'test passed' ) )

  tttt.describe( '# data given PARTIALLY' )
  data = await dissect_prop_val( 'string:json|activate', '|', true ).catch( error => error )

  result = await tttt.oki( async () => {
    return tttt.resolvers( data.message, 'this method accept only Array that have at least two entries or multiple of 2' )
  } )

  if( result instanceof Error ){
    tttt.describe( Blaze.red( 'test failed' ) )
    tttt.failed( true )
  }
  else tttt.describe( Blaze.green( 'test passed' ) )

  tttt.describe( '# data given correctly JSON string' )
  data = await dissect_prop_val( 'string:json|activate:true', '|' ).catch( error => error )

  result = await tttt.deeeeepStrictEqual( async () => {
    return tttt.resolvers( data, JSON.stringify( { string:'json', activate: 'true' } ) )
  } )

  if( result instanceof Error ){
    tttt.describe( Blaze.red( 'test failed' ) )
    tttt.failed( true )
  }
  else tttt.describe( Blaze.green( 'test passed' ) )

  tttt.describe( '# data given correctly JSON string returned testing single [prop:val]' )
  data = await dissect_prop_val( 'string:json', '|' ).catch( error => error )

  result = await tttt.deeeeepStrictEqual( async () => {
    return tttt.resolvers( data, JSON.stringify( { string:'json' } ) )
  } )

  if( result instanceof Error ){
    tttt.describe( Blaze.red( 'test failed' ) )
    tttt.failed( true )
  }
  else tttt.describe( Blaze.green( 'test passed' ) )

  tttt.end_test( id )
}
