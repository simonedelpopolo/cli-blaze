import * as input from '@cli-blaze/input'
import * as tttt from 'trythistrythat'
import { Blaze } from '@cli-blaze/decors'
import { spawn } from 'node:child_process'
import { URL } from 'url'

const __dirname = new URL( '.', import.meta.url ).pathname

/**
 * Module filename - /Volumes/code/cli-blaze/tests/input/input.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    tttt.describe( '# UNIT test [ input ]' )
    await tttt.separator( 240, 75, '~' )
    await tttt.line()

    let logic = async ( argv ) => { return argv }
    let parsed = await input.entry_point( [ 'hello', '--my-friend' ], { executable:[ '4t' ], '4t': logic } )

    let error = await tttt.deeeeepStrictEqual( async() => {
        return {
            expected : { object:{ hello: undefined, my_friend: undefined }, keys:[ 'hello', 'my_friend' ] },
            actual: parsed
        }
    } )

    logic = async ( argv ) => {return argv }
    parsed = await input.entry_point( [ 'hello', '--my-friend' ], { executable:[ 'tttt' ], 'tttt': logic }, 'tttt' )

    error = await tttt.deeeeepStrictEqual( async() => {
        return {
            expected : { object:{ hello: undefined, my_friend: undefined }, keys:[ 'hello', 'my_friend' ] },
            actual: parsed
        }
    } )

    if( error instanceof Error ){
        tttt.failed( true )
        tttt.describe( Blaze.red( 'test failed' ) )
    }else
        tttt.describe( Blaze.green( 'test passed' ) )

    const process_not_recognize = spawn( 'node', [ `${__dirname}process_title/process.not.recognize.js` ] )
    process_not_recognize.on( 'exit', async code => {
        error = await tttt.deeeeepStrictEqual( async() => {
            return {
                expected : 4,
                actual: code
            }
        } )

        if( error instanceof Error ){
            tttt.failed( true )
            tttt.describe( Blaze.red( 'test failed' ) )
        }else
            tttt.describe( Blaze.green( 'test passed' ) )

        tttt.end_test( id )
    } )
}
