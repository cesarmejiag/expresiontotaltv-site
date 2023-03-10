export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  fieldsets: [
    {
      title: 'Carousel options',
      name: 'options',
    },
  ],
  fields: [
    {
      name: 'autoplay',
      description: 'Play automatically, without action from a user.',
      title: 'Autoplay',
      type: 'boolean',
      fieldset: 'options',
    },
    {
      name: 'delay',
      description: 'Delay between transitions (in seconds).',
      title: 'Delay',
      type: 'number',
      initialValue: 5,
      fieldset: 'options',
      validation: (Rule: any) => Rule.required().integer().positive().min(1).max(10),
    },
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
