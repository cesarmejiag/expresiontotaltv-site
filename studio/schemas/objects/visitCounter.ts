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
      const name = 'Visit counter'
      return {
        title: title || name,
        subtitle: `${name} section`,
      }
    },
  },
}
