import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { UIButtonComponent } from '../button/button';
import { UISvgComponent } from '../svg/svg';
import type { IconName } from '../svg/icon-name.type';

/**
 * Hero-style card with full background image and overlay text.
 * Ideal for featured content and call-to-action sections.
 *
 * @example
 * ```html
 * <ui-card-image
 *   [imageUrl]="'https://example.com/hero.jpg'"
 *   title="Featured Article"
 *   description="Read about our latest updates and features"
 *   buttonLabel="Download"
 *   buttonIcon="download"
 * />
 * ```
 */
@Component({
  selector: 'ui-card-image',
  imports: [NgOptimizedImage, UIButtonComponent, UISvgComponent],
  templateUrl: './card-image.html',
  styleUrl: './card-image.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UICardImageComponent {
  /**
   * URL of the background image.
   * @default 'https://picsum.photos/400/600'
   */
  imageUrl = input<string>('https://picsum.photos/400/600');

  /**
   * Card title displayed over the image.
   */
  title = input.required<string>();

  /**
   * Card description displayed over the image.
   */
  description = input.required<string>();

  /**
   * Label for the action button.
   */
  buttonLabel = input.required<string>();

  /**
   * Icon name to display in the button.
   */
  buttonIcon = input.required<IconName>();
}
