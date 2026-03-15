import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UiCardComponent } from '@ui/components/card/ui-card';
import { UiSectionComponent } from '@ui/components/section/ui-section';
import { data, cardsData } from '@mocks/data';

@Component({
  selector: 'app-home',
  imports: [UiCardComponent, UiSectionComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  cardData = data;
  cardsData = cardsData;
}
