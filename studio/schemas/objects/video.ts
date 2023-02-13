export default {
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'desc',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Video URL',
    },
  ],
}
