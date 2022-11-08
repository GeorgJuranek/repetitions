export const kitchen = [
{name: "sink", interaction: "Hand/Rotate", content: [] },
{name: "fridge", interaction: "Hand/Push", content: []  },
{name: "desk", interaction: "Feet/Kick", content: [] }
];

export const bathroom = [
{name: "sink", interaction: "Hand/Rotate", content: [] },
{name: "shower", interaction: "Hand/Push", content:[] },
{name: "toilet", interaction: "Feet/Kick", content: [] },
{name: "mirror", interaction: "Feet/Kick", content: [] }
];

export const bedroom = [
{name: "mirror", interaction: "Hand/Rotate", content: [] },
{name: "bed", interaction: "Hand/Push", content: []  },
{name: "window", interaction: "Feet/Kick", content: [] }
];

export const doorknobs = [
{name: "doorKnob", interaction: "Hand/Rotate", content: kitchen },
{name: "doorHandle", interaction: "Hand/Push", content: bathroom  },
{name: "broken doorKnob", interaction: "Feet/Kick", content: bedroom }
]