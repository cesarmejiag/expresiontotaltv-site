// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'

// Object types
import embedHTML from './objects/embedHTML'
import internalLink from './objects/internalLink'
import link from './objects/link'
import simplePortableText from './objects/simplePortableText'
import stream from './objects/stream'

export const schemaTypes = [
  embedHTML,
  internalLink,
  link,
  page,
  route,
  simplePortableText,
  siteConfig,
  stream,
]
