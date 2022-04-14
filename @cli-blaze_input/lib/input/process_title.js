import { error_code } from '@cli-blaze/error'
import { exit } from '@cli-blaze/activity'

/**
 * Object [ input.process_title ]
 * Switches process.title returning an object containing command, flags and options to be digested.
 * The returned Promise always resolves.
 *
 * @param {{object:{[p: string]: any}, keys:string[]}} process_parsed_argv - Object.
 * @param {{[unknown]: (function({object:{[p: string]: any}, keys:string[]}): Promise<{[p:object]:any}>), executable: string[]}} logic - process selection
 * @returns {Promise<{[p:object]:any}>|{[p:object]:any}}
 */
export default async function process_title( process_parsed_argv, logic ){

    const promise = {
        resolve: null,
        reject: false
    }

    if( logic.executable.includes( process.title ) ) promise.resolve = await logic[ process.title ]( process_parsed_argv )

    else promise.reject = true

    if( promise.reject ) {
        let error = `\x1b[41m        process.title -> \`${ process.title }\` not recognize\x1b[0m\n`
        await exit( error, new ReferenceError( 'INTERNAL-error' ), error_code.INTERNAL )
    }

    return promise.resolve

}
