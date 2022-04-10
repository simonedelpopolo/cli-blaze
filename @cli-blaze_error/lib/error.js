const error = Object.create( null, {
    /**
     * Extra Layer Object [input]
     * used to define main Objects
     */
    [ Symbol.for( 'error' ) ]:{
        enumerable: true,
        writable:false,
        configurable: false,
        value : {}
    }
} )
export default error
