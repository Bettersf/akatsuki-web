import { PublicKey } from "@solana/web3.js";
export const MINT_STATES = {
    "NOT_STARTED": {
        solPrice: 0
    },
    "WL": {
        solPrice: 1
    },
    "WL": {
        solPrice: 1
    },
    "PUBLIC": {
        solPrice: 0.3
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

export const OG_TOKEN = new PublicKey("J99CizsQopb9oDKEku58WNv1XomjD1PLSGbr6hrze4nN");
export const WL_TOKEN = new PublicKey("9obXs68qmF4i6YvXsGDvY7dZM2ZWCjzy2eLVDqUbkYin");
