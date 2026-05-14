import { config, fields, collection } from '@keystatic/core';

const isVercelProd = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

export default config({
  storage: isVercelProd
    ? {
        kind: 'github',
        repo: {
          owner: 'YOUR_GITHUB_USERNAME',
          name: 'YOUR_REPO_NAME'
        }
      }
    : { kind: 'local' },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({
          label: 'Date',
          validation: { isRequired: true }
        }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: props => props.value
          }
        ),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
