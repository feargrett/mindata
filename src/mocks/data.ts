import type { IconName } from '@ui/components';

/**
 * Base type with all possible card properties
 */
type CardBase = {
  id: number;
  imageUrl: string;
  label: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonIcon: IconName;
};

/**
 * Card data for single featured card (without id and buttonIcon)
 */
export type CardData = Omit<CardBase, 'id' | 'buttonIcon'>;

/**
 * Card item for regular card list (without buttonIcon)
 */
export type CardItem = Omit<CardBase, 'buttonIcon'>;

/**
 * Image card item with background image (without label)
 */
export type ImageCardItem = Omit<CardBase, 'label'>;

export const data: CardData = {
  imageUrl: 'https://picsum.photos/723/416?random=100',
  label: 'Lorem ipsum dolor sit amet',
  title:
    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
  buttonLabel: 'Lorem ipsum',
};

export const cardsData: CardItem[] = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  imageUrl: `https://picsum.photos/723/416?random=${i + 10}`,
  label: 'Lorem ipsum dolor sit amet',
  title: `Card ${i + 1}: Lorem ipsum dolor sit amet consectetur`,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
  buttonLabel: 'Lorem ipsum',
}));

export const imageCardsData: ImageCardItem[] = Array.from(
  { length: 4 },
  (_, i) => ({
    id: i + 1,
    imageUrl: `https://picsum.photos/400/600?random=${i}`,
    title: `Card ${i + 1}: Lorem ipsum dolor sit amet`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
    buttonLabel: 'Lorem ipsum',
    buttonIcon: 'download',
  })
);
