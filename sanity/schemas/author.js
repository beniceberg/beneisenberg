export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'telephone',
      title: 'Telephone Number',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'dateOfBirth',
      title: 'Date of Birth',
      // type: 'string'
      type: 'date',
      options: {
        dateFormat: 'DD MMMM YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'rate',
      title: 'Rate',
      type: 'string',
    },
    {
      name: 'hobbies',
      title: 'Hobbies',
      type: 'string',
    },
    {
      name: 'available',
      title: 'Available',
      type: 'boolean',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        }
      ],
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
