/**
 * @typedef {Blaze} Blaze
 */
interface Blaze {
    black( chars?: string ): string
    blue( chars?: string ): string
    color( code?: number, chars?: string ) : string
    cyan( chars?: string ): string
    green( chars?: string ): string
    magenta( chars?: string ): string
    red( chars?: string ): string
    negative( chars?: string ): string
    rgb( code?: [ r:number, g:number, b:number ], chars?: string ) : string
    strong( chars?: string ): string
    underline( chars?: string ): string
    white( chars?: string ): string
    yellow( chars?: string ): string
    bg_color( code?: number, chars?: string ) : string
    bg_rgb( code?: [ r:number, g:number, b:number ], chars?: string ) : string
    b_black( chars?: string ): string
    b_bg_black( chars?: string ): string
    bg_black( chars?: string ): string
    b_blue( chars?: string ): string
    b_bg_blue( chars?: string ): string
    bg_blue( chars?: string ): string
    b_cyan( chars?: string ): string
    b_bg_cyan( chars?: string ): string
    bg_cyan( chars?: string ): string
    b_green( chars?: string ): string
    b_bg_green( chars?: string  ): string
    bg_green( chars?: string ): string
    b_magenta( chars?: string ): string
    b_bg_magenta( chars?: string ): string
    bg_magenta( chars?: string ): string
    b_red( chars?: string ): string
    b_bg_red( chars?: string ): string
    bg_red( chars?: string ): string
    b_white( chars?: string ): string
    b_bg_white( chars?: string ): string
    bg_white( chars?: string ): string
    b_yellow( chars?: string ): string
    b_bg_yellow( chars?: string ): string
    bg_yellow( chars?: string ): string
}
