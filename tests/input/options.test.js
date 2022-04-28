import * as Assert from 'node:assert'
import * as tttt from 'trythistrythat'
import { Blaze } from '@cli-blaze/decors'
import { options } from '@cli-blaze/input'

/**
 * Module filename - /Volumes/code/cli-blaze/tests/input/options.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    tttt.describe( '# testing options' )
    await tttt.separator( 240, 75, '~' )
    await tttt.line()

    const actual = await options( 'options(first:option|second:option)', 'test_flag' )
    const expected = { first: 'option', second: 'option' }

    let error = await tttt.deeeeepStrictEqual( async() => {
        return {
            expected : expected,
            actual: actual
        }
    } )

    if( error instanceof Error ){
        tttt.failed( true )
        tttt.describe( Blaze.red( 'test failed' ) )
    }else
        tttt.describe( Blaze.green( 'test passed' ) )

    const OptionsError = await options( 'options(first|second:option)', 'test_flag' )
    const OptionsErrorMessage = ' [json-swiss-knife.property_value] ' + Blaze.red( 'this method accept only Array that have at least two entries or multiple of 2' )+ ' \n' +
                                '    @ 4t [...] test_flag -> ' + Blaze.underline( Blaze.strong( Blaze.red( 'first|second:option' ) ) ) + ' \n' +
                                Blaze.red( '                                    ^' )
    await Assert.throws(
        () => {throw OptionsError.error},
        ( OptionsErrorCallBack ) => {
            console.assert( OptionsErrorCallBack instanceof Error )
            error =  ( async() => tttt.deeeeepStrictEqual( async() => {
                return {
                    expected : OptionsErrorMessage,
                    actual: OptionsErrorCallBack.message
                }
            } ) )()

            if( error instanceof Error ){
                tttt.failed( true )
                tttt.describe( Blaze.red( 'test failed' ) )
            }else
                tttt.describe( Blaze.green( 'test passed' ) )

            return true
        }, 'gone' )

    tttt.end_test( id )
}
