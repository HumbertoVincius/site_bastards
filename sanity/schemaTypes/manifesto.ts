import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'manifesto',
  title: 'Manifesto',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Conteúdo',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

