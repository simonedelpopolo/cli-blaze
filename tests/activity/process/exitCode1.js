#!/usr/bin/env node
import { Blaze } from '@cli-blaze/decors'
import { exit } from '@cli-blaze/activity'
import { describe, line, separator } from 'trythistrythat'

process.on( 'message', async id => {

  await line()
  await separator()
  describe( Blaze.b_yellow( '| spawned         ' ), ` ${id} `, '        process |' )
  await separator()
  await exit( `${Blaze.red( 'process exits with code' )} ${Blaze.yellow( '1' )}`, undefined, 1 )
} )

