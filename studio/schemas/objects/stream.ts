export default {
  name: 'stream',
  title: 'Stream',
  type: 'object',
  fields: [
    {
      name: 'src',
      type: 'string',
      title: 'Stream Source',
    },
    {
      name: 'sponsors',
      type: 'array',
      title: 'Sponsors',
      of: [{type: 'sponsor'}],
      validation: (Rule: any) => Rule.required().min(0).max(3),
    },
  ],
  preview: {
    select: {
      title: 'src',
    },
    prepare({title}: any) {
      return {
        title,
        subtitle: 'Stream section',
      }
    },
  },
}
