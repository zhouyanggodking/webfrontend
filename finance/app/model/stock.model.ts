export class Stock{
    //name of the stock
    name: string;
    //the code of the stock
    code: string;
    //the start price of today
    startPrice: number;
    //the end price of yesterday
    endPrice: number;
    //current price of the stock
    currentPrice: number;
    //highest price of the stock
    highestPrice: number;
    //lowest price of the stock
    lowestPrice: number;
    //delta
    delta: number;
    //delta ratio
    deltaRatio: number;
    //trade amount : unit yuan
    volume: number;
    //daily total numbers of the exchanges in share: unit 1
    exchangeShares: number;
    //date
    date: string;
    //time
    time: string;
}