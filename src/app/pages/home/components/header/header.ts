import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'text-left',
  },
})
export class HeaderComponent {
  title = input.required<string>();
  description = input.required<string>();
}
