import React from 'react'

const InternalLinkRener = ({children}: any) => <span>{children} 🔗</span>

export default {
  title: 'Internal link to another document',
  name: 'internalLink',
  type: 'reference',
  description: 'Locate a document you want to link to',
  to: [{type: 'page'}, {type: 'route'}],
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRener,
  },
}
