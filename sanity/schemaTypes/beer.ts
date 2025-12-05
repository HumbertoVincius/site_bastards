import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'beer',
  title: 'Cerveja',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Tipo',
      type: 'string',
      options: {
        list: [
          { title: 'American India Pale Ale', value: 'american india pale ale' },
          { title: 'American Pale Ale', value: 'american pale ale' },
          { title: 'Gin', value: 'gin' },
          { title: 'Imperial India Pale Lager', value: 'imperial india pale lager' },
          { title: 'New England Indian Pale Ale', value: 'new england indian pale ale' },
          { title: 'Oatmeal Stout', value: 'oatmeal stout' },
          { title: 'Premium Lager', value: 'premium lager' },
          { title: 'Witbier', value: 'witbier' },
          { title: 'Colaborativas', value: 'várias' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'abv',
      title: 'ABV (%)',
      type: 'number',
    }),
    defineField({
      name: 'ibu',
      title: 'IBU',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
      media: 'image',
    },
  },
})

