import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { UICardComponent } from '@ui/components/card/card';
import { UICardImageComponent } from '@ui/components/card-image/card-image';
import { UISearchComponent } from '@ui/components/forms/search/search';
import { UISectionComponent } from '@ui/components/section/section';
import { HeaderComponent } from './components/header/header';
import {
  data,
  cardsData,
  imageCardsData,
  type CardData,
  type CardItem,
  type ImageCardItem,
} from '@mocks/data';

@Component({
  selector: 'app-home',
  imports: [
    UICardComponent,
    UICardImageComponent,
    UISearchComponent,
    UISectionComponent,
    HeaderComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  cardData = signal<CardData>(data);
  cardsData = signal<CardItem[]>(cardsData);
  imageCardsData = signal<ImageCardItem[]>(imageCardsData);
}
