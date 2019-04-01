export default {
  name: 'eventInformation',
  type: 'document',
  title: 'Event Information',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Event name'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your event for search engines and social media.'
    },
    {
      name: 'logo',
      type: 'mainImage',
      title: 'Event logo',
      description: 'The highest resolution and/or vectorized logo'
    },
    {
      name: 'schedule',
      type: 'schedule',
      title: 'Schedule',
      description: 'From when to when will the event last?'
    },
    {
      name: 'venue',
      type: 'venue',
      title: 'Venue',
      description: 'Where will the event take place?'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your event.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'organizers',
      type: 'array',
      description: 'Publish one or more persons and set a reference to them here.',
      title: 'Organizers',
      validation: Rule => Rule.unique().error('You can only have one of a person'),
      of: [
        {
          type: 'reference',
          to: [{ type: 'person' }]
        }
      ]
    }
  ]
}
