export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          fields: [
            {
              type: 'string',
              name: 'alt',
              title: 'Alternative text',
            },
            {
              type: 'string',
              name: 'caption',
              title: 'Caption',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: any) {
      return {
        title,
        subtitle: 'Gallery section',
      }
    },
  },
}
