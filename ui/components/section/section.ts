import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'ui-section',
  templateUrl: './section.html',
  styleUrl: './section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UISectionComponent {
  bgColor = input<'white' | 'gray'>('white');

  bgClass = computed(() => {
    const color = this.bgColor();
    return color === 'gray' ? 'bg-gray-100' : 'bg-white';
  });
}
