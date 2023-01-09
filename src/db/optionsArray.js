import testBathroom from "../images/testBathroom.jpg";
import testBedroom from "../images/testBedroom.jpg";
import testKitchen from "../images/testKitchen.jpg";

//
const end =[
    {name: "emptyness", interaction: ["eye","stare"], content:{message:" and entered the void behind the rooms.", leadsTo:  []} },   
    {name: "emptyness", interaction: ["eye","stare"], content:{message:" and entered the void behind the rooms.", leadsTo:  []} },
    {name: "emptyness", interaction: ["eye","stare"], content:{message:" and entered the void behind the rooms.", leadsTo:  []} },
    {name: "emptyness", interaction: ["eye","stare"], content:{message:" and entered the void behind the rooms.", leadsTo:  []} },
]

const bedroom = [
{name: "mirror", interaction: ["eye","stare"],  content: {message:" and entered the mirror", leadsTo: end, newImage:{s:testBedroom ,m:testBedroom ,l:testBedroom}}},
{name: "bed", interaction: ["eye","stare"],  content: {message:" and entered the bed", leadsTo: end, newImage:{s:testBedroom ,m:testBedroom ,l:testBedroom}}},

];

const kitchen = [
{name: "sink", interaction: ["eye","stare"], content:  {message:" and entered the sink", leadsTo: end, newImage:{s:testKitchen ,m:testKitchen ,l:testKitchen}}},
{name: "fridge", interaction: ["eye","stare"], content:  {message:" and entered the fridge", leadsTo: end, newImage:{s:testKitchen ,m:testKitchen ,l:testKitchen}}},
{name: "desk", interaction: ["eye","stare"], content:  {message:" and entered the desk", leadsTo: end, newImage:{s:testKitchen ,m:testKitchen ,l:testKitchen}}},

];

const bathroom = [
{name: "sink", interaction: ["eye","stare"], content:  {message:" and entered the sink", leadsTo: end, newImage:{s:testBathroom ,m:testBathroom ,l:testBathroom}} },
{name: "shower", interaction: ["eye","stare"], content:  {message:" and entered the shower", leadsTo: end, newImage:{s:testBathroom ,m:testBathroom ,l:testBathroom}} },
{name: "toilet", interaction: ["eye","stare"], content:  {message:" and entered the toilet", leadsTo: end, newImage:{s:testBathroom ,m:testBathroom ,l:testBathroom}} },
{name: "mirror", interaction: ["eye","stare"], content:  {message:" and entered the mirror", leadsTo: end, newImage:{s:testBathroom ,m:testBathroom ,l:testBathroom}} },

];


export const doorknobs = [
{name: "doorKnob", interaction: ["hand","rotate"], content: {message:" and entered the kitchen", leadsTo: kitchen, newImage:{s:testKitchen ,m:testKitchen ,l:testKitchen}} },
{name: "doorHandle", interaction: ["hand","push"], content: {message:" and entered the bathroom", leadsTo: bathroom, newImage:{s:testBathroom ,m:testBathroom ,l:testBathroom}} },
{name: "broken doorKnob", interaction: ["feet","kick"], content: {message:" and entered the bedroom", leadsTo: bedroom, newImage:{s:testBedroom ,m:testBedroom ,l:testBedroom}} },
]

