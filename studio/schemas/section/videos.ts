export default {
  name: 'videos',
  title: 'Videos',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'intro',
      type: 'string',
      title: 'Intro',
    },
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{type: 'video'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: any) {
      return {
        title,
        subtitle: 'Videos section',
      }
    },
  },
}
