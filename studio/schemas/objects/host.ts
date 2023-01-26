export default {
  name: 'host',
  title: 'Host',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc: any, context: any) => context.parent.name,
        maxLength: 200,
        slugify: (input: any) =>
          input
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .trim()
            .slice(0, 200),
      },
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
}
