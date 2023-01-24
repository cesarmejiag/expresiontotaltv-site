// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'

// Object types
import embedHTML from './objects/embedHTML'
import host from './objects/host'
import internalLink from './objects/internalLink'
import link from './objects/link'
import list from './objects/list'
import simplePortableText from './objects/simplePortableText'
import sponsor from './objects/sponsor'
import stream from './objects/stream'
import visitCounter from './objects/visitCounter'
import carousel from './objects/carousel'
import plain from './objects/plain'

export const schemaTypes = [
  embedHTML,
  internalLink,
  link,
  page,
  route,
  simplePortableText,
  siteConfig,
  stream,
  visitCounter,
  sponsor,
  host,
  list,
  carousel,
  plain,
]
