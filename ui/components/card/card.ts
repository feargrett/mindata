import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { UIButtonComponent } from '../button/button';
import { UISvgComponent } from '../svg/svg';

@Component({
  selector: 'ui-card',
  imports: [NgOptimizedImage, UIButtonComponent, UISvgComponent],
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UICardComponent {
  imageUrl = input<string>('https://picsum.photos/723/416');
  label = input<string>('Label');
  title = input<string>('Title');
  description = input<string>('Description');
  buttonLabel = input<string>();
  buttonDisabled = input<boolean>(false);
  showShadow = input<boolean>(true);
  withPadding = input<boolean>(true);
  align = input<'auto' | 'vertical'>('auto');
  priority = input<boolean>(false);

  cardClasses = computed(() => {
    const classes = [];
    if (this.showShadow()) classes.push('card--shadow');
    if (this.withPadding()) classes.push('card--padding');
    if (this.align() === 'vertical') classes.push('card--vertical');
    return classes.join(' ');
  });
}
