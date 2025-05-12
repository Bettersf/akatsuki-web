import { PublicKey } from "@solana/web3.js";
export const MINT_STATES = {
    "NOT_STARTED": {
        solPrice: 0
    },
    "OG": {
        solPrice: 0.5
    },
    "WL": {
        solPrice: 0.5
    },
    "PUBLIC": {
        solPrice: 0.5
    },
    "ENDED": {
        solPrice: 0
    },
};

//  OG mint starts in: + 24 * 60 * 60 * 1000
//  OG mint ends in:
//  WL mint ends in:
//  Public mint ends in:
//  ENDED

export const OG_TOKEN = new PublicKey("nft-addy");
export const WL_TOKEN = new PublicKey("nft-addy");
