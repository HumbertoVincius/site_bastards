import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Configurações',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Nome do Site',
      type: 'string',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Descrição do Site',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})

