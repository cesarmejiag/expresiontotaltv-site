export default {
  name: 'visitCounter',
  title: 'Vist Counter',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: any) {
      return {
        title,
        subtitle: 'Visit counter section',
      }
    },
  },
}
