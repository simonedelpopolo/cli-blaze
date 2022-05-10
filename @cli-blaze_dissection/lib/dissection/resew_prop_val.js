import { error } from './shared/error.js'
import { object_, resolvers } from 'oftypes'

/**
 * Given object|array it will give back string
 *
 * @param {object} body - given to be resewed into a string
 * @param {string} [needle=':'] - to resew the body
 * @returns {Promise<string>}
 */
export default async function resew_prop_val( body, needle = '|' ){

  error[ Symbol.for( 'zDissectionError' ) ] = {}
  const falsy = () => {
    error[ Symbol.for( 'zDissectionError' ) ] = { occurred:true, message:'body argument must be provided' }
  }
  const truthy = () => Object.keys( body ).length > 0 ? true : ( () => {
    error[ Symbol.for( 'zDissectionError' ) ] = { occurred:true, message:'body argument must NOT be empty' }
  } )()

  await( await object_( body, await resolvers( truthy, falsy ) ) )()

  return new Promise( ( resolve, reject ) => {

    if( error[ Symbol.for( 'zDissectionError' ) ].occurred ) reject( error[ Symbol.for( 'zDissectionError' ) ].message )

    resolve( ( () => {
      let resewed = ''
      for ( const prop in body )
        resewed += `${ prop }:${ body[ prop ] }${needle}`

      return resewed.slice( 0, -1 )
    } )() )

  } )
}
