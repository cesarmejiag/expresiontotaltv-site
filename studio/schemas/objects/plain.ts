export default {
  name: 'plain',
  title: 'Plain',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          fields: [
            {
              type: 'string',
              name: 'alt',
              title: 'Alternative Text',
              options: {
                isHighlighted: true,
              },
            },
          ],
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
