export default {
  name: 'host',
  type: 'document',
  title: 'Host',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
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
      name: 'intro',
      title: 'Intro',
      type: 'string',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        {type: 'stream'},
        {type: 'visitCounter'},
        {type: 'carousel'},
        {type: 'list'},
        {type: 'plain'},
        {type: 'gallery'},
        {type: 'videos'},
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter, etc.',
      fieldset: 'metadata',
    },
  ],
}
