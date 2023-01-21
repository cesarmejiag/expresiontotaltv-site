export default {
  name: 'sponsor',
  title: 'Sponsor',
  type: 'object',
  fields: [
    {
      description: 'Select an image jpg, png, svg (svg recommended)',
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
    },
    {
      description: 'Description for the image (50 characteres maximum)',
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(5).max(50),
    },
    {
      name: 'altText',
      title: 'Alternative text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      media: 'mainImage',
      title: 'caption',
      subtitle: 'altText',
    },
  },
}
