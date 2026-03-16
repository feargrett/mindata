import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent {
  disabled = input<boolean>(false);
  type = input<'button' | 'submit' | 'reset'>('button');
  variant = input<'filled' | 'basic'>('filled');

  variantClass = computed(() => {
    return this.variant() === 'basic' ? 'button--basic' : 'button--filled';
  });
}
