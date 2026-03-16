import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

/**
 * Container section component with configurable background color.
 * Provides consistent spacing and max-width constraints for content.
 *
 * @example
 * ```html
 * <!-- White background section -->
 * <ui-section bgColor="white">
 *   <app-header header title="Section Title" description="Section description" />
 *   <!-- Content here -->
 * </ui-section>
 *
 * <!-- Gray background section -->
 * <ui-section bgColor="gray">
 *   <!-- Content here -->
 * </ui-section>
 * ```
 */
@Component({
  selector: 'ui-section',
  templateUrl: './section.html',
  styleUrl: './section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UISectionComponent {
  /**
   * Background color of the section.
   * - `white`: White background
   * - `gray`: Light gray background (gray-100)
   * @default 'white'
   */
  bgColor = input<'white' | 'gray'>('white');

  /**
   * Computed CSS class for the background color.
   * @internal
   */
  protected bgClass = computed(() => {
    const color = this.bgColor();
    return color === 'gray' ? 'bg-gray-100' : 'bg-white';
  });
}
