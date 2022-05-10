let buffer
export let error = Object.defineProperty( Object.create( Object ), Symbol.for( 'zDissectionError' ), {
  enumerable:true,
  get() {
    return JSON.parse( new TextDecoder().decode( buffer ) )
  },
  set( data ){
    buffer = Uint8Array.from( new TextEncoder().encode( JSON.stringify( { occurred: data.occurred || false, message: data.message || undefined } ) ) )
  }
} )





