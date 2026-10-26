// The poems, in reading order. Each line is written once; prefixes set when a word appears:
//   (none) always visible: the skim reading
//   ^      appears after a short pause
//   ~      appears only if you linger
// slug is the poem's address: poem.html?p=<slug>
const POEMS = [
  {
    slug: "the-lake",
    title: "the lake",
    stanzas: [
      [
        "~the porch light ^stayed ^on ~all february",
        "~long ^after anyone ^was ^coming ~up ~the road.",
        "~the snow ~beneath ^it ^lay open ~like ^a page",
        "no one ^had ^written ~on ~yet.",
      ],
      [
        "she ^told ~me ~the lake ^makes ~a sound ~at ^night",
        "~if you ^are quiet ~enough ^to ^hear ^it,",
        "~the ice ^settling, ~a ^long low ^note",
        "~like ~a door ^closing ~far down ~in ~the ^house.",
      ],
      [
        "~the house ^is sold. ~the light ^is ~someone ~else's ^now.",
        "^I stand ~at ~the end ^of ^the road ~some ^nights",
        "~and ^do not move,",
        "~and wait ~for ^the lake ^to ^say something.",
      ],
    ],
  },
  {
    slug: "the-driveway",
    title: "the driveway",
    stanzas: [
      [
        "~the engine ^ticks ~as ^it cools.",
        "~the song ~on ~the radio ^has ~a minute ^left",
        "~and ^I give ~it ~the minute.",
      ],
      [
        "inside, ~the kitchen light ^is on.",
        "someone ^is moving ~behind ~the window,",
        "~setting ^something down, ~picking ^it up ^again.",
        "~they ^haven't heard ~the car.",
      ],
      [
        "~in ^a moment ~I'll ^be ~the ~one ~who walked in,",
        "~with ^a coat ~and ^a day ~and ~a question ^about dinner.",
        "~for now ~I'm ^only ~the ~one ~in ~the driveway,",
        "belonging ~to no one, ~with ~the song ^almost over.",
      ],
    ],
  },
  {
    slug: "counting",
    title: "counting",
    stanzas: [
      [
        "~the porch boards ^still ^hold ~the heat ~of ~the day.",
        "lightning, ^somewhere ~past ~the river,",
        "~and ^you ^start counting ^out ^loud",
        "~the ~way ~your ^mother ^taught you.",
      ],
      [
        "one mississippi. two mississippi.",
        "~the thunder ^comes ~in ^at six,",
        "~and ^you say six miles, ~like ~it's ^a fact,",
        "~and ^I ~don't ~tell ~you ^it's five ~to ~a mile.",
      ],
      [
        "~the next ^one ^comes ~at nine. ^then twelve.",
        "~we ^keep counting ~long ~after ^it ~stops mattering,",
        "~the storm ^walking off ~to ~the east",
        "~and ^leaving us ~the whole porch, ~and ~the rain.",
      ],
    ],
  },
  {
    slug: "snow-day",
    title: "snow day",
    stanzas: [
      [
        "~the call ^came ~at five-forty: no school.",
        "~by ^seven ~the street ^was ~a white field",
        "~with no tracks ^in ^it,",
        "~the plows ^still ~somewhere ^across town.",
      ],
      [
        "~you ^can hear ~a shovel ^three blocks ^over.",
        "~you ^can hear ~the furnace ^think ~about ^it.",
        "~a car tries ^the hill, ^gives up,",
        "~and ~the quiet ^folds back ~over ~the ^place ~it ^was.",
      ],
      [
        "nobody needs ^anything ~from you ^today.",
        "~the hours ^sit ~on ~the table ~like bread,",
        "~and ^you take ^one, ~and ~then another,",
        "~and ~the snow ^keeps ~on not stopping.",
      ],
    ],
  },
  {
    slug: "outage",
    title: "outage",
    stanzas: [
      [
        "~the fridge stops ^first.",
        "~then ~the furnace ^fan, ~the little hum",
        "~in ~the walls ^you ~didn't know ^was there",
        "~until ^it wasn't.",
      ],
      [
        "~it ^is louder without ^it. ~you ^can hear",
        "~the clock ^in ~the hall, ~the rain ^on ~the gutter,",
        "~your ^own house settling ~like ^an animal",
        "~lying down ~for ^the night.",
      ],
      [
        "~across ~the street ^a door opens. ^then another.",
        "people ^stand ~on porches ^holding candles",
        "~and flashlights ^pointed ~at nothing,",
        "~and nobody ^calls ~to ^report ~it yet.",
      ],
    ],
  },
  {
    slug: "four-hundred-miles",
    title: "four hundred miles",
    stanzas: [
      [
        "four hundred miles ~of ~the same field",
        "~under ^a moon ^that ~keeps pace ~with ^the car.",
        "~the towns ^come ~in ~as ^a gas sign ~and ^a water tower",
        "~and ^go out ~the same ^way.",
      ],
      [
        "~I've stopped ^checking ~the time.",
        "~the coffee's ^gone cold ~in ~the cupholder,",
        "~the radio's ^down ~to static ~and ^a man ^selling seed,",
        "~and ~the road ^just keeps ^unrolling ~ahead ~of ~the lights.",
      ],
      [
        "~you'll ^be asleep ~when ^I ^get ~in,",
        "~the porch light on, ~the ^door ^unlocked,",
        "~and ^I ~don't ^mind ~the hours.",
        "~it's ~the ^only ^time ~all year",
        "^I ~get ~to ^think ~about you ~this long",
        "~without ^anything interrupting.",
      ],
    ],
  },
  {
    slug: "sunday",
    title: "sunday",
    stanzas: [
      [
        "nothing ~on ~the calendar.",
        "~the light ^comes ~in ~at ^an angle",
        "~and ^lies down ~on ~the floor",
        "~and stays ^there ~most ~of ~the afternoon.",
      ],
      [
        "~the cat ^finds ^it first. ^then me.",
        "somewhere ~a neighbor ^is mowing,",
        "somewhere ~a game ^is on ~with ~the sound low,",
        "~and none ~of ^it needs me.",
      ],
      [
        "~I fall asleep ~in ~the middle ~of ^a sentence",
        "~in ^a book ~I've ^been reading ~for ^a year.",
        "~when ^I wake ~the light ^has moved ~a foot ~to ~the left.",
        "that's ^all ^that happened. ~that ~was ~the whole day.",
      ],
    ],
  },
];

if (typeof module !== "undefined") module.exports = POEMS;
