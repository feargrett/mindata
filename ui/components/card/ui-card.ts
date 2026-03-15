import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { UiButtonComponent } from '../button/ui-button';
import { UiSvgComponent } from '../svg/ui-svg';

@Component({
  selector: 'ui-card',
  imports: [NgOptimizedImage, UiButtonComponent, UiSvgComponent],
  templateUrl: './ui-card.html',
  styleUrl: './ui-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardComponent {
  imageUrl = input<string>('https://picsum.photos/723/416');
  label = input<string>('Label');
  title = input<string>('Title');
  description = input<string>('Description');
  buttonLabel = input<string>('Click me');
  buttonDisabled = input<boolean>(false);
  showShadow = input<boolean>(true);
  withPadding = input<boolean>(true);

  cardClasses = computed(() => {
    const classes = [];
    if (this.showShadow()) classes.push('card--shadow');
    if (this.withPadding()) classes.push('card--padding');
    return classes.join(' ');
  });
}
