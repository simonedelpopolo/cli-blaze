/**
 * @typedef {Blaze} Blaze
 */
interface Blaze {
    black( chars?: string|Buffer ): string
    blue( chars?: string|Buffer ): string
    color( code?: number, chars?: string|Buffer ) : string
    cyan( chars?: string|Buffer ): string
    green( chars?: string|Buffer ): string
    magenta( chars?: string|Buffer ): string
    red( chars?: string|Buffer ): string
    negative( chars?: string|Buffer ): string
    rgb( code?: [ r:number, g:number, b:number ], chars?: string | Buffer ) : string
    strong( chars?: string|Buffer ): string
    underline( chars?: string|Buffer ): string
    white( chars?: string|Buffer ): string
    yellow( chars?: string|Buffer ): string
    bg_color( code?: number, chars?: string|Buffer ) : string
    bg_rgb( code?: [ r:number, g:number, b:number ], chars?: string | Buffer ) : string
    b_black( chars?: string|Buffer ): string
    b_bg_black( chars?: string|Buffer ): string
    bg_black( chars?: string|Buffer ): string
    b_blue( chars?: string|Buffer ): string
    b_bg_blue( chars?: string|Buffer ): string
    bg_blue( chars?: string|Buffer ): string
    b_cyan( chars?: string|Buffer ): string
    b_bg_cyan( chars?: string|Buffer ): string
    bg_cyan( chars?: string|Buffer ): string
    b_green( chars?: string|Buffer ): string
    b_bg_green( chars?: string|Buffer  ): string
    bg_green( chars?: string|Buffer ): string
    b_magenta( chars?: string|Buffer ): string
    b_bg_magenta( chars?: string|Buffer ): string
    bg_magenta( chars?: string|Buffer ): string
    b_red( chars?: string|Buffer ): string
    b_bg_red( chars?: string|Buffer ): string
    bg_red( chars?: string|Buffer ): string
    b_white( chars?: string|Buffer ): string
    b_bg_white( chars?: string|Buffer ): string
    bg_white( chars?: string|Buffer ): string
    b_yellow( chars?: string|Buffer ): string
    b_bg_yellow( chars?: string|Buffer ): string
    bg_yellow( chars?: string|Buffer ): string
}
