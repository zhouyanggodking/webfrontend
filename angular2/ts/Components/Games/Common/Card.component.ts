import { Component, EventEmitter } from '@angular/core';
import {CardService} from '../../../Services/Card.Service'
import {Card} from '../../../Model/card/Card'
import {CardFace} from '../../../Model/card/CardFace'
import {CardSuite} from '../../../Model/card/CardSuite'

//usage: <card [face] ="face" [suite]="suite" width="500"></card>

@Component({
    selector: 'card',
    templateUrl: 'template/Components/Games/Common/Card.template.html',
    inputs: ['face', 'suite', 'imageWidth: width'],
    outputs: ['cardClicked'],
    providers: [CardService]
})
export class CardComponent {
    face: CardFace;
    suite: CardSuite;
    imageWidth: string;

    cardClicked: EventEmitter<Card> = new EventEmitter<Card>();

    get cardSrc()  {
        return CardService.getCardPNGImage(new Card(this.suite, this.face));
    }

    clickCard() {
        this.cardClicked.emit({
            face: this.face,
            suite: this.suite
        })
    }
}
