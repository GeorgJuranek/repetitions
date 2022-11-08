
    export const beine = [
    { word: "gehen", present: "gehst", interaktion: "zu", interaktionFall: "dativ"},
    { word: "sitzen", present: "sitzst", interaktion: "auf", interaktionFall:"dativ"},
    { word: "liegen", present: "liegst", interaktion: "auf", interaktionFall:"dativ"},
    { word: "treten", present: "trittst", interaktion: "gegen", interaktionFall:"akkusativ"}
    ];

    export const hand = [
    { word: "nehmen", present: "nimmst", interaktion: "", interaktionFall:"akkusativ"},
    { word: "ablegen", present: "lässt", interaktion: "von", interaktionFall:"dativ"},
    { word: "drehen", present: "drehst", interaktion: "an", interaktionFall:"dativ"},
    { word: "drücken", present: "drückst", interaktion: "auf", interaktionFall:"akkusativ"}
    ];  
  
    export const mund = [
    { word: "küssen", present: "küsst", interaktion: "", interaktionFall:"akkusativ"},
    { word: "kauen", present: "kaust", interaktion: "auf", interaktionFall:"dativ"},
    { word: "schlucken", present: "schluckst", interaktion: "von", interaktionFall:"dativ"},
    { word: "atmen", present: "hauchst", interaktion: "auf", interaktionFall:"akkusativ"}
    ];  
    
    export const nase = [
    { word: "atmen", present: "hauchst", interaktion: "auf", interaktionFall:"akkusativ"},
    { word: "riechen", present: "riechst", interaktion: "an", interaktionFall:"dativ"},
    { word: "ziehen", present: "ziehst", interaktion: "von", interaktionFall:"dativ"},
    ];

    // BODYPARTS
    export const bodyParts = [
        {word: "Beine",value:"beine",functions:beine}, 
        {word: "Hände",value:"hand",functions:hand},
        {word: "Mund",value:"mund",functions:mund},
        {word: "Nase",value:"nase",functions:nase}
    ];