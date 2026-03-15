import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiButtonComponent } from '@ui/components/button/ui-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
