import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'ui-section',
  templateUrl: './ui-section.html',
  styleUrl: './ui-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSectionComponent {
  bgColor = input<'white' | 'gray'>('white');

  bgClass = computed(() => {
    const color = this.bgColor();
    return color === 'gray' ? 'bg-gray-100' : 'bg-white';
  });
}
