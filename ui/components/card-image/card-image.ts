import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { UIButtonComponent } from '../button/button';
import { UISvgComponent } from '../svg/svg';
import type { IconName } from '../svg/icon-name.type';

@Component({
  selector: 'ui-card-image',
  imports: [NgOptimizedImage, UIButtonComponent, UISvgComponent],
  templateUrl: './card-image.html',
  styleUrl: './card-image.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UICardImageComponent {
  imageUrl = input<string>('https://picsum.photos/400/600');
  title = input.required<string>();
  description = input.required<string>();
  buttonLabel = input.required<string>();
  buttonIcon = input.required<IconName>();
}
