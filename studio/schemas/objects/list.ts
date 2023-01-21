export default {
  name: 'list',
  tilte: 'List',
  type: 'object',
  fields: [
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{type: 'host'}],
    },
  ],
  preview: {
    select: {
      title: 'items',
    },
    prepare({title}: any) {
      const type = title.length > 0 ? title[0]._type : 'items'
      return {
        title: `List of ${type}`,
        subtitle: 'List section',
      }
    },
  },
}
