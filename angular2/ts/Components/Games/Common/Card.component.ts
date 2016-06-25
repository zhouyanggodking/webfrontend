import { Component } from '@angular/core';
import {CardService} from '../../../Services/Card.Service'
import {Card} from '../../../Model/card/Card'
import {CardFace} from '../../../Model/card/CardFace'
import {CardSuite} from '../../../Model/card/CardSuite'

@Component({
    selector: 'card',
    templateUrl: 'template/Components/Games/Common/Card.template.html',
    inputs: ['face', 'suite'],
    providers: [CardService]
})
export class CardComponent {
    face: CardFace;
    suite: CardSuite;

    get cardSrc()  {
        return CardService.getCardPNGImage(new Card(this.suite, this.face));
    }


}
