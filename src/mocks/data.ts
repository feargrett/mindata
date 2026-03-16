export const data = {
  imageUrl: 'https://picsum.photos/723/416?random=100',
  label: 'Lorem ipsum dolor sit amet',
  title:
    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
  buttonLabel: 'Lorem ipsum',
};

export const cardsData = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  imageUrl: `https://picsum.photos/723/416?random=${i + 10}`,
  label: 'Lorem ipsum dolor sit amet',
  title: `Card ${i + 1}: Lorem ipsum dolor sit amet consectetur`,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
  buttonLabel: 'Lorem ipsum',
}));

export const imageCardsData = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  imageUrl: `https://picsum.photos/400/600?random=${i}`,
  title: `Hero Card ${i + 1}: Lorem ipsum dolor sit amet`,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
  buttonLabel: 'Lorem ipsum',
  buttonIcon: 'download' as const,
}));
