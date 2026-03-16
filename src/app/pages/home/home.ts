import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UiCardComponent } from '@ui/components/card/ui-card';
import { UiCardImageComponent } from '@ui/components/card-image/ui-card-image';
import { UiSectionComponent } from '@ui/components/section/ui-section';
import { data, cardsData, imageCardsData } from '@mocks/data';

@Component({
  selector: 'app-home',
  imports: [UiCardComponent, UiCardImageComponent, UiSectionComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  cardData = data;
  cardsData = cardsData;
  imageCardsData = imageCardsData;
}
