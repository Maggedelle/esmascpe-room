export let programs = [
  {
    x: 70,
    y: 70,
    label: "Papirkurv",
    image: "/papirkurv.png",
    type: "folder",
    items: [
      {
        name: "Ansøgning_thomas.txt",
        icon: "/txt.png",
        type: "txt",
        text: "Må jeg være en del af ESMA?",
      },
    ],
    hasPass: false,
    desktop: 0,
  },
  {
    x: 20,
    y: 20,
    label: "hemmeligheder",
    type: "folder",
    items: [
      {
        name: "VIGTTG!.txt",
        icon: "/txt.png",
        type: "txt",
        text: "Dagsorden for imorgen:\n1. Kedelige møder\n2. Kedelige møder med design teamet\n3. Endnu kedelige møder med marketing\n\nNote: Bed ansatte om ikke at forstyre Magnus når han spiller Among us, og hører vinyl",
      },
      {
        name: "sus",
        icon: "amongus.png",
        type: "among-us",
      },
    ],
    hasPass: true,
    passHasBeenCracked: false,
    pass: ["konge", "kongen", "konger", "king", "kongerne", "kong", "kings"],
    image: "/folder-password.png",
    desktop: 0,
    task: 3,
  },
  {
    x: 20,
    y: 40,
    label: "Memes",
    image: "/folder.png",
    type: "folder",
    items: [
      {
        name: "haha:D.jpg",
        icon: "/image.png",
        type: "image",
        src: "/Meme1.png",
      },
    ],
    hasPass: false,
    desktop: 1,
  },
  {
    x: 40,
    y: 60,
    label: "beerpong plan",
    image: "/folder.png",
    type: "folder",
    items: [
      {
        name: "planer.txt",
        icon: "/txt.png",
        type: "txt",
        text: "1. Sørg for dårlige modstandere. \n2. Drik tilstrækkelige mængder af alkohol. \n3. Ram kopperne. \n Stil kopperne i følgene rækkefølge: rød rød blå blå rød blå",
      },
    ],
    hasPass: false,
    desktop: 1,
  },
  {
    x: 40,
    y: 10,
    label: "kontrakt",
    image: "/folder.png",
    type: "folder",
    items: [
      {
        name: "kontrakt.esma",
        icon: "/ESMAfaneicon1.png",
        type: "contract",
      },
      {
        name: "encrypt.jpg",
        icon: "/image.png",
        type: "image",
        src: "/contracthint.png",
      },
    ],
    hasPass: true,
    desktop: 1,
    pass: ["110010"],
    task: 5,
  },
  {
    x: 80,
    y: 80,
    label: "koder",
    image: "/folder.png",
    type: "folder",
    items: [
      {
        name: "til bestyrelsen.mp3",
        icon: "/mp3.png",
        type: "audio",
        src: "/bestyrelsen.mp3",
      },
      {
        name: "privat",
        icon: "/folder-password.png",
        type: "folder",
        items: [
          {
            name: "til esbjerg.txt",
            icon: "/txt.png",
            type: "txt",
            text: "...Fordi Esbjerg altid glemmer vores koder... \nKode til hemmeligheder: H7",
          },
        ],
        hasPass: true,
        pass: ["esmato"],
        task: 2,
      },
    ],
    hasPass: false,
    desktop: 0,
  },
];