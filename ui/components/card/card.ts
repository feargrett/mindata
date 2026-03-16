import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { UIButtonComponent } from '../button/button';
import { UISvgComponent } from '../svg/svg';

/**
 * Feature card component with image, text content, and optional action button.
 * Supports both horizontal and vertical layouts with responsive behavior.
 *
 * @example
 * ```html
 * <!-- Basic card -->
 * <ui-card
 *   [imageUrl]="'https://example.com/image.jpg'"
 *   label="Latest"
 *   title="Card Title"
 *   description="Card description text"
 * />
 *
 * <!-- Card with button -->
 * <ui-card
 *   [imageUrl]="imageUrl"
 *   [title]="title"
 *   [description]="description"
 *   buttonLabel="Read More"
 * />
 *
 * <!-- Vertical card without shadow -->
 * <ui-card
 *   [showShadow]="false"
 *   align="vertical"
 *   [withPadding]="false"
 * />
 * ```
 */
@Component({
  selector: 'ui-card',
  imports: [NgOptimizedImage, UIButtonComponent, UISvgComponent],
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UICardComponent {
  /**
   * URL of the card image.
   * @default 'https://picsum.photos/723/416'
   */
  imageUrl = input<string>('https://picsum.photos/723/416');

  /**
   * Alternative text for the card image.
   * If not provided, falls back to the title.
   */
  imageAlt = input<string>();

  /**
   * Small label text displayed with an icon.
   * @default 'Label'
   */
  label = input<string>('Label');

  /**
   * Main card title.
   * @default 'Title'
   */
  title = input<string>('Title');

  /**
   * Card description text with automatic truncation.
   * @default 'Description'
   */
  description = input<string>('Description');

  /**
   * Optional button label. If provided, displays an action button.
   */
  buttonLabel = input<string>();

  /**
   * Whether the action button is disabled.
   * @default false
   */
  buttonDisabled = input<boolean>(false);

  /**
   * Whether to display a shadow around the card.
   * @default true
   */
  showShadow = input<boolean>(true);

  /**
   * Whether to add internal padding to the card.
   * @default true
   */
  withPadding = input<boolean>(true);

  /**
   * Card layout alignment.
   * - `auto`: Responsive (vertical mobile, horizontal desktop)
   * - `vertical`: Always vertical
   * @default 'auto'
   */
  align = input<'auto' | 'vertical'>('auto');

  /**
   * Whether to prioritize image loading (for LCP optimization).
   * @default false
   */
  priority = input<boolean>(false);

  /**
   * Computed CSS classes based on card configuration.
   * @internal
   */
  protected cardClasses = computed(() => {
    const classes = [];
    if (this.showShadow()) classes.push('card--shadow');
    if (this.withPadding()) classes.push('card--padding');
    if (this.align() === 'vertical') classes.push('card--vertical');
    return classes.join(' ');
  });
}
