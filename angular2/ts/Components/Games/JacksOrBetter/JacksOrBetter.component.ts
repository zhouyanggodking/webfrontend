import { Component } from '@angular/core';
import {CardService} from '../../../Services/Card.Service'
import {Card} from '../../../Model/card/Card'
import {CardFace} from '../../../Model/card/CardFace'
import {CardSuite} from '../../../Model/card/CardSuite'

@Component({
    selector: 'jacks-or-better',
    templateUrl: 'template/Components/Games/JacksOrBetter/jacksorbetter.template.html'
})
export class JacksOrBetterComponent {
    cardsrc = CardService.getCardPNGImage(new Card(CardSuite.Diamonds, CardFace.King));
}