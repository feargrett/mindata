import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { UISvgComponent } from '../../svg/svg';

/**
 * Search input component with icon.
 * Displays a search icon on the left side of the input.
 *
 * @example
 * ```html
 * <ui-search placeholder="Search..." />
 * ```
 */
@Component({
  selector: 'ui-search',
  templateUrl: './search.html',
  styleUrl: './search.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UISvgComponent],
})
export class UISearchComponent {
  /**
   * Placeholder text for the input.
   */
  placeholder = input<string>('Search...');
}
