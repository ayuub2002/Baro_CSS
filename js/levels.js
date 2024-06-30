var levels = [
  {
    name: 'justify-content 1',
    instructions: {
      'en': '<p>Ku soo dhawow Barro Css, Waa Game aad ku caawineysid Rahha iyo saaxiibkisa adigoo qoraya koodhka CSS!  Hag Rahha oo waxaad Gaysaa dhanka Midigta ado isticmaalaya: <code>justify-content</code> property, Kaaso sheyada u toosinayo si horizontally ah hadana aqabalyo values so socodo: </p><ul><li><code>flex-start</code>: Sheyada waxay isku safayaan dhinaca bidix ee container-ka. </li><li><code>flex-end</code>: Sheyada waxay isku safayaan dhinaca Midig ee container-ka.</li><li><code>center</code>: Sheyada waxay isku safayaan Dhexda container-ka.</li><li><code>space-between</code>Sheyada wuxu u muujinayaa si siman oo cabir siman leh..</li><li><code>space-around</code>: Sheyada wuxu u muujinayaa si siman oo cabir siman leh.</li></ul><p>Tusaale ahaan, <code>justify-content: flex-end;</code> wuxuu u dhaqaajin doona dhinaca Midig <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>',
      },
    board: 'g',
    style: {'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 2',
    instructions: {
      'en': '<p>Isticmaal <code>justify-content</code> Markale  Saa u caawisid rahha sida ay u gaari lahaayen caleemahoda. Xasuusnow CSS property yadaan Kaaso sheyada u toosinayo si horizontally ah wuxuna aqbalayaa qiimayaashan soo socoda: </p><ul><li><code>flex-start</code>: Sheyada waxay isku safayaan dhinaca bidix ee container-ka. </li><li><code>flex-end</code>: Sheyada waxay isku safayaan dhinaca Midig ee container-ka. </li><li><code>center</code>: Sheyada waxay isku safayaan Dhexda container-ka.</li><li><code>space-between</code>: Sheyada wuxu u muujinayaa si siman oo cabir siman leh.</li><li><code>space-around</code>: Sheyada wuxu u muujinayaa si siman oo cabir siman leh.</li></ul>',
     },
    board: 'gy',
    style: {'justify-content': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 3',
    instructions: {
      'en': '<p>Caawi dhamaan sedexda raha waxaadna raadisa  caleemahoda qaaska ah  adoo isticmalaya <code>justify-content</code>. Markan, Caleemaha waxay luminayaan spaceka[].</p><p>Hadaa dareentid in ay kugu adkaadeen property values kooda kala duwan, waxaad ku dhufan kartaa Magaca property-ga saa u argtid. isku day ina ku dhaftid => <code>justify-content</code>.</p>',
      },
    board: 'gyr',
    style: {'justify-content': 'space-around'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 4',
    instructions: {
      'en': '<p> Hadda Caleemaha cirifyada ku yaal ayaa u dhaqaaqaya geeska, iyaga oo kordhinaya booska u dhexeeya. Isticmaal <code>justify-content</code>. Markan, Caleemaha waxay leeyihiin fogaan siman oo u dhexeeysa.</p>',
      },
    board: 'gyr',
    style: {'justify-content': 'space-between'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 1',
    instructions: {
      'en': '<p>Hadda waxaad isticmaashaa <code>align-items</code> Saa u caawisid rahyada sida ay u tagaan caleemada hoos yaala. CSS property-gan Sheyada waxay isku safayaan si joog ah wuxuuna aqbalaya qiimayashan soo socdo: </p><ul><li><code>flex-start</code>: Sheyada waxay isku safayaan dhinaca Kore ee container-ka. </li><li><code>flex-end</code>: Sheyada waxay isku safayaan dhinaca Hoose ee container-ka.</li><li><code>center</code>: Sheyada waxay isku safayaan Joogga Dhexda container-ka</li><li><code>baseline</code>: Sheyada waxay isku safayaan Salka container-ka</li><li><code>stretch</code>: Sheyada waxay isku safayaan container-ka intuu la_egyahey</li></ul>',
      },
    board: 'gyr',
    style: {'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 2',
    instructions: {
      'en': '<p>U hoggaami raha bartamaha balliga adigoo isticmaalaya isku-darka <code>justify-content</code> iyo <code>align-items</code>.</p>',
      },
    board: 'g',
    style: {'justify-content': 'center', 'align-items': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 3',
    instructions: {
      'en': '<p>Rahyadu waxay u baahan yihiin inay mar kale ka gudbaan containerka, markan qaar ka mid ah caleemaha oo leh meelo badan oo ku wareegsan isticmaal isku darka <code>justify-content</code> iyo <code>align-items</code>.</p>',
     },
    board: 'gyr',
    style: {'justify-content': 'space-around', 'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 1',
    instructions: {
      'en': '<p>Rahyadu waxay u baahan yihiin inay u kala horreeyaan siday u kala horreeyaan caleemaha  iyagoo isticmaalaya <code>flex-direction</code>. Property-ga css-ka waxa ay qeexaysaa jihada sheyada lagu ridayo container, waxaanay aqbashaa qiimayaasha soo socda:</p><ul><li><code>row</code>: Sheyada waxaa la dhigaa isla jihada qoraalka. </li><li><code>row-reverse</code>: Sheyda waxaa la dhigayaa ka soo horjeedka jihada qoraalka.</li><li><code>column</code>: Sheyda waxaa la dhigaa kor ilaa hoos.</li><li><code>column-reverse</code>: Sheyda waxaa la dhigaa hoos ilaa kor.</li></ul>',
     },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 2',
    instructions: {
      'en': '<p> Ka caawi rahyadu inay helaan tiirkooda caleemaha iyadoo la adeegsanayo <code>flex-direction</code>. css property  waxa ay qeexaysaa jihada sheyada lagu ridayo containerka, waxaanay aqbashaa qiimayaasha soo socda:</p><ul><li><code>row</code>: Sheyada waxaa la dhigaa isla jihada qoraalka.</li><li><code>row-reverse</code>: Sheyda waxaa la dhigayaa ka soo horjeedka jihada qoraalka.</li><li><code>column</code>: Sheyda waxaa la dhigaa kor ilaa hoos.</li><li><code>column-reverse</code>: Sheyda waxaa la dhigaa hoos ilaa kor.</li></ul>',
     },
    board: 'gyr',
    style: {'flex-direction': 'column'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 3',
    instructions: {
      'en': '<p>Ka caawi rahyadu inay gaadhaan Caleemahoda. In kasta oo ay u muuqdaan kuwo isku dhow, waxay qaadan doonaan labadaan <code>flex-direction</code> iyo <code>justify-content</code> Si ayga dhan lo helo.</p><p>U fiirso marka aad dejiso jihada saf ama tiir rogan, bilawga iyo dhammaadka sidoo kale waa la rogaa.</p>',
      },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 4',
    instructions: {
      'en': '<p>Caawi Rahyada in ay helaan Caleemahoda ado isticamalyo <code>flex-direction</code> iyo <code>justify-content</code>.</p><p>U fiirso in marka flex direction ay tahay jiif,<code>justify-content</code>waxaa loo badalayaa joog iyo<code>align-items</code> si jiif ah.</p>',
      },
    board: 'gyr',
    style: {'flex-direction': 'column', 'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 5',
    instructions: {
      'en': '<p>Caawi Rahyada in ay helaan Caleemahoda ado isticamalyo <code>flex-direction</code> iyo <code>justify-content</code>.</p>',
      },
    board: 'gyr',
    style: {'flex-direction': 'column-reverse', 'justify-content': 'space-between'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 6',
    instructions: {
      'en': '<p>Caawi Rahyada in ay helaan Caleemahoda ado isticamalyo <code>flex-direction</code>, <code>justify-content</code>, iyo <code>align-items</code>.</p>',
      },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'center', 'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'order 1',
    instructions: {
      'en': '<p>Marka qaar in la gadiyo row-ga ama column-ka kala horeentoda container-ka dhexdisa intaas kuma filna. Inta xaladan la joogo, waxaan sameen karnaa anaga isticmaleno <code>order</code> property si sheyda kali kali lo sameeyo. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).</p><p>Use the <code>order</code> property to reorder the frogs according to their lilypads.</p>',
     },
    board: 'gyr',
    selector: '> :nth-child(2)',
    classes: {'#pond, #background': 'wrap'},
    style: {'order': '2'},
    before: "#pond {\n  display: flex;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'order 2',
    instructions: {
      'en': '<p>Isticmaal <code>order</code> property sida raha gaduudan caleentisa loogu diro</p>',
     },
    board: 'gggrg',
    selector: '> :nth-child(4)',
    classes: {'#pond, #background': 'wrap'},
    style: {'order': '-1'},
    before: "#pond {\n  display: flex;\n}\n\n.red {\n",
    after: "}"
  },
  {
    name: 'align-self 1',
    instructions: {
      'en': '<p>Waxaa jiro property kale kaas oo ka sameeysan karitd sheyada gaarka ah ado isticmalaya <code>align-self</code>. Property-gan wuxuu aqbalaya inuu qaato values isku mid ah sida <code>align-items</code> waana qiimaha ay u leedahay shayga gaarka ah.</p>',
      },
    board: 'ggygg',
    selector: '> :nth-child(3)',
    style: {'align-self': 'flex-end'},
    before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'align-self 2',
    instructions: {
      'en': '<p>Isku dar <code>order</code> iyo <code>align-self</code> sida uu kaa caawiyo in ay raha gaaran meesha ay u socdeen.</p>',
      },
    board: 'ygygg',
    selector: '> .yellow',
    style: {'align-self': 'flex-end', 'order': '2'},
    before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    after: "}"
  },
  {
    name: 'flex-wrap 1',
    instructions: {
      'en': '<p>Alla maya! Dhamaan rahyada waxaa lagu aruuriyey hal row caleemahoda ah. Kala siki ayaga dhan oo isticmaal <code>flex-wrap</code> property, kuwaaso aqbalaya qiimayashaan soo socdo: </p><ul><li><code>nowrap</code>: Shay kasta waxaa lagu lekesiin doona sida hal line oo kale</li><li><code>wrap</code>: Shayada waxay ku wareegsan doonan lines dheeraad ah.</li><li><code>wrap-reverse</code>: Shayada waxay ku wareegsan doonan lines dheeraad ah lknse si caksi ah.</li></ul>',
      },
    board: 'ygggggr',
    style: {'flex-wrap': 'wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-wrap 2',
    instructions: {
      'en': '<p>Caawi rahyashaan koox kooxda ah  inay sameeyaan saddex tiir oo habaysan iyadoo la isticmaalayo isku darka <code>flex-direction</code> iyo <code>flex-wrap</code>.</p>',
      },
    board: 'gggggrrrrryyyyy',
    style: {'flex-direction': 'column', 'flex-wrap': 'wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-flow 1',
    instructions: {
      'en': '<p>Labada property ee <code>flex-direction</code> iyo <code>flex-wrap</code> badana labadoda waa la isla isticmala sida loo soo gaabiyo property-ga <code>flex-flow</code> waxaa loo abuuray si wadajir ah inuu kawada dhigo ayaga dhan. habkaan gaaban waxay aqbashaa qiimaha labada caleemood waxayna kala qeybisaa meelo aydoo isticamaleyso spaces u dhaxeya</p><p>Tusaale ahaan, waxaa isticmali kartaa <code>flex-flow: row wrap</code> rows inaa hagaajiso iyo ina isku hareereso.</p><p>Isku day inaa isticmaasho. <code>flex-flow</code> saa uso celesid heerki hore.</p>',
      },
    board: 'gggggrrrrryyyyy',
    style: {'flex-flow': 'column wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-content 1',
    instructions: {
      'en': '<p>Rahyadu waxay ku faafsan yihiin balliga oo dhan, laakiin ubaxyada daboolan ayaa ku urursan xagga sare. Waxaad isticmaali  <code>align-content</code> si aad u dejiso sida khadadka badan ay u kala fog yihiin midba midka kale. Gurigani waxa uu qaadanayaa qiyamka soo socda: </p><ul><li><code>flex-start</code>: Lines-ka ayaa lagu xidhxidhay xagga sare ee container-ka.</li><li><code>flex-end</code>: Lines-ka ayaa lagu xidhxidhay gunta hoose ee container-ka.</li><li><code>center</code>: Lines-ka waxay ku xidhan yihiin barta toosan ee container-ka. </li><li><code>space-between</code>: Lines waxay muujinayaan masaafo siman oo u dhaxaysa.</li><li><code>space-around</code>: Lines-ka waxay muujinayaan kala fogaansho siman oo ku wareegsan.</li><li><code>stretch</code>: Lines-ka fidiyay khadadka si ay ugu habboonaadaan container-ka. </li></ul><p>Kan waxaa laga yaaba inaa ku wareerto, lkn <code>align-content</code> Wuxuu qeexa spaceska u dhaxeeyo lines-ka, Halka <code>align-items</code> qeexaya sida sheeyasha guud ahaan waxay la siman yihiin container-ka gudihiisa. Marka uu jiro hal line oo keliya, <code>align-content</code> wax saamayn ah malahan.</p>',
     },
    board: 'ggggggggggggggg',
    classes: {'#pond, #background': 'wrap'},
    style: {'align-content': 'flex-start'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 2',
    instructions: {
      'en': '<p>Hadda kan hadda jira wuxuu gundhig u yahay lilypads xagga hoose. Isticmaal <code>align-content</code> sida rahaa xagaas joogo loo hago</p>',
     },
    board: 'ggggggggggggggg',
    classes: {'#pond, #background': 'wrap'},
    style: {'align-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 3',
    instructions: {
      'en': '<p>Rahyadu waxay sameeyeen xaflad, laakiin waa waqtigii guriga la tagi lahaa. Isticmaal isku darka <code>flex-direction</code> iyo <code>align-content</code> sida ay ugu laabtaan caleemahoda.</p>',
     },
    board: 'rgggyrgggyrgggy',
    classes: {'#pond, #background': 'wrap'},
    style: {'flex-direction': 'column-reverse', 'align-content': 'center'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 4',
    instructions: {
      'en': '<p>Keen rahyada guriga markii ugu dambeysay adiga oo isticmaalaya cashirada CSS ee aad horay u baratay: </p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="https://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>',
      },
    board: 'rggggyy',
    style: {'flex-direction': 'column-reverse', 'flex-wrap': 'wrap-reverse', 'align-content': 'space-between', 'justify-content': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  }
];

var levelWin = {
  name: 'win',
  instructions: {
    'en': '<p>Hambaliyo waad guuleesatay! Waxaadna ku mahadsantahey inaad xariif ku noqotey CSS flexbox, Hada waxaad awood ugu yeelatay inaad caawin karitd raha dhan in ay gaaran caleemahoda. Bal u fiirso sida ay u faraxasan yihiin! ',
    },
  board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
  classes: {'#pond, #background': 'wrap'},
  style: {},
  before: "#pond {\n  display: flex;\n",
  after: "}"
};
