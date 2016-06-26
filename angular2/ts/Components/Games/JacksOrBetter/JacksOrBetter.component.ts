import { Component } from '@angular/core';
import {CardService} from '../../../Services/Card.Service'
import {Card} from '../../../Model/card/Card'
import {CardFace} from '../../../Model/card/CardFace'
import {CardSuite} from '../../../Model/card/CardSuite'
import {CardComponent} from '../../../Components/Games/Common/Card.Component'
import {CardShape} from '../../../Model/Card/CardShape';

@Component({
    selector: 'jacks-or-better',
    templateUrl: 'template/Components/Games/JacksOrBetter/JacksOrBetter.template.html',
    directives: [CardComponent]
})
export class JacksOrBetterComponent {   

    cards: Card[] = [
        { face: CardFace.Ten, suite: CardSuite.Spades },
        { face: CardFace.Jack, suite: CardSuite.Spades },
        { face: CardFace.Queen, suite: CardSuite.Spades },
        { face: CardFace.King, suite: CardSuite.Spades },
        { face: CardFace.Ace, suite: CardSuite.Spades }
    ];

    texasPokerShape: string = CardShape[CardService.getTexasPokerShape(this.cards)];

    cardClick(event) {
        console.log(event);
        let selectedCard = event;

        let face = Math.floor(Math.random() * 13 + 1);
        let suite = Math.floor(Math.random() * 4 + 1);

        while (this.contains({ face: face, suite: suite })){
            face = Math.floor(Math.random() * 13 + 1);
            suite = Math.floor(Math.random() * 4 + 1);
        }

        for (let index = 0; index < this.cards.length; ++index) {
            if (selectedCard.face == this.cards[index].face && selectedCard.suite == this.cards[index].suite) {
                this.cards[index] = { face: face, suite: suite };
                break;
            }
        }

        this.texasPokerShape = CardShape[CardService.getTexasPokerShape(this.cards)];
    }

    private contains(card: Card): boolean {
        for (let index = 0; index < this.cards.length; ++index) {
            if (card.face == this.cards[index].face && card.suite == this.cards[index].suite) {
                return true;
            }                
        }
        return false;
    }
}