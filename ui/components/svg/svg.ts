import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { IconName } from './icon-name.type';

/**
 * SVG icon component that renders icons from a sprite.
 * Automatically inherits color from parent and supports custom sizing.
 *
 * @example
 * ```html
 * <!-- Default size (24x24) -->
 * <ui-svg icon="calendar" />
 *
 * <!-- Custom size -->
 * <ui-svg icon="download" [width]="20" [height]="20" />
 * ```
 */
@Component({
  selector: 'ui-svg',
  templateUrl: './svg.html',
  styleUrl: './svg.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.width.px]': 'width()',
    '[style.height.px]': 'height()',
  },
})
export class UISvgComponent {
  /**
   * Name of the icon to display from the sprite.
   */
  icon = input.required<IconName>();

  /**
   * Width of the icon in pixels.
   * @default 24
   */
  width = input<number>(24);

  /**
   * Height of the icon in pixels.
   * @default 24
   */
  height = input<number>(24);
}
