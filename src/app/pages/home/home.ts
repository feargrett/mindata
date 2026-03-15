import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UiCardComponent } from '@ui/components/card/ui-card';

@Component({
  selector: 'app-home',
  imports: [UiCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
