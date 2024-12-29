const retailBills = [
    {
        "_id": "6610fb44b9dec2939ccfdb77",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6610d870fb09ee9889d77b84",
        "BillNo": 1,
        "orderDate": "2024-04-06T00:00:00.000Z",
        "name": "sangeeta enterprise",
        "address": "vadodra",
        "mobileNumber": 9824080372,
        "deliveryDate": "2024-04-08T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 50,
                "price": 220,
                "_id": "6610fb44b9dec2939ccfdb78"
            }
        ],
        "totalFirki": 50,
        "subTotal": 11000,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 11000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6742c253647a57f2b80d3e77",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6742c252647a57f2b80d3e75",
        "BillNo": 2,
        "orderDate": "2024-11-24T00:00:00.000Z",
        "name": "JK",
        "address": "ST",
        "mobileNumber": 9978622476,
        "deliveryDate": "2024-11-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6742c2af647a57f2b80d3f5f"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "6742c2af647a57f2b80d3f60"
            }
        ],
        "totalFirki": 4,
        "subTotal": 1225,
        "discount": 260,
        "advance": 0,
        "paid": 0,
        "totalDue": 965,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "674b2a7a9f64f7449eede15c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "674b2a7a9f64f7449eede15a",
        "BillNo": 3,
        "orderDate": "2024-11-30T00:00:00.000Z",
        "name": "pragnesh bhai",
        "address": "surat",
        "mobileNumber": 9825295589,
        "deliveryDate": "2024-12-02T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "674b2a7a9f64f7449eede15d"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 600,
                "_id": "674bf707e6ae49cff43d796e"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1650,
        "discount": 0,
        "advance": 700,
        "paid": 0,
        "totalDue": 950,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "674c2cc8390f3a7e57ad4772",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "674c2cc8390f3a7e57ad4770",
        "BillNo": 4,
        "orderDate": "2024-12-01T00:00:00.000Z",
        "name": "rupesh",
        "address": "st",
        "mobileNumber": 7265035038,
        "deliveryDate": "2024-12-02T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 600,
                "_id": "674c2cc8390f3a7e57ad4773"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "674c2cc8390f3a7e57ad4774"
            }
        ],
        "totalFirki": 2,
        "subTotal": 950,
        "discount": 0,
        "advance": 950,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "674c340474a57cc20b223073",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "674c340474a57cc20b223071",
        "BillNo": 5,
        "orderDate": "2024-12-01T00:00:00.000Z",
        "name": "navnitbhai",
        "address": "st",
        "mobileNumber": 9427701801,
        "deliveryDate": "2024-12-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "674c340474a57cc20b223074"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 700,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "674c48597bc2dc31c052465a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "674c48587bc2dc31c0524658",
        "BillNo": 6,
        "orderDate": "2024-12-01T00:00:00.000Z",
        "name": "sanjay",
        "address": "st",
        "mobileNumber": 9925392162,
        "deliveryDate": "2024-12-02T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "674c48597bc2dc31c052465b"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 3,
                "price": 80,
                "_id": "674c48597bc2dc31c052465c"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "674c48597bc2dc31c052465d"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 5,
                "price": 350,
                "_id": "674c48597bc2dc31c052465e"
            }
        ],
        "totalFirki": 5,
        "subTotal": 2225,
        "discount": 0,
        "advance": 2225,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "674c49277bc2dc31c0524768",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "674c49267bc2dc31c0524766",
        "BillNo": 7,
        "orderDate": "2024-12-01T00:00:00.000Z",
        "name": "shyam",
        "address": "st",
        "mobileNumber": 8160328228,
        "deliveryDate": "2024-12-02T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 2,
                "price": 80,
                "_id": "674c49277bc2dc31c0524769"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "674c49277bc2dc31c052476a"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "674c49277bc2dc31c052476b"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1035,
        "discount": 0,
        "advance": 1035,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "674ea701959555253f1c4ab7",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "674ea700959555253f1c4ab5",
        "BillNo": 8,
        "orderDate": "2024-12-03T00:00:00.000Z",
        "name": "hirenbhai",
        "address": "st",
        "mobileNumber": 9104804372,
        "deliveryDate": "2024-12-03T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2471",
                "productName": "12/250 READY FIRKI",
                "quantity": 1,
                "price": 750,
                "_id": "674ea701959555253f1c4ab8"
            },
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "674ea701959555253f1c4ab9"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1400,
        "discount": 0,
        "advance": 0,
        "paid": 1400,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "674ef0072edd25a9e74d575c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "674ef0062edd25a9e74d575a",
        "BillNo": 9,
        "orderDate": "2024-12-03T00:00:00.000Z",
        "name": "parimal kansara",
        "address": "surat",
        "mobileNumber": 9898678008,
        "deliveryDate": "2024-12-05T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 6,
                "price": 60,
                "_id": "674ef0072edd25a9e74d575d"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 6,
                "price": 320,
                "_id": "674ef0072edd25a9e74d575e"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 6,
                "price": 175,
                "_id": "674ef0072edd25a9e74d575f"
            }
        ],
        "totalFirki": 6,
        "subTotal": 3330,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 3330,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67502d72b198b065e38d237a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67502d72b198b065e38d2378",
        "BillNo": 10,
        "orderDate": "2024-12-04T00:00:00.000Z",
        "name": "vaghelabhai",
        "address": "st",
        "mobileNumber": 9898097737,
        "deliveryDate": "2024-12-09T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 90,
                "price": 60,
                "_id": "67502d72b198b065e38d237b"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 20,
                "price": 350,
                "_id": "67502d72b198b065e38d237c"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 50,
                "price": 175,
                "_id": "67502d72b198b065e38d237d"
            }
        ],
        "totalFirki": 90,
        "subTotal": 21150,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 21150,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6750367e798750c61e10f03f",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6750367d798750c61e10f03d",
        "BillNo": 11,
        "orderDate": "2024-12-04T00:00:00.000Z",
        "name": "karanpatel",
        "address": "st",
        "mobileNumber": 9712942131,
        "deliveryDate": "2024-12-05T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "6750367e798750c61e10f040"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6750367e798750c61e10f041"
            }
        ],
        "totalFirki": 1,
        "subTotal": 430,
        "discount": 0,
        "advance": 430,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67503aab4cf997bd6f435378",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67503aab4cf997bd6f435376",
        "BillNo": 12,
        "orderDate": "2024-12-04T00:00:00.000Z",
        "name": "TIRTH",
        "address": "AMD",
        "mobileNumber": 9909919536,
        "deliveryDate": "2024-12-04T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "67503aab4cf997bd6f435379"
            },
            {
                "productId": "65bde88769acedb394df2471",
                "productName": "12/250 READY FIRKI",
                "quantity": 2,
                "price": 750,
                "_id": "67503aab4cf997bd6f43537a"
            }
        ],
        "totalFirki": 3,
        "subTotal": 2150,
        "discount": 150,
        "advance": 0,
        "paid": 2000,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67515241642679100925c723",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67515240642679100925c721",
        "BillNo": 13,
        "orderDate": "2024-12-05T00:00:00.000Z",
        "name": "YASH",
        "address": "ST",
        "mobileNumber": 8141917802,
        "deliveryDate": "2024-12-06T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 3,
                "price": 80,
                "_id": "67515241642679100925c724"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "67515241642679100925c725"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1290,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1290,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67552300a19c0ee9a5eea9ee",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67552300a19c0ee9a5eea9ec",
        "BillNo": 14,
        "orderDate": "2024-12-08T00:00:00.000Z",
        "name": "menex",
        "address": "st",
        "mobileNumber": 8160979610,
        "deliveryDate": "2024-12-08T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "67552300a19c0ee9a5eea9ef"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1100,
        "discount": 0,
        "advance": 1100,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6755369659b7a846f443cd51",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6755369659b7a846f443cd4f",
        "BillNo": 15,
        "orderDate": "2024-12-08T00:00:00.000Z",
        "name": "jigneshbhai",
        "address": "st",
        "mobileNumber": 9426141431,
        "deliveryDate": "2024-12-08T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6755369659b7a846f443cd52"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67558880c3bbda684e5a4c28",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67558880c3bbda684e5a4c26",
        "BillNo": 16,
        "orderDate": "2024-12-08T00:00:00.000Z",
        "name": "KEYUR",
        "address": "ST",
        "mobileNumber": 8511118478,
        "deliveryDate": "2024-12-09T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 2,
                "price": 150,
                "_id": "67558880c3bbda684e5a4c29"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 2,
                "price": 70,
                "_id": "67558880c3bbda684e5a4c2a"
            }
        ],
        "totalFirki": 2,
        "subTotal": 440,
        "discount": 0,
        "advance": 440,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6755ac91b3e1e0da95945313",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6755ac90b3e1e0da95945311",
        "BillNo": 17,
        "orderDate": "2024-12-08T00:00:00.000Z",
        "name": "ABHI",
        "address": "ST",
        "mobileNumber": 7283862150,
        "deliveryDate": "2024-12-08T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "6755ac91b3e1e0da95945314"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6755ac91b3e1e0da95945315"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6755ad1eb3e1e0da9594547f",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6755ac90b3e1e0da95945311",
        "BillNo": 18,
        "orderDate": "2024-12-08T00:00:00.000Z",
        "name": "NAGRAJ",
        "address": "ST",
        "mobileNumber": 7283862150,
        "deliveryDate": "2024-12-09T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "6755ad1eb3e1e0da95945480"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6755ad1eb3e1e0da95945481"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1050,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6755adc6b3e1e0da959455f1",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6755adc5b3e1e0da959455ef",
        "BillNo": 19,
        "orderDate": "2024-12-08T00:00:00.000Z",
        "name": "KRISH",
        "address": "ST",
        "mobileNumber": 9924747476,
        "deliveryDate": "2024-12-09T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "6755adc6b3e1e0da959455f2"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6755adc6b3e1e0da959455f3"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6756b93b974f585abe67b441",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6756b93b974f585abe67b43f",
        "BillNo": 20,
        "orderDate": "2024-12-09T00:00:00.000Z",
        "name": "jignesahbhai",
        "address": "st",
        "mobileNumber": 9879395051,
        "deliveryDate": "2024-12-10T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6756b93b974f585abe67b442"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67584d81b87edb1ad15a44e2",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67584d81b87edb1ad15a44e0",
        "BillNo": 21,
        "orderDate": "2024-12-10T00:00:00.000Z",
        "name": "RAHUL",
        "address": "ST",
        "mobileNumber": 9879447001,
        "deliveryDate": "2024-12-11T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "67584d81b87edb1ad15a44e3"
            }
        ],
        "totalFirki": 4,
        "subTotal": 1050,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1050,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67592e0cbac3204fc10d982b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67592e0cbac3204fc10d9829",
        "BillNo": 22,
        "orderDate": "2024-12-11T00:00:00.000Z",
        "name": "dhiraj bhai",
        "address": "st",
        "mobileNumber": 9427893257,
        "deliveryDate": "2024-12-11T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "67592e0cbac3204fc10d982c"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "67592e0cbac3204fc10d982d"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67592e3fbac3204fc10d99bd"
            }
        ],
        "totalFirki": 2,
        "subTotal": 645,
        "discount": 20,
        "advance": 625,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675933ec07c0130a1a344a50",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675933ec07c0130a1a344a4e",
        "BillNo": 23,
        "orderDate": "2024-12-11T00:00:00.000Z",
        "name": "pavan",
        "address": "st",
        "mobileNumber": 9714241304,
        "deliveryDate": "2024-12-12T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "675933ec07c0130a1a344a51"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 700,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67595e4c344aefd8e1099dd9",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67595e4c344aefd8e1099dd7",
        "BillNo": 24,
        "orderDate": "2024-12-11T00:00:00.000Z",
        "name": "kripa",
        "address": "st",
        "mobileNumber": 9638223334,
        "deliveryDate": "2024-12-12T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "67595e4c344aefd8e1099dda"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67595e4c344aefd8e1099ddb"
            }
        ],
        "totalFirki": 3,
        "subTotal": 430,
        "discount": 0,
        "advance": 430,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6759990870d5a96a3463de38",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6759990870d5a96a3463de36",
        "BillNo": 25,
        "orderDate": "2024-12-11T00:00:00.000Z",
        "name": "BHAVESH",
        "address": "ST",
        "mobileNumber": 9978544293,
        "deliveryDate": "2024-12-11T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "6759990870d5a96a3463de39"
            },
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "6759990870d5a96a3463de3a"
            },
            {
                "productId": "65bde88769acedb394df2472",
                "productName": "12/500 READY FIRKI",
                "quantity": 2,
                "price": 1300,
                "_id": "6759990870d5a96a3463de3b"
            }
        ],
        "totalFirki": 5,
        "subTotal": 5000,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 5000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675999a492a6c945e31e1bda",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6759b69626ae91b63905fbde",
        "BillNo": 26,
        "orderDate": "2024-12-11T00:00:00.000Z",
        "name": "kevin",
        "address": "st",
        "mobileNumber": 9898314623,
        "deliveryDate": "2024-12-12T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "675999a492a6c945e31e1bdd"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "6759b69826ae91b63905fbea"
            }
        ],
        "totalFirki": 2,
        "subTotal": 430,
        "discount": 0,
        "advance": 430,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6759b3c926ae91b63905f6ed",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6759b3c826ae91b63905f6eb",
        "BillNo": 27,
        "orderDate": "2024-12-11T00:00:00.000Z",
        "name": "JIGAR",
        "address": "ST",
        "mobileNumber": 9023488201,
        "deliveryDate": "2024-12-11T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6759b3c926ae91b63905f6ee"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675aa6f4fc6f533875c8c068",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675aa6f3fc6f533875c8c066",
        "BillNo": 28,
        "orderDate": "2024-12-12T00:00:00.000Z",
        "name": "parth",
        "address": "st",
        "mobileNumber": 9313268033,
        "deliveryDate": "2024-12-12T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "675aa6f4fc6f533875c8c069"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1100,
        "discount": 0,
        "advance": 1100,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675ad85748127d48664ccbbc",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675ad85648127d48664ccbba",
        "BillNo": 29,
        "orderDate": "2024-12-12T00:00:00.000Z",
        "name": "NAIMISH",
        "address": "ST",
        "mobileNumber": 7383056053,
        "deliveryDate": "2024-12-13T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "675ad85748127d48664ccbbd"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 175,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675adf85e7c3f89ca92735db",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675adf85e7c3f89ca92735d9",
        "BillNo": 30,
        "orderDate": "2024-12-12T00:00:00.000Z",
        "name": "RAJ",
        "address": "ST",
        "mobileNumber": 8141314232,
        "deliveryDate": "2024-12-13T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "675adf85e7c3f89ca92735dc"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "675adf85e7c3f89ca92735dd"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675aefee7c4bff8f3cbc1f56",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67584d81b87edb1ad15a44e0",
        "BillNo": 31,
        "orderDate": "2024-12-12T00:00:00.000Z",
        "name": "RAHUL",
        "address": "ST",
        "mobileNumber": 9879447001,
        "deliveryDate": "2024-12-13T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "675aefee7c4bff8f3cbc1f57"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675af0c07c4bff8f3cbc2112",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675af0bf7c4bff8f3cbc2110",
        "BillNo": 32,
        "orderDate": "2024-12-12T00:00:00.000Z",
        "name": "SAHIL",
        "address": "ST",
        "mobileNumber": 9016487974,
        "deliveryDate": "2024-12-13T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "675af0c07c4bff8f3cbc2113"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "675af0c07c4bff8f3cbc2114"
            }
        ],
        "totalFirki": 2,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675af1a47c4bff8f3cbc22d7",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675af1a47c4bff8f3cbc22d5",
        "BillNo": 33,
        "orderDate": "2024-12-12T00:00:00.000Z",
        "name": "VIRAJ",
        "address": "ST",
        "mobileNumber": 7862088449,
        "deliveryDate": "2024-12-13T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "675af1a47c4bff8f3cbc22d8"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "675af1a47c4bff8f3cbc22d9"
            }
        ],
        "totalFirki": 2,
        "subTotal": 430,
        "discount": 0,
        "advance": 420,
        "paid": 0,
        "totalDue": 10,
        "notes": "DELEVERD SELF MISS RECIPT",
        "__v": 0
    },
    {
        "_id": "675b05a01b5f0276daff015e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675b05a01b5f0276daff015c",
        "BillNo": 34,
        "orderDate": "2024-12-12T00:00:00.000Z",
        "name": "AMIT",
        "address": "ST",
        "mobileNumber": 9427123558,
        "deliveryDate": "2024-12-12T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "675b05a01b5f0276daff015f"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675bb5de0a25c3fb38fe9f9d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675bb5dd0a25c3fb38fe9f9b",
        "BillNo": 35,
        "orderDate": "2024-12-13T00:00:00.000Z",
        "name": "VISHAL",
        "address": "ST",
        "mobileNumber": 9273600657,
        "deliveryDate": "2024-12-14T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "675bb5de0a25c3fb38fe9f9e"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675bc1141f551fdc8d30a5ed",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675bc1141f551fdc8d30a5eb",
        "BillNo": 36,
        "orderDate": "2024-12-13T00:00:00.000Z",
        "name": "MANILAL",
        "address": "ST",
        "mobileNumber": 9726490990,
        "deliveryDate": "2024-12-14T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "675bc1141f551fdc8d30a5ee"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "675bc1141f551fdc8d30a5ef"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675c4029b036757747c0e9c4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675c4029b036757747c0e9c2",
        "BillNo": 37,
        "orderDate": "2024-12-13T00:00:00.000Z",
        "name": "katlariwala",
        "address": "st",
        "mobileNumber": 9228701783,
        "deliveryDate": "2024-12-14T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "675c4029b036757747c0e9c5"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "675c4029b036757747c0e9c6"
            }
        ],
        "totalFirki": 1,
        "subTotal": 220,
        "discount": 20,
        "advance": 0,
        "paid": 0,
        "totalDue": 200,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675d1085f30ed917c16b9307",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675d1085f30ed917c16b9305",
        "BillNo": 38,
        "orderDate": "2024-12-14T00:00:00.000Z",
        "name": "harshil",
        "address": "st",
        "mobileNumber": 8141865708,
        "deliveryDate": "2024-12-14T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 4,
                "price": 650,
                "_id": "675d1085f30ed917c16b9308"
            },
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 3,
                "price": 1100,
                "_id": "675d1085f30ed917c16b9309"
            }
        ],
        "totalFirki": 7,
        "subTotal": 5900,
        "discount": 0,
        "advance": 5900,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675d1115f30ed917c16b94ea",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675d1085f30ed917c16b9305",
        "BillNo": 39,
        "orderDate": "2024-12-14T00:00:00.000Z",
        "name": "harshil",
        "address": "st",
        "mobileNumber": 8141865708,
        "deliveryDate": "2024-12-15T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 2,
                "price": 650,
                "_id": "675d1115f30ed917c16b94eb"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "675d1115f30ed917c16b94ec"
            }
        ],
        "totalFirki": 1,
        "subTotal": 2000,
        "discount": 0,
        "advance": 2000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675d1fb9271f48669916771b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675d1fb8271f486699167719",
        "BillNo": 40,
        "orderDate": "2024-12-14T00:00:00.000Z",
        "name": "BHAVINBHAI",
        "address": "ST",
        "mobileNumber": 8460050957,
        "deliveryDate": "2024-12-15T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "675d1fb9271f48669916771c"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675d3f3a1d7f9ff00c5fa0df",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675d3f3a1d7f9ff00c5fa0dd",
        "BillNo": 41,
        "orderDate": "2024-12-14T00:00:00.000Z",
        "name": "NIKET",
        "address": "ST",
        "mobileNumber": 8460479434,
        "deliveryDate": "2024-12-14T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "675d3f3a1d7f9ff00c5fa0e0"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675d5a5a9c367ede719401de",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675d5a5a9c367ede719401dc",
        "BillNo": 42,
        "orderDate": "2024-12-14T00:00:00.000Z",
        "name": "TISHIN",
        "address": "SY",
        "mobileNumber": 8469974063,
        "deliveryDate": "2024-12-15T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "675d5a5a9c367ede719401df"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675d5b3c9c367ede719403f1",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675d5b3c9c367ede719403ef",
        "BillNo": 43,
        "orderDate": "2024-12-14T00:00:00.000Z",
        "name": "SHADEV",
        "address": "ST",
        "mobileNumber": 8980173905,
        "deliveryDate": "2024-12-14T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "6767de8f2ef5620be7c281cb"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6767de8f2ef5620be7c281cc"
            }
        ],
        "totalFirki": 4,
        "subTotal": 1225,
        "discount": 0,
        "advance": 1225,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675d72bd499a1d0006abfb80",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675d72bd499a1d0006abfb7e",
        "BillNo": 44,
        "orderDate": "2024-12-14T00:00:00.000Z",
        "name": "BHAVESHPATEL",
        "address": "ST",
        "mobileNumber": 9879746529,
        "deliveryDate": "2024-12-15T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "675d72bd499a1d0006abfb81"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "675d72bd499a1d0006abfb82"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675d79b6bb079800e0751f4f",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675d79b6bb079800e0751f4d",
        "BillNo": 45,
        "orderDate": "2024-12-14T00:00:00.000Z",
        "name": "HEMANTABHAI",
        "address": "ST",
        "mobileNumber": 9429427094,
        "deliveryDate": "2024-12-14T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "675d79b6bb079800e0751f50"
            },
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "675d7b5cbb079800e0752180"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "675d7b5cbb079800e0752181"
            }
        ],
        "totalFirki": 3,
        "subTotal": 585,
        "discount": 0,
        "advance": 100,
        "paid": 0,
        "totalDue": 485,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675d7e3cbb079800e07523b0",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675d7e3bbb079800e07523ae",
        "BillNo": 46,
        "orderDate": "2024-12-14T00:00:00.000Z",
        "name": "HARSH",
        "address": "ST",
        "mobileNumber": 8238461075,
        "deliveryDate": "2024-12-15T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2476",
                "productName": "12/250 BOBIN",
                "quantity": 1,
                "price": 450,
                "_id": "675d7e3cbb079800e07523b1"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "675d7e3cbb079800e07523b2"
            },
            {
                "productId": "675d7f20bb079800e07526aa",
                "productName": "12/900",
                "quantity": 1,
                "price": 180,
                "_id": "675d7fa9bb079800e075285d"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "675d7fa9bb079800e075285e"
            }
        ],
        "totalFirki": 2,
        "subTotal": 875,
        "discount": 0,
        "advance": 625,
        "paid": 0,
        "totalDue": 250,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675d8122bb079800e0752a98",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675d8121bb079800e0752a96",
        "BillNo": 47,
        "orderDate": "2024-12-14T00:00:00.000Z",
        "name": "BHAVIN",
        "address": "ST",
        "mobileNumber": 9898494840,
        "deliveryDate": "2024-12-15T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2477",
                "productName": "12/500 BOBIN",
                "quantity": 1,
                "price": 850,
                "_id": "675d8122bb079800e0752a99"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "675d8122bb079800e0752a9a"
            },
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "675d8122bb079800e0752a9b"
            }
        ],
        "totalFirki": 2,
        "subTotal": 2300,
        "discount": 0,
        "advance": 2300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675d8223bb079800e0752cd7",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675d8222bb079800e0752cd5",
        "BillNo": 48,
        "orderDate": "2024-12-14T00:00:00.000Z",
        "name": "JASH",
        "address": "ST",
        "mobileNumber": 8780526497,
        "deliveryDate": "2024-12-15T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "675d8223bb079800e0752cd8"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675d8651bb079800e07535ca",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675d8651bb079800e07535c8",
        "BillNo": 49,
        "orderDate": "2024-12-14T00:00:00.000Z",
        "name": "ANIL",
        "address": "ST",
        "mobileNumber": 9974218690,
        "deliveryDate": "2024-12-14T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 2,
                "price": 350,
                "_id": "675d8651bb079800e07535cb"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 700,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675d8b766877364ebdc6b152",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675d8b756877364ebdc6b150",
        "BillNo": 50,
        "orderDate": "2024-12-14T00:00:00.000Z",
        "name": "ASHOKBHAI",
        "address": "ST",
        "mobileNumber": 9228066537,
        "deliveryDate": "2024-12-15T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "675d8b766877364ebdc6b153"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 700,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675e6723563d6175e77a3ea4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675e6723563d6175e77a3ea2",
        "BillNo": 51,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "divy",
        "address": "st",
        "mobileNumber": 9313606667,
        "deliveryDate": "2024-12-15T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 4,
                "price": 350,
                "_id": "675e6723563d6175e77a3ea5"
            }
        ],
        "totalFirki": 4,
        "subTotal": 1400,
        "discount": 0,
        "advance": 1400,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675e8ffdc6318eef7ee1949a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675e8ffcc6318eef7ee19498",
        "BillNo": 52,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "ARESHBHAI",
        "address": "ST",
        "mobileNumber": 9898038735,
        "deliveryDate": "2024-12-15T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 1,
                "price": 350,
                "_id": "675e8ffdc6318eef7ee1949b"
            },
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "675e8ffdc6318eef7ee1949c"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675e9c71b7a84b7264b7af75",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675e9c71b7a84b7264b7af73",
        "BillNo": 53,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "JAGDISHBHAI",
        "address": "ST",
        "mobileNumber": 9825919622,
        "deliveryDate": "2024-12-16T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "675e9c71b7a84b7264b7af76"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675e9d8eb7a84b7264b7b1c8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675e9d8eb7a84b7264b7b1c6",
        "BillNo": 54,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "PRADYUMAN",
        "address": "ST",
        "mobileNumber": 8511006733,
        "deliveryDate": "2024-12-15T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "675e9d8eb7a84b7264b7b1c9"
            }
        ],
        "totalFirki": 1,
        "subTotal": 650,
        "discount": 0,
        "advance": 650,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675e9f1cb7a84b7264b7b41f",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675e9f1bb7a84b7264b7b41d",
        "BillNo": 55,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "MANTHAN",
        "address": "ST",
        "mobileNumber": 9924799809,
        "deliveryDate": "2024-12-16T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "675e9f1cb7a84b7264b7b420"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675ea02fb7a84b7264b7b67a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675ea02fb7a84b7264b7b678",
        "BillNo": 56,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "VASU",
        "address": "ST",
        "mobileNumber": 7990840645,
        "deliveryDate": "2024-12-16T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "675ea02fb7a84b7264b7b67b"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "675ea02fb7a84b7264b7b67c"
            }
        ],
        "totalFirki": 2,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675eb05031e1e3e6ad61c91a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675eb05031e1e3e6ad61c918",
        "BillNo": 57,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "M.N KHAN",
        "address": "ST",
        "mobileNumber": 9427504882,
        "deliveryDate": "2024-12-15T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 4,
                "price": 650,
                "_id": "675eb05031e1e3e6ad61c91b"
            },
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 2,
                "price": 1100,
                "_id": "675eb05031e1e3e6ad61c91c"
            }
        ],
        "totalFirki": 6,
        "subTotal": 4800,
        "discount": 0,
        "advance": 4800,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675eb72333b87ad21ec809ce",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675eb72233b87ad21ec809cc",
        "BillNo": 58,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "SHAH",
        "address": "ST",
        "mobileNumber": 9099747674,
        "deliveryDate": "2024-12-16T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "675eb72333b87ad21ec809cf"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "675eb72333b87ad21ec809d0"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1050,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675ebf30c292326ae2519ede",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675ebf30c292326ae2519edc",
        "BillNo": 59,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "RAJDIPSINH",
        "address": "ST",
        "mobileNumber": 9537011555,
        "deliveryDate": "2024-12-16T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "675ebf30c292326ae2519edf"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 700,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675ec19ac292326ae251a14f",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675ec199c292326ae251a14d",
        "BillNo": 60,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "HARSH",
        "address": "ST",
        "mobileNumber": 9898697705,
        "deliveryDate": "2024-12-16T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 3,
                "price": 70,
                "_id": "675ec19ac292326ae251a150"
            },
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 3,
                "price": 150,
                "_id": "675ec19ac292326ae251a151"
            }
        ],
        "totalFirki": 3,
        "subTotal": 660,
        "discount": 0,
        "advance": 660,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675ec264c292326ae251a3c9",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675ec264c292326ae251a3c7",
        "BillNo": 61,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "MEHUL",
        "address": "ST",
        "mobileNumber": 9427289583,
        "deliveryDate": "2024-12-15T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "675ec264c292326ae251a3ca"
            }
        ],
        "totalFirki": 1,
        "subTotal": 650,
        "discount": 0,
        "advance": 650,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675ec4c9c292326ae251a644",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675ec4c9c292326ae251a642",
        "BillNo": 62,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "BHAVESH",
        "address": "ST",
        "mobileNumber": 6353444842,
        "deliveryDate": "2024-12-16T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "675ec4c9c292326ae251a645"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "675ec4c9c292326ae251a646"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675ed1566c3533a4fbcb79ad",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675ed1556c3533a4fbcb79ab",
        "BillNo": 63,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "DIPAKBHAI",
        "address": "ST",
        "mobileNumber": 9879746576,
        "deliveryDate": "2024-12-16T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "675ed1566c3533a4fbcb79ae"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 2,
                "price": 650,
                "_id": "675ed1566c3533a4fbcb79af"
            }
        ],
        "totalFirki": 3,
        "subTotal": 2000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 1000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675ed920e1e3a676207f6d9a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675ed920e1e3a676207f6d98",
        "BillNo": 64,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "RAHUL",
        "address": "ST",
        "mobileNumber": 8849377544,
        "deliveryDate": "2024-12-16T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "675ed920e1e3a676207f6d9b"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675ede96db77563773006b21",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675ede96db77563773006b1f",
        "BillNo": 65,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "THAKORBHAI",
        "address": "ST",
        "mobileNumber": 9909313145,
        "deliveryDate": "2024-12-16T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "675ede96db77563773006b22"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "675ede96db77563773006b23"
            }
        ],
        "totalFirki": 1,
        "subTotal": 220,
        "discount": 0,
        "advance": 220,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675fb7f2ea18db0bc6d53591",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675fb7f1ea18db0bc6d5358f",
        "BillNo": 66,
        "orderDate": "2024-12-16T00:00:00.000Z",
        "name": "pravin",
        "address": "st",
        "mobileNumber": 9898928228,
        "deliveryDate": "2024-12-17T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "675fb7f2ea18db0bc6d53592"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675fbf7c6a49bed80dea40aa",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675fbf7c6a49bed80dea40a8",
        "BillNo": 67,
        "orderDate": "2024-12-16T00:00:00.000Z",
        "name": "BHUSAN",
        "address": "ST",
        "mobileNumber": 7600004138,
        "deliveryDate": "2024-12-16T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 2,
                "price": 1100,
                "_id": "675fbf7c6a49bed80dea40ab"
            }
        ],
        "totalFirki": 2,
        "subTotal": 2200,
        "discount": 0,
        "advance": 2200,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675fd81d8ed1dd65de91fc45",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675fd81d8ed1dd65de91fc43",
        "BillNo": 68,
        "orderDate": "2024-12-16T00:00:00.000Z",
        "name": "NIPUN",
        "address": "ST",
        "mobileNumber": 9909194969,
        "deliveryDate": "2024-12-17T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "675fd81d8ed1dd65de91fc46"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "675fd81d8ed1dd65de91fc47"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "675feeb69fcf62ce0bbe2208",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675feeb59fcf62ce0bbe2206",
        "BillNo": 69,
        "orderDate": "2024-12-16T00:00:00.000Z",
        "name": "KISHOR",
        "address": "ST",
        "mobileNumber": 9925806663,
        "deliveryDate": "2024-12-17T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "675feeb69fcf62ce0bbe2209"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67600c2386d44ab1eb12a43d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67600c2386d44ab1eb12a43b",
        "BillNo": 70,
        "orderDate": "2024-12-16T00:00:00.000Z",
        "name": "TANMAY",
        "address": "ST",
        "mobileNumber": 7567111103,
        "deliveryDate": "2024-12-17T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "67600c2386d44ab1eb12a43e"
            },
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "67600c2386d44ab1eb12a43f"
            },
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "67600c2386d44ab1eb12a440"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "67600c2386d44ab1eb12a441"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67600c2386d44ab1eb12a442"
            }
        ],
        "totalFirki": 1,
        "subTotal": 805,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 805,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67601cc8e9f655c2e465b811",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67601cc8e9f655c2e465b80f",
        "BillNo": 71,
        "orderDate": "2024-12-16T00:00:00.000Z",
        "name": "MODI SARKAR",
        "address": "ST",
        "mobileNumber": 6352077988,
        "deliveryDate": "2024-12-17T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 26,
                "price": 60,
                "_id": "67601cc8e9f655c2e465b812"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 2,
                "price": 80,
                "_id": "67601cc8e9f655c2e465b813"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 2,
                "price": 70,
                "_id": "67601cc8e9f655c2e465b814"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 15,
                "price": 350,
                "_id": "67601cc8e9f655c2e465b815"
            }
        ],
        "totalFirki": 29,
        "subTotal": 7110,
        "discount": 210,
        "advance": 5000,
        "paid": 0,
        "totalDue": 1900,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67602745e3cfb010c635dae8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67602745e3cfb010c635dae6",
        "BillNo": 72,
        "orderDate": "2024-12-16T00:00:00.000Z",
        "name": "SANJAY",
        "address": "ST",
        "mobileNumber": 9624742800,
        "deliveryDate": "2024-12-17T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6760279fe3cfb010c635ddb4"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 4,
                "price": 350,
                "_id": "6760279fe3cfb010c635ddb5"
            }
        ],
        "totalFirki": 6,
        "subTotal": 1575,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1575,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67603b3f146fe121d6cd77d4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67603b3f146fe121d6cd77d2",
        "BillNo": 73,
        "orderDate": "2024-12-16T00:00:00.000Z",
        "name": "SAGAR",
        "address": "ST",
        "mobileNumber": 8866778448,
        "deliveryDate": "2024-12-17T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 3,
                "price": 350,
                "_id": "67603b3f146fe121d6cd77d5"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "67603b3f146fe121d6cd77d6"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1575,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1575,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676042f72665b09b713b217b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676042f62665b09b713b2179",
        "BillNo": 74,
        "orderDate": "2024-12-15T00:00:00.000Z",
        "name": "SHREY",
        "address": "ST",
        "mobileNumber": 9879779812,
        "deliveryDate": "2024-12-17T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676042f72665b09b713b217c"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676042f72665b09b713b217d"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676047805e89b2b3919fb655",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676047805e89b2b3919fb653",
        "BillNo": 75,
        "orderDate": "2024-12-16T00:00:00.000Z",
        "name": "MEET",
        "address": "ST",
        "mobileNumber": 8799159199,
        "deliveryDate": "2024-12-17T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2477",
                "productName": "12/500 BOBIN",
                "quantity": 1,
                "price": 850,
                "_id": "676048535e89b2b3919fbc1c"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "676048535e89b2b3919fbc1d"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 2,
                "price": 650,
                "_id": "676048535e89b2b3919fbc1e"
            }
        ],
        "totalFirki": 3,
        "subTotal": 3200,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 2200,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6760499cdd9161c7d9446af8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6760499cdd9161c7d9446af6",
        "BillNo": 76,
        "orderDate": "2024-12-16T00:00:00.000Z",
        "name": "Jigar",
        "address": "st",
        "mobileNumber": 7405300842,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6760499cdd9161c7d9446af9"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67604bcabb7fec8b5df7a00b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67604bcabb7fec8b5df7a009",
        "BillNo": 77,
        "orderDate": "2024-12-16T00:00:00.000Z",
        "name": "NANDU",
        "address": "ST",
        "mobileNumber": 9825462434,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2477",
                "productName": "12/500 BOBIN",
                "quantity": 2,
                "price": 850,
                "_id": "67604bcabb7fec8b5df7a00c"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "67604bcabb7fec8b5df7a00d"
            }
        ],
        "totalFirki": 3,
        "subTotal": 2400,
        "discount": 200,
        "advance": 2200,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6760501677a0d06ef09834ac",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6760501677a0d06ef09834aa",
        "BillNo": 78,
        "orderDate": "2024-12-16T00:00:00.000Z",
        "name": "MEHUL",
        "address": "ST",
        "mobileNumber": 9586597048,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "6760501677a0d06ef09834ad"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6760501677a0d06ef09834ae"
            },
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "6760501677a0d06ef09834af"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1170,
        "discount": 0,
        "advance": 1170,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6760510677a0d06ef09837ae",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6760510677a0d06ef09837ac",
        "BillNo": 79,
        "orderDate": "2024-12-16T00:00:00.000Z",
        "name": "VANSH",
        "address": "ST",
        "mobileNumber": 7990314914,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "6760510677a0d06ef09837af"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6760510677a0d06ef09837b0"
            }
        ],
        "totalFirki": 2,
        "subTotal": 410,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 410,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67611d31bd5a9acf0452ee5e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67611d31bd5a9acf0452ee5c",
        "BillNo": 80,
        "orderDate": "2024-12-17T00:00:00.000Z",
        "name": "VIJAY DAVE",
        "address": "ST",
        "mobileNumber": 9099754489,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "67611d31bd5a9acf0452ee5f"
            }
        ],
        "totalFirki": 1,
        "subTotal": 650,
        "discount": 0,
        "advance": 650,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6761250125581bc7cc971126",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6761250125581bc7cc971124",
        "BillNo": 81,
        "orderDate": "2024-12-17T00:00:00.000Z",
        "name": "NIKESH",
        "address": "ST",
        "mobileNumber": 9904386766,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6761250125581bc7cc971127"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 175,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6761257725581bc7cc971425",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6761257725581bc7cc971423",
        "BillNo": 82,
        "orderDate": "2024-12-17T00:00:00.000Z",
        "name": "GAURANG",
        "address": "ST",
        "mobileNumber": 9998710609,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "6761257725581bc7cc971426"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6761257725581bc7cc971427"
            }
        ],
        "totalFirki": 4,
        "subTotal": 1050,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1050,
        "notes": "DELEVERD",
        "__v": 0
    },
    {
        "_id": "6761457dc19941526372ec78",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6761457dc19941526372ec76",
        "BillNo": 83,
        "orderDate": "2024-12-17T00:00:00.000Z",
        "name": "NARESHBHAI",
        "address": "ST",
        "mobileNumber": 9924337958,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "6761457dc19941526372ec79"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 700,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67615690e82c5cb31def8127",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67615690e82c5cb31def8125",
        "BillNo": 84,
        "orderDate": "2024-12-17T00:00:00.000Z",
        "name": "EBU",
        "address": "ST",
        "mobileNumber": 7405330452,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 10,
                "price": 175,
                "_id": "67615690e82c5cb31def8128"
            }
        ],
        "totalFirki": 10,
        "subTotal": 1750,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1750,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676156c8e82c5cb31def8438",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67615690e82c5cb31def8125",
        "BillNo": 85,
        "orderDate": "2024-12-17T00:00:00.000Z",
        "name": "EBU",
        "address": "ST",
        "mobileNumber": 7405330452,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676156c8e82c5cb31def8439"
            }
        ],
        "totalFirki": 1,
        "subTotal": 70,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 70,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676164fa1124a50a16b39239",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676164fa1124a50a16b39237",
        "BillNo": 86,
        "orderDate": "2024-12-17T00:00:00.000Z",
        "name": "ANKIT",
        "address": "ST",
        "mobileNumber": 9016961201,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676164fa1124a50a16b3923a"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676164fa1124a50a16b3923b"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676164fa1124a50a16b3923c"
            }
        ],
        "totalFirki": 1,
        "subTotal": 605,
        "discount": 0,
        "advance": 0,
        "paid": 605,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67616d6a13768eda0519647d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67616d6a13768eda0519647b",
        "BillNo": 87,
        "orderDate": "2024-12-17T00:00:00.000Z",
        "name": "JIGNESHBHAI",
        "address": "ST",
        "mobileNumber": 7622021211,
        "deliveryDate": "2024-12-17T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 4,
                "price": 650,
                "_id": "67616d6a13768eda0519647e"
            }
        ],
        "totalFirki": 4,
        "subTotal": 2600,
        "discount": 0,
        "advance": 2600,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67619bb38c325c58db888b23",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67619bb38c325c58db888b21",
        "BillNo": 88,
        "orderDate": "2024-12-17T00:00:00.000Z",
        "name": "JIGNESH",
        "address": "ST",
        "mobileNumber": 9712547501,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67619bb38c325c58db888b24"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676265d6771a2f8124e962d7",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676265d6771a2f8124e962d5",
        "BillNo": 89,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "DEVANG",
        "address": "st",
        "mobileNumber": 9978937568,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2471",
                "productName": "12/250 READY FIRKI",
                "quantity": 1,
                "price": 750,
                "_id": "676265d6771a2f8124e962d8"
            }
        ],
        "totalFirki": 1,
        "subTotal": 750,
        "discount": 0,
        "advance": 750,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67626700771a2f8124e96600",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67626700771a2f8124e965fe",
        "BillNo": 90,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "HARSHAL",
        "address": "ST",
        "mobileNumber": 9879593838,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67626700771a2f8124e96601"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 175,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67626786771a2f8124e9692d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67626786771a2f8124e9692b",
        "BillNo": 91,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "DARSAN",
        "address": "ST",
        "mobileNumber": 7862000154,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67626786771a2f8124e9692e"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 300,
        "paid": 0,
        "totalDue": 50,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67626cbb734c56441c39da1c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67626cbb734c56441c39da1a",
        "BillNo": 92,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "VAIBHAV",
        "address": "ST",
        "mobileNumber": 9909447577,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "67626cbb734c56441c39da1d"
            },
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "67626cbb734c56441c39da1e"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "67626cbb734c56441c39da1f"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "67626cbb734c56441c39da20"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "67626cbb734c56441c39da21"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "67626cbb734c56441c39da22"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67626cbb734c56441c39da23"
            }
        ],
        "totalFirki": 4,
        "subTotal": 2330,
        "discount": 0,
        "advance": 2330,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67629409829b09dc3f2531ce",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67629409829b09dc3f2531cc",
        "BillNo": 93,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "HERIN",
        "address": "ST",
        "mobileNumber": 9033207114,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 3,
                "price": 350,
                "_id": "67629409829b09dc3f2531cf"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "67629409829b09dc3f2531d0"
            },
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 1,
                "price": 350,
                "_id": "67629409829b09dc3f2531d1"
            },
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "67629409829b09dc3f2531d2"
            }
        ],
        "totalFirki": 4,
        "subTotal": 2575,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 1575,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762974a5b109e89d2bdb4ce",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762974a5b109e89d2bdb4cc",
        "BillNo": 94,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "SANJAY",
        "address": "ST",
        "mobileNumber": 9825964744,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2477",
                "productName": "12/500 BOBIN",
                "quantity": 2,
                "price": 850,
                "_id": "6762974a5b109e89d2bdb4cf"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "6762974a5b109e89d2bdb4d0"
            }
        ],
        "totalFirki": 2,
        "subTotal": 2400,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 2400,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67629a64b28cb60b03dd9921",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67629a64b28cb60b03dd991f",
        "BillNo": 95,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "AMAN BHAI",
        "address": "ST",
        "mobileNumber": 9974854981,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2472",
                "productName": "12/500 READY FIRKI",
                "quantity": 3,
                "price": 1300,
                "_id": "67629a64b28cb60b03dd9922"
            }
        ],
        "totalFirki": 3,
        "subTotal": 3900,
        "discount": 0,
        "advance": 3900,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67629e70193d2420019f0ba3",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67629e70193d2420019f0ba1",
        "BillNo": 96,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "JAPAN",
        "address": "ST",
        "mobileNumber": 8238944777,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 5,
                "price": 650,
                "_id": "67629e70193d2420019f0ba4"
            }
        ],
        "totalFirki": 5,
        "subTotal": 3250,
        "discount": 0,
        "advance": 3250,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762b0c91ebaf40d5ce848f3",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762b0c91ebaf40d5ce848f0",
        "BillNo": 97,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "SUJAL",
        "address": "ST",
        "mobileNumber": 8320507910,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6762b0c91ebaf40d5ce848f4"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762b94ac22834e071f5bb24",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762b94ac22834e071f5bb22",
        "BillNo": 98,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "YASH",
        "address": "ST",
        "mobileNumber": 7203042510,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6762b94ac22834e071f5bb25"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6762b94ac22834e071f5bb26"
            }
        ],
        "totalFirki": 2,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762c054e34f747fb45425b4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762c054e34f747fb45425b2",
        "BillNo": 99,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "CHARMIN",
        "address": "ST",
        "mobileNumber": 8320550961,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "6762c054e34f747fb45425b5"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "6762c054e34f747fb45425b6"
            }
        ],
        "totalFirki": 5,
        "subTotal": 1225,
        "discount": 0,
        "advance": 1225,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762c52c30fbadb6c1ed4a00",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675d7e3bbb079800e07523ae",
        "BillNo": 100,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "HARSH",
        "address": "ST",
        "mobileNumber": 8238461075,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "6762c52c30fbadb6c1ed4a01"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6762c52c30fbadb6c1ed4a02"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1000,
        "discount": 0,
        "advance": 750,
        "paid": 0,
        "totalDue": 250,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762c78dac2116c092e8a0a2",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762c78dac2116c092e8a0a0",
        "BillNo": 101,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "KASHI BHAI",
        "address": "ST",
        "mobileNumber": 9825375424,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "6762c78dac2116c092e8a0a3"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "6762c78dac2116c092e8a0a4"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6762c78dac2116c092e8a0a5"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "6762c78dac2116c092e8a0a6"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1015,
        "discount": 0,
        "advance": 1015,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762c8697ca090ca646e4c4d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762c8697ca090ca646e4c4b",
        "BillNo": 102,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "MITESH",
        "address": "ST",
        "mobileNumber": 9579624043,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "6762c8697ca090ca646e4c4e"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6762c8697ca090ca646e4c4f"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762c93a7ca090ca646e4fd3",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762c93a7ca090ca646e4fd1",
        "BillNo": 103,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "MAYUR",
        "address": "ST",
        "mobileNumber": 9925690400,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "6762c93a7ca090ca646e4fd4"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6762c93a7ca090ca646e4fd5"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762c9e07ca090ca646e535f",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762c9e07ca090ca646e535d",
        "BillNo": 104,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "ABHISEKH",
        "address": "ST",
        "mobileNumber": 9974458840,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 13,
                "price": 350,
                "_id": "6762c9e07ca090ca646e5360"
            },
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "6762c9e07ca090ca646e5361"
            }
        ],
        "totalFirki": 14,
        "subTotal": 5200,
        "discount": 0,
        "advance": 5200,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762cb047ca090ca646e56f1",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762cb047ca090ca646e56ef",
        "BillNo": 105,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "HOME",
        "address": "ST",
        "mobileNumber": 7567560884,
        "deliveryDate": "2024-12-18T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 1,
                "price": 350,
                "_id": "6762cb047ca090ca646e56f2"
            },
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 4,
                "price": 650,
                "_id": "6762cb047ca090ca646e56f3"
            }
        ],
        "totalFirki": 5,
        "subTotal": 2950,
        "discount": 0,
        "advance": 0,
        "paid": 2950,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762d28c5e568ceae4ca36d8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762d28c5e568ceae4ca36d6",
        "BillNo": 106,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "DEV",
        "address": "ST",
        "mobileNumber": 8866079304,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "6762d28c5e568ceae4ca36d9"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6762d28c5e568ceae4ca36da"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762e43766daaf3765c61630",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762e43766daaf3765c6162e",
        "BillNo": 107,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "KAYAN",
        "address": "ST",
        "mobileNumber": 9638837120,
        "deliveryDate": "2024-12-20T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "6762e43766daaf3765c61631"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "6762e43766daaf3765c61632"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 2,
                "price": 650,
                "_id": "6762e43766daaf3765c61633"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6762e43766daaf3765c61634"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "6762e43766daaf3765c61635"
            }
        ],
        "totalFirki": 4,
        "subTotal": 3170,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 3170,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762e53766daaf3765c619e1",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676047805e89b2b3919fb653",
        "BillNo": 108,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "MEET",
        "address": "ST",
        "mobileNumber": 8799159199,
        "deliveryDate": "2024-12-20T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 2,
                "price": 650,
                "_id": "6762e53766daaf3765c619e2"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "6762e53766daaf3765c619e3"
            }
        ],
        "totalFirki": 2,
        "subTotal": 2000,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 1500,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762eb2d1ad41a626d7b7971",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762eb2d1ad41a626d7b796f",
        "BillNo": 109,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "DEEP",
        "address": "ST",
        "mobileNumber": 8780104378,
        "deliveryDate": "2024-12-20T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "6762eb2d1ad41a626d7b7972"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 4,
                "price": 650,
                "_id": "6762eb2d1ad41a626d7b7973"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 4,
                "price": 350,
                "_id": "6762eb2d1ad41a626d7b7974"
            }
        ],
        "totalFirki": 4,
        "subTotal": 4080,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 4080,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762ebcc1ad41a626d7b7d35",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762ebcc1ad41a626d7b7d33",
        "BillNo": 110,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "KEVAL",
        "address": "ST",
        "mobileNumber": 9909258261,
        "deliveryDate": "2024-12-20T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "6762ebcc1ad41a626d7b7d36"
            },
            {
                "productId": "65bde88769acedb394df2477",
                "productName": "12/500 BOBIN",
                "quantity": 1,
                "price": 800,
                "_id": "6762ebcc1ad41a626d7b7d37"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6762ebcc1ad41a626d7b7d38"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6762ebcc1ad41a626d7b7d39"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1675,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 675,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762f3e0c96c0651a9fcc1b7",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762f3e0c96c0651a9fcc1b5",
        "BillNo": 111,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "smit",
        "address": "st",
        "mobileNumber": 9265702683,
        "deliveryDate": "2024-12-20T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "6762f3e0c96c0651a9fcc1b8"
            },
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "6762f3e0c96c0651a9fcc1b9"
            },
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "6762f3e0c96c0651a9fcc1ba"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6762f3e0c96c0651a9fcc1bb"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6762f3e0c96c0651a9fcc1bc"
            }
        ],
        "totalFirki": 3,
        "subTotal": 3220,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 2220,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762f432afc614d673d863f0",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762f432afc614d673d863ee",
        "BillNo": 112,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "DAKSH",
        "address": "ST",
        "mobileNumber": 8401885356,
        "deliveryDate": "2024-12-20T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "6762f432afc614d673d863f1"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6762f432afc614d673d863f2"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762f780cf82ea9f24b40a0f",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762f780cf82ea9f24b40a0d",
        "BillNo": 113,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "VISHMAY",
        "address": "ST",
        "mobileNumber": 9898905284,
        "deliveryDate": "2024-12-20T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6762f780cf82ea9f24b40a10"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6762f780cf82ea9f24b40a11"
            }
        ],
        "totalFirki": 3,
        "subTotal": 700,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 700,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6762fa63009f920e1db0aee0",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6759b3c826ae91b63905f6eb",
        "BillNo": 114,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "JIGAR",
        "address": "ST",
        "mobileNumber": 9023488201,
        "deliveryDate": "2024-12-20T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "6762fa63009f920e1db0aee1"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 6,
                "price": 80,
                "_id": "6762fa63009f920e1db0aee2"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 13,
                "price": 350,
                "_id": "6762fa63009f920e1db0aee3"
            }
        ],
        "totalFirki": 16,
        "subTotal": 5090,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 5090,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67639f74a197e117dc8d109e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67639f74a197e117dc8d109c",
        "BillNo": 115,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "joy",
        "address": "ST",
        "mobileNumber": 9726157249,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 3,
                "price": 60,
                "_id": "67639f74a197e117dc8d109f"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "67639f74a197e117dc8d10a0"
            }
        ],
        "totalFirki": 3,
        "subTotal": 705,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 705,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6763a4c2c531d5f2f2df3d4f",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6763a4c2c531d5f2f2df3d4d",
        "BillNo": 116,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "SHANNY",
        "address": "ST",
        "mobileNumber": 8160213496,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "6763a4c2c531d5f2f2df3d50"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6763a4c2c531d5f2f2df3d51"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6763a9032ff09a75ad3790a9",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6763a9032ff09a75ad3790a7",
        "BillNo": 117,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "JIGNESH",
        "address": "ST",
        "mobileNumber": 9909242091,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "6763a9032ff09a75ad3790aa"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6763a9032ff09a75ad3790ab"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 550,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6763b0dcced1a3da8c497425",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6763b0dcced1a3da8c497423",
        "BillNo": 118,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "MEET",
        "address": "ST",
        "mobileNumber": 9725297799,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6763b0dcced1a3da8c497426"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6763b108ced1a3da8c497816",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6763b108ced1a3da8c497814",
        "BillNo": 119,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "AASHISH",
        "address": "ST",
        "mobileNumber": 9998188876,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6763b108ced1a3da8c497817"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 175,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6763b56bec9ac0410c54ab5c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6763b56bec9ac0410c54ab5a",
        "BillNo": 120,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "PRATHAM",
        "address": "ST",
        "mobileNumber": 9315080824,
        "deliveryDate": "2024-12-20T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6763b56bec9ac0410c54ab5d"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "DELIVERED",
        "__v": 0
    },
    {
        "_id": "6763cebae302d2dc32afac75",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6763cebae302d2dc32afac73",
        "BillNo": 121,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "AMIT",
        "address": "ST",
        "mobileNumber": 9904203525,
        "deliveryDate": "2024-12-20T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "6763cebae302d2dc32afac76"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6763cebae302d2dc32afac77"
            }
        ],
        "totalFirki": 2,
        "subTotal": 430,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 430,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6763d9e7d95729982cb3ec25",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6763d9e7d95729982cb3ec23",
        "BillNo": 122,
        "orderDate": "2024-12-18T00:00:00.000Z",
        "name": "RUTAK",
        "address": "ST",
        "mobileNumber": 7990073570,
        "deliveryDate": "2024-12-20T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "6763d9e7d95729982cb3ec26"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1100,
        "discount": 0,
        "advance": 1100,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6763ece186f743616aa0375c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6763ece186f743616aa0375a",
        "BillNo": 123,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "VED",
        "address": "ST",
        "mobileNumber": 9586029159,
        "deliveryDate": "2024-12-20T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "6763ece186f743616aa0375d"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6763ece186f743616aa0375e"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6763f7c4e5ad0cacb090e766",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675b05a01b5f0276daff015c",
        "BillNo": 124,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "AMIT",
        "address": "ST",
        "mobileNumber": 9427123558,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "6763f7c4e5ad0cacb090e767"
            },
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "6763f7c4e5ad0cacb090e768"
            }
        ],
        "totalFirki": 3,
        "subTotal": 2400,
        "discount": 0,
        "advance": 2400,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67640f56b504b5b7cfbb8b03",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67629409829b09dc3f2531cc",
        "BillNo": 125,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "HERIN",
        "address": "ST",
        "mobileNumber": 9033207114,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "67640f56b504b5b7cfbb8b04"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67640f56b504b5b7cfbb8b05"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67641661dedbb99731c1a771",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67641661dedbb99731c1a76f",
        "BillNo": 126,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "VISHAL",
        "address": "ST",
        "mobileNumber": 9909953752,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 2,
                "price": 1100,
                "_id": "67641661dedbb99731c1a772"
            }
        ],
        "totalFirki": 2,
        "subTotal": 2200,
        "discount": 0,
        "advance": 2200,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676416fddedbb99731c1ab87",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676416fddedbb99731c1ab85",
        "BillNo": 127,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "VISHAL",
        "address": "ST",
        "mobileNumber": 9913590709,
        "deliveryDate": "2024-12-19T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 3,
                "price": 650,
                "_id": "676416fddedbb99731c1ab88"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1950,
        "discount": 0,
        "advance": 1950,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67642a0937ff59c196864a31",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67604bcabb7fec8b5df7a009",
        "BillNo": 128,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "NANDU",
        "address": "ST",
        "mobileNumber": 9825462434,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "67642a0937ff59c196864a32"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 700,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67643a467b5be5c7e6756f0b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67643a467b5be5c7e6756f09",
        "BillNo": 129,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "LALU",
        "address": "ST",
        "mobileNumber": 9265468184,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "67643a467b5be5c7e6756f0c"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "67643a467b5be5c7e6756f0d"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67643a467b5be5c7e6756f0e"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1080,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 580,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67643bcabde0101bde7bdbc0",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67643bcabde0101bde7bdbbe",
        "BillNo": 130,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "LAVINA",
        "address": "ST",
        "mobileNumber": 9106814544,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "67643bcabde0101bde7bdbc1"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67643bcabde0101bde7bdbc2"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1000,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67643fc51a6f70258d396532",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67643fc51a6f70258d396530",
        "BillNo": 131,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "PINAKIN",
        "address": "ST",
        "mobileNumber": 9879168930,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67643fc51a6f70258d396533"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67644655e679d09c1d20cbfe",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67644655e679d09c1d20cbfc",
        "BillNo": 132,
        "orderDate": "2024-12-19T00:00:00.000Z",
        "name": "BHAVYA",
        "address": "ST",
        "mobileNumber": 8690009003,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67644655e679d09c1d20cbff"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6764f884ec4a579cfbecddc9",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6764f884ec4a579cfbecddc7",
        "BillNo": 133,
        "orderDate": "2024-12-20T00:00:00.000Z",
        "name": "piyush",
        "address": "ST",
        "mobileNumber": 8141412424,
        "deliveryDate": "2024-12-22T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6764f884ec4a579cfbecddca"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "6764f884ec4a579cfbecddcb"
            }
        ],
        "totalFirki": 5,
        "subTotal": 875,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 875,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6764fe14a51a2ca497cc09a4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6764fe14a51a2ca497cc09a2",
        "BillNo": 134,
        "orderDate": "2024-12-20T00:00:00.000Z",
        "name": "B V M",
        "address": "KALOL",
        "mobileNumber": 9898550462,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 15,
                "price": 1100,
                "_id": "6764fe14a51a2ca497cc09a5"
            },
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 10,
                "price": 650,
                "_id": "6764fe14a51a2ca497cc09a6"
            }
        ],
        "totalFirki": 25,
        "subTotal": 23000,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 23000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67650a8fd67118336257576c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67650a8fd67118336257576a",
        "BillNo": 135,
        "orderDate": "2024-12-20T00:00:00.000Z",
        "name": "ATUL",
        "address": "ST",
        "mobileNumber": 9998099943,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "67650a8fd67118336257576d"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67650a8fd67118336257576e"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67651ceeda6a4a50d6bf7c2e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67651ceeda6a4a50d6bf7c2c",
        "BillNo": 136,
        "orderDate": "2024-12-20T00:00:00.000Z",
        "name": "jimmy",
        "address": "st",
        "mobileNumber": 9016131597,
        "deliveryDate": "2024-12-22T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 2,
                "price": 70,
                "_id": "67651ceeda6a4a50d6bf7c2f"
            },
            {
                "productId": "675d83b4bb079800e07534ee",
                "productName": "12/900 BOBIN",
                "quantity": 2,
                "price": 180,
                "_id": "67651ceeda6a4a50d6bf7c30"
            }
        ],
        "totalFirki": 2,
        "subTotal": 500,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67652420d027e7ff9f79ad39",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67652420d027e7ff9f79ad37",
        "BillNo": 137,
        "orderDate": "2024-12-20T00:00:00.000Z",
        "name": "MEHUL",
        "address": "ST",
        "mobileNumber": 9825118188,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67652420d027e7ff9f79ad3a"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "67652420d027e7ff9f79ad3b"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676527b41dfd6e2f5e3a8ed2",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676527b41dfd6e2f5e3a8ed0",
        "BillNo": 138,
        "orderDate": "2024-12-20T00:00:00.000Z",
        "name": "NAYTIK",
        "address": "ST",
        "mobileNumber": 9879508617,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676527b41dfd6e2f5e3a8ed3"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 200,
        "paid": 0,
        "totalDue": 150,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676549a8499f2b048919da8d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676549a7499f2b048919da8b",
        "BillNo": 139,
        "orderDate": "2024-12-20T00:00:00.000Z",
        "name": "NK SOLAR",
        "address": "ST",
        "mobileNumber": 9879948155,
        "deliveryDate": "2024-12-20T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 250,
                "price": 650,
                "_id": "676549a8499f2b048919da8e"
            }
        ],
        "totalFirki": 250,
        "subTotal": 162500,
        "discount": 15000,
        "advance": 147500,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67654c7909b7f662047d5ad4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67654c7909b7f662047d5ad2",
        "BillNo": 140,
        "orderDate": "2024-12-20T00:00:00.000Z",
        "name": "HIREN",
        "address": "ST",
        "mobileNumber": 8980497750,
        "deliveryDate": "2024-12-22T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "67654c7909b7f662047d5ad5"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "67654c7909b7f662047d5ad6"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "67654c7909b7f662047d5ad7"
            },
            {
                "productId": "65bde88769acedb394df2476",
                "productName": "12/250 BOBIN",
                "quantity": 1,
                "price": 400,
                "_id": "67654c7909b7f662047d5ad8"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "67654c7909b7f662047d5ad9"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67654c7909b7f662047d5ada"
            }
        ],
        "totalFirki": 4,
        "subTotal": 2160,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 1160,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67655411c4b018ed3d4215e3",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67655411c4b018ed3d4215e1",
        "BillNo": 141,
        "orderDate": "2024-12-20T00:00:00.000Z",
        "name": "AKSHY",
        "address": "ST",
        "mobileNumber": 8200245338,
        "deliveryDate": "2024-12-22T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "67655411c4b018ed3d4215e4"
            }
        ],
        "totalFirki": 3,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676561f65086c9bd2fa60278",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6760499cdd9161c7d9446af6",
        "BillNo": 142,
        "orderDate": "2024-12-20T00:00:00.000Z",
        "name": "Jigar",
        "address": "st",
        "mobileNumber": 7405300842,
        "deliveryDate": "2024-12-22T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676562278fab5629dc9e75c6"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6765638eafa260c6648f15e5",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6765638eafa260c6648f15e3",
        "BillNo": 143,
        "orderDate": "2024-12-20T00:00:00.000Z",
        "name": "ROHIT",
        "address": "ST",
        "mobileNumber": 6354727620,
        "deliveryDate": "2024-12-22T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "6765638eafa260c6648f15e6"
            },
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "6765638eafa260c6648f15e7"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "6765638eafa260c6648f15e8"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6765638eafa260c6648f15e9"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1730,
        "discount": 0,
        "advance": 700,
        "paid": 0,
        "totalDue": 1030,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676569f2fbfbbe125d10e0ee",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676569f2fbfbbe125d10e0ec",
        "BillNo": 144,
        "orderDate": "2024-12-20T00:00:00.000Z",
        "name": "MOHAN KAKA",
        "address": "ST",
        "mobileNumber": 9879088188,
        "deliveryDate": "2024-12-20T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 2,
                "price": 350,
                "_id": "676569f2fbfbbe125d10e0ef"
            },
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "676569f2fbfbbe125d10e0f0"
            },
            {
                "productId": "65bde88769acedb394df2471",
                "productName": "12/250 READY FIRKI",
                "quantity": 2,
                "price": 750,
                "_id": "676569f2fbfbbe125d10e0f1"
            }
        ],
        "totalFirki": 5,
        "subTotal": 2850,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 2850,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67656f2470b35efe4b3726e4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67656f2470b35efe4b3726e2",
        "BillNo": 145,
        "orderDate": "2024-12-20T00:00:00.000Z",
        "name": "MAIPAL",
        "address": "ST",
        "mobileNumber": 8448194941,
        "deliveryDate": "2024-12-20T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "67656f2470b35efe4b3726e5"
            }
        ],
        "totalFirki": 1,
        "subTotal": 650,
        "discount": 0,
        "advance": 650,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67657083f4f121cc4c213ef5",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67657083f4f121cc4c213ef3",
        "BillNo": 146,
        "orderDate": "2024-12-20T00:00:00.000Z",
        "name": "KALPESH",
        "address": "ST",
        "mobileNumber": 9687952341,
        "deliveryDate": "2024-12-22T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "67657083f4f121cc4c213ef6"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 5,
                "price": 175,
                "_id": "67657083f4f121cc4c213ef7"
            }
        ],
        "totalFirki": 5,
        "subTotal": 995,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 995,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676647aa21ce4dffc8d3938a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676647aa21ce4dffc8d39388",
        "BillNo": 147,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "DHARMENDRA",
        "address": "ST",
        "mobileNumber": 9265213159,
        "deliveryDate": "2024-12-22T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 3,
                "price": 60,
                "_id": "676647aa21ce4dffc8d3938b"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 2,
                "price": 80,
                "_id": "676647aa21ce4dffc8d3938c"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676647aa21ce4dffc8d3938d"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 3,
                "price": 650,
                "_id": "676647aa21ce4dffc8d3938e"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676647aa21ce4dffc8d3938f"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "676647aa21ce4dffc8d39390"
            }
        ],
        "totalFirki": 5,
        "subTotal": 3865,
        "discount": 0,
        "advance": 1120,
        "paid": 0,
        "totalDue": 2745,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67664b3c6fd632a55639ec84",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67664b3c6fd632a55639ec82",
        "BillNo": 148,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "RINKESH",
        "address": "ST",
        "mobileNumber": 9712220585,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "67664b3c6fd632a55639ec85"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "67664b3c6fd632a55639ec86"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 100,
        "paid": 0,
        "totalDue": 950,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67665c89f46c5e6ce6909641",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67665c89f46c5e6ce690963f",
        "BillNo": 149,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "SUMAN",
        "address": "ST",
        "mobileNumber": 9925246130,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67665c89f46c5e6ce6909642"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "67665c89f46c5e6ce6909643"
            }
        ],
        "totalFirki": 4,
        "subTotal": 1225,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1225,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67665fae0ccbd7a3b231cf7b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67665fae0ccbd7a3b231cf79",
        "BillNo": 150,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "PARESH BHAI",
        "address": "ST",
        "mobileNumber": 8238070733,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "67665fae0ccbd7a3b231cf7c"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676660cd0ccbd7a3b231d420",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676660cd0ccbd7a3b231d41e",
        "BillNo": 151,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "BHAVESH",
        "address": "ST",
        "mobileNumber": 8980401771,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676660cd0ccbd7a3b231d421"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676660cd0ccbd7a3b231d422"
            }
        ],
        "totalFirki": 2,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766624202a8dfa03a1dcfd2",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766624202a8dfa03a1dcfd0",
        "BillNo": 152,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "RAKESH",
        "address": "ST",
        "mobileNumber": 8454940295,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "6766624202a8dfa03a1dcfd3"
            },
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "6766624202a8dfa03a1dcfd4"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6766624202a8dfa03a1dcfd5"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "6766624202a8dfa03a1dcfd6"
            }
        ],
        "totalFirki": 2,
        "subTotal": 745,
        "discount": 0,
        "advance": 745,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67666a2e7bc3f7a5f2f8dd78",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67666a2e7bc3f7a5f2f8dd75",
        "BillNo": 153,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "NIRAJ",
        "address": "ST",
        "mobileNumber": 7984056328,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67666a2e7bc3f7a5f2f8dd79"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67666a2e7bc3f7a5f2f8dd7a"
            }
        ],
        "totalFirki": 2,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676676e6886c44ae4b05dfd8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676676e6886c44ae4b05dfd6",
        "BillNo": 154,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "ABHISHEK",
        "address": "ST",
        "mobileNumber": 9712975024,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676676e6886c44ae4b05dfd9"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676684721f32e010b0149a0c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676684721f32e010b0149a0a",
        "BillNo": 155,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "SASNKET",
        "address": "ST",
        "mobileNumber": 8128482444,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 2,
                "price": 80,
                "_id": "676684721f32e010b0149a0d"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676684721f32e010b0149a0e"
            }
        ],
        "totalFirki": 2,
        "subTotal": 860,
        "discount": 0,
        "advance": 860,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676692614328f15721288a0a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67601cc8e9f655c2e465b80f",
        "BillNo": 156,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "MODI ",
        "address": "ST",
        "mobileNumber": 6352077988,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 10,
                "price": 60,
                "_id": "676692614328f15721288a0b"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676692614328f15721288a0c"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 6,
                "price": 350,
                "_id": "676692614328f15721288a0d"
            }
        ],
        "totalFirki": 11,
        "subTotal": 2780,
        "discount": 0,
        "advance": 2000,
        "paid": 0,
        "totalDue": 780,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766955635ce1cf24e9e8744",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766955635ce1cf24e9e8742",
        "BillNo": 157,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "SAVYAM",
        "address": "ST",
        "mobileNumber": 6354720335,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 5,
                "price": 80,
                "_id": "6766955635ce1cf24e9e8745"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 7,
                "price": 350,
                "_id": "6766955635ce1cf24e9e8746"
            }
        ],
        "totalFirki": 8,
        "subTotal": 2850,
        "discount": 0,
        "advance": 2850,
        "paid": 0,
        "totalDue": 0,
        "notes": "DELEVIRED",
        "__v": 0
    },
    {
        "_id": "6766960a35ce1cf24e9e8c17",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766955635ce1cf24e9e8742",
        "BillNo": 158,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "SAVYAM",
        "address": "ST",
        "mobileNumber": 6354720335,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "6766960a35ce1cf24e9e8c18"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1100,
        "discount": 0,
        "advance": 1100,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67669ed13b872cf23573c65d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67669ed13b872cf23573c65b",
        "BillNo": 159,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "DEV",
        "address": "ST",
        "mobileNumber": 9662967766,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "67669ed13b872cf23573c65e"
            },
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "67669ed13b872cf23573c65f"
            }
        ],
        "totalFirki": 2,
        "subTotal": 130,
        "discount": 0,
        "advance": 130,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766a7d4fafd4556f9782d77",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675eb05031e1e3e6ad61c918",
        "BillNo": 160,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "M.N KHAN",
        "address": "ST",
        "mobileNumber": 9427504882,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 6,
                "price": 650,
                "_id": "6766a7d4fafd4556f9782d78"
            }
        ],
        "totalFirki": 6,
        "subTotal": 3900,
        "discount": 0,
        "advance": 3900,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766aada105b982c7523a5fd",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766aada105b982c7523a5fb",
        "BillNo": 161,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "PARTIK",
        "address": "ST",
        "mobileNumber": 9924846795,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "6766aada105b982c7523a5fe"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "6766aada105b982c7523a5ff"
            },
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "6766aada105b982c7523a600"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 2,
                "price": 650,
                "_id": "6766aada105b982c7523a601"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "6766aada105b982c7523a602"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "6766aada105b982c7523a603"
            }
        ],
        "totalFirki": 6,
        "subTotal": 2420,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 2420,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766b4dee82fb179e283f181",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766b4dee82fb179e283f17f",
        "BillNo": 162,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "manthan",
        "address": "ST",
        "mobileNumber": 9601133366,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "6766b4dee82fb179e283f182"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6766b4dee82fb179e283f183"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766b5b644c5739598e1dd62",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766b5b644c5739598e1dd60",
        "BillNo": 163,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "JAY",
        "address": "ST",
        "mobileNumber": 9712756858,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2476",
                "productName": "12/250 BOBIN",
                "quantity": 1,
                "price": 400,
                "_id": "6766b5b644c5739598e1dd63"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6766b5b644c5739598e1dd64"
            }
        ],
        "totalFirki": 1,
        "subTotal": 575,
        "discount": 0,
        "advance": 575,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766bba7f14a2db5cb5f7401",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766bba7f14a2db5cb5f73ff",
        "BillNo": 164,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "HEMANT",
        "address": "ST",
        "mobileNumber": 9725500240,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "6766bba7f14a2db5cb5f7402"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "6766bba7f14a2db5cb5f7403"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 8,
                "price": 350,
                "_id": "6766bba7f14a2db5cb5f7404"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6766bba7f14a2db5cb5f7405"
            }
        ],
        "totalFirki": 11,
        "subTotal": 3445,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 2445,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766bcf7f14a2db5cb5f7e0c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766bcf7f14a2db5cb5f7e0a",
        "BillNo": 165,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "DISHANT",
        "address": "ST",
        "mobileNumber": 8780535915,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 3,
                "price": 150,
                "_id": "6766bcf7f14a2db5cb5f7e0d"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 3,
                "price": 70,
                "_id": "6766bcf7f14a2db5cb5f7e0e"
            }
        ],
        "totalFirki": 3,
        "subTotal": 660,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 660,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766c025fbe95a22a208cb22",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766c025fbe95a22a208cb20",
        "BillNo": 166,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "VINESH",
        "address": "ST",
        "mobileNumber": 9879039216,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "6766c025fbe95a22a208cb23"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766c2be80d1cfce76c6db1c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766c2be80d1cfce76c6db1a",
        "BillNo": 167,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "RAVI",
        "address": "ST",
        "mobileNumber": 8141285599,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "6766c2be80d1cfce76c6db1d"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "6766c2be80d1cfce76c6db1e"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6766c2be80d1cfce76c6db1f"
            }
        ],
        "totalFirki": 1,
        "subTotal": 585,
        "discount": 0,
        "advance": 585,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766c8972ecb17beb09aee6b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766c8972ecb17beb09aee69",
        "BillNo": 168,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "VISHAL",
        "address": "ST",
        "mobileNumber": 7984820441,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "6766c8972ecb17beb09aee6c"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "6766c8972ecb17beb09aee6d"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "6766c8972ecb17beb09aee6e"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "6766c8972ecb17beb09aee6f"
            }
        ],
        "totalFirki": 5,
        "subTotal": 1425,
        "discount": 0,
        "advance": 1425,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766d1225e2a8b20271204ff",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67515240642679100925c721",
        "BillNo": 169,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "YASH",
        "address": "ST",
        "mobileNumber": 8141917802,
        "deliveryDate": "2024-12-21T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "6766d1225e2a8b2027120500"
            },
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 2,
                "price": 1100,
                "_id": "6766d1225e2a8b2027120501"
            }
        ],
        "totalFirki": 3,
        "subTotal": 2850,
        "discount": 0,
        "advance": 2850,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766d770e759e50fcc9e9e92",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766d770e759e50fcc9e9e90",
        "BillNo": 170,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "KAVAN",
        "address": "ST",
        "mobileNumber": 7046653003,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "6766d770e759e50fcc9e9e93"
            }
        ],
        "totalFirki": 4,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766d8e31751b80e566d13c3",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766d8e31751b80e566d13c1",
        "BillNo": 171,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "JAYESH",
        "address": "ST",
        "mobileNumber": 7600003480,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6766d8e31751b80e566d13c4"
            }
        ],
        "totalFirki": 3,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766dc998c54779a433a402e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766dc998c54779a433a402c",
        "BillNo": 172,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "MEHULBHAI",
        "address": "ST",
        "mobileNumber": 9687412050,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "6766dc998c54779a433a402f"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6766dc998c54779a433a4030"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 0,
        "paid": 1000,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766e1d0968ca996b09d343d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766e1d0968ca996b09d343b",
        "BillNo": 173,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "PREET",
        "address": "ST",
        "mobileNumber": 9978127775,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "6766e1d0968ca996b09d343e"
            },
            {
                "productId": "65bde88769acedb394df2476",
                "productName": "12/250 BOBIN",
                "quantity": 2,
                "price": 400,
                "_id": "6766e1d0968ca996b09d343f"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6766e1d0968ca996b09d3440"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1270,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 770,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6766e6ecfcb090bda59a2474",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766e6ecfcb090bda59a2472",
        "BillNo": 174,
        "orderDate": "2024-12-21T00:00:00.000Z",
        "name": "SIDDHART",
        "address": "ST",
        "mobileNumber": 9998001815,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6766e6ecfcb090bda59a2475"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767a75e7ceb75572c0c05f0",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767a75e7ceb75572c0c05ee",
        "BillNo": 175,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "chetan",
        "address": "st",
        "mobileNumber": 9879101841,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6767a75e7ceb75572c0c05f1"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767a92332563af8e6d0d863",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767a92332563af8e6d0d861",
        "BillNo": 176,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "bhavesh",
        "address": "st",
        "mobileNumber": 8735086009,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "6767a92332563af8e6d0d864"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6767a92332563af8e6d0d865"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767aececfd53e13a26ca82f",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675999a492a6c945e31e1bd8",
        "BillNo": 177,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "home",
        "address": "st",
        "mobileNumber": 9824183096,
        "deliveryDate": "2024-12-22T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "6767aececfd53e13a26ca830"
            }
        ],
        "totalFirki": 1,
        "subTotal": 650,
        "discount": 50,
        "advance": 600,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767af7fcfd53e13a26cad91",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767af7fcfd53e13a26cad8f",
        "BillNo": 178,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "pranav",
        "address": "st",
        "mobileNumber": 6354927775,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6767af7fcfd53e13a26cad92"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767b1f687e4b44d569f5ae5",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676047805e89b2b3919fb653",
        "BillNo": 179,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "MEET",
        "address": "ST",
        "mobileNumber": 8799159199,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6767b1f687e4b44d569f5ae6"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767b29887e4b44d569f604d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767af7fcfd53e13a26cad8f",
        "BillNo": 180,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "pranav",
        "address": "st",
        "mobileNumber": 6354927775,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "6767b29887e4b44d569f604e"
            },
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "6767b29887e4b44d569f604f"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "6767b29887e4b44d569f6050"
            }
        ],
        "totalFirki": 1,
        "subTotal": 280,
        "discount": 0,
        "advance": 100,
        "paid": 0,
        "totalDue": 180,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767b35d87e4b44d569f65c1",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767b35d87e4b44d569f65bf",
        "BillNo": 181,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "PRINTESH",
        "address": "ST",
        "mobileNumber": 9586853620,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 3,
                "price": 60,
                "_id": "6767b35d87e4b44d569f65c2"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 3,
                "price": 350,
                "_id": "6767b35d87e4b44d569f65c3"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "6767b35d87e4b44d569f65c4"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1755,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 1255,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767b9354ae814050dc3d0b8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767b9354ae814050dc3d0b6",
        "BillNo": 182,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "PARESH",
        "address": "ST",
        "mobileNumber": 9725045744,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "6767b9354ae814050dc3d0b9"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6767b9354ae814050dc3d0ba"
            }
        ],
        "totalFirki": 2,
        "subTotal": 470,
        "discount": 0,
        "advance": 470,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767c32ef27efc6f46a3bb52",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767c32ef27efc6f46a3bb50",
        "BillNo": 183,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "AMIT",
        "address": "ST",
        "mobileNumber": 9825716617,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 2,
                "price": 80,
                "_id": "6767c32ef27efc6f46a3bb53"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 2,
                "price": 650,
                "_id": "6767c32ef27efc6f46a3bb54"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "6767c32ef27efc6f46a3bb55"
            },
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 4,
                "price": 60,
                "_id": "6767c32ef27efc6f46a3bb56"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 4,
                "price": 350,
                "_id": "6767c32ef27efc6f46a3bb57"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 4,
                "price": 175,
                "_id": "6767c32ef27efc6f46a3bb58"
            }
        ],
        "totalFirki": 6,
        "subTotal": 4500,
        "discount": 500,
        "advance": 4000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767c5a19d060b3e12172de1",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767c5a19d060b3e12172ddf",
        "BillNo": 184,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "MANOJ",
        "address": "ST",
        "mobileNumber": 9510496904,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 4,
                "price": 175,
                "_id": "6767c5a19d060b3e12172de2"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6767c5a19d060b3e12172de3"
            }
        ],
        "totalFirki": 5,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767c7c56249c888b5a45292",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767c7c56249c888b5a45290",
        "BillNo": 185,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "PRATEEK",
        "address": "ST",
        "mobileNumber": 9106772921,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "6767c7c56249c888b5a45293"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6767c7c56249c888b5a45294"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 25,
        "advance": 0,
        "paid": 0,
        "totalDue": 500,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767c8cd39c3791fea572080",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767c8cd39c3791fea57207e",
        "BillNo": 186,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "PIYUSH",
        "address": "ST",
        "mobileNumber": 7861918907,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 6,
                "price": 650,
                "_id": "6767c8cd39c3791fea572081"
            },
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 4,
                "price": 1100,
                "_id": "6767c8cd39c3791fea572082"
            }
        ],
        "totalFirki": 10,
        "subTotal": 8300,
        "discount": 0,
        "advance": 8300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767c9fa39c3791fea57261f",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767c9fa39c3791fea57261d",
        "BillNo": 187,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "PRITHVIRAJ",
        "address": "ST",
        "mobileNumber": 9664802475,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 4,
                "price": 350,
                "_id": "6767c9fa39c3791fea572620"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1400,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1400,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767cc3787341d19e7b4f686",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767cc3787341d19e7b4f684",
        "BillNo": 188,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "PRATIK",
        "address": "ST",
        "mobileNumber": 9099470502,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "6767cc3787341d19e7b4f687"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6767cc3787341d19e7b4f688"
            }
        ],
        "totalFirki": 1,
        "subTotal": 235,
        "discount": 35,
        "advance": 200,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767d7759bf28f48475bf1e2",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767d7759bf28f48475bf1e0",
        "BillNo": 189,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "BRIJESH",
        "address": "ST",
        "mobileNumber": 9265984034,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "6767d7759bf28f48475bf1e3"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6767d7759bf28f48475bf1e4"
            }
        ],
        "totalFirki": 1,
        "subTotal": 430,
        "discount": 0,
        "advance": 250,
        "paid": 0,
        "totalDue": 180,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767db7e8796bc8d50e9be33",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767db7e8796bc8d50e9be31",
        "BillNo": 190,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "RAVI",
        "address": "ST",
        "mobileNumber": 9328332290,
        "deliveryDate": "2024-12-22T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 2,
                "price": 350,
                "_id": "6767db7e8796bc8d50e9be34"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 700,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767dc6c8796bc8d50e9c3e3",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767dc6c8796bc8d50e9c3e1",
        "BillNo": 191,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "KISHOR",
        "address": "ST",
        "mobileNumber": 9727754296,
        "deliveryDate": "2024-12-22T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 6,
                "price": 650,
                "_id": "6767dc6c8796bc8d50e9c3e4"
            }
        ],
        "totalFirki": 6,
        "subTotal": 3900,
        "discount": 0,
        "advance": 3900,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767e28341de93a0e2d8e5ab",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767e28341de93a0e2d8e5a9",
        "BillNo": 192,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "GHANSHYAM",
        "address": "ST",
        "mobileNumber": 8000243433,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 4,
                "price": 350,
                "_id": "6767e28341de93a0e2d8e5ac"
            }
        ],
        "totalFirki": 6,
        "subTotal": 1400,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 900,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767e5d547c9c31e9c182fd4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767e5d547c9c31e9c182fd2",
        "BillNo": 193,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "KAMLESH",
        "address": "ST",
        "mobileNumber": 9624532320,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "6767e5d547c9c31e9c182fd5"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "6767e5d547c9c31e9c182fd6"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6767e5d547c9c31e9c182fd7"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1080,
        "discount": 0,
        "advance": 1080,
        "paid": 0,
        "totalDue": 0,
        "notes": "Delivered ",
        "__v": 0
    },
    {
        "_id": "6767e9b8f523c03928ef196c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767e9b8f523c03928ef196a",
        "BillNo": 194,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "HEMRNDRE",
        "address": "ST",
        "mobileNumber": 9825913690,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "6767e9b8f523c03928ef196d"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6767e9b8f523c03928ef196e"
            }
        ],
        "totalFirki": 1,
        "subTotal": 235,
        "discount": 0,
        "advance": 235,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767f5e817b74397b43291f0",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767f5e817b74397b43291ee",
        "BillNo": 195,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "PRADIP",
        "address": "ST",
        "mobileNumber": 9879101840,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 4,
                "price": 70,
                "_id": "6767f5e817b74397b43291f1"
            }
        ],
        "totalFirki": 2,
        "subTotal": 280,
        "discount": 0,
        "advance": 280,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767faf1ef5ad60767f8c0ab",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767faf1ef5ad60767f8c0a9",
        "BillNo": 196,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "DIVYESH",
        "address": "ST",
        "mobileNumber": 9687781605,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6767faf1ef5ad60767f8c0ac"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767fb56ef5ad60767f8c67e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767fb56ef5ad60767f8c67c",
        "BillNo": 197,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "BHAVESH BHAI",
        "address": "ST",
        "mobileNumber": 7016210544,
        "deliveryDate": "2024-12-22T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "6767fb56ef5ad60767f8c67f"
            }
        ],
        "totalFirki": 1,
        "subTotal": 650,
        "discount": 0,
        "advance": 650,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767fbb9ef5ad60767f8cc55",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767fbb9ef5ad60767f8cc53",
        "BillNo": 198,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "RANJAN",
        "address": "ST",
        "mobileNumber": 8460455889,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6767fbb9ef5ad60767f8cc56"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "6767fbb9ef5ad60767f8cc57"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767fd1cecd18e29b1952289",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767fd1cecd18e29b1952287",
        "BillNo": 199,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "HARDIL",
        "address": "ST",
        "mobileNumber": 9909307247,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "6767fd1cecd18e29b195228a"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6767fd1cecd18e29b195228b"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767fd87ecd18e29b1952e4f",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767fd87ecd18e29b1952e4d",
        "BillNo": 200,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "ALPESH",
        "address": "ST",
        "mobileNumber": 9979860076,
        "deliveryDate": "2024-12-22T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 3,
                "price": 650,
                "_id": "6767fd87ecd18e29b1952e50"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1950,
        "discount": 0,
        "advance": 1950,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6767fefe75928143534e3156",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767fefe75928143534e3154",
        "BillNo": 201,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "AJAY",
        "address": "ST",
        "mobileNumber": 7284865657,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "6767fefe75928143534e3157"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "6767fefe75928143534e3158"
            }
        ],
        "totalFirki": 3,
        "subTotal": 605,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 605,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676800c326af2d3206327673",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676800c326af2d3206327671",
        "BillNo": 202,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "PRATHAM",
        "address": "ST",
        "mobileNumber": 9898566800,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 2,
                "price": 80,
                "_id": "676800c326af2d3206327674"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 2,
                "price": 650,
                "_id": "676800c326af2d3206327675"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676800c326af2d3206327676"
            }
        ],
        "totalFirki": 6,
        "subTotal": 2160,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 1660,
        "notes": "DELIV",
        "__v": 0
    },
    {
        "_id": "6768018e26af2d3206328263",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6768018e26af2d3206328261",
        "BillNo": 203,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "HARSHIL",
        "address": "ST",
        "mobileNumber": 8320822501,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "6768018e26af2d3206328264"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6768018e26af2d3206328265"
            }
        ],
        "totalFirki": 3,
        "subTotal": 420,
        "discount": 0,
        "advance": 420,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676802f226af2d3206328eeb",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676802f226af2d3206328ee9",
        "BillNo": 204,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "MEHUL",
        "address": "ST",
        "mobileNumber": 9924309396,
        "deliveryDate": "2024-12-22T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2472",
                "productName": "12/500 READY FIRKI",
                "quantity": 2,
                "price": 1300,
                "_id": "676802f226af2d3206328eec"
            }
        ],
        "totalFirki": 2,
        "subTotal": 2600,
        "discount": 0,
        "advance": 2600,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6768080df4098c5402e0c652",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6768080df4098c5402e0c650",
        "BillNo": 205,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "PRIYANSHU",
        "address": "ST",
        "mobileNumber": 8200616859,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6768080df4098c5402e0c653"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "DELIVERED",
        "__v": 0
    },
    {
        "_id": "676808bef4098c5402e0cc56",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676808bef4098c5402e0cc54",
        "BillNo": 206,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "ALKESH",
        "address": "ST",
        "mobileNumber": 9825559792,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676808bef4098c5402e0cc57"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676808bef4098c5402e0cc58"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6768099ef4098c5402e0d262",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6768099ef4098c5402e0d260",
        "BillNo": 207,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "SHAURYA",
        "address": "ST",
        "mobileNumber": 9408666299,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "6768099ef4098c5402e0d263"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6768099ef4098c5402e0d264"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67680a66f4098c5402e0de80",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67680a66f4098c5402e0de7e",
        "BillNo": 208,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "VIVEK",
        "address": "ST",
        "mobileNumber": 7046796225,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "67680a66f4098c5402e0de81"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "67680a66f4098c5402e0de82"
            }
        ],
        "totalFirki": 4,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67680b30f4098c5402e0e498",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67680b30f4098c5402e0e496",
        "BillNo": 209,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "HIREN",
        "address": "ST",
        "mobileNumber": 6352690941,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "67680b30f4098c5402e0e499"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "67680b30f4098c5402e0e49a"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67680b30f4098c5402e0e49b"
            }
        ],
        "totalFirki": 1,
        "subTotal": 605,
        "discount": 0,
        "advance": 605,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67680d1eca6958ca53be292c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767faf1ef5ad60767f8c0a9",
        "BillNo": 210,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "DIVYESH",
        "address": "ST",
        "mobileNumber": 9687781605,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67680d1eca6958ca53be292d"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67680d1eca6958ca53be292e"
            }
        ],
        "totalFirki": 2,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67680ff5124b8be8b109a4f8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67680ff5124b8be8b109a4f6",
        "BillNo": 211,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "SANDIP",
        "address": "ST",
        "mobileNumber": 9712991360,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2477",
                "productName": "12/500 BOBIN",
                "quantity": 2,
                "price": 800,
                "_id": "67680ff5124b8be8b109a4f9"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "67680ff5124b8be8b109a4fa"
            }
        ],
        "totalFirki": 2,
        "subTotal": 2300,
        "discount": 0,
        "advance": 2300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6768138aa2370795de7959d8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67681389a2370795de7959d6",
        "BillNo": 212,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "MEHUL",
        "address": "ST",
        "mobileNumber": 9099081799,
        "deliveryDate": "2024-12-22T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "6768138aa2370795de7959d9"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676818742a42d8252e1f1cd8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676818742a42d8252e1f1cd6",
        "BillNo": 213,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "ARAYAN",
        "address": "ST",
        "mobileNumber": 9081314031,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 2,
                "price": 80,
                "_id": "676818742a42d8252e1f1cd9"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 4,
                "price": 650,
                "_id": "676818742a42d8252e1f1cda"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 4,
                "price": 350,
                "_id": "676818742a42d8252e1f1cdb"
            }
        ],
        "totalFirki": 4,
        "subTotal": 4160,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 4160,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676819fe19929962653c2210",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676819fe19929962653c220e",
        "BillNo": 214,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "KRUNAL",
        "address": "ST",
        "mobileNumber": 9898593285,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676819fe19929962653c2211"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676819fe19929962653c2212"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676819fe19929962653c2213"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1080,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1080,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67681c7d7923271578b5162a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67681c7d7923271578b51628",
        "BillNo": 215,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "DHAVAL",
        "address": "ST",
        "mobileNumber": 8511168363,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "67681c7d7923271578b5162b"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "67681c7d7923271578b5162c"
            }
        ],
        "totalFirki": 3,
        "subTotal": 875,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 375,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676822f3756e57d7eb6c1abb",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676822f3756e57d7eb6c1ab9",
        "BillNo": 216,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "BUSHAN",
        "address": "ST",
        "mobileNumber": 7016350474,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676822f3756e57d7eb6c1abc"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676822f3756e57d7eb6c1abd"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676823e9e01f61f859437294",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676823e9e01f61f859437292",
        "BillNo": 217,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "KRISH",
        "address": "ST",
        "mobileNumber": 9023880297,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 4,
                "price": 350,
                "_id": "676823e9e01f61f859437295"
            }
        ],
        "totalFirki": 4,
        "subTotal": 1400,
        "discount": 0,
        "advance": 1400,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676830b08646d4215d116113",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676830b08646d4215d116111",
        "BillNo": 218,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "PARTH",
        "address": "ST",
        "mobileNumber": 9023953577,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676830b08646d4215d116114"
            },
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "676830b08646d4215d116115"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676830b08646d4215d116116"
            }
        ],
        "totalFirki": 1,
        "subTotal": 280,
        "discount": 0,
        "advance": 280,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676832bd2a98cc6a81044afd",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676832bd2a98cc6a81044afb",
        "BillNo": 219,
        "orderDate": "2024-12-22T00:00:00.000Z",
        "name": "RAVI",
        "address": "St",
        "mobileNumber": 8511444068,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "676832bd2a98cc6a81044afe"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676832bd2a98cc6a81044aff"
            }
        ],
        "totalFirki": 2,
        "subTotal": 470,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 470,
        "notes": "DELIVERED",
        "__v": 0
    },
    {
        "_id": "6768e5d71ea1b7471d58dbf6",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6768e5d71ea1b7471d58dbf4",
        "BillNo": 220,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "AMIT",
        "address": "ST",
        "mobileNumber": 7359400768,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "6768e5d71ea1b7471d58dbf7"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1100,
        "discount": 100,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6768ee064026cf511f1d4cb9",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6768ee064026cf511f1d4cb7",
        "BillNo": 221,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "ARVIND",
        "address": "ST",
        "mobileNumber": 9825105391,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 5,
                "price": 175,
                "_id": "6768ee064026cf511f1d4cba"
            }
        ],
        "totalFirki": 5,
        "subTotal": 875,
        "discount": 0,
        "advance": 875,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67690c0a849797caa746a8ab",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67690c0a849797caa746a8a9",
        "BillNo": 222,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "ROHIT",
        "address": "ST",
        "mobileNumber": 7874237576,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 3,
                "price": 350,
                "_id": "67690c0a849797caa746a8ac"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "67690c0a849797caa746a8ad"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1575,
        "discount": 75,
        "advance": 300,
        "paid": 0,
        "totalDue": 1200,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676912c4717af61735225ce4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676912c4717af61735225ce2",
        "BillNo": 223,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "RAVI",
        "address": "ST",
        "mobileNumber": 9726552006,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 4,
                "price": 80,
                "_id": "676912c4717af61735225ce5"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676912c4717af61735225ce6"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "676912c4717af61735225ce7"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1545,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 1045,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6769187f8184fa733dec9d38",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6769187f8184fa733dec9d36",
        "BillNo": 224,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "SHIVAM",
        "address": "ST",
        "mobileNumber": 9662494504,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "6769187f8184fa733dec9d39"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6769187f8184fa733dec9d3a"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67691ea871ddeab81dbfad9f",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67691ea871ddeab81dbfad9d",
        "BillNo": 225,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "HITESH",
        "address": "ST",
        "mobileNumber": 9913411825,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67691ea871ddeab81dbfada0"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67692436f2813120f095212a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67692436f2813120f0952128",
        "BillNo": 226,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "MONTU",
        "address": "ST",
        "mobileNumber": 8401131999,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 4,
                "price": 60,
                "_id": "6769251df2813120f0952e3d"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 4,
                "price": 70,
                "_id": "6769251df2813120f0952e3e"
            },
            {
                "productId": "675d83b4bb079800e07534ee",
                "productName": "12/900 BOBIN",
                "quantity": 4,
                "price": 180,
                "_id": "6769251df2813120f0952e3f"
            }
        ],
        "totalFirki": 4,
        "subTotal": 1240,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 740,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67692491f2813120f09527b1",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67692491f2813120f09527af",
        "BillNo": 227,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "JEEL",
        "address": "ST",
        "mobileNumber": 9723511528,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "67692491f2813120f09527b2"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6769412941d387f265f13363",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6769412941d387f265f13361",
        "BillNo": 228,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "MUKESH BHAI",
        "address": "ST",
        "mobileNumber": 9879115259,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6769412a41d387f265f13364"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67694344bcdb45d575cd9a28",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67694344bcdb45d575cd9a25",
        "BillNo": 229,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "KETAN BHAI",
        "address": "ST",
        "mobileNumber": 9974952890,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 4,
                "price": 650,
                "_id": "67694344bcdb45d575cd9a29"
            }
        ],
        "totalFirki": 4,
        "subTotal": 2600,
        "discount": 0,
        "advance": 2600,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67694acfc73577b00f57038c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67694acfc73577b00f57038a",
        "BillNo": 230,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "MUKESH BHAI",
        "address": "ST",
        "mobileNumber": 9998218128,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "67694acfc73577b00f57038d"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67694acfc73577b00f57038e"
            }
        ],
        "totalFirki": 2,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67694eb1d503554b26e04cd7",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67694eb1d503554b26e04cd5",
        "BillNo": 231,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "HIREN",
        "address": "SR",
        "mobileNumber": 9662512736,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "67694eb1d503554b26e04cd8"
            }
        ],
        "totalFirki": 1,
        "subTotal": 650,
        "discount": 0,
        "advance": 650,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676957fb3e28580bc99e018b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676957fb3e28580bc99e0189",
        "BillNo": 232,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "PARAM",
        "address": "ST",
        "mobileNumber": 8799098766,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676957fb3e28580bc99e018c"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676957fb3e28580bc99e018d"
            }
        ],
        "totalFirki": 3,
        "subTotal": 875,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 875,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67695c1cececbe07933dbdac",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67695c1cececbe07933dbdaa",
        "BillNo": 233,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "DHAVAL",
        "address": "ST",
        "mobileNumber": 6354149447,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67695c1cececbe07933dbdad"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "67695c1cececbe07933dbdae"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676960a02dbd93d04d08aabf",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676960a02dbd93d04d08aabd",
        "BillNo": 234,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "BHAJIYAWALA",
        "address": "ST",
        "mobileNumber": 9099120723,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676960a02dbd93d04d08aac0"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67696430bbde601db2a1d1c2",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67696430bbde601db2a1d1c0",
        "BillNo": 235,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "PRAGNESH",
        "address": "ST",
        "mobileNumber": 9825011194,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 4,
                "price": 350,
                "_id": "67696430bbde601db2a1d1c3"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 4,
                "price": 175,
                "_id": "67696430bbde601db2a1d1c4"
            }
        ],
        "totalFirki": 4,
        "subTotal": 2100,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 2100,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67696822e03f782d6473f950",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67696822e03f782d6473f94e",
        "BillNo": 236,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "HARNISH",
        "address": "ST",
        "mobileNumber": 9925355200,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "67696822e03f782d6473f951"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 100,
        "advance": 1200,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67696b66fe7232f9739a5663",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67696b66fe7232f9739a5661",
        "BillNo": 237,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "KIRAN",
        "address": "ST",
        "mobileNumber": 9824729590,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67696b66fe7232f9739a5664"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 175,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67696f4430d0747364d8aa95",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67696f4430d0747364d8aa93",
        "BillNo": 238,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "MAHESH",
        "address": "ST",
        "mobileNumber": 7283834717,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2476",
                "productName": "12/250 BOBIN",
                "quantity": 1,
                "price": 400,
                "_id": "67696f4430d0747364d8aa96"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67696f4430d0747364d8aa97"
            }
        ],
        "totalFirki": 1,
        "subTotal": 575,
        "discount": 0,
        "advance": 170,
        "paid": 0,
        "totalDue": 405,
        "notes": "DELEVERD SELF",
        "__v": 0
    },
    {
        "_id": "6769705977e52d82b16323f5",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6769705977e52d82b16323f3",
        "BillNo": 239,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "VISHAL",
        "address": "ST",
        "mobileNumber": 8799160914,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "6769705977e52d82b16323f6"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 2,
                "price": 650,
                "_id": "6769705977e52d82b16323f7"
            }
        ],
        "totalFirki": 2,
        "subTotal": 2000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 1000,
        "notes": "DELIVERED",
        "__v": 0
    },
    {
        "_id": "67697238c3fb467a22018137",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67697238c3fb467a22018135",
        "BillNo": 240,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "JAY",
        "address": "ST",
        "mobileNumber": 9687145417,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67697238c3fb467a22018138"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 175,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6769782f18b113beee8f3c7e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6769782f18b113beee8f3c7c",
        "BillNo": 241,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "HARSH",
        "address": "ST",
        "mobileNumber": 6359737351,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6769782f18b113beee8f3c7f"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "6769782f18b113beee8f3c80"
            }
        ],
        "totalFirki": 5,
        "subTotal": 1400,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1400,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67697da2a37f4e1ec9b99de6",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67697da2a37f4e1ec9b99de4",
        "BillNo": 242,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "SATISH",
        "address": "ST",
        "mobileNumber": 7600242499,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "67697da2a37f4e1ec9b99de7"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67697da2a37f4e1ec9b99de8"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676989238061cf5e42b6ddec",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676989238061cf5e42b6ddea",
        "BillNo": 243,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "deep",
        "address": "st",
        "mobileNumber": 9033186344,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "676989238061cf5e42b6dded"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676989238061cf5e42b6ddee"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676989238061cf5e42b6ddef"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1170,
        "discount": 0,
        "advance": 1170,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67698a8ed2d3ddd93d8df11c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67698a8ed2d3ddd93d8df11a",
        "BillNo": 244,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "vishal",
        "address": "st",
        "mobileNumber": 9722339992,
        "deliveryDate": "2024-12-23T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "67698a8ed2d3ddd93d8df11d"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "67698a8ed2d3ddd93d8df11e"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "67698a8ed2d3ddd93d8df11f"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67698a8ed2d3ddd93d8df120"
            }
        ],
        "totalFirki": 2,
        "subTotal": 745,
        "discount": 0,
        "advance": 745,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67698ad22ae22ee062ae525a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67698ad22ae22ee062ae5258",
        "BillNo": 245,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "ANISH",
        "address": "ST",
        "mobileNumber": 9427886426,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 2,
                "price": 150,
                "_id": "67698ad22ae22ee062ae525b"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "67698ad22ae22ee062ae525c"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 2,
                "price": 70,
                "_id": "67698ad22ae22ee062ae525d"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67698ad22ae22ee062ae525e"
            }
        ],
        "totalFirki": 3,
        "subTotal": 965,
        "discount": 0,
        "advance": 965,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67698bd02ae22ee062ae5959",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675999a492a6c945e31e1bd8",
        "BillNo": 246,
        "orderDate": "2024-12-23T00:00:00.000Z",
        "name": "HEMU",
        "address": "ST",
        "mobileNumber": 9824183096,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "67698bd02ae22ee062ae595a"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67698bd02ae22ee062ae595b"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a4032e61d3c3c0b694eba",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a4032e61d3c3c0b694eb8",
        "BillNo": 247,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "vinayak",
        "address": "st",
        "mobileNumber": 9898081410,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 4,
                "price": 650,
                "_id": "676a4032e61d3c3c0b694ebb"
            }
        ],
        "totalFirki": 4,
        "subTotal": 2600,
        "discount": 0,
        "advance": 2600,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a424ce1e928260aa38f20",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a424ce1e928260aa38f1e",
        "BillNo": 248,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "RAMNIK BHAI",
        "address": "ST",
        "mobileNumber": 9712351177,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "676a424ce1e928260aa38f21"
            }
        ],
        "totalFirki": 1,
        "subTotal": 650,
        "discount": 0,
        "advance": 650,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a513f61e204eb69365a3a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67615690e82c5cb31def8125",
        "BillNo": 249,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "EBU",
        "address": "ST",
        "mobileNumber": 7405330452,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676a513f61e204eb69365a3b"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676a513f61e204eb69365a3c"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 8,
                "price": 175,
                "_id": "676a513f61e204eb69365a3d"
            }
        ],
        "totalFirki": 9,
        "subTotal": 1550,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1550,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a53a40e9327a1f22450cd",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a53a40e9327a1f22450ca",
        "BillNo": 250,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "JATIN BHAI",
        "address": "ST",
        "mobileNumber": 9825749995,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "676a53a40e9327a1f22450ce"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1100,
        "discount": 0,
        "advance": 1100,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a5bd92633f25518847094",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a5bd92633f25518847092",
        "BillNo": 251,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "BHAGWAN BHAI",
        "address": "ST",
        "mobileNumber": 9687288805,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676a5bd92633f25518847095"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676a5bd92633f25518847096"
            }
        ],
        "totalFirki": 1,
        "subTotal": 235,
        "discount": 0,
        "advance": 235,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a5c8e2633f255188477a5",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a5c8e2633f255188477a3",
        "BillNo": 252,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "PRITESH BHAI ",
        "address": "AMD",
        "mobileNumber": 9909997451,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 5,
                "price": 350,
                "_id": "676a5c8e2633f255188477a6"
            },
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 30,
                "price": 650,
                "_id": "676a5c8e2633f255188477a7"
            },
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 11,
                "price": 1100,
                "_id": "676a5c8e2633f255188477a8"
            }
        ],
        "totalFirki": 46,
        "subTotal": 33350,
        "discount": 5000,
        "advance": 0,
        "paid": 0,
        "totalDue": 28350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a5f250fcc0787119d2679",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a5f250fcc0787119d2677",
        "BillNo": 253,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "VRAJ",
        "address": "ST",
        "mobileNumber": 9904755507,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 2,
                "price": 80,
                "_id": "676a5f250fcc0787119d267a"
            },
            {
                "productId": "65bde88769acedb394df2476",
                "productName": "12/250 BOBIN",
                "quantity": 2,
                "price": 400,
                "_id": "676a5f250fcc0787119d267b"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676a5f250fcc0787119d267c"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1310,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 310,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a689fd28658b17c51dc40",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a689fd28658b17c51dc3e",
        "BillNo": 254,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "nishant",
        "address": "st",
        "mobileNumber": 7802013498,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "676a689fd28658b17c51dc41"
            },
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "676a689fd28658b17c51dc42"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1750,
        "discount": 0,
        "advance": 1750,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a6e44811da1636b3558e7",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a6e44811da1636b3558e5",
        "BillNo": 255,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "DHAVAL",
        "address": "SR",
        "mobileNumber": 9723198459,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676a6e44811da1636b3558e8"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a6f5e6ccb7a156b68c807",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a6f5e6ccb7a156b68c805",
        "BillNo": 256,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "JITENDRA",
        "address": "ST",
        "mobileNumber": 9974009135,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 3,
                "price": 150,
                "_id": "676a6f5e6ccb7a156b68c808"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676a6f5e6ccb7a156b68c809"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 3,
                "price": 70,
                "_id": "676a6f5e6ccb7a156b68c80a"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676a6f5e6ccb7a156b68c80b"
            }
        ],
        "totalFirki": 5,
        "subTotal": 1710,
        "discount": 0,
        "advance": 1710,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a7636db4fa4bde2a4aa0b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a7636db4fa4bde2a4aa09",
        "BillNo": 257,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "JAY",
        "address": "ST",
        "mobileNumber": 9979452844,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676a7636db4fa4bde2a4aa0c"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676a7636db4fa4bde2a4aa0d"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a773d81b9df307f64d592",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a773d81b9df307f64d590",
        "BillNo": 258,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "KISHOR",
        "address": "ST",
        "mobileNumber": 9574579935,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676a773d81b9df307f64d593"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a7a12c84507b3eb073625",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a7a12c84507b3eb073623",
        "BillNo": 259,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "DHARMESH",
        "address": "ST",
        "mobileNumber": 9638878078,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676a7a12c84507b3eb073626"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a7f1eec17b7a2a9e4e3a4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a7f1eec17b7a2a9e4e3a2",
        "BillNo": 260,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "KRISH",
        "address": "ST",
        "mobileNumber": 8155800222,
        "deliveryDate": "0002-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 3,
                "price": 650,
                "_id": "676a7f1eec17b7a2a9e4e3a5"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1950,
        "discount": 0,
        "advance": 1950,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a81ec39bd678d94c55708",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a81ec39bd678d94c55706",
        "BillNo": 261,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "MEET",
        "address": "ST",
        "mobileNumber": 9925081920,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676a81ec39bd678d94c55709"
            },
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "676a81ec39bd678d94c5570a"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676a81ec39bd678d94c5570b"
            }
        ],
        "totalFirki": 1,
        "subTotal": 300,
        "discount": 0,
        "advance": 300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a866e4bb31a5b9716cc2f",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a866e4bb31a5b9716cc2d",
        "BillNo": 262,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "YUG",
        "address": "ST",
        "mobileNumber": 9904221924,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676a866e4bb31a5b9716cc30"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676a866e4bb31a5b9716cc31"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676a866e4bb31a5b9716cc32"
            }
        ],
        "totalFirki": 5,
        "subTotal": 1225,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 225,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a873019a861acf6cd5f2b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a873019a861acf6cd5f29",
        "BillNo": 263,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "JAIMIN",
        "address": "ST",
        "mobileNumber": 9104446170,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676a873019a861acf6cd5f2c"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 700,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a8ac18fc0b17ea3258fa8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a8ac18fc0b17ea3258fa6",
        "BillNo": 264,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "HOME",
        "address": "ST",
        "mobileNumber": 9428670817,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 3,
                "price": 650,
                "_id": "676a8ac18fc0b17ea3258fa9"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1950,
        "discount": 150,
        "advance": 1800,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a8c88a61c58341d2fdbe1",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a8c88a61c58341d2fdbdf",
        "BillNo": 265,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "CHIRAG",
        "address": "ST",
        "mobileNumber": 7265867644,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676a8c88a61c58341d2fdbe2"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a8e9acadac26873238913",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a8e9acadac26873238911",
        "BillNo": 266,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "CHANDU KAKA",
        "address": "ST",
        "mobileNumber": 9825876556,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676a8e9acadac26873238914"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676a8e9acadac26873238915"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a9292d99d78c45fe0a036",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a9292d99d78c45fe0a034",
        "BillNo": 267,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "ABDUL",
        "address": "ST",
        "mobileNumber": 9723297244,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "676a9292d99d78c45fe0a037"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676a9292d99d78c45fe0a038"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 3,
                "price": 650,
                "_id": "676a9292d99d78c45fe0a039"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "676a9292d99d78c45fe0a03a"
            }
        ],
        "totalFirki": 5,
        "subTotal": 3200,
        "discount": 0,
        "advance": 1080,
        "paid": 0,
        "totalDue": 2120,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a9345d99d78c45fe0a7ae",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a9344d99d78c45fe0a7ac",
        "BillNo": 268,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "VANSH",
        "address": "ST",
        "mobileNumber": 8200022027,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676a9345d99d78c45fe0a7af"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 175,
        "notes": "DELIVERED",
        "__v": 0
    },
    {
        "_id": "676a9462d99d78c45fe0af21",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a9462d99d78c45fe0af1f",
        "BillNo": 269,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "NANA BHAI",
        "address": "ST",
        "mobileNumber": 9904441553,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "676a9462d99d78c45fe0af22"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676a9462d99d78c45fe0af23"
            }
        ],
        "totalFirki": 1,
        "subTotal": 220,
        "discount": 0,
        "advance": 200,
        "paid": 0,
        "totalDue": 20,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a9e9bf5fb94af29ff409b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a9e9bf5fb94af29ff4099",
        "BillNo": 270,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "ASHOKBHAI",
        "address": "ST",
        "mobileNumber": 9879748809,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676a9e9bf5fb94af29ff409c"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676a9e9bf5fb94af29ff409d"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676a9f4ff5fb94af29ff481d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a9f4ff5fb94af29ff481b",
        "BillNo": 271,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "BHAVAY",
        "address": "ST",
        "mobileNumber": 7874558130,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676a9f4ff5fb94af29ff481e"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676a9f4ff5fb94af29ff481f"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676aa08ff5fb94af29ff4fa5",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676aa08ff5fb94af29ff4fa3",
        "BillNo": 272,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "JIGNESHBHAI",
        "address": "ST",
        "mobileNumber": 8866982820,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676aa08ff5fb94af29ff4fa6"
            },
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676aa08ff5fb94af29ff4fa7"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676aa08ff5fb94af29ff4fa8"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676aa08ff5fb94af29ff4fa9"
            }
        ],
        "totalFirki": 2,
        "subTotal": 665,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 665,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676aa15bf5fb94af29ff573d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676aa15bf5fb94af29ff573b",
        "BillNo": 273,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "RAJ",
        "address": "ST",
        "mobileNumber": 7202998291,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676aa15bf5fb94af29ff573e"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676aa15bf5fb94af29ff573f"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 225,
        "paid": 0,
        "totalDue": 300,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676aa556347ed2ee856148eb",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676aa556347ed2ee856148e9",
        "BillNo": 274,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "DEEP",
        "address": "ST",
        "mobileNumber": 7990242487,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676aa556347ed2ee856148ec"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676aa556347ed2ee856148ed"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676aa688347ed2ee8561582c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676aa688347ed2ee8561582a",
        "BillNo": 275,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "SWAYAM",
        "address": "ST",
        "mobileNumber": 9978418194,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2472",
                "productName": "12/500 READY FIRKI",
                "quantity": 1,
                "price": 1300,
                "_id": "676aa688347ed2ee8561582d"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676aa6be347ed2ee85615fcb",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676aa6be347ed2ee85615fc9",
        "BillNo": 276,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "DEVRAJ",
        "address": "ST",
        "mobileNumber": 9687002210,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 3,
                "price": 650,
                "_id": "676aa6be347ed2ee85615fcc"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1950,
        "discount": 0,
        "advance": 1950,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676aad7c1306f836cf140820",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676aad7b1306f836cf14081e",
        "BillNo": 277,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "DHARMESH",
        "address": "ST",
        "mobileNumber": 9375565712,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "676aad7c1306f836cf140821"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676aafe0e95caaa284af72f9",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676aafe0e95caaa284af72f7",
        "BillNo": 278,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "PARTH",
        "address": "ST",
        "mobileNumber": 8758253399,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676aafe0e95caaa284af72fa"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676aafe0e95caaa284af72fb"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676aafe0e95caaa284af72fc"
            }
        ],
        "totalFirki": 1,
        "subTotal": 585,
        "discount": 0,
        "advance": 585,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ab350554d9525c2aeb1ab",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ab350554d9525c2aeb1a9",
        "BillNo": 279,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "SANDEEP",
        "address": "ST",
        "mobileNumber": 9824616168,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 6,
                "price": 650,
                "_id": "676ab350554d9525c2aeb1ac"
            }
        ],
        "totalFirki": 6,
        "subTotal": 3900,
        "discount": 0,
        "advance": 3900,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ab4f1556217b377cdeea6",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ab4f1556217b377cdeea4",
        "BillNo": 280,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "MONIK",
        "address": "ST",
        "mobileNumber": 7283825743,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "676ab4f1556217b377cdeea7"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676ab4f1556217b377cdeea8"
            }
        ],
        "totalFirki": 4,
        "subTotal": 875,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 875,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ab58f556217b377cdf663",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ab58f556217b377cdf661",
        "BillNo": 281,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "PRITHVI",
        "address": "ST",
        "mobileNumber": 9313419873,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676ab58f556217b377cdf664"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 700,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676abefe38ba9e894781e416",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767fefe75928143534e3154",
        "BillNo": 282,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "AJAY",
        "address": "ST",
        "mobileNumber": 7284865657,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676abefe38ba9e894781e417"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ac1409c330f474dafc74a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ac1409c330f474dafc748",
        "BillNo": 283,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "PARTIK",
        "address": "ST",
        "mobileNumber": 9737370369,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 3,
                "price": 650,
                "_id": "676ac1409c330f474dafc74b"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "676ac1409c330f474dafc74c"
            }
        ],
        "totalFirki": 3,
        "subTotal": 3000,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 3000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ac96fbd9a80d5e548f0b6",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ac96fbd9a80d5e548f0b4",
        "BillNo": 284,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "JAYESH",
        "address": "ST",
        "mobileNumber": 9428150369,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 3,
                "price": 60,
                "_id": "676ac96fbd9a80d5e548f0b7"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676ac96fbd9a80d5e548f0b8"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676ac96fbd9a80d5e548f0b9"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676ac96fbd9a80d5e548f0ba"
            }
        ],
        "totalFirki": 4,
        "subTotal": 1135,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1135,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ac9ffbd9a80d5e548f88e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ac9ffbd9a80d5e548f88c",
        "BillNo": 285,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "ANIKET",
        "address": "ST",
        "mobileNumber": 7567752713,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676ac9ffbd9a80d5e548f88f"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676acc317322c8b01a84fbc4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676acc317322c8b01a84fbc2",
        "BillNo": 286,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "ANKUR",
        "address": "ST",
        "mobileNumber": 9978360036,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 5,
                "price": 350,
                "_id": "676acc317322c8b01a84fbc5"
            },
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 5,
                "price": 650,
                "_id": "676acc317322c8b01a84fbc6"
            }
        ],
        "totalFirki": 10,
        "subTotal": 5000,
        "discount": 1000,
        "advance": 4000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ace097d3d9db0af21adaa",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ace097d3d9db0af21ada8",
        "BillNo": 287,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "HITESH",
        "address": "ST",
        "mobileNumber": 9429331937,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "676ace097d3d9db0af21adab"
            }
        ],
        "totalFirki": 1,
        "subTotal": 650,
        "discount": 0,
        "advance": 650,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ad0de22e6a286a5868624",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ad0de22e6a286a5868622",
        "BillNo": 288,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "KALP",
        "address": "ST",
        "mobileNumber": 9173179356,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 8,
                "price": 650,
                "_id": "676ad0de22e6a286a5868625"
            }
        ],
        "totalFirki": 8,
        "subTotal": 5200,
        "discount": 0,
        "advance": 5200,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ad8e21c26ac39a471c767",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ad8e21c26ac39a471c765",
        "BillNo": 289,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "KUMAL",
        "address": "ST",
        "mobileNumber": 9510306463,
        "deliveryDate": "2024-12-24T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "676ad8e21c26ac39a471c768"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676adcceff2c5e7208575d4a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676adcceff2c5e7208575d48",
        "BillNo": 290,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "HARSH",
        "address": "ST",
        "mobileNumber": 8980977507,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 11,
                "price": 350,
                "_id": "676adcceff2c5e7208575d4b"
            }
        ],
        "totalFirki": 18,
        "subTotal": 3850,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 3350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676aded2c76fbd3ce3b29d9b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676aded2c76fbd3ce3b29d99",
        "BillNo": 291,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "DARSHAK",
        "address": "ST",
        "mobileNumber": 8469309382,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676aded2c76fbd3ce3b29d9c"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676aded2c76fbd3ce3b29d9d"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676aded2c76fbd3ce3b29d9e"
            }
        ],
        "totalFirki": 4,
        "subTotal": 1110,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1110,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ae00d7ca29c127786d46d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ae00d7ca29c127786d46b",
        "BillNo": 292,
        "orderDate": "2024-12-24T00:00:00.000Z",
        "name": "CHETAN",
        "address": "ST",
        "mobileNumber": 9227523585,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "676ae00d7ca29c127786d46e"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676ae00d7ca29c127786d46f"
            }
        ],
        "totalFirki": 2,
        "subTotal": 470,
        "discount": 0,
        "advance": 470,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676b885d59dfc1cb55b4d55a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676b885d59dfc1cb55b4d558",
        "BillNo": 293,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "MIHIR",
        "address": "ST",
        "mobileNumber": 9879555040,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 2,
                "price": 650,
                "_id": "676b885d59dfc1cb55b4d55b"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676b885d59dfc1cb55b4d55c"
            },
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "676b885d59dfc1cb55b4d55d"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676b885d59dfc1cb55b4d55e"
            }
        ],
        "totalFirki": 5,
        "subTotal": 2220,
        "discount": 0,
        "advance": 1500,
        "paid": 0,
        "totalDue": 720,
        "notes": "DELIVERED",
        "__v": 0
    },
    {
        "_id": "676b90de2b5125d48b16aa58",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676b90de2b5125d48b16aa56",
        "BillNo": 294,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "RAJU BHAI",
        "address": "ST",
        "mobileNumber": 8200122751,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 2,
                "price": 80,
                "_id": "676b90de2b5125d48b16aa59"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 2,
                "price": 650,
                "_id": "676b90de2b5125d48b16aa5a"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676b90de2b5125d48b16aa5b"
            }
        ],
        "totalFirki": 2,
        "subTotal": 2160,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 1660,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676b919c2b5125d48b16b268",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676b919c2b5125d48b16b266",
        "BillNo": 295,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "RAHUL",
        "address": "ST",
        "mobileNumber": 9879078989,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 5,
                "price": 650,
                "_id": "676b919c2b5125d48b16b269"
            }
        ],
        "totalFirki": 5,
        "subTotal": 3250,
        "discount": 150,
        "advance": 3100,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676b9363dae153e1072dd944",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676b9363dae153e1072dd942",
        "BillNo": 296,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "NEEL",
        "address": "ST",
        "mobileNumber": 9898906191,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676b9363dae153e1072dd945"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676b94a8dae153e1072de156",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676b94a8dae153e1072de154",
        "BillNo": 297,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "MUKESH",
        "address": "ST",
        "mobileNumber": 9924193766,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676b94a8dae153e1072de157"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676b969bb95e2919111dcf38",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676b969bb95e2919111dcf36",
        "BillNo": 298,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "DIPAK",
        "address": "ST",
        "mobileNumber": 9327898059,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 3,
                "price": 60,
                "_id": "676b969bb95e2919111dcf39"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676b969bb95e2919111dcf3a"
            },
            {
                "productId": "65bde88769acedb394df2476",
                "productName": "12/250 BOBIN",
                "quantity": 2,
                "price": 400,
                "_id": "676b969bb95e2919111dcf3b"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "676b969bb95e2919111dcf3c"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1855,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 855,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676b9946df2d956211b52253",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676b9946df2d956211b52251",
        "BillNo": 299,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "ASHOK BHAI",
        "address": "ST",
        "mobileNumber": 9925715748,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676b9946df2d956211b52254"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ba07f8167b164bb513fb6",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ba07f8167b164bb513fb4",
        "BillNo": 300,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "JEET",
        "address": "ST",
        "mobileNumber": 9712414832,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676ba07f8167b164bb513fb7"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676ba07f8167b164bb513fb8"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1000,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 500,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ba11c697edfb139a3f89c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ba11c697edfb139a3f89a",
        "BillNo": 301,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "SHUBHAM",
        "address": "ST",
        "mobileNumber": 9316560467,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676ba11c697edfb139a3f89d"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ba174697edfb139a400c9",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ba174697edfb139a400c7",
        "BillNo": 302,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "RISHI",
        "address": "ST",
        "mobileNumber": 8849773527,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676ba174697edfb139a400ca"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 175,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ba1f5697edfb139a408fa",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ba1f5697edfb139a408f8",
        "BillNo": 303,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "NEHANSH",
        "address": "ST",
        "mobileNumber": 9898751566,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676ba1f5697edfb139a408fb"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ba5d7dbf4e6d79bf468a2",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ba5d7dbf4e6d79bf468a0",
        "BillNo": 304,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "SUDHIR",
        "address": "ST",
        "mobileNumber": 9558965555,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 20,
                "price": 650,
                "_id": "676ba5d7dbf4e6d79bf468a3"
            }
        ],
        "totalFirki": 20,
        "subTotal": 13000,
        "discount": 0,
        "advance": 13000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ba723dbf4e6d79bf470db",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ba723dbf4e6d79bf470d9",
        "BillNo": 305,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "DHRUV",
        "address": "ST",
        "mobileNumber": 9979334089,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676ba723dbf4e6d79bf470dc"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676ba723dbf4e6d79bf470de"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "676ba83fdbf4e6d79bf4792f"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 3,
                "price": 650,
                "_id": "676ba83fdbf4e6d79bf47930"
            }
        ],
        "totalFirki": 4,
        "subTotal": 3525,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 2525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ba9f2752086f767ecc3e3",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ba9f2752086f767ecc3e1",
        "BillNo": 306,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "DAKSH",
        "address": "ST",
        "mobileNumber": 6355944960,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676ba9f2752086f767ecc3e4"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676ba9f2752086f767ecc3e5"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676ba9f2752086f767ecc3e6"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1110,
        "discount": 0,
        "advance": 1110,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bacc3a33dbc5b582a0c97",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bacc3a33dbc5b582a0c95",
        "BillNo": 307,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "DHULABHAI",
        "address": "ST",
        "mobileNumber": 9099081770,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 3,
                "price": 650,
                "_id": "676bacc3a33dbc5b582a0c98"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1950,
        "discount": 50,
        "advance": 1900,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bafefa40bcf6e78ee6158",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bafefa40bcf6e78ee6156",
        "BillNo": 308,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "SHREY",
        "address": "ST",
        "mobileNumber": 7801800990,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676bafefa40bcf6e78ee6159"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676bafefa40bcf6e78ee615a"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bb0d8cd29c9b67fb7f364",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bb0d8cd29c9b67fb7f362",
        "BillNo": 309,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "BHAGAYRAJ",
        "address": "ST",
        "mobileNumber": 7203868932,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676bb0d8cd29c9b67fb7f365"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 175,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bb1fdcd29c9b67fb7fbd1",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bb1fdcd29c9b67fb7fbcf",
        "BillNo": 310,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "YUG",
        "address": "ST",
        "mobileNumber": 9328551562,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676bb1fdcd29c9b67fb7fbd2"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676bb1fdcd29c9b67fb7fbd3"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676bb1fdcd29c9b67fb7fbd4"
            }
        ],
        "totalFirki": 1,
        "subTotal": 585,
        "discount": 0,
        "advance": 200,
        "paid": 0,
        "totalDue": 385,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bb309cd29c9b67fb80439",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bb309cd29c9b67fb80437",
        "BillNo": 311,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "MEET ",
        "address": "ST",
        "mobileNumber": 8906967777,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676bb309cd29c9b67fb8043a"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "676bb38ecd29c9b67fb80ca6"
            }
        ],
        "totalFirki": 5,
        "subTotal": 1700,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1700,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bb71de05ae0c3bbf7ee29",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bb71ce05ae0c3bbf7ee27",
        "BillNo": 312,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "SHIVAM",
        "address": "ST",
        "mobileNumber": 9316038442,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2477",
                "productName": "12/500 BOBIN",
                "quantity": 1,
                "price": 800,
                "_id": "676bb71de05ae0c3bbf7ee2a"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676bb71de05ae0c3bbf7ee2b"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1150,
        "discount": 0,
        "advance": 1150,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bbce1bd9194b5ddb915fc",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6762cb047ca090ca646e56ef",
        "BillNo": 313,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "HOME",
        "address": "ST",
        "mobileNumber": 7567560884,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 7,
                "price": 650,
                "_id": "676bbce1bd9194b5ddb915fd"
            },
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 7,
                "price": 1100,
                "_id": "676bbce1bd9194b5ddb915fe"
            }
        ],
        "totalFirki": 14,
        "subTotal": 12250,
        "discount": 1190,
        "advance": 11060,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bbf75cc4859981e1b782d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bbf75cc4859981e1b782b",
        "BillNo": 314,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "MUKESH",
        "address": "ST",
        "mobileNumber": 7405758772,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 4,
                "price": 350,
                "_id": "676bbf75cc4859981e1b782e"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 4,
                "price": 175,
                "_id": "676bbf75cc4859981e1b782f"
            }
        ],
        "totalFirki": 4,
        "subTotal": 2100,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 1100,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bc302d10a1b88548b3878",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766d770e759e50fcc9e9e90",
        "BillNo": 315,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "KAVAN",
        "address": "ST",
        "mobileNumber": 7046653003,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676bc302d10a1b88548b3879"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "DELIVERED",
        "__v": 0
    },
    {
        "_id": "676bc990f38554b55a751649",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bc990f38554b55a751647",
        "BillNo": 316,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "RISHI",
        "address": "ST",
        "mobileNumber": 7043236817,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676bc990f38554b55a75164a"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 700,
        "notes": "DELIVERED",
        "__v": 0
    },
    {
        "_id": "676bcd175ea5c06bde578860",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675af1a47c4bff8f3cbc22d5",
        "BillNo": 317,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "VIRAJ",
        "address": "ST",
        "mobileNumber": 7862088449,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676bcd175ea5c06bde578861"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676bcd175ea5c06bde578862"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676bcd175ea5c06bde578863"
            }
        ],
        "totalFirki": 2,
        "subTotal": 605,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 605,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bcde5d6cc9314956c4109",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bcde5d6cc9314956c4107",
        "BillNo": 318,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "ARAYAN",
        "address": "ST",
        "mobileNumber": 9924892598,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676bcde5d6cc9314956c410a"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676bcde5d6cc9314956c410b"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 200,
        "paid": 0,
        "totalDue": 325,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bd1ed7cec89ca101a36e9",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bd1ed7cec89ca101a36e7",
        "BillNo": 319,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "DAKSHBHAI",
        "address": "ST",
        "mobileNumber": 7567230107,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "676bd1ed7cec89ca101a36ea"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bd2ec735606b19cf9bd6c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bd2ec735606b19cf9bd6a",
        "BillNo": 320,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "KANUDO",
        "address": "ST",
        "mobileNumber": 8238280381,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676bd2ec735606b19cf9bd6d"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "676bd2ec735606b19cf9bd6e"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1130,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 630,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bda0b042fcb6c9c86bc3e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bda0b042fcb6c9c86bc3c",
        "BillNo": 321,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "JAIMIN",
        "address": "ST",
        "mobileNumber": 9624417879,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 2,
                "price": 650,
                "_id": "676bda0b042fcb6c9c86bc3f"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676bda0b042fcb6c9c86bc40"
            }
        ],
        "totalFirki": 2,
        "subTotal": 2000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 1000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bdbc426b6d4038d17c71b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bdbc426b6d4038d17c719",
        "BillNo": 322,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "meet",
        "address": "st",
        "mobileNumber": 7984901494,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 4,
                "price": 150,
                "_id": "676bdbc426b6d4038d17c71c"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 4,
                "price": 70,
                "_id": "676bdbc426b6d4038d17c71d"
            }
        ],
        "totalFirki": 4,
        "subTotal": 880,
        "discount": 0,
        "advance": 880,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bdd0226b6d4038d17cfc6",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bdd0226b6d4038d17cfc4",
        "BillNo": 323,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "MANTRAM",
        "address": "ST",
        "mobileNumber": 9925957755,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676bdd0226b6d4038d17cfc7"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bddaa26b6d4038d17d87c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bddaa26b6d4038d17d87a",
        "BillNo": 324,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "TARI",
        "address": "ST",
        "mobileNumber": 9825487901,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676bddaa26b6d4038d17d87d"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676bddaa26b6d4038d17d87e"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676be322c27d92de49375265",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676be322c27d92de49375263",
        "BillNo": 325,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "VISHAL",
        "address": "ST",
        "mobileNumber": 7600002895,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 3,
                "price": 650,
                "_id": "676be322c27d92de49375266"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1950,
        "discount": 0,
        "advance": 1950,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676be6416ccec1c63aa6932d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676be6416ccec1c63aa6932b",
        "BillNo": 326,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "KRISH",
        "address": "ST",
        "mobileNumber": 9875224839,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676be6416ccec1c63aa6932e"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 700,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676be85da35ed69d77d098c8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676be85da35ed69d77d098c6",
        "BillNo": 327,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "KISHAN",
        "address": "ST",
        "mobileNumber": 7984322905,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676be85da35ed69d77d098c9"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676be9aa3735b7bb6ffe9017",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676be9aa3735b7bb6ffe9015",
        "BillNo": 328,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "DHEYEY",
        "address": "ST",
        "mobileNumber": 9924501754,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676be9aa3735b7bb6ffe9018"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676be9aa3735b7bb6ffe9019"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1050,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bf4f768ab34d1508f858e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bf4f768ab34d1508f858c",
        "BillNo": 329,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "NAYAN",
        "address": "ST",
        "mobileNumber": 8699208689,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676bf4f768ab34d1508f858f"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676bf4f768ab34d1508f8590"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676bf4f768ab34d1508f8591"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676bf4f768ab34d1508f8592"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676bf4f768ab34d1508f8593"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1605,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1605,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bf8681362852cfefa97c5",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bf8681362852cfefa97c3",
        "BillNo": 330,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "ANIL",
        "address": "ST",
        "mobileNumber": 7778920204,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2476",
                "productName": "12/250 BOBIN",
                "quantity": 2,
                "price": 400,
                "_id": "676bf8681362852cfefa97c6"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676bf8681362852cfefa97c7"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676bf8681362852cfefa97c8"
            },
            {
                "productId": "675d83b4bb079800e07534ee",
                "productName": "12/900 BOBIN",
                "quantity": 1,
                "price": 180,
                "_id": "676bf8681362852cfefa97c9"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1400,
        "discount": 0,
        "advance": 1400,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bfb3e528a7d4c54bac232",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bfb3e528a7d4c54bac230",
        "BillNo": 331,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "SHANKAR",
        "address": "ST",
        "mobileNumber": 9879552088,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "676bfb3e528a7d4c54bac233"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676bfb3e528a7d4c54bac234"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676bfb3e528a7d4c54bac235"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1170,
        "discount": 0,
        "advance": 750,
        "paid": 0,
        "totalDue": 420,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bfd744ad51ba5ef72a06a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bfd734ad51ba5ef72a068",
        "BillNo": 332,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "BRIJESH",
        "address": "ST",
        "mobileNumber": 8141049237,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676bfd744ad51ba5ef72a06b"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676bfdf94ad51ba5ef72a951",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676bfdf94ad51ba5ef72a94f",
        "BillNo": 333,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "CHETANBHAI",
        "address": "ST",
        "mobileNumber": 9726720999,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676bfdf94ad51ba5ef72a952"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676c05571fc99e09046da9c1",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676c05571fc99e09046da9bf",
        "BillNo": 334,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "PRKASHBHAI",
        "address": "ST",
        "mobileNumber": 8320049439,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "676c05571fc99e09046da9c2"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 4,
                "price": 350,
                "_id": "676c05571fc99e09046da9c3"
            }
        ],
        "totalFirki": 7,
        "subTotal": 1925,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1925,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676c05a8ca81d09367b240af",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676c05a8ca81d09367b240ad",
        "BillNo": 335,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "DHAVAL",
        "address": "ST",
        "mobileNumber": 9727777881,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 1,
                "price": 350,
                "_id": "676c05a8ca81d09367b240b0"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676c078c02e1d6be19c0e1a3",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676c078c02e1d6be19c0e1a1",
        "BillNo": 336,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "DIPAKBGHAI",
        "address": "ST",
        "mobileNumber": 9974062408,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676c078c02e1d6be19c0e1a4"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676c078c02e1d6be19c0e1a5"
            }
        ],
        "totalFirki": 2,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676c0c80648a1ceca1813305",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676c0c80648a1ceca1813303",
        "BillNo": 337,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "JAY",
        "address": "ST",
        "mobileNumber": 7623838829,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676c0c80648a1ceca1813306"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676c15de32e5db68a5712a79",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676c15de32e5db68a5712a77",
        "BillNo": 338,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "PREM",
        "address": "ST",
        "mobileNumber": 7041312750,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676c15de32e5db68a5712a7a"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 200,
        "paid": 0,
        "totalDue": 150,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676c17fd5a2bce70e5db52b2",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676c17fd5a2bce70e5db52b0",
        "BillNo": 339,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "JEET",
        "address": "ST",
        "mobileNumber": 8866113765,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676c17fd5a2bce70e5db52b3"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676c17fd5a2bce70e5db52b4"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676c17fd5a2bce70e5db52b5"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676c17fd5a2bce70e5db52b6"
            }
        ],
        "totalFirki": 3,
        "subTotal": 2050,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 1050,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676c19ae5285bd9c88c187da",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676c19ae5285bd9c88c187d8",
        "BillNo": 340,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "ARMAN",
        "address": "ST",
        "mobileNumber": 8238662674,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 4,
                "price": 175,
                "_id": "676c19ae5285bd9c88c187db"
            }
        ],
        "totalFirki": 4,
        "subTotal": 700,
        "discount": 0,
        "advance": 700,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676c1b1a1b07f36830d3d984",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676c1b1a1b07f36830d3d982",
        "BillNo": 341,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "VATSALBHAI",
        "address": "ST",
        "mobileNumber": 8160844944,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 6,
                "price": 80,
                "_id": "676c1b1a1b07f36830d3d985"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 5,
                "price": 350,
                "_id": "676c1b1a1b07f36830d3d986"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676c1b1a1b07f36830d3d987"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 5,
                "price": 175,
                "_id": "676c1b1a1b07f36830d3d988"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676c1b1a1b07f36830d3d989"
            }
        ],
        "totalFirki": 6,
        "subTotal": 4105,
        "discount": 0,
        "advance": 2000,
        "paid": 0,
        "totalDue": 2105,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676c2303514a17b8e2672f6e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676c2303514a17b8e2672f6c",
        "BillNo": 342,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "KALPESH",
        "address": "ST",
        "mobileNumber": 9099131834,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676c2303514a17b8e2672f6f"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676c2303514a17b8e2672f70"
            },
            {
                "productId": "65bde88769acedb394df2477",
                "productName": "12/500 BOBIN",
                "quantity": 1,
                "price": 800,
                "_id": "676c2303514a17b8e2672f71"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676c2303514a17b8e2672f72"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676c2303514a17b8e2672f73"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1735,
        "discount": 0,
        "advance": 1735,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676c28d51171627340f4180c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676c28d51171627340f4180a",
        "BillNo": 343,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "BHUMESH",
        "address": "ST",
        "mobileNumber": 9106425328,
        "deliveryDate": "2024-12-25T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 9,
                "price": 175,
                "_id": "676c28d51171627340f4180d"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676c28d51171627340f4180e"
            }
        ],
        "totalFirki": 10,
        "subTotal": 1925,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1925,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676c29b9e4a5c6511a5e9c03",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676c29b9e4a5c6511a5e9c01",
        "BillNo": 344,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "CHINTAN",
        "address": "ST",
        "mobileNumber": 8758263503,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676c29b9e4a5c6511a5e9c04"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676c29b9e4a5c6511a5e9c05"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676c2f60f1b8eb0cf2ce1c71",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676c2f60f1b8eb0cf2ce1c6f",
        "BillNo": 345,
        "orderDate": "2024-12-25T00:00:00.000Z",
        "name": "JAYESH BHAGATWALA",
        "address": "ST",
        "mobileNumber": 9825142411,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 18,
                "price": 650,
                "_id": "676c2f60f1b8eb0cf2ce1c72"
            },
            {
                "productId": "65bde88769acedb394df2471",
                "productName": "12/250 READY FIRKI",
                "quantity": 1,
                "price": 750,
                "_id": "676c2f60f1b8eb0cf2ce1c73"
            }
        ],
        "totalFirki": 19,
        "subTotal": 12450,
        "discount": 950,
        "advance": 0,
        "paid": 0,
        "totalDue": 11500,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676cd6ecb7ffb25847519aed",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676cd6ecb7ffb25847519aeb",
        "BillNo": 346,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "MAHAR",
        "address": "ST",
        "mobileNumber": 9925039118,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676cd6ecb7ffb25847519aee"
            },
            {
                "productId": "65bde88769acedb394df2476",
                "productName": "12/250 BOBIN",
                "quantity": 1,
                "price": 400,
                "_id": "676cd6ecb7ffb25847519aef"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676cd6ecb7ffb25847519af0"
            }
        ],
        "totalFirki": 1,
        "subTotal": 635,
        "discount": 0,
        "advance": 200,
        "paid": 0,
        "totalDue": 435,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676cdc1491aae2ef93f81c16",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6766dc998c54779a433a402c",
        "BillNo": 347,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "MEHULBHAI",
        "address": "ST",
        "mobileNumber": 9687412050,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676cdc1491aae2ef93f81c17"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676cdc1491aae2ef93f81c18"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676cdc1491aae2ef93f81c19"
            }
        ],
        "totalFirki": 1,
        "subTotal": 585,
        "discount": 0,
        "advance": 100,
        "paid": 0,
        "totalDue": 485,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ce05b8cb72501f15b030e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ce05b8cb72501f15b030c",
        "BillNo": 348,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "JATIN",
        "address": "ST",
        "mobileNumber": 9898393500,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "676ce05b8cb72501f15b030f"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676ce05b8cb72501f15b0310"
            }
        ],
        "totalFirki": 2,
        "subTotal": 220,
        "discount": 0,
        "advance": 220,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ce405fa15e7265230a112",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ce405fa15e7265230a110",
        "BillNo": 349,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "DHARMESHBHAI",
        "address": "ST",
        "mobileNumber": 9825947774,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676ce405fa15e7265230a113"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 700,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ce6b6ff4ed72d461d6788",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ce6b6ff4ed72d461d6786",
        "BillNo": 350,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "MAYANK",
        "address": "ST",
        "mobileNumber": 8866306716,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676ce6b6ff4ed72d461d6789"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676ce6b6ff4ed72d461d678a"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ce756ff4ed72d461d70e3",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ce756ff4ed72d461d70e1",
        "BillNo": 351,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "NIKULBHAI",
        "address": "ST",
        "mobileNumber": 9824528529,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "676ce756ff4ed72d461d70e4"
            }
        ],
        "totalFirki": 1,
        "subTotal": 650,
        "discount": 0,
        "advance": 650,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676cee12ccb9f6a92ac4d621",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676cee12ccb9f6a92ac4d61f",
        "BillNo": 352,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "VINODBHAI",
        "address": "ST",
        "mobileNumber": 9879100862,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676cee12ccb9f6a92ac4d622"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 175,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676cfbc62419a934b1f1bf86",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676cfbc62419a934b1f1bf84",
        "BillNo": 353,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "KIRAN ",
        "address": "ST",
        "mobileNumber": 9825696467,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 2,
                "price": 1100,
                "_id": "676cfbc62419a934b1f1bf87"
            }
        ],
        "totalFirki": 2,
        "subTotal": 2200,
        "discount": 0,
        "advance": 2200,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676cffde49e94ce54028b20b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676cffde49e94ce54028b209",
        "BillNo": 354,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "ASHISH",
        "address": "ST",
        "mobileNumber": 9638347939,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2476",
                "productName": "12/250 BOBIN",
                "quantity": 1,
                "price": 400,
                "_id": "676cffde49e94ce54028b20c"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676cffde49e94ce54028b20d"
            }
        ],
        "totalFirki": 1,
        "subTotal": 575,
        "discount": 0,
        "advance": 575,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d007149e94ce54028bb77",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67690c0a849797caa746a8a9",
        "BillNo": 355,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "ROHIT",
        "address": "ST",
        "mobileNumber": 7874237576,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676d007149e94ce54028bb78"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676d007149e94ce54028bb79"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d011649e94ce54028c4e8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d011649e94ce54028c4e6",
        "BillNo": 356,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "ARYAN",
        "address": "ST",
        "mobileNumber": 6352043595,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "676d011649e94ce54028c4e9"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676d011649e94ce54028c4ea"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676d011649e94ce54028c4eb"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676d011649e94ce54028c4ec"
            }
        ],
        "totalFirki": 2,
        "subTotal": 745,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 745,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d04086949eeb66e3ff106",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d04086949eeb66e3ff104",
        "BillNo": 357,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "HEMANT",
        "address": "ST",
        "mobileNumber": 7567922274,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676d04086949eeb66e3ff107"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676d04086949eeb66e3ff108"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676d04086949eeb66e3ff109"
            }
        ],
        "totalFirki": 3,
        "subTotal": 760,
        "discount": 0,
        "advance": 0,
        "paid": 760,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d06887be627a2e36e4092",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d06887be627a2e36e4090",
        "BillNo": 358,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "PANKAJ",
        "address": "ST",
        "mobileNumber": 9879637077,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676d06887be627a2e36e4093"
            },
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "676d06887be627a2e36e4094"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676d06887be627a2e36e4095"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676d06887be627a2e36e4096"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676d06887be627a2e36e4097"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d090a09d5f692c507f305",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6742c252647a57f2b80d3e75",
        "BillNo": 359,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "JK",
        "address": "ST",
        "mobileNumber": 9978622476,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "676d090a09d5f692c507f306"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1100,
        "discount": 0,
        "advance": 1100,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d10d50c87db5460b18323",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d10d50c87db5460b18321",
        "BillNo": 360,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "ALPESH",
        "address": "ST",
        "mobileNumber": 9023930660,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676d10d50c87db5460b18324"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 200,
        "paid": 0,
        "totalDue": 150,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d11bb0c87db5460b18cb5",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d11bb0c87db5460b18cb3",
        "BillNo": 361,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "PRATHAM",
        "address": "ST",
        "mobileNumber": 9313080824,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676d11bb0c87db5460b18cb6"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d12e00c87db5460b1964b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d12e00c87db5460b19649",
        "BillNo": 362,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "JIGNESH",
        "address": "ST",
        "mobileNumber": 9913885368,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "676d12e00c87db5460b1964c"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676d12e00c87db5460b1964d"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676d12e00c87db5460b1964e"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1170,
        "discount": 0,
        "advance": 1170,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d1f83ecd1fcf68c0e758d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d1f83ecd1fcf68c0e758a",
        "BillNo": 363,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "SAGAR",
        "address": "ST",
        "mobileNumber": 9825826015,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676d1f83ecd1fcf68c0e758e"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676d1f83ecd1fcf68c0e758f"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676d1f83ecd1fcf68c0e7590"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1110,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1110,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d2a170d4af3a34bee3547",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d2a170d4af3a34bee3545",
        "BillNo": 364,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "YASH",
        "address": "ST",
        "mobileNumber": 9909911454,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "676d2a170d4af3a34bee3548"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d2bbd72c4619cc92f5ea3",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d2bbd72c4619cc92f5ea1",
        "BillNo": 365,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "SHRENIK",
        "address": "ST",
        "mobileNumber": 7567178787,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676d2bbd72c4619cc92f5ea4"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d2ce472c4619cc92f6852",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d2ce472c4619cc92f6850",
        "BillNo": 366,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "SANDEEP",
        "address": "ST",
        "mobileNumber": 8200645726,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "676d2ce472c4619cc92f6853"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1100,
        "discount": 0,
        "advance": 1100,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d2d7572c4619cc92f7205",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d2d7572c4619cc92f7203",
        "BillNo": 367,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "BAKUL",
        "address": "ST",
        "mobileNumber": 8000891007,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676d2d7572c4619cc92f7206"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676d2d7572c4619cc92f7207"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d35f8621f4c7be92c3ce8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d35f8621f4c7be92c3ce6",
        "BillNo": 368,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "YUNUSH",
        "address": "ST",
        "mobileNumber": 8866465308,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 1,
                "price": 350,
                "_id": "676d35f8621f4c7be92c3ce9"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d4010b5e533085d7bd3c8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d4010b5e533085d7bd3c6",
        "BillNo": 369,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "DENISH",
        "address": "ST",
        "mobileNumber": 9904111169,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676d4010b5e533085d7bd3c9"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676d4010b5e533085d7bd3ca"
            }
        ],
        "totalFirki": 2,
        "subTotal": 525,
        "discount": 25,
        "advance": 500,
        "paid": 0,
        "totalDue": 0,
        "notes": "DELIVETRED TO DENISH \n9904111169",
        "__v": 0
    },
    {
        "_id": "676d4302bfb11ffeab0806c4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d4302bfb11ffeab0806c2",
        "BillNo": 370,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "KARAN",
        "address": "ST",
        "mobileNumber": 8780968596,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676d4302bfb11ffeab0806c5"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676d4302bfb11ffeab0806c6"
            }
        ],
        "totalFirki": 1,
        "subTotal": 430,
        "discount": 0,
        "advance": 200,
        "paid": 0,
        "totalDue": 230,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d4f838b795c046831cb72",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d4f838b795c046831cb70",
        "BillNo": 371,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "ALPESH",
        "address": "ST",
        "mobileNumber": 8980069098,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676d4f838b795c046831cb73"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 25,
        "advance": 0,
        "paid": 0,
        "totalDue": 150,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d5214f577a38665b21ea6",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d5214f577a38665b21ea4",
        "BillNo": 372,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "JAYNISH",
        "address": "ST",
        "mobileNumber": 9909918186,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 8,
                "price": 175,
                "_id": "676d5214f577a38665b21ea7"
            }
        ],
        "totalFirki": 8,
        "subTotal": 1400,
        "discount": 0,
        "advance": 1400,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d52c7f577a38665b22877",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d52c7f577a38665b22875",
        "BillNo": 373,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "MANOJ",
        "address": "ST",
        "mobileNumber": 9825122619,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676d52c7f577a38665b22878"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676d52c7f577a38665b22879"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676d52c7f577a38665b2287a"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1080,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 580,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d55b9645e1ea636e3c176",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d55b9645e1ea636e3c174",
        "BillNo": 374,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "AAKASH",
        "address": "ST",
        "mobileNumber": 9725159182,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "676d55b9645e1ea636e3c177"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1100,
        "discount": 0,
        "advance": 1100,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d5690645e1ea636e3cb53",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d5690645e1ea636e3cb51",
        "BillNo": 375,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "JASH",
        "address": "ST",
        "mobileNumber": 7383949777,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676d5690645e1ea636e3cb54"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d56e9645e1ea636e3d534",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d56e9645e1ea636e3d532",
        "BillNo": 376,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "DHIREN",
        "address": "ST",
        "mobileNumber": 9909985096,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 3,
                "price": 650,
                "_id": "676d56e9645e1ea636e3d535"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1950,
        "discount": 0,
        "advance": 1950,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d578b645e1ea636e3df19",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d578b645e1ea636e3df17",
        "BillNo": 377,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "VISHAL",
        "address": "ST",
        "mobileNumber": 9879525777,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676d578b645e1ea636e3df1a"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676d578b645e1ea636e3df1b"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 100,
        "advance": 0,
        "paid": 0,
        "totalDue": 950,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d5853645e1ea636e3e907",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d5853645e1ea636e3e905",
        "BillNo": 378,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "SAHIL",
        "address": "ST",
        "mobileNumber": 8511622456,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 4,
                "price": 350,
                "_id": "676d5853645e1ea636e3e908"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 4,
                "price": 175,
                "_id": "676d5853645e1ea636e3e909"
            }
        ],
        "totalFirki": 4,
        "subTotal": 2100,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 2100,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d61297dc4eb5510017ec9",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d61297dc4eb5510017ec7",
        "BillNo": 379,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "DHRUVIL",
        "address": "ST",
        "mobileNumber": 8320751110,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676d61297dc4eb5510017eca"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676d61297dc4eb5510017ecb"
            },
            {
                "productId": "65bde88769acedb394df2477",
                "productName": "12/500 BOBIN",
                "quantity": 1,
                "price": 800,
                "_id": "676d61297dc4eb5510017ecc"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676d61297dc4eb5510017ecd"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676d61297dc4eb5510017ece"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1735,
        "discount": 0,
        "advance": 1735,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d642be4c4d54091c2281d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d642be4c4d54091c2281b",
        "BillNo": 380,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "PRATIK",
        "address": "ST",
        "mobileNumber": 8156010171,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676d642be4c4d54091c2281e"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676d642be4c4d54091c2281f"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d688bf130e3d5f8662131",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d688bf130e3d5f866212f",
        "BillNo": 381,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "ROTLIWALA",
        "address": "ST",
        "mobileNumber": 9712031822,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676d688bf130e3d5f8662132"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d6d19945caecb356bde53",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d6d19945caecb356bde51",
        "BillNo": 382,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "PARTH MAVAWALA",
        "address": "ST",
        "mobileNumber": 9998162626,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 15,
                "price": 350,
                "_id": "676d6d19945caecb356bde54"
            },
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 25,
                "price": 1100,
                "_id": "676d6d19945caecb356bde55"
            },
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 50,
                "price": 650,
                "_id": "676d6d19945caecb356bde56"
            },
            {
                "productId": "65bde88769acedb394df2472",
                "productName": "12/500 READY FIRKI",
                "quantity": 12,
                "price": 1300,
                "_id": "676d6d19945caecb356bde57"
            },
            {
                "productId": "65bde88769acedb394df2471",
                "productName": "12/250 READY FIRKI",
                "quantity": 12,
                "price": 750,
                "_id": "676d6d19945caecb356bde58"
            }
        ],
        "totalFirki": 114,
        "subTotal": 89850,
        "discount": 9000,
        "advance": 0,
        "paid": 0,
        "totalDue": 80850,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d72bb89cdc388c5ebde79",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d72bb89cdc388c5ebde77",
        "BillNo": 383,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "anil",
        "address": "st",
        "mobileNumber": 7622007469,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676d72bb89cdc388c5ebde7a"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676d72bb89cdc388c5ebde7b"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d740263f6103c4b66cccc",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d740263f6103c4b66ccca",
        "BillNo": 384,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "BHARATBHAI",
        "address": "ST",
        "mobileNumber": 9825905259,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676d740263f6103c4b66cccd"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 3,
                "price": 650,
                "_id": "676d740263f6103c4b66ccce"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676d740263f6103c4b66cccf"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "676d740263f6103c4b66ccd0"
            }
        ],
        "totalFirki": 4,
        "subTotal": 3525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 3525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d746863f6103c4b66d6f8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d746863f6103c4b66d6f6",
        "BillNo": 385,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "krish",
        "address": "st",
        "mobileNumber": 8320272085,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676d746863f6103c4b66d6f9"
            }
        ],
        "totalFirki": 1,
        "subTotal": 70,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 70,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d75e093788ca39d6b40b3",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d75e093788ca39d6b40b1",
        "BillNo": 386,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "KETUL",
        "address": "ST",
        "mobileNumber": 8866678102,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676d75e093788ca39d6b40b4"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "676d75e093788ca39d6b40b5"
            }
        ],
        "totalFirki": 3,
        "subTotal": 605,
        "discount": 0,
        "advance": 605,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d7805850f5767808bb9e0",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d7805850f5767808bb9de",
        "BillNo": 387,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "SAHIL",
        "address": "ST",
        "mobileNumber": 9313952829,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "676d7805850f5767808bb9e1"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676d7805850f5767808bb9e2"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676d7805850f5767808bb9e3"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676d7805850f5767808bb9e4"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1270,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 770,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d79a6698caa212bf0b1c0",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d79a6698caa212bf0b1be",
        "BillNo": 388,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "AKSHAY",
        "address": "ST",
        "mobileNumber": 9925808073,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "676d79a6698caa212bf0b1c1"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676d79a6698caa212bf0b1c2"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676d79a6698caa212bf0b1c3"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1625,
        "discount": 0,
        "advance": 1100,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d7ca39c11454bf5f3de17",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d7ca39c11454bf5f3de15",
        "BillNo": 389,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "GOPAL",
        "address": "ST",
        "mobileNumber": 9586339395,
        "deliveryDate": "2024-12-26T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676d7ca39c11454bf5f3de18"
            }
        ],
        "totalFirki": 3,
        "subTotal": 700,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 700,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676d7dd39c11454bf5f3e85a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676d7dd39c11454bf5f3e858",
        "BillNo": 390,
        "orderDate": "2024-12-26T00:00:00.000Z",
        "name": "SMIT",
        "address": "ST",
        "mobileNumber": 8758882638,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676d7dd39c11454bf5f3e85b"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676d7dd39c11454bf5f3e85c"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e387c8fc2d5c78905dbf2",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a8c88a61c58341d2fdbdf",
        "BillNo": 391,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "anil bhai",
        "address": "ST",
        "mobileNumber": 7265867644,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676e387c8fc2d5c78905dbf3"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676e387c8fc2d5c78905dbf4"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e39348fc2d5c78905e642",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e39348fc2d5c78905e640",
        "BillNo": 392,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "BHaratbhai",
        "address": "st",
        "mobileNumber": 9724185925,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676e39348fc2d5c78905e643"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676e39348fc2d5c78905e644"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e41772e99d4e11d6d0f30",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e41772e99d4e11d6d0f2e",
        "BillNo": 393,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "RUDHARESH",
        "address": "ST",
        "mobileNumber": 9099604980,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676e41772e99d4e11d6d0f31"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e4455657a36f895f6e0d4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e4455657a36f895f6e0d2",
        "BillNo": 394,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "ASHVINBHAI",
        "address": "ST",
        "mobileNumber": 7228044118,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676e4455657a36f895f6e0d5"
            },
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "676e4455657a36f895f6e0d6"
            }
        ],
        "totalFirki": 1,
        "subTotal": 325,
        "discount": 0,
        "advance": 200,
        "paid": 0,
        "totalDue": 125,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e47d23257bfbc4ac52041",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e47d23257bfbc4ac5203f",
        "BillNo": 395,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "VIRAL ",
        "address": "ST",
        "mobileNumber": 9558822388,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676e47d23257bfbc4ac52042"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676e47d23257bfbc4ac52043"
            }
        ],
        "totalFirki": 1,
        "subTotal": 255,
        "discount": 25,
        "advance": 230,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e484ebb774f9d0d0597d8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e484ebb774f9d0d0597d6",
        "BillNo": 396,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "SUNNY",
        "address": "ST",
        "mobileNumber": 8097047668,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "676e484ebb774f9d0d0597d9"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e4e74afe1bb1aef450d2a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e4e74afe1bb1aef450d28",
        "BillNo": 397,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "MILAN",
        "address": "ST",
        "mobileNumber": 9998218845,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 2,
                "price": 350,
                "_id": "676e4e74afe1bb1aef450d2b"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 700,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e523132672631312f352d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e523132672631312f352b",
        "BillNo": 398,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "PRITESH",
        "address": "ST",
        "mobileNumber": 7046127555,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 100,
                "price": 650,
                "_id": "676e523132672631312f352e"
            }
        ],
        "totalFirki": 100,
        "subTotal": 65000,
        "discount": 5000,
        "advance": 60000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e546ba7667018e1d41713",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e546aa7667018e1d41711",
        "BillNo": 399,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "DINESHBHAI",
        "address": "ST",
        "mobileNumber": 9825124277,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 9,
                "price": 650,
                "_id": "676e546ba7667018e1d41714"
            }
        ],
        "totalFirki": 9,
        "subTotal": 5850,
        "discount": 0,
        "advance": 5850,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e5da9f91a2223e36eb8ba",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e5da9f91a2223e36eb8b8",
        "BillNo": 400,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "KAMAL",
        "address": "ST",
        "mobileNumber": 7990438305,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "676e5da9f91a2223e36eb8bb"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676e5da9f91a2223e36eb8bc"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676e5da9f91a2223e36eb8bd"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1120,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1120,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e6264f03f6a38890b39bf",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e6264f03f6a38890b39bd",
        "BillNo": 401,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "PIUSH",
        "address": "ST",
        "mobileNumber": 9925107773,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676e6264f03f6a38890b39c0"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676e6264f03f6a38890b39c1"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e63bcf03f6a38890b4441",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e6264f03f6a38890b39bd",
        "BillNo": 402,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "PIYUSH",
        "address": "ST",
        "mobileNumber": 9925107773,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "676e63bcf03f6a38890b4442"
            }
        ],
        "totalFirki": 1,
        "subTotal": 650,
        "discount": 0,
        "advance": 650,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e649af03f6a38890b4ec4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e649af03f6a38890b4ec2",
        "BillNo": 403,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "SAMIT",
        "address": "ST",
        "mobileNumber": 9313534805,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 3,
                "price": 350,
                "_id": "676e649af03f6a38890b4ec5"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e653ff03f6a38890b594b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e653ff03f6a38890b5949",
        "BillNo": 404,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "DHRUV",
        "address": "ST",
        "mobileNumber": 7862874392,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 4,
                "price": 350,
                "_id": "676e653ff03f6a38890b594c"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676e653ff03f6a38890b594d"
            }
        ],
        "totalFirki": 5,
        "subTotal": 1470,
        "discount": 0,
        "advance": 1470,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e67047c42903a35aa044d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e67047c42903a35aa044b",
        "BillNo": 405,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "ARAYAN",
        "address": "ST",
        "mobileNumber": 9427554442,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676e67047c42903a35aa044e"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 5,
                "price": 350,
                "_id": "676e67047c42903a35aa044f"
            }
        ],
        "totalFirki": 6,
        "subTotal": 1830,
        "discount": 0,
        "advance": 1830,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e69d9cd784c1727b7c0e8",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e69d9cd784c1727b7c0e6",
        "BillNo": 406,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "SARANG",
        "address": "ST",
        "mobileNumber": 6355424520,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "676e69d9cd784c1727b7c0e9"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676e69d9cd784c1727b7c0ea"
            }
        ],
        "totalFirki": 1,
        "subTotal": 220,
        "discount": 0,
        "advance": 0,
        "paid": 220,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e6b2d3fb7d6d283661163",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e6b2d3fb7d6d283661161",
        "BillNo": 407,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "DHRUV",
        "address": "ST",
        "mobileNumber": 9924424269,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676e6b2d3fb7d6d283661164"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676e6b2d3fb7d6d283661165"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e6f7d773235ca3b05f4a9",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e6f7d773235ca3b05f4a7",
        "BillNo": 408,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "JORNISHBHAI",
        "address": "ST",
        "mobileNumber": 9727085050,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "676e6f7d773235ca3b05f4aa"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e73af2aca27cc4a9b21a6",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e73ae2aca27cc4a9b21a4",
        "BillNo": 409,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "VASU",
        "address": "ST",
        "mobileNumber": 9662139987,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "676e73af2aca27cc4a9b21a7"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e7b0116d9ae079231a575",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e7b0116d9ae079231a573",
        "BillNo": 410,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "SAHIL",
        "address": "ST",
        "mobileNumber": 9773086216,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676e7b0116d9ae079231a576"
            },
            {
                "productId": "65bde88769acedb394df2476",
                "productName": "12/250 BOBIN",
                "quantity": 3,
                "price": 400,
                "_id": "676e7b0116d9ae079231a577"
            },
            {
                "productId": "65bde88769acedb394df2477",
                "productName": "12/500 BOBIN",
                "quantity": 2,
                "price": 800,
                "_id": "676e7b0116d9ae079231a578"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676e7b0116d9ae079231a57a"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 4,
                "price": 175,
                "_id": "676e7b5b16d9ae079231b03e"
            }
        ],
        "totalFirki": 6,
        "subTotal": 4550,
        "discount": 0,
        "advance": 1100,
        "paid": 0,
        "totalDue": 3450,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e7d777621c0be5b8f6c84",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e7d777621c0be5b8f6c82",
        "BillNo": 411,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "DEV",
        "address": "ST",
        "mobileNumber": 9054020421,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676e7d777621c0be5b8f6c85"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676e7d777621c0be5b8f6c86"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1050,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e818d5fd0e2824b642c44",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e818d5fd0e2824b642c42",
        "BillNo": 412,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "MIHIR",
        "address": "ST",
        "mobileNumber": 9725402884,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676e818d5fd0e2824b642c45"
            },
            {
                "productId": "65bde88769acedb394df2476",
                "productName": "12/250 BOBIN",
                "quantity": 1,
                "price": 400,
                "_id": "676e818d5fd0e2824b642c46"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "676e818d5fd0e2824b642c47"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1625,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1625,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e8420ad9680b7be49dd9a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e8420ad9680b7be49dd98",
        "BillNo": 413,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "JIGNESH",
        "address": "ST",
        "mobileNumber": 9429861553,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676e8420ad9680b7be49dd9b"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676e8420ad9680b7be49dd9c"
            }
        ],
        "totalFirki": 3,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e8df36bba7a7900719f8a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e8df36bba7a7900719f88",
        "BillNo": 414,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "DHRUV",
        "address": "ST",
        "mobileNumber": 9875286155,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676e8df36bba7a7900719f8b"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676e8df36bba7a7900719f8c"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 550,
        "paid": 0,
        "totalDue": 500,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676e9dcc376de82b7c3fcfa3",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676e9dcc376de82b7c3fcfa1",
        "BillNo": 415,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "BHAVESH",
        "address": "ST",
        "mobileNumber": 7859947422,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 6,
                "price": 350,
                "_id": "676e9dcc376de82b7c3fcfa4"
            }
        ],
        "totalFirki": 6,
        "subTotal": 2100,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 2100,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ea3f0d7c2e15024eeb2dc",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ea3f0d7c2e15024eeb2da",
        "BillNo": 416,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "PARAG",
        "address": "ST",
        "mobileNumber": 9825051841,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 3,
                "price": 650,
                "_id": "676ea3f0d7c2e15024eeb2dd"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1950,
        "discount": 0,
        "advance": 1950,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ea4f9d7c2e15024eebdb2",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ea4f9d7c2e15024eebdb0",
        "BillNo": 417,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "MAKWANA ARVIND",
        "address": "ST",
        "mobileNumber": 9909941256,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "676ea4f9d7c2e15024eebdb3"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1100,
        "discount": 0,
        "advance": 1100,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ea609d7c2e15024eec88b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ea609d7c2e15024eec889",
        "BillNo": 418,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "BHUPESH",
        "address": "ST",
        "mobileNumber": 7383894721,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2476",
                "productName": "12/250 BOBIN",
                "quantity": 1,
                "price": 400,
                "_id": "676ea609d7c2e15024eec88c"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676ea609d7c2e15024eec88d"
            }
        ],
        "totalFirki": 1,
        "subTotal": 575,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 75,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ea8694175e668ea8e49ed",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ea8694175e668ea8e49eb",
        "BillNo": 419,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "YASH",
        "address": "ST",
        "mobileNumber": 8849240482,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676ea8694175e668ea8e49ee"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "676ea8694175e668ea8e49ef"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676ea8694175e668ea8e49f0"
            }
        ],
        "totalFirki": 4,
        "subTotal": 955,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 955,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ead955a1581fea320bcef",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ead955a1581fea320bced",
        "BillNo": 420,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "KAMLESH",
        "address": "ST",
        "mobileNumber": 9558434533,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676ead955a1581fea320bcf0"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 2,
                "price": 80,
                "_id": "676ead955a1581fea320bcf1"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676ead955a1581fea320bcf2"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 2,
                "price": 650,
                "_id": "676ead955a1581fea320bcf3"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676ead955a1581fea320bcf4"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676ead955a1581fea320bcf5"
            }
        ],
        "totalFirki": 3,
        "subTotal": 2745,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 1745,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676eae4e5a1581fea320c7f3",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676eae4e5a1581fea320c7f1",
        "BillNo": 421,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "BHAVESH",
        "address": "ST",
        "mobileNumber": 8460144561,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676eae4e5a1581fea320c7f4"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 4,
                "price": 350,
                "_id": "676eae4e5a1581fea320c7f5"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 4,
                "price": 175,
                "_id": "676eae4e5a1581fea320c7f6"
            }
        ],
        "totalFirki": 4,
        "subTotal": 2160,
        "discount": 0,
        "advance": 2160,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676eaee55a1581fea320d2f6",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676eaee55a1581fea320d2f4",
        "BillNo": 422,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "PRAKASH",
        "address": "ST",
        "mobileNumber": 9825193873,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 3,
                "price": 350,
                "_id": "676eaee55a1581fea320d2f7"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "676eaee55a1581fea320d2f8"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1575,
        "discount": 0,
        "advance": 1575,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676eb1ae66a0a25f0c14b011",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676eb1ae66a0a25f0c14b00f",
        "BillNo": 423,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "RISHI",
        "address": "ST",
        "mobileNumber": 9638794550,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676eb1ae66a0a25f0c14b013"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 4,
                "price": 175,
                "_id": "676eb797b7a171a28209da07"
            }
        ],
        "totalFirki": 7,
        "subTotal": 1400,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1400,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676eb2ae66a0a25f0c14bb1b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67657083f4f121cc4c213ef3",
        "BillNo": 424,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "KALPESH",
        "address": "ST",
        "mobileNumber": 9687952341,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676eb2ae66a0a25f0c14bb1c"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 5,
                "price": 175,
                "_id": "676eb2ae66a0a25f0c14bb1d"
            }
        ],
        "totalFirki": 5,
        "subTotal": 935,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 935,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676eb565cdd65ab7b4177a50",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676eb565cdd65ab7b4177a4e",
        "BillNo": 425,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "KUSHAL",
        "address": "ST",
        "mobileNumber": 9327476000,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676eb565cdd65ab7b4177a51"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 2,
                "price": 650,
                "_id": "676eb565cdd65ab7b4177a52"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676eb565cdd65ab7b4177a53"
            }
        ],
        "totalFirki": 3,
        "subTotal": 2080,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 1580,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676eb640b5fb3cb4b960225b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676eb640b5fb3cb4b9602259",
        "BillNo": 426,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "KALPESH",
        "address": "ST",
        "mobileNumber": 9825908592,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676eb640b5fb3cb4b960225c"
            }
        ],
        "totalFirki": 1,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676eb7f5344e5d3975deca30",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a8ac18fc0b17ea3258fa6",
        "BillNo": 427,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "HOME",
        "address": "ST",
        "mobileNumber": 9428670817,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 1,
                "price": 350,
                "_id": "676eb7f5344e5d3975deca31"
            },
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "676eb7f5344e5d3975deca32"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1650,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1650,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ebc08744319a5d08d9b35",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ebc08744319a5d08d9b33",
        "BillNo": 428,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "PARTIK",
        "address": "ST",
        "mobileNumber": 9157889964,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676ebc08744319a5d08d9b36"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ec32c6dbec9173f20fe14",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ec32c6dbec9173f20fe12",
        "BillNo": 429,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "PRINSH",
        "address": "ST",
        "mobileNumber": 7990566704,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 5,
                "price": 175,
                "_id": "676ec32c6dbec9173f20fe15"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676ec32c6dbec9173f20fe16"
            }
        ],
        "totalFirki": 7,
        "subTotal": 1575,
        "discount": 0,
        "advance": 1575,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ec3f96dbec9173f21093f",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ec3f96dbec9173f21093d",
        "BillNo": 430,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "DARSHIL",
        "address": "ST",
        "mobileNumber": 7016125365,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 3,
                "price": 350,
                "_id": "676ec3f96dbec9173f210940"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "676ec3f96dbec9173f210941"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1575,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1575,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ec732483a86dba8943681",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6759b3c826ae91b63905f6eb",
        "BillNo": 431,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "JIGAR",
        "address": "ST",
        "mobileNumber": 9023488201,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 5,
                "price": 60,
                "_id": "676ec732483a86dba8943682"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 4,
                "price": 80,
                "_id": "676ec732483a86dba8943683"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 12,
                "price": 350,
                "_id": "676ec732483a86dba8943684"
            }
        ],
        "totalFirki": 16,
        "subTotal": 4820,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 4820,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ec851ecba5608127a0190",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ec851ecba5608127a018e",
        "BillNo": 432,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "HARSHIT",
        "address": "ST",
        "mobileNumber": 9825289803,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 4,
                "price": 80,
                "_id": "676ec851ecba5608127a0191"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676ec851ecba5608127a0192"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1020,
        "discount": 0,
        "advance": 1020,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676eca64ecba5608127a1809",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676eca64ecba5608127a1807",
        "BillNo": 433,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "GAVRAV",
        "address": "ST",
        "mobileNumber": 9033187800,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "676eca64ecba5608127a180a"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ecc8b5960e3878bb966b5",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a8ac18fc0b17ea3258fa6",
        "BillNo": 434,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "HOME",
        "address": "ST",
        "mobileNumber": 9428670817,
        "deliveryDate": "2024-12-27T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2472",
                "productName": "12/500 READY FIRKI",
                "quantity": 1,
                "price": 1300,
                "_id": "676ecc8b5960e3878bb966b6"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ecd8f5960e3878bb971f2",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676c0c80648a1ceca1813303",
        "BillNo": 435,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "JAY",
        "address": "ST",
        "mobileNumber": 7623838829,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676ecd8f5960e3878bb971f3"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676ecd8f5960e3878bb971f4"
            }
        ],
        "totalFirki": 1,
        "subTotal": 430,
        "discount": 0,
        "advance": 430,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ecf322b8917eca957186e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ecf322b8917eca957186c",
        "BillNo": 436,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "PRASHANT",
        "address": "st",
        "mobileNumber": 9898253021,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "676ecf322b8917eca957186f"
            }
        ],
        "totalFirki": 2,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ed2224d944a5165dba5b1",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ed2224d944a5165dba5af",
        "BillNo": 437,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "vraj",
        "address": "st",
        "mobileNumber": 9712994762,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "676ed2224d944a5165dba5b2"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 4,
                "price": 175,
                "_id": "676ed2224d944a5165dba5b3"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676ed2224d944a5165dba5b4"
            }
        ],
        "totalFirki": 7,
        "subTotal": 1520,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1520,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ed2e346dbd702280c8eab",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ed2e346dbd702280c8ea9",
        "BillNo": 438,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "BHADRESH",
        "address": "ST",
        "mobileNumber": 9979614013,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "676ed2e346dbd702280c8eac"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 6,
                "price": 350,
                "_id": "676ed2e346dbd702280c8ead"
            }
        ],
        "totalFirki": 12,
        "subTotal": 2220,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 2220,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ed3ef46dbd702280c9a04",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ed3ef46dbd702280c9a02",
        "BillNo": 439,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "SAHAJ",
        "address": "ST",
        "mobileNumber": 7043354080,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 2,
                "price": 80,
                "_id": "676ed3ef46dbd702280c9a05"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676ed3ef46dbd702280c9a06"
            }
        ],
        "totalFirki": 2,
        "subTotal": 860,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 860,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ed54546dbd702280cad50",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ed54546dbd702280cad4e",
        "BillNo": 440,
        "orderDate": "2024-12-27T00:00:00.000Z",
        "name": "mohit",
        "address": "st",
        "mobileNumber": 9979131026,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676ed54546dbd702280cad51"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676ed54546dbd702280cad52"
            }
        ],
        "totalFirki": 2,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f73c69a44897c9db2b9a2",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f73c59a44897c9db2b9a0",
        "BillNo": 441,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "MEET",
        "address": "ST",
        "mobileNumber": 7623837457,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676f73c69a44897c9db2b9a3"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676f73c69a44897c9db2b9a4"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f7d0b7cf32b347af03eed",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f7d0b7cf32b347af03eeb",
        "BillNo": 442,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "HARESH",
        "address": "ST",
        "mobileNumber": 9712894667,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676f7d0b7cf32b347af03eee"
            },
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676f7d0b7cf32b347af03eef"
            }
        ],
        "totalFirki": 2,
        "subTotal": 410,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 410,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f83a6e13b0a658481b692",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f83a6e13b0a658481b690",
        "BillNo": 443,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "BHAVIN",
        "address": "ST",
        "mobileNumber": 9727550777,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676f83a6e13b0a658481b693"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676f83a6e13b0a658481b694"
            }
        ],
        "totalFirki": 1,
        "subTotal": 430,
        "discount": 0,
        "advance": 430,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f8686b35bcbf0c9337cad",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f8686b35bcbf0c9337cab",
        "BillNo": 444,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "ABHAY",
        "address": "ST",
        "mobileNumber": 9909910350,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 4,
                "price": 350,
                "_id": "676f8686b35bcbf0c9337cae"
            }
        ],
        "totalFirki": 7,
        "subTotal": 1400,
        "discount": 0,
        "advance": 1400,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f8758b35bcbf0c9338824",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f8758b35bcbf0c9338822",
        "BillNo": 445,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "DIVYA",
        "address": "ST",
        "mobileNumber": 9016646700,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "676f8758b35bcbf0c9338825"
            }
        ],
        "totalFirki": 1,
        "subTotal": 650,
        "discount": 0,
        "advance": 650,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f8b22d029a9bfb9a504dc",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f8b22d029a9bfb9a504da",
        "BillNo": 446,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "HARDIK",
        "address": "ST",
        "mobileNumber": 9998236316,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 4,
                "price": 650,
                "_id": "676f8b22d029a9bfb9a504dd"
            }
        ],
        "totalFirki": 4,
        "subTotal": 2600,
        "discount": 0,
        "advance": 2600,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f8c21ecb9c2e2883a9857",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f8c21ecb9c2e2883a9855",
        "BillNo": 447,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "JATIN",
        "address": "ST",
        "mobileNumber": 9998949281,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "676f8c21ecb9c2e2883a9858"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676f8c21ecb9c2e2883a9859"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676f8c21ecb9c2e2883a985a"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676f8c21ecb9c2e2883a985b"
            }
        ],
        "totalFirki": 2,
        "subTotal": 745,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 745,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f8ca2ecb9c2e2883aa3ea",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f8ca2ecb9c2e2883aa3e8",
        "BillNo": 448,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "YESH",
        "address": "ST",
        "mobileNumber": 9712132532,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676f8ca2ecb9c2e2883aa3eb"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676f8ca2ecb9c2e2883aa3ec"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f8dc4ecb9c2e2883aaf7c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f8dc4ecb9c2e2883aaf7a",
        "BillNo": 449,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "CHETAN",
        "address": "ST",
        "mobileNumber": 9909409318,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676f8dc4ecb9c2e2883aaf7d"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676f8dc4ecb9c2e2883aaf7e"
            }
        ],
        "totalFirki": 2,
        "subTotal": 245,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 245,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f8f19961b69353b09ac08",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f8f19961b69353b09ac06",
        "BillNo": 450,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "MEET",
        "address": "ST",
        "mobileNumber": 9924301131,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676f8f19961b69353b09ac09"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676f8f19961b69353b09ac0a"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f8fbd961b69353b09b7a6",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f8fbd961b69353b09b7a4",
        "BillNo": 451,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "PRIYANK",
        "address": "ST",
        "mobileNumber": 7622876873,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676f8fbd961b69353b09b7a7"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f9069961b69353b09c345",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f9069961b69353b09c343",
        "BillNo": 452,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "NIMESHBHAI",
        "address": "ST",
        "mobileNumber": 9879861187,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "676f9069961b69353b09c346"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f932d33ba0a3909b49a6d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f932d33ba0a3909b49a6b",
        "BillNo": 453,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "BHARTIBEN",
        "address": "ST",
        "mobileNumber": 8511830737,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "676f932d33ba0a3909b49a6e"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676f932d33ba0a3909b49a6f"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1000,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f9af9e1432b94681c8ac9",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f9af9e1432b94681c8ac7",
        "BillNo": 454,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "RAJDEEP",
        "address": "ST",
        "mobileNumber": 9879666819,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676f9af9e1432b94681c8aca"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676f9af9e1432b94681c8acb"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676f9af9e1432b94681c8acc"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676f9af9e1432b94681c8acd"
            }
        ],
        "totalFirki": 2,
        "subTotal": 665,
        "discount": 0,
        "advance": 665,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f9c48e168db361ee8a055",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f9c48e168db361ee8a053",
        "BillNo": 455,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "BIPIN",
        "address": "ST",
        "mobileNumber": 7226041466,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "676f9c48e168db361ee8a056"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676f9c48e168db361ee8a057"
            }
        ],
        "totalFirki": 1,
        "subTotal": 190,
        "discount": 0,
        "advance": 190,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676f9d8ce168db361ee8ac11",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676f9d8be168db361ee8ac0f",
        "BillNo": 456,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "GIRISH",
        "address": "ST",
        "mobileNumber": 9574691555,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "676f9d8ce168db361ee8ac12"
            }
        ],
        "totalFirki": 1,
        "subTotal": 650,
        "discount": 0,
        "advance": 650,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fa1ee8d6bfad407e72fa5",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fa1ee8d6bfad407e72fa3",
        "BillNo": 457,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "LAKSH",
        "address": "ST",
        "mobileNumber": 9979461495,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2471",
                "productName": "12/250 READY FIRKI",
                "quantity": 3,
                "price": 750,
                "_id": "676fa1ee8d6bfad407e72fa6"
            }
        ],
        "totalFirki": 3,
        "subTotal": 2250,
        "discount": 0,
        "advance": 2250,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fa2c08d6bfad407e73b66",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fa2c08d6bfad407e73b64",
        "BillNo": 458,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "RAJENDRA",
        "address": "ST",
        "mobileNumber": 9725425253,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676fa2c08d6bfad407e73b67"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676fa2c08d6bfad407e73b68"
            }
        ],
        "totalFirki": 2,
        "subTotal": 430,
        "discount": 0,
        "advance": 430,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fa3578d6bfad407e7472e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fa1ee8d6bfad407e72fa3",
        "BillNo": 459,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "LAKSH",
        "address": "ST",
        "mobileNumber": 9979461495,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "676fa3578d6bfad407e7472f"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1100,
        "discount": 0,
        "advance": 1100,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fa661c3aa2cbf0dd62c74",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fa661c3aa2cbf0dd62c72",
        "BillNo": 460,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "RAJ",
        "address": "ST",
        "mobileNumber": 8866604877,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "676fa661c3aa2cbf0dd62c75"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676faa7fe6d344da7dd0130a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676faa7fe6d344da7dd01308",
        "BillNo": 461,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "YESH",
        "address": "ST",
        "mobileNumber": 9173036116,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676faa7fe6d344da7dd0130b"
            }
        ],
        "totalFirki": 1,
        "subTotal": 70,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 70,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fae33cdfbbd849d745cbc",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67680b30f4098c5402e0e496",
        "BillNo": 462,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "HIREN",
        "address": "ST",
        "mobileNumber": 6352690941,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "676fae33cdfbbd849d745cbd"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676fae33cdfbbd849d745cbe"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676fae33cdfbbd849d745cbf"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1170,
        "discount": 0,
        "advance": 1170,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fafcf730398536b55cc99",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ba723dbf4e6d79bf470d9",
        "BillNo": 463,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "DHRUV",
        "address": "ST",
        "mobileNumber": 9979334089,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "676fafcf730398536b55cc9a"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676fafcf730398536b55cc9b"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676fafcf730398536b55cc9c"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 2,
                "price": 650,
                "_id": "676fafcf730398536b55cc9d"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676fafcf730398536b55cc9e"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676fafcf730398536b55cc9f"
            }
        ],
        "totalFirki": 4,
        "subTotal": 3250,
        "discount": 0,
        "advance": 3250,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fb0a9730398536b55d88b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fb0a9730398536b55d889",
        "BillNo": 464,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "BHSVIN",
        "address": "ST",
        "mobileNumber": 9428390909,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676fb0a9730398536b55d88c"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fb8e678e8c259619be5cb",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fb8e678e8c259619be5c9",
        "BillNo": 465,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "ARYAN",
        "address": "ST",
        "mobileNumber": 8780061839,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676fb8e678e8c259619be5cc"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676fb8e678e8c259619be5cd"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fc1ff0421c8f357f348c5",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fc1ff0421c8f357f348c3",
        "BillNo": 466,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "SAJAN",
        "address": "ST",
        "mobileNumber": 9825879888,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 3,
                "price": 60,
                "_id": "676fc1ff0421c8f357f348c6"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 4,
                "price": 650,
                "_id": "676fc1ff0421c8f357f348c7"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 4,
                "price": 350,
                "_id": "676fc1ff0421c8f357f348c8"
            }
        ],
        "totalFirki": 8,
        "subTotal": 4180,
        "discount": 0,
        "advance": 2000,
        "paid": 0,
        "totalDue": 2180,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fc31a704ba3ffe8e295b2",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fc31a704ba3ffe8e295b0",
        "BillNo": 467,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "TEJASH",
        "address": "ST",
        "mobileNumber": 9714333833,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "676fc31a704ba3ffe8e295b3"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676fc31a704ba3ffe8e295b4"
            }
        ],
        "totalFirki": 1,
        "subTotal": 235,
        "discount": 0,
        "advance": 235,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fc3d9704ba3ffe8e2a1b0",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fc3d9704ba3ffe8e2a1ae",
        "BillNo": 468,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "KARTIKBHAI",
        "address": "ST",
        "mobileNumber": 8879265520,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 5,
                "price": 350,
                "_id": "676fc3d9704ba3ffe8e2a1b1"
            }
        ],
        "totalFirki": 5,
        "subTotal": 1750,
        "discount": 0,
        "advance": 1750,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fc469704ba3ffe8e2adaf",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fc469704ba3ffe8e2adad",
        "BillNo": 469,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "KUSH",
        "address": "ST",
        "mobileNumber": 8866166327,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "676fc469704ba3ffe8e2adb0"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fc4e1704ba3ffe8e2b9b2",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fc4e1704ba3ffe8e2b9b0",
        "BillNo": 470,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "SHIV",
        "address": "ST",
        "mobileNumber": 9925778440,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676fc4e1704ba3ffe8e2b9b3"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676fc4e1704ba3ffe8e2b9b4"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1050,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fc54a704ba3ffe8e2c5bc",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676c15de32e5db68a5712a77",
        "BillNo": 471,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "PREM",
        "address": "ST",
        "mobileNumber": 7041312750,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676fc54a704ba3ffe8e2c5bd"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 175,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fc5e9704ba3ffe8e2d1c7",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fc5e9704ba3ffe8e2d1c5",
        "BillNo": 472,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "AMISH",
        "address": "ST",
        "mobileNumber": 8347991420,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 3,
                "price": 350,
                "_id": "676fc5e9704ba3ffe8e2d1c8"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fc66e704ba3ffe8e2ddd4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6767db7e8796bc8d50e9be31",
        "BillNo": 473,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "RAVI",
        "address": "ST",
        "mobileNumber": 9328332290,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 2,
                "price": 350,
                "_id": "676fc66e704ba3ffe8e2ddd5"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 700,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fc783704ba3ffe8e2e9e5",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fc783704ba3ffe8e2e9e3",
        "BillNo": 474,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "HENISH",
        "address": "ST",
        "mobileNumber": 9033640795,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "676fc783704ba3ffe8e2e9e6"
            },
            {
                "productId": "65bde88769acedb394df2471",
                "productName": "12/250 READY FIRKI",
                "quantity": 1,
                "price": 750,
                "_id": "676fc783704ba3ffe8e2e9e7"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676fc783704ba3ffe8e2e9e8"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676fc783704ba3ffe8e2e9e9"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1920,
        "discount": 0,
        "advance": 1920,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fc8be704ba3ffe8e2f607",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fc783704ba3ffe8e2e9e3",
        "BillNo": 475,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "URVISH",
        "address": "ST",
        "mobileNumber": 9033640795,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "676fc8be704ba3ffe8e2f608"
            },
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "676fc8be704ba3ffe8e2f609"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676fc8be704ba3ffe8e2f60a"
            }
        ],
        "totalFirki": 1,
        "subTotal": 870,
        "discount": 0,
        "advance": 870,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fc985704ba3ffe8e3022e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fc985704ba3ffe8e3022c",
        "BillNo": 476,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "BHUTWAIA",
        "address": "ST",
        "mobileNumber": 7990988306,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 2,
                "price": 150,
                "_id": "676fc985704ba3ffe8e3022f"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 2,
                "price": 70,
                "_id": "676fc985704ba3ffe8e30230"
            }
        ],
        "totalFirki": 2,
        "subTotal": 440,
        "discount": 0,
        "advance": 400,
        "paid": 0,
        "totalDue": 40,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fcafc704ba3ffe8e31798",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fcafc704ba3ffe8e31796",
        "BillNo": 477,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "REX",
        "address": "ST",
        "mobileNumber": 9998502702,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676fcafc704ba3ffe8e31799"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fcbd8704ba3ffe8e323ca",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fcbd8704ba3ffe8e323c8",
        "BillNo": 478,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "JAY",
        "address": "ST",
        "mobileNumber": 9313219146,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 4,
                "price": 60,
                "_id": "676fcbd8704ba3ffe8e323cb"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 5,
                "price": 350,
                "_id": "676fcbd8704ba3ffe8e323cc"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 5,
                "price": 175,
                "_id": "676fcbd8704ba3ffe8e323cd"
            }
        ],
        "totalFirki": 5,
        "subTotal": 2865,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 2365,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fcc65704ba3ffe8e3300a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fcc65704ba3ffe8e33008",
        "BillNo": 479,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "PARTIK",
        "address": "ST",
        "mobileNumber": 8980598587,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "676fcc65704ba3ffe8e3300b"
            }
        ],
        "totalFirki": 3,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fd9e87ab9262aa8b64557",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fd9e87ab9262aa8b64555",
        "BillNo": 480,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "SWAPNIL",
        "address": "ST",
        "mobileNumber": 9099201779,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676fd9e87ab9262aa8b64558"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fdb8052586f0de0c6fc2f",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fdb8052586f0de0c6fc2d",
        "BillNo": 481,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "RUCHIT",
        "address": "ST",
        "mobileNumber": 7359953837,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676fdb8052586f0de0c6fc30"
            }
        ],
        "totalFirki": 4,
        "subTotal": 700,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fde7f689b4a8b781afe3d",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fde7f689b4a8b781afe3b",
        "BillNo": 482,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "RAKESH",
        "address": "ST",
        "mobileNumber": 9727663888,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676fde7f689b4a8b781afe3e"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676fde7f689b4a8b781afe3f"
            }
        ],
        "totalFirki": 1,
        "subTotal": 430,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 430,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fdf72689b4a8b781b0a8c",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fdf72689b4a8b781b0a8a",
        "BillNo": 483,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "ANIKET",
        "address": "ST",
        "mobileNumber": 9714909484,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "676fdf72689b4a8b781b0a8d"
            }
        ],
        "totalFirki": 3,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fe06b689b4a8b781b16dc",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fe06a689b4a8b781b16da",
        "BillNo": 484,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "DAKSH",
        "address": "ST",
        "mobileNumber": 6354775113,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676fe06b689b4a8b781b16dd"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 175,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fe0bf689b4a8b781b2330",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fe0bf689b4a8b781b232e",
        "BillNo": 485,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "VIJAY",
        "address": "ST",
        "mobileNumber": 9624979374,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 1,
                "price": 650,
                "_id": "676fe0bf689b4a8b781b2331"
            }
        ],
        "totalFirki": 1,
        "subTotal": 650,
        "discount": 0,
        "advance": 650,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fe175689b4a8b781b2f88",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fe175689b4a8b781b2f86",
        "BillNo": 486,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "VIGNESH",
        "address": "ST",
        "mobileNumber": 9979526854,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2477",
                "productName": "12/500 BOBIN",
                "quantity": 1,
                "price": 800,
                "_id": "676fe175689b4a8b781b2f89"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676fe175689b4a8b781b2f8a"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1150,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1150,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fe2ab689b4a8b781b3be9",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fe2ab689b4a8b781b3be7",
        "BillNo": 487,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "ISHAN",
        "address": "ST",
        "mobileNumber": 7096446556,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 4,
                "price": 650,
                "_id": "676fe2ab689b4a8b781b3bea"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 4,
                "price": 350,
                "_id": "676fe2ab689b4a8b781b3beb"
            }
        ],
        "totalFirki": 3,
        "subTotal": 4000,
        "discount": 0,
        "advance": 4000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fe49d070a4f29a93cc30e",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fe49d070a4f29a93cc30c",
        "BillNo": 488,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "PRINCE",
        "address": "ST",
        "mobileNumber": 9586127731,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676fe49d070a4f29a93cc30f"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676fe49d070a4f29a93cc310"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676fe49d070a4f29a93cc311"
            }
        ],
        "totalFirki": 3,
        "subTotal": 500,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fe558ae5516244db79d90",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fe558ae5516244db79d8e",
        "BillNo": 489,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "ARYAN",
        "address": "ST",
        "mobileNumber": 9725053579,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676fe558ae5516244db79d91"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676fe558ae5516244db79d92"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fe5a0ae5516244db7aa03",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fe558ae5516244db79d8e",
        "BillNo": 490,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "DEVANSH",
        "address": "ST",
        "mobileNumber": 9725053579,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "676fe5a0ae5516244db7aa04"
            }
        ],
        "totalFirki": 3,
        "subTotal": 700,
        "discount": 0,
        "advance": 700,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fe65cae5516244db7b677",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fe65cae5516244db7b675",
        "BillNo": 491,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "ARPAN",
        "address": "ST",
        "mobileNumber": 8849848488,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 6,
                "price": 1100,
                "_id": "676fe65cae5516244db7b678"
            }
        ],
        "totalFirki": 6,
        "subTotal": 6600,
        "discount": 0,
        "advance": 6600,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fe6b9ae5516244db7c2ef",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fe6b9ae5516244db7c2ed",
        "BillNo": 492,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "VIRAT",
        "address": "ST",
        "mobileNumber": 7405589514,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "676fe6b9ae5516244db7c2f0"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1100,
        "discount": 0,
        "advance": 1100,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fe726ae5516244db7cf6b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fe726ae5516244db7cf69",
        "BillNo": 493,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "RIDDHESH",
        "address": "ST",
        "mobileNumber": 9426043013,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676fe726ae5516244db7cf6c"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676fea0e1add26e07040ffa9",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676fea0e1add26e07040ffa7",
        "BillNo": 494,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "PIYUSH",
        "address": "ST",
        "mobileNumber": 9879470227,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676fea0e1add26e07040ffaa"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676febe921cf0ecdec617f94",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676febe921cf0ecdec617f92",
        "BillNo": 495,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "AMIT",
        "address": "ST",
        "mobileNumber": 9725048411,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676febe921cf0ecdec617f95"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ff230c79f1e709913a1b4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ff230c79f1e709913a1b2",
        "BillNo": 496,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "VIREN",
        "address": "ST",
        "mobileNumber": 6353897548,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676ff230c79f1e709913a1b5"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676ff230c79f1e709913a1b6"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ff305c79f1e709913ae46",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ff305c79f1e709913ae44",
        "BillNo": 497,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "VISHESH",
        "address": "ST",
        "mobileNumber": 9979961116,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "676ff305c79f1e709913ae47"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676ff305c79f1e709913ae48"
            }
        ],
        "totalFirki": 1,
        "subTotal": 255,
        "discount": 0,
        "advance": 255,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ff340c79f1e709913bada",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6768018e26af2d3206328261",
        "BillNo": 498,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "HARSHIT",
        "address": "ST",
        "mobileNumber": 8320822501,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676ff340c79f1e709913badb"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ff40fc79f1e709913c77b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ff40fc79f1e709913c779",
        "BillNo": 499,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "TANAY",
        "address": "ST",
        "mobileNumber": 7016605718,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "676ff40fc79f1e709913c77c"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "676ff40fc79f1e709913c77d"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "676ff40fc79f1e709913c77e"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676ff40fc79f1e709913c77f"
            }
        ],
        "totalFirki": 2,
        "subTotal": 745,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 245,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ff9636aa3bd53db32f2d5",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ff9636aa3bd53db32f2d3",
        "BillNo": 500,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "KUSHAL",
        "address": "ST",
        "mobileNumber": 8141033341,
        "deliveryDate": "2024-12-30T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676ff9636aa3bd53db32f2d6"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ff9b5bc1273ed577ae437",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ff9b5bc1273ed577ae435",
        "BillNo": 501,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "JEMISH",
        "address": "ST",
        "mobileNumber": 8866775890,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "676ff9b5bc1273ed577ae438"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ffcc9559f4a2f06fd6850",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ffcc9559f4a2f06fd684e",
        "BillNo": 502,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "DARSHAK",
        "address": "ST",
        "mobileNumber": 9726678777,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 2,
                "price": 350,
                "_id": "676ffcc9559f4a2f06fd6851"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "676ffcc9559f4a2f06fd6852"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1050,
        "discount": 0,
        "advance": 1050,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "676ffeb5788b2cd1d0d95682",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676ffeb5788b2cd1d0d95680",
        "BillNo": 503,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "YESH",
        "address": "ST",
        "mobileNumber": 8849494351,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "676ffeb5788b2cd1d0d95683"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770034403a11f5e8e974c73",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676c05571fc99e09046da9bf",
        "BillNo": 504,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "PRKASHBHAI",
        "address": "ST",
        "mobileNumber": 8320049439,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "6770034403a11f5e8e974c74"
            }
        ],
        "totalFirki": 2,
        "subTotal": 700,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 700,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "677004c7a150642819a61c0b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67584d81b87edb1ad15a44e0",
        "BillNo": 505,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "RAHUL",
        "address": "ST",
        "mobileNumber": 9879447001,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "677004c7a150642819a61c0c"
            },
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "677004c7a150642819a61c0d"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "677004c7a150642819a61c0e"
            }
        ],
        "totalFirki": 4,
        "subTotal": 1470,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1470,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67700596a150642819a628cb",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67700596a150642819a628c9",
        "BillNo": 506,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "RISHI",
        "address": "ST",
        "mobileNumber": 8866221437,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "67700596a150642819a628cc"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67700596a150642819a628cd"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67700a7d226e6767e19c6c03",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67700a7d226e6767e19c6c01",
        "BillNo": 507,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "SHAYLESH",
        "address": "ST",
        "mobileNumber": 9558449434,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 3,
                "price": 350,
                "_id": "67700a7d226e6767e19c6c04"
            }
        ],
        "totalFirki": 4,
        "subTotal": 1050,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1050,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "677012d3742b5a5dcc740191",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "677012d3742b5a5dcc74018f",
        "BillNo": 508,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "HARSHIL",
        "address": "ST",
        "mobileNumber": 7383644121,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "677012d3742b5a5dcc740192"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "677012d3742b5a5dcc740193"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "677015843d61cc08eb748eae",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "677015843d61cc08eb748eac",
        "BillNo": 509,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "ISHWAR",
        "address": "ST",
        "mobileNumber": 9898107993,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 3,
                "price": 350,
                "_id": "677015843d61cc08eb748eaf"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "677015843d61cc08eb748eb0"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1575,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 1575,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "677016773d61cc08eb749b81",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "677016773d61cc08eb749b7f",
        "BillNo": 510,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "PRAKSH BHAI",
        "address": "ST",
        "mobileNumber": 9898294775,
        "deliveryDate": "2024-12-28T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "677016773d61cc08eb749b82"
            }
        ],
        "totalFirki": 2,
        "subTotal": 1300,
        "discount": 0,
        "advance": 1300,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "677017da955b4e9ebc01b74a",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "677017da955b4e9ebc01b748",
        "BillNo": 511,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "DHAVAL BHAI",
        "address": "ST",
        "mobileNumber": 9586342609,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "677017da955b4e9ebc01b74b"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "677017da955b4e9ebc01b74c"
            }
        ],
        "totalFirki": 4,
        "subTotal": 875,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 875,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "677018cc8d0e3642dfb186e7",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "677018cc8d0e3642dfb186e5",
        "BillNo": 512,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "RAKESH BHAI",
        "address": "ST",
        "mobileNumber": 9979227955,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "677018cc8d0e3642dfb186e8"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67701ab50d4031902a6659d4",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67701ab50d4031902a6659d2",
        "BillNo": 513,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "SUNIL BHAI",
        "address": "ST",
        "mobileNumber": 8866835677,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "67701ab50d4031902a6659d5"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67701ab50d4031902a6659d6"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67701c4aea150cab03146261",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67701c4aea150cab0314625f",
        "BillNo": 514,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "NIRAV BHAI",
        "address": "ST",
        "mobileNumber": 8000085177,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 1,
                "price": 60,
                "_id": "67701c4aea150cab03146262"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "67701c4aea150cab03146263"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "67701c4aea150cab03146264"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67701c4aea150cab03146265"
            }
        ],
        "totalFirki": 2,
        "subTotal": 665,
        "discount": 0,
        "advance": 665,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67701ce5ea150cab03146f59",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67701ce5ea150cab03146f57",
        "BillNo": 515,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "DHRUVIN",
        "address": "ST",
        "mobileNumber": 9978827073,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "67701ce5ea150cab03146f5a"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 350,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "67701e04ea150cab03147c4b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "67701e04ea150cab03147c49",
        "BillNo": 516,
        "orderDate": "2024-12-28T00:00:00.000Z",
        "name": "OM",
        "address": "ST",
        "mobileNumber": 7990539543,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 6,
                "price": 350,
                "_id": "67701e04ea150cab03147c4c"
            }
        ],
        "totalFirki": 8,
        "subTotal": 2100,
        "discount": 0,
        "advance": 1150,
        "paid": 0,
        "totalDue": 950,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770d3f0b4c9f66c6d1938b9",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770d3f0b4c9f66c6d1938b7",
        "BillNo": 517,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "tirth",
        "address": "st",
        "mobileNumber": 9712551505,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "6770d3f0b4c9f66c6d1938ba"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6770d3f0b4c9f66c6d1938bb"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "6770d3f0b4c9f66c6d1938bc"
            }
        ],
        "totalFirki": 1,
        "subTotal": 605,
        "discount": 5,
        "advance": 300,
        "paid": 0,
        "totalDue": 300,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770d4c1b4c9f66c6d1945bd",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770d4c1b4c9f66c6d1945bb",
        "BillNo": 518,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "DILIP",
        "address": "ST",
        "mobileNumber": 9925241414,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "6770d4c1b4c9f66c6d1945be"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6770d4c1b4c9f66c6d1945bf"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770d7398b74ab63f087f678",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770d7398b74ab63f087f676",
        "BillNo": 519,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "CHIRAGH",
        "address": "ST",
        "mobileNumber": 9624440444,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 2,
                "price": 650,
                "_id": "6770d7398b74ab63f087f679"
            },
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 2,
                "price": 1100,
                "_id": "6770d7398b74ab63f087f67a"
            }
        ],
        "totalFirki": 4,
        "subTotal": 3500,
        "discount": 0,
        "advance": 3500,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770dab205f4f50c1e08637b",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770dab205f4f50c1e086379",
        "BillNo": 520,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "DHAVAL",
        "address": "ST",
        "mobileNumber": 8160518629,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6770dab205f4f50c1e08637c"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 2,
                "price": 350,
                "_id": "6770dab205f4f50c1e08637d"
            },
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "6770dab205f4f50c1e08637e"
            }
        ],
        "totalFirki": 4,
        "subTotal": 955,
        "discount": 0,
        "advance": 955,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770dfb5dc320ae319825743",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770dfb5dc320ae319825741",
        "BillNo": 521,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "ANIL",
        "address": "ST",
        "mobileNumber": 9824303305,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2473",
                "productName": "9/900 BOBIN",
                "quantity": 1,
                "price": 150,
                "_id": "6770dfb5dc320ae319825744"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "6770dfb5dc320ae319825745"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6770dfb5dc320ae319825746"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 1,
                "price": 70,
                "_id": "6770dfb5dc320ae319825747"
            }
        ],
        "totalFirki": 2,
        "subTotal": 745,
        "discount": 0,
        "advance": 745,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770e0b0dc320ae319826468",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770e0b0dc320ae319826466",
        "BillNo": 522,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "DISHIT",
        "address": "ST",
        "mobileNumber": 8866508832,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6770e0b0dc320ae319826469"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6770e0b0dc320ae31982646a"
            }
        ],
        "totalFirki": 2,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770e28a6e160139623ca659",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770e28a6e160139623ca657",
        "BillNo": 523,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "DHRUVIL",
        "address": "ST",
        "mobileNumber": 9726331299,
        "deliveryDate": "2024-12-29T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "6770e28a6e160139623ca65a"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1100,
        "discount": 0,
        "advance": 1100,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770e328926e5cb3bf4d84d1",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770e328926e5cb3bf4d84cf",
        "BillNo": 524,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "NIKUNJ",
        "address": "ST",
        "mobileNumber": 6354751153,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6770e328926e5cb3bf4d84d2"
            }
        ],
        "totalFirki": 2,
        "subTotal": 350,
        "discount": 0,
        "advance": 350,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770e3a7926e5cb3bf4d91f9",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "675fb7f1ea18db0bc6d5358f",
        "BillNo": 525,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "pravin",
        "address": "st",
        "mobileNumber": 9898928228,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6770e3a7926e5cb3bf4d91fa"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770e42e926e5cb3bf4d9f25",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770e42e926e5cb3bf4d9f23",
        "BillNo": 526,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "MEHUL",
        "address": "ST",
        "mobileNumber": 9712943530,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246f",
                "productName": "9/500 READY FIRKI",
                "quantity": 1,
                "price": 1100,
                "_id": "6770e42e926e5cb3bf4d9f26"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1100,
        "discount": 0,
        "advance": 1100,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770e544926e5cb3bf4dac53",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "676a9344d99d78c45fe0a7ac",
        "BillNo": 527,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "VANSH",
        "address": "ST",
        "mobileNumber": 8200022027,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6770e544926e5cb3bf4dac54"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6770e544926e5cb3bf4dac55"
            }
        ],
        "totalFirki": 2,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770e5c6fb29a1224ffb02ea",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770e5c6fb29a1224ffb02e8",
        "BillNo": 528,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "VED",
        "address": "ST",
        "mobileNumber": 6355658583,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6770e5c6fb29a1224ffb02eb"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770e68bfb29a1224ffb1022",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770e68bfb29a1224ffb1020",
        "BillNo": 529,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "KRUSHIK",
        "address": "ST",
        "mobileNumber": 9099110513,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6770e68bfb29a1224ffb1023"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6770e68bfb29a1224ffb1024"
            }
        ],
        "totalFirki": 3,
        "subTotal": 525,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 525,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770e798fb29a1224ffb30ab",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770e798fb29a1224ffb30a9",
        "BillNo": 530,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "MONTU",
        "address": "ST",
        "mobileNumber": 8140406675,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "6770e798fb29a1224ffb30ac"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6770e798fb29a1224ffb30ad"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 525,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770e84f46904f9f669e9210",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770e84f46904f9f669e920e",
        "BillNo": 531,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "MILAN",
        "address": "ST",
        "mobileNumber": 7621076775,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2469",
                "productName": "ONLY FIRKI 5000",
                "quantity": 1,
                "price": 80,
                "_id": "6770e84f46904f9f669e9211"
            },
            {
                "productId": "65bde88769acedb394df2477",
                "productName": "12/500 BOBIN",
                "quantity": 1,
                "price": 800,
                "_id": "6770e84f46904f9f669e9212"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6770e84f46904f9f669e9213"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1230,
        "discount": 0,
        "advance": 1230,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770e9ff46904f9f669ea412",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770e9ff46904f9f669ea410",
        "BillNo": 532,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "JAIMISH",
        "address": "ST",
        "mobileNumber": 9662512141,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "6770e9ff46904f9f669ea413"
            },
            {
                "productId": "65bde88769acedb394df2478",
                "productName": "LABOUR 900 MTR RIL",
                "quantity": 5,
                "price": 70,
                "_id": "6770e9ff46904f9f669ea414"
            }
        ],
        "totalFirki": 5,
        "subTotal": 470,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 470,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770eb8fcd296e8a82205239",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770eb8fcd296e8a82205237",
        "BillNo": 533,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "AKSHAY",
        "address": "ST",
        "mobileNumber": 8141379191,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6770eb8fcd296e8a8220523a"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 175,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770ee633eea4b81687673b0",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770ee633eea4b81687673ae",
        "BillNo": 534,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "DHARMESH",
        "address": "ST",
        "mobileNumber": 9737325213,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6770ee633eea4b81687673b1"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 175,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770eef55ac071b61e8e5197",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770eef55ac071b61e8e5195",
        "BillNo": 535,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "PRADEEP",
        "address": "ST",
        "mobileNumber": 9537022313,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df246e",
                "productName": "9/250 READY FIRKI",
                "quantity": 5,
                "price": 650,
                "_id": "6770eef55ac071b61e8e5198"
            },
            {
                "productId": "65bde88769acedb394df246d",
                "productName": "9/900 READY FIRKI",
                "quantity": 1,
                "price": 350,
                "_id": "6770eef55ac071b61e8e5199"
            }
        ],
        "totalFirki": 6,
        "subTotal": 3600,
        "discount": 0,
        "advance": 3600,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770ef905ac071b61e8e5efb",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770ef905ac071b61e8e5ef9",
        "BillNo": 536,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "SAURABH",
        "address": "ST",
        "mobileNumber": 9313183143,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 1,
                "price": 350,
                "_id": "6770ef905ac071b61e8e5efc"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6770ef905ac071b61e8e5efd"
            }
        ],
        "totalFirki": 1,
        "subTotal": 525,
        "discount": 0,
        "advance": 250,
        "paid": 0,
        "totalDue": 275,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770f0695ac071b61e8e6c65",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770f0695ac071b61e8e6c63",
        "BillNo": 537,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "JITENDRA",
        "address": "ST",
        "mobileNumber": 7016633526,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 3,
                "price": 60,
                "_id": "6770f0695ac071b61e8e6c66"
            },
            {
                "productId": "65bde88769acedb394df2474",
                "productName": "9/250 BOBIN",
                "quantity": 3,
                "price": 350,
                "_id": "6770f0695ac071b61e8e6c67"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 3,
                "price": 175,
                "_id": "6770f0695ac071b61e8e6c68"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1755,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 755,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770f0c05ac071b61e8e79da",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770f0c05ac071b61e8e79d8",
        "BillNo": 538,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "UTSAV",
        "address": "ST",
        "mobileNumber": 8799468660,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "6770f0c05ac071b61e8e79db"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6770f0c05ac071b61e8e79dc"
            }
        ],
        "totalFirki": 1,
        "subTotal": 1000,
        "discount": 0,
        "advance": 1000,
        "paid": 0,
        "totalDue": 0,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770f1185ac071b61e8e8752",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770f1185ac071b61e8e8750",
        "BillNo": 539,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "MEET",
        "address": "ST",
        "mobileNumber": 7359356578,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 1,
                "price": 175,
                "_id": "6770f1185ac071b61e8e8753"
            }
        ],
        "totalFirki": 1,
        "subTotal": 175,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 175,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770f1915ac071b61e8e94cb",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770f1915ac071b61e8e94c9",
        "BillNo": 540,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "MEET",
        "address": "ST",
        "mobileNumber": 9099391426,
        "deliveryDate": "2025-01-01T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2475",
                "productName": "9/500 BOBIN",
                "quantity": 1,
                "price": 650,
                "_id": "6770f1915ac071b61e8e94cc"
            },
            {
                "productId": "65bde88769acedb394df247a",
                "productName": "LABOUR 500 GM RIL",
                "quantity": 1,
                "price": 350,
                "_id": "6770f1915ac071b61e8e94cd"
            }
        ],
        "totalFirki": 3,
        "subTotal": 1000,
        "discount": 0,
        "advance": 500,
        "paid": 0,
        "totalDue": 500,
        "notes": "",
        "__v": 0
    },
    {
        "_id": "6770f41aa4d141e7e0a1caa0",
        "collectionId": "65bde88669acedb394df2464",
        "clientId": "6770f41aa4d141e7e0a1ca9e",
        "BillNo": 541,
        "orderDate": "2024-12-29T00:00:00.000Z",
        "name": "GAUTAM",
        "address": "ST",
        "mobileNumber": 8141617244,
        "deliveryDate": "2024-12-31T00:00:00.000Z",
        "products": [
            {
                "productId": "65bde88769acedb394df2468",
                "productName": "ONLY FIRKI 2500",
                "quantity": 2,
                "price": 60,
                "_id": "6770f41aa4d141e7e0a1caa1"
            },
            {
                "productId": "65bde88769acedb394df2479",
                "productName": "LABOUR 250 GM RIL",
                "quantity": 2,
                "price": 175,
                "_id": "6770f41aa4d141e7e0a1caa2"
            }
        ],
        "totalFirki": 2,
        "subTotal": 470,
        "discount": 0,
        "advance": 0,
        "paid": 0,
        "totalDue": 470,
        "notes": "",
        "__v": 0
    }
];