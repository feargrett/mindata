import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { UiButtonComponent } from '../button/ui-button';
import { UiSvgComponent } from '../svg/ui-svg';
import type { IconName } from '../svg/icon-name.type';

@Component({
  selector: 'ui-card-image',
  imports: [NgOptimizedImage, UiButtonComponent, UiSvgComponent],
  templateUrl: './ui-card-image.html',
  styleUrl: './ui-card-image.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardImageComponent {
  imageUrl = input<string>('https://picsum.photos/400/600');
  title = input.required<string>();
  description = input.required<string>();
  buttonLabel = input.required<string>();
  buttonIcon = input.required<IconName>();
}
