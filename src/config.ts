import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Embeddable House",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "andr1jl3f6wapdwu6au0kuhh8x2fujtyz4hglxpxkyzzjneh463pvzplqxgdpf3",
            cw721: "andr13ckg338geuvqyd5xar2zfjzgd59kpwg28apt67emgacw3p9plprqty2fd3",
            name: "FICI",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "ANDR1"
        },
    ],
};

export default CONFIG;
