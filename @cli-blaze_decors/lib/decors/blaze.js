import ansi from './ansi.js'
import escape from './escape.js'

/**
 * @type {Blaze}
 */
const Blaze = {

    /**
     * Object [ decors.Blaze.black ]
     * Black foreground
     * Object Interface
     *
     * @param {string} [chars=''] - to be rendered
     * @returns {string}
     */
    black( chars ){
        return render.call( this, chars, 'black', 'foreground' )
    },

    /**
     * Object [ decors.Blaze.b_black ]
     * Bright black foreground
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_black( chars ){
        return render.call( this, chars, 'black', 'brightForeground' )
    },

    /**
     * Object [ decors.Blaze.bg_black ]
     * Black background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    bg_black( chars ){
        return render.call( this, chars, 'black', 'background' )
    },

    /**
     * Object [ decors.Blaze.b_bg_black ]
     * Black background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_bg_black( chars ){
        return render.call( this, chars, 'black', 'brightBackground' )
    },

    /**
     * Object [ decors.Blaze.blue ]
     * Blue foreground
     * Object Interface
     *
     * @param {string} [chars=''] - to be rendered
     * @returns {string}
     */
    blue( chars ){
        return render.call( this, chars, 'blue', 'foreground' )
    },

    /**
     * Object [ decors.Blaze.b_blue ]
     * Bright blue foreground
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_blue( chars ){
        return render.call( this, chars, 'blue', 'brightForeground' )
    },

    /**
     * Object [ decors.Blaze.bg_blue ]
     * Blue background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    bg_blue( chars ){
        return render.call( this, chars, 'blue', 'background' )
    },

    /**
     * Object [ decors.Blaze.b_bg_blue ]
     * Bright Blue background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_bg_blue( chars ){
        return render.call( this, chars, 'blue', 'brightBackground' )
    },

    /**
     * Object [ decors.Blaze.color ]
     * 256 Color foreground
     * String.prototype extended
     *
     * @param {number?} code - [0-255] range color
     * @param {string?} chars - to be rendered
     * @returns {string}
     */
    color( code, chars ){
        return render.call( this, chars, code, 'foreground' )
    },

    /**
     * Object [ decors.Blaze.bg_color ]
     * 256 Color background
     * String.prototype extended
     *
     * @param {number?} code - [0-255] range color
     * @param {string?} chars - to be rendered
     * @returns {string}
     */
    bg_color( code, chars ){
        return render.call( this, chars, code, 'background' )
    },

    /**
     * Object [ decors.Blaze.cyan ]
     * Cyan foreground
     * Object Interface
     *
     * @param {string} [chars=''] - to be rendered
     * @returns {string}
     */
    cyan( chars ){
        return render.call( this, chars, 'cyan', 'foreground' )
    },

    /**
     * Object [ decors.Blaze.b_cyan ]
     * Bright cyan foreground
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_cyan( chars ){
        return render.call( this, chars, 'cyan', 'brightForeground' )
    },

    /**
     * Object [ decors.Blaze.bg_cyan ]
     * Cyan background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    bg_cyan( chars ){
        return render.call( this, chars, 'cyan', 'background' )
    },

    /**
     * Object [ decors.Blaze.b_bg_cyan ]
     * Bright Cyan background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_bg_cyan( chars ){
        return render.call( this, chars, 'cyan', 'brightBackground' )
    },

    /**
     * Object [ decors.Blaze.green ]
     * Green foreground
     * Object Interface
     *
     * @param {string} [chars=''] - to be rendered
     * @returns {string}
     */
    green( chars ){
        return render.call( this, chars, 'green', 'foreground' )
    },

    /**
     * Object [ decors.Blaze.b_green ]
     * Bright green foreground
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_green( chars ){
        return render.call( this, chars, 'green', 'brightForeground' )
    },

    /**
     * Object [ decors.Blaze.bg_green ]
     * Green background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    bg_green( chars ){
        return render.call( this, chars, 'green', 'background' )
    },

    /**
     * Object [ decors.Blaze.b_bg_green ]
     * Bright Green background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_bg_green( chars ){
        return render.call( this, chars, 'green', 'brightBackground' )
    },

    /**
     * Object [ decors.Blaze.magenta ]
     * Magenta foreground
     * Object Interface
     *
     * @param {string} [chars=''] - to be rendered
     * @returns {string}
     */
    magenta( chars ){
        return render.call( this, chars, 'magenta', 'foreground' )
    },

    /**
     * Object [ decors.Blaze.b_magenta ]
     * Bright magenta foreground
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_magenta( chars ){
        return render.call( this, chars, 'magenta', 'brightForeground' )
    },

    /**
     * Object [ decors.Blaze.bg_magenta ]
     * Magenta background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    bg_magenta( chars ){
        return render.call( this, chars, 'magenta', 'background' )
    },

    /**
     * Object [ decors.Blaze.b_bg_magenta ]
     * Bright Magenta background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_bg_magenta( chars ){
        return render.call( this, chars, 'magenta', 'brightBackground' )
    },

    /**
     * Object [ decors.Blaze.negative ]
     * Reverse the colors
     * String.prototype extended
     *
     * @param {string?} chars - to be rendered
     * @returns {string}
     */
    negative( chars ){
        return render.call( this, chars, 'negative', 'code' )
    },

    /**
     * Object [ decors.Blaze.red ]
     * Red foreground
     * Object Interface
     *
     * @param {string} [chars=''] - to be rendered
     * @returns {string}
     */
    red( chars ){
        return render.call( this, chars, 'red', 'foreground' )
    },

    /**
     * Object [ decors.Blaze.b_red ]
     * Bright red foreground
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_red( chars ){
        return render.call( this, chars, 'red', 'brightForeground' )
    },

    /**
     * Object [ decors.Blaze.bg_red ]
     * Red background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    bg_red( chars ){
        return render.call( this, chars, 'red', 'background' )
    },

    /**
     * Object [ decors.Blaze.b_bg_red ]
     * Bright Red background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_bg_red( chars ){
        return render.call( this, chars, 'red', 'brightBackground' )
    },

    /**
     * Object [ decors.Blaze.rgb ]
     * TRUE-COLOR RGB foreground
     * Object Interface
     *
     * @param {number[]?} code - [0-255 | 0-255 | 0-255] range rgb
     * @param {string?} chars - to be rendered
     * @returns {string}
     */
    rgb( code, chars ){
        return render.call( this, chars, code, 'foreground' )
    },

    /**
     * Object [ decors.Blaze.bg_rgb ]
     * TRUE-COLOR RGB background
     * Object Interface
     *
     * @param {number[]?} code - [0-255 | 0-255 | 0-255] range rgb
     * @param {string?} chars - to be rendered
     * @returns {string}
     */
    bg_rgb( code, chars ){
        return render.call( this, chars, code, 'background' )
    },

    /**
     * Object [ decors.Blaze.strong ]
     * Strong/Bold text
     * String.prototype extended
     *
     * @param {string?} chars - to be rendered
     * @returns {string}
     */
    strong( chars ){
        return render.call( this, chars, 'strong', 'code' )
    },

    /**
     * Object [ decors.Blaze.underline ]
     * Underlined text
     * String.prototype extended
     *
     * @param {string?} chars - to be rendered
     * @returns {string}
     */
    underline( chars ){
        return render.call( this, chars, 'underline', 'code' )
    },

    /**
     * Object [ decors.Blaze.white ]
     * White foreground
     * Object Interface
     *
     * @param {string} [chars=''] - to be rendered
     * @returns {string}
     */
    white( chars ){
        return render.call( this, chars, 'white', 'foreground' )
    },

    /**
     * Object [ decors.Blaze.b_white ]
     * Bright white foreground
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_white( chars ){
        return render.call( this, chars, 'white', 'brightForeground' )
    },

    /**
     * Object [ decors.Blaze.bg_white ]
     * White background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    bg_white( chars ){
        return render.call( this, chars, 'white', 'background' )
    },

    /**
     * Object [ decors.Blaze.b_bg_white ]
     * Bright White background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_bg_white( chars ){
        return render.call( this, chars, 'white', 'brightBackground' )
    },

    /**
     * Object [ decors.Blaze.yellow ]
     * Yellow foreground
     * Object Interface
     *
     * @param {string} [chars=''] - to be rendered
     * @returns {string}
     */
    yellow( chars ){
        return render.call( this, chars, 'yellow', 'foreground' )
    },

    /**
     * Object [ decors.Blaze.b_yellow ]
     * Bright yellow foreground
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_yellow( chars ){
        return render.call( this, chars, 'yellow', 'brightForeground' )
    },

    /**
     * Object [ decors.Blaze.bg_yellow ]
     * Yellow background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    bg_yellow( chars ){
        return render.call( this, chars, 'yellow', 'background' )
    },

    /**
     * Object [ decors.Blaze.b_bg_yellow ]
     * Bright Yellow background
     * Object Interface
     *
     * @param {string} chars - to be rendered
     * @returns {string}
     */
    b_bg_yellow( chars ){
        return render.call( this, chars, 'yellow', 'brightBackground' )
    }
}

/**
 * Shared function to resolve the color, variant and text.
 * Extended String.prototype && TypeArray.prototype
 * And Object Interface
 *
 * @param {string} [chars=''] - to be rendered
 * @param {string|number} color - to be rendered
 * @param {string} variant - to be rendered
 * @returns {string}
 */
function render( chars, color, variant ){

    let rendered_string = chars || ''
    if( this.constructor.name === 'String' )
        rendered_string = ! chars ? this : `${this}${chars}`

    let color_selection
    if( color.constructor.name === 'Number' )
        color_selection = `${ansi.color[ variant ]}${ color || 0}m`
    else if ( color.constructor.name === 'Array' ) {
        const [ r, g, b ] = color || [ 0, 0, 0 ]
        color_selection = `${ansi.color[ variant ]}${r};${g};${b}m`
    }
    else
        color_selection = `${ansi[ color ][ variant ]}`

    return `${escape.sequence[ 0 ]}${color_selection}${ rendered_string }${escape.sequence[ 0 ]}0m`
}

export default Blaze
