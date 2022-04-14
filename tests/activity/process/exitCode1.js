#!/usr/bin/env node
import { exit } from '@cli-blaze/activity'
import { override } from '@cli-blaze/decors'
import { describe, line, separator } from 'trythistrythat'

override()

process.on( 'message', async id => {

    await line()
    await separator()
    describe( '| spawned         ', ` ${id} `.b_yellow(), '        process |' )
    await separator()
    await exit( 'process exits with code '.red( '1'.yellow() ), undefined, 1 )
} )

