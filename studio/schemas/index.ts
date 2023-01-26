// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'

// Object types
import host from './objects/host'
import internalLink from './objects/internalLink'
import link from './objects/link'
import list from './objects/list'
import sponsor from './objects/sponsor'
import stream from './objects/stream'
import visitCounter from './objects/visitCounter'
import carousel from './objects/carousel'
import plain from './objects/plain'

export const schemaTypes = [
  internalLink,
  link,
  page,
  route,
  siteConfig,
  stream,
  visitCounter,
  sponsor,
  host,
  list,
  carousel,
  plain,
]
