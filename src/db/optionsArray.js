const end =[
    {name: "emptyness", interaction: ["eye","stare"], content:{message:" and enter the void behind the rooms.", leadsTo:  []} },   
    {name: "emptyness", interaction: ["eye","stare"], content:{message:" and enter the void behind the rooms.", leadsTo:  []} },
    {name: "emptyness", interaction: ["eye","stare"], content:{message:" and enter the void behind the rooms.", leadsTo:  []} },
    {name: "emptyness", interaction: ["eye","stare"], content:{message:" and enter the void behind the rooms.", leadsTo:  []} },
    {name: "emptyness", interaction: ["eye","stare"], content:{message:" and enter the void behind the rooms.", leadsTo:  []} },   
    {name: "emptyness", interaction: ["eye","stare"], content:{message:" and enter the void behind the rooms.", leadsTo:  []} },
    {name: "emptyness", interaction: ["eye","stare"], content:{message:" and enter the void behind the rooms.", leadsTo:  []} },
    {name: "emptyness", interaction: ["eye","stare"], content:{message:" and enter the void behind the rooms.", leadsTo:  []} },
]

const bedroom = [
{name: "mirror", interaction: ["eye","stare"],  content: {message:" and enter the mirror", leadsTo: end}},
{name: "bed", interaction: ["eye","stare"],  content: {message:" and enter the bed", leadsTo: end}},

];

const kitchen = [
{name: "sink", interaction: ["eye","stare"], content:  {message:" and enter the sink", leadsTo: end}},
{name: "fridge", interaction: ["eye","stare"], content:  {message:" and enter the fridge", leadsTo: end}},
{name: "desk", interaction: ["eye","stare"], content:  {message:" and enter the desk", leadsTo: end}},

];

const bathroom = [
{name: "sink", interaction: ["eye","stare"], content:  {message:" and enter the sink", leadsTo: end}},
{name: "shower", interaction: ["eye","stare"], content:  {message:" and enter the shower", leadsTo: end}},
{name: "toilet", interaction: ["eye","stare"], content:  {message:" and enter the toilet", leadsTo: end}},
{name: "mirror", interaction: ["eye","stare"], content:  {message:" and enter the mirror", leadsTo: end}},

];


export const doorknobs = [
{name: "doorKnob", interaction: ["hand","rotate"], content: {message:" and enter the kitchen", leadsTo: kitchen}},
{name: "doorHandle", interaction: ["hand","push"], content: {message:" and enter the bathroom", leadsTo: bathroom}},
{name: "broken doorKnob", interaction: ["feet","kick"], content: {message:" and enter the bedroom", leadsTo: bedroom}},
]

