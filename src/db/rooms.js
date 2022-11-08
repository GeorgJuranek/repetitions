//FURNITURE 
export const roomBadezimmer = [
    {name:"Spiegel", nominativ:"der", genitiv:"des", dativ:"dem", akkusativ:"den", unbestimmterArtikel:"ein"}, 
    {name:"Dusche", nominativ:"die", genitiv:"der", dativ:"der", akkusativ:"die", unbestimmterArtikel:"eine"}, 
    {name:"Toilette", nominativ:"die", genitiv:"der", dativ:"der", akkusativ:"die", unbestimmterArtikel:"eine"}
];

export const roomEsszimmer = [
    {name:"Kühlschrank", nominativ:"der", genitiv:"des", dativ:"dem", akkusativ:"den", unbestimmterArtikel:"ein"}, 
    {name:"Spüle", nominativ:"die", genitiv:"der", dativ:"der", akkusativ:"die", unbestimmterArtikel:"eine"}, 
    {name:"Tisch mit Aschenbecher", nominativ:"der", genitiv:"des", dativ:"dem", akkusativ:"den", unbestimmterArtikel:"ein"}
];

export const roomSchlafzimmer = [
    {name:"Spiegel", nominativ:"der", genitiv:"des", dativ:"dem", akkusativ:"den", unbestimmterArtikel:"ein"}, 
    {name:"Bett", nominativ:"das", genitiv:"des", dativ:"dem", akkusativ:"das", unbestimmterArtikel:"ein"}, 
    {name:"Kommode", nominativ:"die", genitiv:"der", dativ:"der", akkusativ:"die", unbestimmterArtikel:"eine"}
];

//ROOMS

export const rooms = [
    {name: "Badezimmer", nominativ:"das", genitiv:"dem", dativ:"dem", akkusativ:"das", unbestimmterArtikel:"ein", content: roomBadezimmer},
    {name: "Esszimmer", nominativ:"das", genitiv:"dem", dativ:"dem", akkusativ:"das", unbestimmterArtikel:"ein", content: roomEsszimmer},
    {name: "Schlafzimmer", nominativ:"das", genitiv:"dem", dativ:"dem", akkusativ:"das", unbestimmterArtikel:"ein", content: roomSchlafzimmer},
];

export const doorHandles = [
    {name:"Türklinke(1)", nominativ:"die", genitiv:"der", dativ:"der",akkusativ:"die", unbestimmterArtikel:"eine", keyWord:"drücken", content: roomBadezimmer},
    {name:"Türklinke(2)", nominativ:"die", genitiv:"der", dativ:"der",akkusativ:"die", unbestimmterArtikel:"eine", keyWord:"drücken", content: roomEsszimmer},
    {name:"Türklinke(3)", nominativ:"die", genitiv:"der", dativ:"der",akkusativ:"die", unbestimmterArtikel:"eine", keyWord:"drücken", content: roomSchlafzimmer}
]
