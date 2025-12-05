import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'founder',
  title: 'Fundador',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biografia',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'photo',
    },
  },
})

