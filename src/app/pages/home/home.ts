import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UiButtonComponent } from '@ui/components/button/ui-button';

@Component({
  selector: 'app-home',
  imports: [UiButtonComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
