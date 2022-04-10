const activity = Object.create( null, {
    /**
     * Extra Layer Object [input]
     * used to define main Objects
     */
    [ Symbol.for( 'activity' ) ]:{
        enumerable: true,
        writable:false,
        configurable: false,
        value : {}
    }
} )

export default activity
