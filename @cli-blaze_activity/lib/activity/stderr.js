import { stderr_argument_type_check } from './stderr/type.js'

/**
 * Object [ activity.stderr ]
 * Wrapper for process.stderr.write.
 *
 * @param {Buffer|Uint8Array|string} message - The message to the stderr.
 * @throws OftypesError
 * @returns {Promise<void>|void}
 */
export default async function stderr( message ){

  let type
  for await ( const check of await stderr_argument_type_check( message ) )
    type = check

  return new Promise( ( resolve, reject ) => {

    if( type instanceof Error ) reject( type )

    else {
      resolve( type )
      process.stderr.write( message )
    }
  } )
}
