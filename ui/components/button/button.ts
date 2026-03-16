import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';

/**
 * Reusable button component with multiple variants and types.
 *
 * @example
 * ```html
 * <!-- Filled button (default) -->
 * <ui-button>Click me</ui-button>
 *
 * <!-- Basic transparent button -->
 * <ui-button variant="basic">Download</ui-button>
 *
 * <!-- Disabled button -->
 * <ui-button [disabled]="true">Disabled</ui-button>
 *
 * <!-- Submit button -->
 * <ui-button type="submit">Submit Form</ui-button>
 * ```
 */
@Component({
  selector: 'ui-button',
  templateUrl: './button.html',
  styleUrl: './button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UIButtonComponent {
  /**
   * Whether the button is disabled.
   * @default false
   */
  disabled = input<boolean>(false);

  /**
   * The HTML button type attribute.
   * @default 'button'
   */
  type = input<'button' | 'submit' | 'reset'>('button');

  /**
   * Visual style variant of the button.
   * - `filled`: Solid background with primary color
   * - `basic`: Transparent background with white text
   * @default 'filled'
   */
  variant = input<'filled' | 'basic'>('filled');

  /**
   * Computed CSS class based on the selected variant.
   * @internal
   */
  protected variantClass = computed(() => {
    return this.variant() === 'basic' ? 'button--basic' : 'button--filled';
  });
}
