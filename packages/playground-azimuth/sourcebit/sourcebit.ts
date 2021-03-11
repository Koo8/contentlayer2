import { defineConfig } from '@sourcebit/core'
import { makeSourcePlugin } from '@sourcebit/source-local'
import * as path from 'path'
import { blog } from './schema/documents/blog'
import { config } from './schema/documents/config'
import { landing } from './schema/documents/landing'
import { page } from './schema/documents/page'
import { person } from './schema/documents/person'
import { post } from './schema/documents/post'

export default defineConfig({
  source: makeSourcePlugin({
    documentDefs: [blog, config, landing, page, person, post],
    contentGlob: path.join(__dirname, 'content/**/*.{md,json,yaml}'),
  }),
})