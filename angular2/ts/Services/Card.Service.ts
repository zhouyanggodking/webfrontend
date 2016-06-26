import {Card} from '../Model/Card/Card';
import {CardSuite} from '../Model/Card/CardSuite';
import {CardFace} from '../Model/Card/CardFace';
import {CardShape} from '../Model/Card/CardShape';

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

    static getTexasPokerShape(cards: Card[]): CardShape {
        let tempCards = cards.slice(0);//detach from original cards
        tempCards.sort((a, b) => {//ascending sort
            if (a.face > b.face) {
                return 1;
            } else if (a.face == b.face) {
                return 0;
            } else {
                return -1;
            }
        });

        if (this.suited(tempCards)) {
            if (this.isStraight(tempCards) == -1) {
                return CardShape.RoyalFlush;
            }
            if (this.isStraight(tempCards) == 1) {
                return CardShape.StraightFlush;
            }
            return CardShape.Flush;
        }

        if (this.isStraight(tempCards)) {
            return CardShape.Straight;
        }

        //{face, count}

        let groupObj: any[] = [];


        for (let index = 0; index < tempCards.length; ++index) {
            if (groupObj.length) {
                if (groupObj[groupObj.length - 1].face == tempCards[index].face) {
                    groupObj[groupObj.length - 1].count++;
                } else {
                    groupObj.push({
                        face: tempCards[index].face,
                        count: 1
                    });
                }
            } else {
                //initiated with first elem
                groupObj.push({
                    face: tempCards[index].face,
                    count: 1
                });
            }
        }

        groupObj.sort((a, b) => {//desc sort
            if (a.count < b.count) {
                return 1;
            } else if (a.face == b.face) {
                return 0;
            } else {
                return -1;
            }
        });

        if (groupObj[0].count == 4) {
            return CardShape.FourOfKind;
        }

        if (groupObj[0].count == 3 && groupObj[1].count == 2) {
            return CardShape.FullHouse;
        }

        if (groupObj[0].count == 3 && groupObj[1].count == 1) {
            return CardShape.ThreeOfKind;
        }

        if (groupObj[0].count == 2 && groupObj[1].count == 2) {
            return CardShape.TwoPair;
        }

        if (groupObj[0].count == 2) {
            return CardShape.OnePair;
        }

        return CardShape.HighCard;
    }

    //could handle arbitrary cards
    private static suited(cards: Card[]): boolean {
        if (cards.length < 1) {
            throw new Error("No Poker Cards");
        }

        let suited: boolean;
        let suite: CardSuite = cards[0].suite;
        for (let index = 1; index < cards.length; ++index) {
            suited = cards[index].suite == suite;
            if (!suited) {
                break;
            }
        }
        return suited;
    }

    //-1 for royal, 0 for not straight, 1 for straight
    private static isStraight(sortedCards: Card[]): number {  
        //10, J, Q, K, A case
        if (sortedCards[0].face == CardFace.Ace &&
            sortedCards[1].face == CardFace.Ten &&
            sortedCards[2].face == CardFace.Jack &&
            sortedCards[3].face == CardFace.Queen &&
            sortedCards[4].face == CardFace.King) {
            return -1;
        }

        for (let index = 1; index < sortedCards.length; ++index) {
            if (sortedCards[index - 1].face + 1 == sortedCards[index].face) {
                continue;
            }
            return 0;
        }
        return 1;
    }
}