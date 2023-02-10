// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'
import host from './documents/host'

// Object types
import internalLink from './objects/internalLink'
import link from './objects/link'
import list from './objects/list'
import sponsor from './objects/sponsor'
import stream from './objects/stream'
import visitCounter from './objects/visitCounter'
import carousel from './objects/carousel'
import plain from './objects/plain'
import gallery from './objects/gallery'

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
  gallery
]
