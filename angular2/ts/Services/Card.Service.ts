import {Card} from '../Model/Card/Card';
import {CardSuite} from '../Model/Card/CardSuite';
import {CardFace} from '../Model/Card/CardFace';
export class CardService {
    private static mapToCardImageName(card: Card): string {
        let facePart: string;
        if (card.face == CardFace.Ace) {
            facePart = "ace";
        } else if (card.face == CardFace.Jack) {
            facePart = "jack";
        } else if (card.face == CardFace.Queen) {
            facePart = "queen";
        } else if (card.face == CardFace.King) {
            facePart = "king";
        } else {
            facePart = card.face.toString();
        }

        let suitePart: string = CardSuite[card.suite];

        return facePart + "_of_" + suitePart;
    }

    static getCardPNGImage(card: Card): string {
        let pngBase = "./resource/cards/png/";
        let suffix = ".png";
        var name = CardService.mapToCardImageName(card);
        return pngBase + name + suffix;
    }

    static getCardSVGImage(card: Card): string {
        throw new Error("Not Implemented");
    }
}