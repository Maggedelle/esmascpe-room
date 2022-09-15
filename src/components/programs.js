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
        text: "en vigtig tekst.",
      },
    ],
    hasPass: true,
    passHasBeenCracked: false,
    pass: ["konge", "kongen", "konger", "king", "kongerne", "kong", "kings"],
    image: "/folder-password.png",
  },
  {
    x: 34,
    y: 56,
    label: "hemmeligheder 2",
    type: "folder",
    items: [
      {
        name: "VIGTTG!.txt",
        icon: "/txt.png",
        type: "txt",
        text: "en vigtig tekst.",
      },
    ],
    hasPass: true,
    passHasBeenCracked: false,
    pass: ["test"],
    image: "/folder-password.png",
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
        text: "1. Sørg for dårlige modstandere. \n2. Drik tilstrækkelige mængder af alkohol. \n3. Ram kopperne.",
      },
    ],
    hasPass: false,
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
        src: "/papvin.mp3",
      },
      {
        name: "test",
        icon: "/folder.png",
        type: "folder",
        items: [
          {
            name: "til esbjerg.txt",
            icon: "/txt.png",
            type: "txt",
            text: "...Fordi Esbjerg altid glemmer vores koder... \nKode til hemmeligheder: H7",
          },
        ],
        hasPass: false,
      },
    ],
    hasPass: false,
  },
  {
    x: 2,
    y: 90,
    label: "among us",
    type: "among-us",
    items: [
      {
        name: "VIGTTG!.txt",
        icon: "/txt.png",
        type: "txt",
        text: "en vigtig tekst.",
      },
    ],
    hasPass: true,
    passHasBeenCracked: false,
    pass: ["test"],
    image: "/amongus.png",
  },
];
