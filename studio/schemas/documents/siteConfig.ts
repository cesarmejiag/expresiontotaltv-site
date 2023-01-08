// import bcp47 from 'bcp47'

export default {
  name: 'site-config',
  type: 'document',
  title: 'Site configuration',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_action: [/*"create", "delete",*/ 'update', 'publish'],
  fieldsets: [{name: 'footer', title: 'Footer'}],
  fields: [
    {
      name: 'title',
      title: 'Site title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
      description: 'The main site url. Used to create canonical url.',
    },
    {
      description: 'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      title: 'Brand logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessabilty.',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      title: 'Main navigation',
      name: 'mainNavigation',
      description: 'Select pages for the top menu',
      validation: (Rule: any) => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'route'}],
        },
      ],
    },
    {
      title: 'Footer navigation items',
      name: 'footerNavigation',
      type: 'array',
      validation: (Rule: any) => [
        Rule.max(10).warning('Are you sure you want more than 10 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      fieldset: 'footer',
      of: [
        {
          type: 'reference',
          to: [{type: 'route'}],
        },
      ],
    },
    {
      name: 'footerText',
      type: 'simplePortableText',
      fieldset: 'footer',
    },
  ],
}
