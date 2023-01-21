export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'sponsor'}],
    },
  ],
  preview: {
    select: {
      title: 'items',
    },
    prepare({title}: any) {
      const type = title.length > 0 ? title[0]._type : 'items'
      return {
        title: `Carousel of ${type}`,
        subtitle: 'Carousel section',
      }
    },
  },
}
