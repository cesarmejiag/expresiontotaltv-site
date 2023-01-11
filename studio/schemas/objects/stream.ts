export default {
  name: 'stream',
  title: 'Stream',
  type: 'object',
  fields: [
    {
      name: 'url',
      type: 'string',
      title: 'URL',
    },
  ],
  preview: {
    select: {
      title: 'url',
    },
    prepare({title}: any) {
      return {
        title,
        subtitle: 'Stream section',
      }
    },
  },
}
