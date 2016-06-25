import { Component } from '@angular/core';
import {CardService} from '../../../Services/Card.Service'
import {Card} from '../../../Model/card/Card'
import {CardFace} from '../../../Model/card/CardFace'
import {CardSuite} from '../../../Model/card/CardSuite'
import {CardComponent} from '../../../Components/Games/Common/Card.Component'

@Component({
    selector: 'jacks-or-better',
    templateUrl: 'template/Components/Games/JacksOrBetter/JacksOrBetter.template.html',
    directives: [CardComponent]
})
export class JacksOrBetterComponent {
    //cardsrc = CardService.getCardPNGImage(new Card(CardSuite.Diamonds, CardFace.King));
    suite = CardSuite.Clubs;
    face = CardFace.Queen;
}