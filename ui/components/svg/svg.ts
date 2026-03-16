import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { IconName } from './icon-name.type';

@Component({
  selector: 'ui-svg',
  templateUrl: './svg.html',
  styleUrl: './svg.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.width.px]': 'width()',
    '[style.height.px]': 'height()',
  },
})
export class UISvgComponent {
  icon = input.required<IconName>();
  width = input<number>(24);
  height = input<number>(24);
}
