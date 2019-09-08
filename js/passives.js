const passives = {
  "3": {
    "name": "Alacrity",
    "description": "+30 to Dexterity"
  },
  "5": {
    "name": "Beef",
    "description": "+30 to Strength"
  },
  "7": {
    "name": "Agility",
    "description": "+30 to Dexterity"
  },
  "11": {
    "name": "Wisdom of the Glade",
    "description": "+30 to Intelligence"
  },
  "9": {
    "name": "Expertise",
    "description": "+30 to Dexterity"
  },
  "13": {
    "name": "Thief's Craft",
    "description": "+30 to Intelligence"
  },
  "29": {
    "name": "Prowess",
    "description": "+30 to Strength"
  },
  "15": {
    "name": "Proficiency",
    "description": "+30 to Dexterity"
  },
  "31": {
    "name": "Ancestral Knowledge",
    "description": "+30 to Intelligence"
  },
  "19": {
    "name": "Might",
    "description": "+30 to Strength"
  },
  "33": {
    "name": "Fending",
    "description": "12% chance to Knock Enemies Back on hit<br>25% increased Knockback Distance"
  },
  "21": {
    "name": "Hard Knocks",
    "description": "+30 to Intelligence"
  },
  "83": {
    "name": "Physique",
    "description": "+30 to Strength"
  },
  "37": {
    "name": "Arcane Vision",
    "description": "+30 to Accuracy Rating<br>Light Radius is based on Energy Shield instead of Life"
  },
  "85": {
    "name": "Diamond Skin",
    "description": "24% increased Armour<br>+12% to all Elemental Resistances<br>3% increased Movement Speed"
  },
  "39": {
    "name": "Path of the Savant",
    "description": "16% increased Spell Damage<br>+20 to maximum Mana<br>+20 to Intelligence"
  },
  "27": {
    "name": "Path of the Warrior",
    "description": "+10 to Armour<br>+20 to Strength<br>12% increased Physical Damage"
  },
  "55": {
    "name": "Path of the Hunter",
    "description": "+20 to Accuracy Rating<br>12% increased Projectile Damage<br>+20 to Dexterity"
  },
  "87": {
    "name": "Righteous Decree",
    "description": "22% increased maximum Mana<br>6% reduced Mana Cost of Skills"
  },
  "91": {
    "name": "Ironwood",
    "description": "25% increased Totem Damage<br>Totems gain +16% to all Elemental Resistances<br>Totems have 10% additional Physical Damage Reduction"
  },
  "57": {
    "name": "Fusillade",
    "description": "15% increased Attack Speed with Wands<br>30% increased Accuracy Rating with Wands"
  },
  "45": {
    "name": "Quickstep",
    "description": "6% increased Attack Speed<br>4% increased Movement Speed"
  },
  "93": {
    "name": "Weathered Hunter",
    "description": "+100 to Accuracy Rating<br>15% increased Global Accuracy Rating<br>+10% to all Elemental Resistances<br>+20 to Dexterity"
  },
  "245": {
    "name": "Cloth and Chain",
    "description": "24% increased Evasion Rating and Armour<br>+12% to all Elemental Resistances"
  },
  "109": {
    "name": "Solidity",
    "description": "20% increased Attack Damage while holding a Shield<br>+8% Elemental Resistances while holding a Shield<br>Attack Skills deal 20% increased Damage with Ailments while holding a Shield<br>+3% Chance to Block Attack Damage while holding a Shield"
  },
  "63": {
    "name": "Aspect of the Eagle",
    "description": "20% increased Damage with Bows<br>12% increased Global Accuracy Rating<br>+10 to maximum Life<br>4% increased Movement Speed<br>20% increased Damage Over Time with Bow Skills"
  },
  "247": {
    "name": "Dynamo",
    "description": "16% increased maximum Mana<br>5% reduced Mana Cost of Skills"
  },
  "111": {
    "name": "Decay Ward",
    "description": "Minions have +10% Chance to Block Attack Damage<br>Minions have +10% Chance to Block Spell Damage<br>Minions Recover 2% of their Life when they Block"
  },
  "99": {
    "name": "Thrill Seeker",
    "description": "15% increased maximum Mana<br>0.4% of Attack Damage Leeched as Mana<br>+10 Mana gained on Kill"
  },
  "249": {
    "name": "Aspect of the Panther",
    "description": "+3% Chance to Block Attack Damage while Dual Wielding<br>16% increased Weapon Damage while Dual Wielding<br>6% increased Attack Speed while Dual Wielding<br>+10 to maximum Life<br>Attack Skills deal 16% increased Damage with Ailments while Dual Wielding"
  },
  "81": {
    "name": "Spirit Void",
    "description": "0.8% of Attack Damage Leeched as Mana<br>25% increased Maximum total Recovery per second from Mana Leech<br>20% increased total Recovery per second from Mana Leech"
  },
  "253": {
    "name": "Poisonous Fangs",
    "description": "+5% to Damage over Time Multiplier for Poison<br>20% increased Damage with Claws<br>10% increased Poison Duration<br>10% chance to Poison on Hit with Attacks<br>20% increased Damage with Ailments from Attack Skills while wielding a Claw"
  },
  "163": {
    "name": "Saboteur",
    "description": "30% increased Trap Damage<br>30% increased Mine Damage<br>Can have up to 2 additional Traps placed at a time<br>Can have up to 2 additional Remote Mines placed at a time"
  },
  "117": {
    "name": "Depth Perception",
    "description": "+100 to Accuracy Rating<br>15% increased Global Accuracy Rating<br>+20 to Dexterity<br>25% increased Critical Strike Chance"
  },
  "255": {
    "name": "Elemental Focus",
    "description": "10% chance to Avoid Elemental Ailments<br>10% increased Duration of Elemental Ailments on Enemies<br>16% increased Elemental Damage<br>10% increased Effect of non-Damaging Ailments on Enemies"
  },
  "165": {
    "name": "Deep Wisdom",
    "description": "+20 to maximum Energy Shield<br>+20 to maximum Mana<br>+20 to Intelligence"
  },
  "271": {
    "name": "Martial Experience",
    "description": "30% increased Physical Damage with Two Handed Melee Weapons<br>0.8% of Physical Attack Damage Leeched as Life<br>50% increased total Recovery per second from Life Leech<br>30% increased Damage with Ailments from Attack Skills while wielding a Two Handed Weapon"
  },
  "135": {
    "name": "Fury Bolts",
    "description": "10% increased Global Accuracy Rating<br>20% increased Projectile Damage<br>+20 to Strength"
  },
  "273": {
    "name": "Battle Rouse",
    "description": "+15 to maximum Mana<br>15% increased maximum Mana<br>8% of Damage taken gained as Mana over 4 seconds when Hit"
  },
  "261": {
    "name": "Hasty Reconstruction",
    "description": "20% increased Trap Damage<br>10% increased Cooldown Recovery Speed for throwing Traps"
  },
  "171": {
    "name": "Sanctuary",
    "description": "+3% Chance to Block Spell Damage while holding a Shield<br>+12% Elemental Resistances while holding a Shield<br>+3% Chance to Block Attack Damage while holding a Shield"
  },
  "731": {
    "name": "Practical Application",
    "description": "25% chance to Avoid interruption from Stuns while Casting<br>+20 to Strength and Dexterity"
  },
  "325": {
    "name": "Words of Glory",
    "description": "30% increased Warcry Duration<br>If you've Warcried Recently, you and nearby allies have 10% increased Attack, Cast and Movement Speed<br>Warcries cost no Mana"
  },
  "279": {
    "name": "Executioner",
    "description": "24% increased Physical Damage with Two Handed Melee Weapons<br>50% increased Damage with Hits against Enemies that are on Low Life<br>8% increased Area of Effect if you've Killed Recently<br>24% increased Damage with Ailments from Attack Skills while wielding a Two Handed Weapon"
  },
  "189": {
    "name": "Mind Drinker",
    "description": "18% increased maximum Mana<br>0.4% of Attack Damage Leeched as Mana<br>Recover 2% of Mana on Kill"
  },
  "733": {
    "name": "Freedom of Movement",
    "description": "30% increased Evasion Rating<br>5% chance to Dodge Attack Hits while Phasing<br>10% increased Movement Speed while Phasing<br>10% chance to gain Phasing for 4 seconds on Kill"
  },
  "327": {
    "name": "Dreamer",
    "description": "25% increased maximum Mana<br>15% increased Mana Regeneration Rate"
  },
  "735": {
    "name": "Aligned Spirits",
    "description": "10% increased maximum Mana<br>Minions deal 20% increased Damage<br>15% reduced Mana Cost of Minion Skills"
  },
  "297": {
    "name": "Arsonist",
    "description": "+6% to Fire Damage over Time Multiplier<br>24% increased Fire Damage<br>Regenerate 1% of Life per second"
  },
  "739": {
    "name": "Weapon Artistry",
    "description": "+2% Chance to Block Attack Damage while Dual Wielding or holding a Shield<br>16% increased Attack Damage<br>4% increased Attack Speed<br>+10 to Strength and Dexterity"
  },
  "333": {
    "name": "Unpredictable Offensive",
    "description": "5% chance to Dodge Attack Hits while Channelling<br>Channelling Skills have 10% increased Attack Speed<br>20% chance to Avoid being Stunned while Channelling"
  },
  "243": {
    "name": "Mystic Bulwark",
    "description": "6% Chance to Block Spell Damage<br>15% increased maximum Mana<br>1% increased Mana Regeneration Rate per 1% Chance to Block Spell Damage"
  },
  "741": {
    "name": "Shamanistic Fury",
    "description": "30% increased Totem Damage<br>15% increased Totem Placement speed"
  },
  "757": {
    "name": "Deep Thoughts",
    "description": "20% increased maximum Mana<br>20% increased Mana Regeneration Rate<br>+20 to Intelligence"
  },
  "487": {
    "name": "Prodigal Perfection",
    "description": "10% increased Spell Damage<br>15% increased maximum Mana<br>2% increased Spell Damage per 100 Maximum Mana, up to 40%"
  },
  "351": {
    "name": "Sentinel",
    "description": "24% increased Evasion Rating and Armour<br>+10% to all Elemental Resistances"
  },
  "759": {
    "name": "Heavy Draw",
    "description": "20% increased Physical Damage with Bows<br>10% reduced Enemy Stun Threshold with Bows<br>30% increased Stun Duration with Bows on Enemies<br>12% increased Area of Effect<br>20% increased Damage Over Time with Bow Skills"
  },
  "489": {
    "name": "Claws of the Magpie",
    "description": "20% increased Damage with Claws<br>10% increased Attack Speed with Claws<br>25% chance to Steal Power, Frenzy, and Endurance Charges on Hit with Claws<br>20% increased Damage with Ailments from Attack Skills while wielding a Claw"
  },
  "747": {
    "name": "Harvester of Foes",
    "description": "20% increased Damage with Axes<br>12% increased Accuracy Rating with Axes<br>15% increased Attack Speed while Leeching<br>20% increased Damage with Ailments from Attack Skills while wielding an Axe"
  },
  "811": {
    "name": "Splitting Strikes",
    "description": "26% increased Physical Damage with Axes<br>6% increased Attack Speed with Axes<br>26% increased Damage with Ailments from Attack Skills while wielding an Axe<br>+1 to Melee range with Axes"
  },
  "765": {
    "name": "Silent Steps",
    "description": "20% increased Evasion Rating<br>60% chance to Avoid Blind<br>5% reduced Damage taken from Blinded Enemies"
  },
  "495": {
    "name": "Explosive Runes",
    "description": "You can Cast an additional Brand<br>20% increased Damage with Brand Skills<br>10% increased Brand Attachment range"
  },
  "405": {
    "name": "Steelwood Stance",
    "description": "30% increased Damage with Staves<br>20% increased Armour<br>+600 Armour if you've Blocked Recently<br>30% increased Damage with Ailments from Attack Skills while wielding a Staff<br>+4% Chance to Block Attack Damage while wielding a Staff"
  },
  "813": {
    "name": "Efficient Explosives",
    "description": "25% increased Mine Damage<br>20% increased Mine Duration<br>12% reduced Mana Reservation of Skills that throw Mines"
  },
  "783": {
    "name": "Totemic Zeal",
    "description": "30% increased Totem Placement speed<br>Spells Cast by Totems have 6% increased Cast Speed<br>Attacks used by Totems have 10% increased Attack Speed"
  },
  "513": {
    "name": "Bone Breaker",
    "description": "30% increased Physical Damage with Maces and Sceptres<br>12% increased Area of Effect<br>30% increased Damage with Ailments from Attack Skills while wielding a Mace or Sceptre<br>+2 to Melee range with Maces and Sceptres"
  },
  "819": {
    "name": "Gemini",
    "description": "+4% Chance to Block Attack Damage while Dual Wielding<br>16% increased Weapon Damage while Dual Wielding<br>6% increased Attack Speed while Dual Wielding<br>12% increased Accuracy Rating while Dual Wielding<br>Attack Skills deal 16% increased Damage with Ailments while Dual Wielding"
  },
  "973": {
    "name": "Expeditious Munitions",
    "description": "20% increased Trap Damage<br>30% increased Trap Trigger Area of Effect<br>8% increased Trap Throwing Speed"
  },
  "837": {
    "name": "Razor's Edge",
    "description": "+10% to Damage over Time Multiplier for Bleeding<br>30% increased Physical Damage with Swords<br>Attacks have 15% chance to cause Bleeding<br>30% increased Damage with Ailments from Attack Skills while wielding a Sword"
  },
  "567": {
    "name": "Red Storm",
    "description": "+8% to Damage over Time Multiplier for Bleeding<br>Attacks have 15% chance to cause Bleeding<br>30% increased Physical Damage"
  },
  "975": {
    "name": "Honed Edge",
    "description": "24% increased Damage with Swords<br>6% increased Attack Speed with Swords<br>20% increased Evasion Rating<br>+200 to Accuracy Rating with Swords<br>24% increased Damage with Ailments from Attack Skills while wielding a Sword"
  },
  "981": {
    "name": "Kinetic Impacts",
    "description": "24% increased Physical Damage with Two Handed Melee Weapons<br>10% chance to double Stun Duration<br>24% increased Damage with Ailments from Attack Skills while wielding a Two Handed Weapon<br>4% chance to deal Double Damage"
  },
  "891": {
    "name": "Elder Power",
    "description": "10% increased Wand Damage per Power Charge<br>10% chance to gain a Power Charge on Kill"
  },
  "2189": {
    "name": "Successive Detonations",
    "description": "20% increased Critical Strike Chance for each Mine Detonated Recently, up to 100%<br>+8% to Critical Strike Multiplier for each Mine Detonated Recently, up to 40%"
  },
  "999": {
    "name": "Forceful Skewering",
    "description": "15% chance to Impale Enemies on Hit with Attacks<br>5% increased Impale Effect<br>+20 to Strength"
  },
  "729": {
    "name": "Slaughter",
    "description": "25% increased Physical Damage with Axes<br>8% increased Attack Speed with Axes<br>10% chance to gain Onslaught for 4 seconds on Kill<br>25% increased Damage with Ailments from Attack Skills while wielding an Axe"
  },
  "2191": {
    "name": "Galvanic Hammer",
    "description": "10% increased Accuracy Rating with Maces and Sceptres<br>25% increased Elemental Damage with Maces and Sceptres<br>Damage with Weapons Penetrates 5% Elemental Resistance"
  },
  "2193": {
    "name": "Magmatic Strikes",
    "description": "Gain 5% of Physical Damage as Extra Fire Damage<br>24% increased Fire Damage with Attack Skills"
  },
  "2197": {
    "name": "Toxic Strikes",
    "description": "+8% to Damage over Time Multiplier for Poison<br>10% increased Poison Duration<br>10% chance to Poison on Hit<br>30% increased Chaos Damage with Attack Skills"
  },
  "1459": {
    "name": "Pain Forger",
    "description": "60% increased Critical Strike Chance with Maces and Sceptres<br>5% reduced Enemy Stun Threshold with Maces and Sceptres<br>8% chance to gain a Power Charge when you Stun with Melee Damage"
  },
  "1053": {
    "name": "Sacrifice",
    "description": "Minions have 20% increased maximum Life<br>Regenerate 1% of Life per second<br>Minions Regenerate of 1% Life per second<br>Minions have +10% to all Elemental Resistances"
  },
  "2199": {
    "name": "Entropy",
    "description": "27% increased Damage over Time<br>5% increased Skill Effect Duration"
  },
  "1461": {
    "name": "Grave Intentions",
    "description": "Minions have +15% to Chaos Resistance<br>Minions have 25% chance to gain Unholy Might for 4 seconds on Kill<br>Minions gain 10% of Maximum Life as Extra Maximum Energy Shield"
  },
  "2215": {
    "name": "Blast Waves",
    "description": "Skills used by Mines deal 30% increased Area Damage if you Detonated a Mine Recently<br>Skills used by Mines have 10% increased Area of Effect<br>Skills used by Mines have 10% increased Area of Effect if you Detonated a Mine Recently"
  },
  "2217": {
    "name": "Master Fletcher",
    "description": "12% increased Damage with Bows<br>12% increased Attack Speed with Bows<br>20% increased Global Accuracy Rating<br>20% increased Arrow Speed<br>12% increased Damage Over Time with Bow Skills"
  },
  "2205": {
    "name": "Bladedancer",
    "description": "24% increased Damage with Swords<br>6% increased Attack Speed with Swords<br>24% increased Damage with Ailments from Attack Skills while wielding a Sword<br>+1 to Melee range with Swords"
  },
  "1467": {
    "name": "Claws of the Pride",
    "description": "25% increased Damage with Claws<br>15% increased Attack and Cast Speed if you've used a Movement Skill Recently<br>25% increased Damage with Ailments from Attack Skills while wielding a Claw<br>+1 to Melee range with Claws"
  },
  "2269": {
    "name": "Ophidian Aim",
    "description": "8% increased Attack Speed with Staves<br>12% increased Accuracy Rating with Staves<br>30% increased Critical Strike Chance with Staves<br>+150 to Accuracy Rating with Staves"
  },
  "2223": {
    "name": "Primal Manifestation",
    "description": "24% increased Totem Damage<br>20% increased Totem Life<br>20% increased Totem Duration<br>24% increased Damage with Brand Skills<br>Brand Skills have 20% increased Duration"
  },
  "1485": {
    "name": "Spinecruncher",
    "description": "28% increased Physical Damage with Maces and Sceptres<br>50% increased Stun Duration against Enemies that are on Full Life<br>10% chance to double Stun Duration<br>28% increased Damage with Ailments from Attack Skills while wielding a Mace or Sceptre"
  },
  "1215": {
    "name": "Smashing Strikes",
    "description": "30% increased Damage with Staves<br>30% increased Critical Strike Chance with Staves<br>10% chance to gain an Endurance Charge on Melee Critical Strike<br>30% increased Damage with Ailments from Attack Skills while wielding a Staff<br>+2 to Melee range with Staves"
  },
  "2271": {
    "name": "Utmost Swiftness",
    "description": "+40 to Dexterity<br>8% increased Dexterity"
  },
  "2241": {
    "name": "Farsight",
    "description": "24% increased Damage with Bows<br>6% increased Attack Speed with Bows<br>16% increased Accuracy Rating with Bows<br>24% increased Damage Over Time with Bow Skills"
  },
  "2277": {
    "name": "Whirling Barrier",
    "description": "+6% Chance to Block Spell Damage while wielding a Staff<br>20% chance to gain a Power Charge when you Block<br>+6% Chance to Block Attack Damage while wielding a Staff"
  },
  "1539": {
    "name": "Unstable Munitions",
    "description": "24% increased Trap Damage<br>8% increased Area of Effect<br>40% increased Trap Trigger Area of Effect"
  },
  "2431": {
    "name": "From the Shadows",
    "description": "15% increased Damage with Daggers<br>6% increased Attack Speed with Daggers<br>15% increased Accuracy Rating with Daggers<br>10% chance to gain Phasing for 4 seconds on Kill<br>15% increased Damage with Ailments from Attack Skills while wielding a Dagger"
  },
  "2295": {
    "name": "Hatchet Master",
    "description": "25% increased Damage with Axes<br>8% increased Attack Speed with Axes<br>25% increased Damage with Ailments from Attack Skills while wielding an Axe<br>40% increased Global Evasion Rating when on Full Life"
  },
  "2433": {
    "name": "Clever Construction",
    "description": "20% increased Trap Damage<br>20% increased Mine Damage<br>Traps cannot be Damaged for 5 seconds after being Thrown<br>Mines cannot be Damaged for 5 seconds after being thrown"
  },
  "2439": {
    "name": "Utmost Might",
    "description": "+40 to Strength<br>8% increased Strength"
  },
  "2349": {
    "name": "Wandslinger",
    "description": "8% increased Attack Speed with Wands<br>10% increased Accuracy Rating with Wands<br>16% increased Damage with Wands<br>16% increased Damage with Ailments from Attack Skills while wielding a Wand"
  },
  "1701": {
    "name": "Bludgeon Blitz",
    "description": "18% increased Damage with Maces and Sceptres<br>8% increased Attack Speed with Maces and Sceptres<br>+200 to Accuracy Rating with Maces and Sceptres<br>18% increased Damage with Ailments from Attack Skills while wielding a Mace or Sceptre<br>6% increased Movement Speed if you've Hit an Enemy Recently"
  },
  "2457": {
    "name": "Flash Freeze",
    "description": "24% increased Cold Damage<br>20% increased Projectile Speed<br>10% increased Effect of Chill"
  },
  "2917": {
    "name": "Flaying",
    "description": "24% increased Damage with Daggers<br>12% increased Attack Speed with Daggers<br>10% increased Accuracy Rating with Daggers<br>24% increased Damage with Ailments from Attack Skills while wielding a Dagger<br>+1 to Melee range with Daggers"
  },
  "2511": {
    "name": "Fearsome Force",
    "description": "Minions deal 15% increased Damage<br>Minions have 10% increased Area of Effect<br>Minions have 10% increased Area of Effect if you used a Minion Skill Recently<br>+10 to Intelligence"
  },
  "2919": {
    "name": "Redemption",
    "description": "12% increased Damage<br>Minions have 10% increased Movement Speed<br>Minions have 5% increased Attack Speed<br>Minions have 5% increased Cast Speed<br>20% increased Minion Accuracy Rating"
  },
  "2925": {
    "name": "Utmost Intellect",
    "description": "+40 to Intelligence<br>8% increased Intelligence"
  },
  "2187": {
    "name": "Enigmatic Defence",
    "description": "+5% Chance to Block Spell Damage while wielding a Staff<br>15% increased Spell Damage while wielding a Staff<br>10% chance to gain Unholy Might on block for 3 seconds<br>+5% Chance to Block Attack Damage while wielding a Staff"
  },
  "2943": {
    "name": "Butchery",
    "description": "25% increased Physical Damage with Two Handed Melee Weapons<br>5% increased Attack Speed with Two Handed Melee Weapons<br>25% increased Damage with Ailments from Attack Skills while wielding a Two Handed Weapon<br>+20 to Strength"
  },
  "2673": {
    "name": "Holy Dominion",
    "description": "+12% to all Elemental Resistances<br>12% increased Elemental Damage<br>5% chance to Freeze, Shock and Ignite<br>12% increased Physical Damage"
  },
  "2997": {
    "name": "Static Blows",
    "description": "20% increased Shock Duration on Enemies<br>40% increased Critical Strike Chance against Shocked Enemies<br>30% increased Damage if you have Shocked an Enemy Recently<br>30% increased Effect of Shock"
  },
  "3159": {
    "name": "Light Eater",
    "description": "0.8% of Spell Damage Leeched as Energy Shield<br>20% increased Maximum total Recovery per second from Energy Shield Leech<br>24% increased Damage while on Full Energy Shield"
  },
  "4375": {
    "name": "Shaper",
    "description": "40% increased Mana Regeneration Rate<br>Regenerate 1% of Life per second"
  },
  "6563": {
    "name": "Annihilation",
    "description": "50% increased Critical Strike Chance for Spells<br>+15% to Critical Strike Multiplier for Spells"
  },
  "4377": {
    "name": "Ash, Frost and Storm",
    "description": "+6% to all Elemental Resistances<br>20% increased Elemental Damage<br>20% reduced Reflected Elemental Damage taken"
  },
  "6565": {
    "name": "Testudo",
    "description": "60% increased Block Recovery<br>+20 Mana gained when you Block<br>40% increased Defences from Equipped Shield<br>+5% Chance to Block Attack Damage while holding a Shield"
  },
  "6567": {
    "name": "Lightning Walker",
    "description": "25% increased Lightning Damage<br>5% increased Cast Speed with Lightning Skills<br>+15% to Lightning Resistance"
  },
  "4383": {
    "name": "Nimbleness",
    "description": "6% increased Cast Speed<br>+12% to Critical Strike Multiplier for Spells<br>4% increased Movement Speed<br>15% chance to Avoid interruption from Stuns while Casting"
  },
  "3645": {
    "name": "Aspect of the Lynx",
    "description": "16% increased Attack Damage<br>4% increased Movement Speed<br>20% increased Critical Strike Chance<br>+10 to Dexterity and Intelligence"
  },
  "6571": {
    "name": "Exceptional Performance",
    "description": "25% increased Skill Effect Duration"
  },
  "6573": {
    "name": "Cleaving",
    "description": "20% increased Physical Damage with Axes<br>30% increased Damage with Hits and Ailments against Bleeding Enemies<br>20% increased Damage with Ailments from Attack Skills while wielding an Axe<br>Bleeding you inflict deals Damage 15% faster<br>+1 to Melee range with Axes"
  },
  "4401": {
    "name": "Arcane Focus",
    "description": "18% increased maximum Energy Shield<br>10% increased Energy Shield Recharge Rate"
  },
  "6589": {
    "name": "Combat Stamina",
    "description": "20% increased Armour<br>5% increased maximum Life<br>Regenerate 1% of Life per second"
  },
  "6591": {
    "name": "Will of Blades",
    "description": "25% increased Critical Strike Chance<br>25% increased Physical Damage"
  },
  "6579": {
    "name": "Divine Fury",
    "description": "Gain 5% of Physical Damage as Extra Fire Damage<br>12% increased Elemental Damage<br>Fire Spells have 15% of Physical Damage Converted to Fire Damage<br>12% increased Physical Damage"
  },
  "4455": {
    "name": "Heartseeker",
    "description": "+30% to Critical Strike Multiplier"
  },
  "6643": {
    "name": "Arcane Guarding",
    "description": "+6% Chance to Block Spell Damage while holding a Shield<br>15% increased Spell Damage while holding a Shield<br>60% increased Energy Shield from Equipped Shield<br>20% increased Spell Damage if you've Blocked Recently"
  },
  "6597": {
    "name": "Reflexes",
    "description": "+150 to Accuracy Rating<br>15% increased Global Accuracy Rating<br>+150 to Evasion Rating<br>30% increased Evasion Rating"
  },
  "6645": {
    "name": "Divine Judgement",
    "description": "+6% to Fire Damage over Time Multiplier<br>18% increased Elemental Damage<br>Damage Penetrates 5% Elemental Resistances<br>10% increased Effect of non-Damaging Ailments on Enemies"
  },
  "6615": {
    "name": "Trickery",
    "description": "20% increased Damage<br>20% increased Critical Strike Chance<br>+10 to Dexterity and Intelligence"
  },
  "6651": {
    "name": "Defiance",
    "description": "20% increased Attack Damage while holding a Shield<br>25% increased Defences from Equipped Shield<br>Attack Skills deal 20% increased Damage with Ailments while holding a Shield<br>+3% Chance to Block Attack Damage while holding a Shield"
  },
  "4617": {
    "name": "Harrier",
    "description": "9% increased Attack Speed<br>5% increased Cast Speed<br>5% increased Movement Speed"
  },
  "6805": {
    "name": "Twin Terrors",
    "description": "12% increased Accuracy Rating while Dual Wielding<br>75% increased Weapon Critical Strike Chance while Dual Wielding"
  },
  "6669": {
    "name": "Enigmatic Reach",
    "description": "8% increased Attack Speed with Staves<br>8% increased Cast Speed while wielding a Staff<br>3% increased Area of Effect per Power Charge<br>10% increased Area of Effect while wielding a Staff"
  },
  "6807": {
    "name": "Snowforged",
    "description": "25% increased Fire Damage<br>25% increased Cold Damage<br>+10% to Fire and Cold Resistances<br>30% increased Critical Strike Chance"
  },
  "6813": {
    "name": "Ambidexterity",
    "description": "50% increased Attack Damage with Main Hand<br>20% increased Attack Speed with Off Hand<br>Attack Skills deal 50% increased Damage with Ailments while Dual Wielding"
  },
  "6723": {
    "name": "Warrior's Blood",
    "description": "Regenerate 1.8% of Life per second<br>20% increased Stun Threshold<br>+20 to Strength"
  },
  "6831": {
    "name": "Command of the Elements",
    "description": "6% increased Attack Speed while holding a Shield<br>40% increased Defences from Equipped Shield<br>Damage with Weapons Penetrates 4% Elemental Resistance<br>24% increased Elemental Damage with Attack Skills"
  },
  "5103": {
    "name": "Light of Divinity",
    "description": "15% increased Spell Damage<br>4% increased Cast Speed<br>20% increased Critical Strike Chance for Spells<br>10% increased Light Radius<br>+10 to Strength and Intelligence"
  },
  "7291": {
    "name": "Acuity",
    "description": "5% increased Attack Speed<br>+100 to Accuracy Rating<br>15% increased Global Accuracy Rating<br>+20 to Dexterity"
  },
  "6885": {
    "name": "Finesse",
    "description": "8% increased Attack Speed<br>15% increased Global Accuracy Rating<br>+20 to Dexterity"
  },
  "7293": {
    "name": "Mental Rapidity",
    "description": "8% increased Cast Speed<br>10% increased Energy Shield Recharge Rate<br>20% increased Mana Regeneration Rate"
  },
  "7299": {
    "name": "Revelry",
    "description": "+20 to maximum Mana<br>15% increased maximum Mana<br>+2 Mana gained for each Enemy hit by your Attacks"
  },
  "7317": {
    "name": "Aggressive Bastion",
    "description": "30% increased Physical Attack Damage while holding a Shield<br>Attack Skills deal 30% increased Damage with Ailments while holding a Shield<br>5% chance to gain an Endurance Charge on Kill while holding a Shield<br>+4% Chance to Block Attack Damage while holding a Shield"
  },
  "7047": {
    "name": "Sanctity",
    "description": "20% increased Armour<br>10% increased maximum Energy Shield<br>Regenerate 1% of Life per second<br>+10 to Strength and Intelligence"
  },
  "7371": {
    "name": "Essence Sap",
    "description": "0.6% of Attack Damage Leeched as Mana<br>25% increased Maximum total Recovery per second from Mana Leech<br>+2 Mana gained for each Enemy hit by your Attacks<br>20% increased total Recovery per second from Mana Leech"
  },
  "7533": {
    "name": "Adamant",
    "description": "20% increased Armour<br>+250 to Armour while affected by a Guard Skill Buff<br>10% chance when Hit for double Armour effect<br>Regenerate 0.5% of Life per second while affected by a Guard Skill Buff"
  },
  "6561": {
    "name": "Coldhearted Calculation",
    "description": "12% increased Attack Damage<br>12% increased Spell Damage<br>20% increased Mana Regeneration Rate<br>+20 to Intelligence"
  },
  "8749": {
    "name": "Arcanist's Dominion",
    "description": "20% increased Spell Damage<br>5% increased Cast Speed<br>+20 to Intelligence"
  },
  "19685": {
    "name": "Eagle Eye",
    "description": "+100 to Accuracy Rating<br>15% increased Global Accuracy Rating<br>30% increased Critical Strike Chance"
  },
  "8751": {
    "name": "Storm Weaver",
    "description": "25% increased Cold Damage<br>25% increased Lightning Damage<br>20% increased Mana Regeneration Rate<br>10% increased Effect of non-Damaging Ailments on Enemies"
  },
  "19687": {
    "name": "Berserking",
    "description": "12% increased Attack Speed"
  },
  "19689": {
    "name": "Potency of Will",
    "description": "25% increased Skill Effect Duration"
  },
  "8757": {
    "name": "Coordination",
    "description": "12% increased Attack Speed<br>6% increased Cast Speed<br>+10 to Dexterity and Intelligence"
  },
  "8019": {
    "name": "Graceful Assault",
    "description": "20% increased Attack Damage<br>30% increased Evasion Rating during Onslaught<br>20% increased Onslaught Effect<br>10% chance to gain Onslaught for 4 seconds on Kill"
  },
  "19693": {
    "name": "Brinkmanship",
    "description": "5% reduced Area Damage taken from Hits<br>+2 to Melee Weapon and Unarmed Attack range<br>10% increased Area of Effect if you have Stunned an Enemy Recently<br>Melee Skills have 10% increased Area of Effect"
  },
  "19695": {
    "name": "Fleetfoot",
    "description": "20% increased Evasion Rating<br>5% increased Movement Speed<br>10% increased Attack and Cast Speed if you've used a Movement Skill Recently<br>20% increased Cooldown Recovery Speed of Movement Skills"
  },
  "8775": {
    "name": "Precise Interception",
    "description": "15% increased Attack Damage while holding a Shield<br>6% increased Attack Speed while holding a Shield<br>60% increased Defences from Equipped Shield<br>Attack Skills deal 15% increased Damage with Ailments while holding a Shield<br>+3% Chance to Block Attack Damage while holding a Shield"
  },
  "19711": {
    "name": "Blast Radius",
    "description": "10% increased Area of Effect<br>20% increased Area Damage"
  },
  "19713": {
    "name": "Destroyer",
    "description": "25% increased Physical Damage with Two Handed Melee Weapons<br>5% increased Attack Speed with Two Handed Melee Weapons<br>12% increased Accuracy Rating with Two Handed Melee Weapons<br>25% increased Damage with Ailments from Attack Skills while wielding a Two Handed Weapon"
  },
  "19701": {
    "name": "Divine Wrath",
    "description": "Gain 5% of Physical Damage as Extra Lightning Damage<br>12% increased Elemental Damage<br>Lightning Spells have 15% of Physical Damage Converted to Lightning Damage<br>12% increased Physical Damage"
  },
  "8829": {
    "name": "True Strike",
    "description": "+12% to Critical Strike Multiplier<br>45% increased Critical Strike Chance"
  },
  "19765": {
    "name": "Wrecking Ball",
    "description": "10% increased Attack Speed with Two Handed Melee Weapons<br>20% increased Stun Duration with Two Handed Melee Weapons on Enemies<br>20% increased Damage with Two Handed Weapons<br>20% increased Damage with Ailments from Attack Skills while wielding a Two Handed Weapon"
  },
  "19719": {
    "name": "Titanic Impacts",
    "description": "12% increased Accuracy Rating with Two Handed Melee Weapons<br>40% increased Critical Strike Chance with Two Handed Melee Weapons<br>+20% to Critical Strike Multiplier with Two Handed Melee Weapons"
  },
  "19767": {
    "name": "Deflection",
    "description": "+4% Chance to Block Spell Damage while holding a Shield<br>40% increased Defences from Equipped Shield<br>+8% Chance to Block Projectile Attack Damage<br>+4% Chance to Block Attack Damage while holding a Shield"
  },
  "19737": {
    "name": "Versatility",
    "description": "5% increased Attack Speed<br>10% increased Global Accuracy Rating<br>20% increased Critical Strike Chance<br>+20 to Dexterity and Intelligence"
  },
  "19773": {
    "name": "Juggernaut",
    "description": "+1000 to Accuracy Rating<br>Cannot be Chilled<br>Cannot be Stunned<br>5% increased Damage per Endurance Charge<br>Gain an Endurance Charge every second if you've been Hit Recently"
  },
  "8991": {
    "name": "Dervish",
    "description": "+2% Chance to Block Attack Damage while Dual Wielding<br>24% increased Weapon Damage while Dual Wielding<br>6% increased Attack Speed while Dual Wielding<br>Attack Skills deal 24% increased Damage with Ailments while Dual Wielding"
  },
  "19927": {
    "name": "Strong Arm",
    "description": "25% increased Physical Damage with One Handed Melee Weapons<br>5% increased Attack Speed with One Handed Melee Weapons<br>25% increased Damage with Ailments from Attack Skills while wielding a One Handed Weapon<br>+20 to Strength"
  },
  "19791": {
    "name": "Sleight of Hand",
    "description": "8% increased Attack Speed with One Handed Melee Weapons<br>20% increased Damage with One Handed Weapons<br>30% increased Damage with Ailments from Attack Skills while wielding a One Handed Weapon"
  },
  "19929": {
    "name": "Battle Cry",
    "description": "10% increased Warcry Cooldown Recovery Speed<br>Using Warcries is Instant<br>20% increased Warcry Buff Effect"
  },
  "19935": {
    "name": "Amplify",
    "description": "10% increased Area of Effect<br>20% increased Area Damage"
  },
  "19845": {
    "name": "Dazzling Strikes",
    "description": "15% increased Global Accuracy Rating<br>40% increased Critical Strike Chance against Blinded Enemies<br>10% chance to Blind Enemies on Hit with Attacks"
  },
  "19953": {
    "name": "Explosive Impact",
    "description": "25% increased Fire Damage<br>8% increased Area of Effect"
  },
  "9477": {
    "name": "Fire Walker",
    "description": "25% increased Fire Damage<br>5% increased Cast Speed with Fire Skills<br>+15% to Fire Resistance"
  },
  "20413": {
    "name": "Blade Barrier",
    "description": "+5% Chance to Block Attack Damage while Dual Wielding<br>50% increased Block Recovery<br>24% increased Weapon Damage while Dual Wielding<br>Attack Skills deal 24% increased Damage with Ailments while Dual Wielding"
  },
  "20007": {
    "name": "Dark Arts",
    "description": "5% increased Cast Speed while Dual Wielding<br>10% increased Attack and Cast Speed if you've used a Movement Skill Recently<br>30% increased Mana Regeneration if you've used a Movement Skill Recently<br>+10 to Dexterity and Intelligence"
  },
  "20415": {
    "name": "Melding",
    "description": "10% increased maximum Energy Shield<br>6% increased maximum Life"
  },
  "20421": {
    "name": "Throatseeker",
    "description": "+30% to Critical Strike Multiplier"
  },
  "20439": {
    "name": "Frost Walker",
    "description": "25% increased Cold Damage<br>5% increased Cast Speed with Cold Skills<br>+15% to Cold Resistance"
  },
  "20169": {
    "name": "Steadfast",
    "description": "30% increased Armour while you have Fortify<br>10% increased Effect of Fortify on you<br>10% increased Effect of Fortify on you while Stationary"
  },
  "20493": {
    "name": "Mysticism",
    "description": "+4% Chance to Block Spell Damage while Dual Wielding<br>+4% Chance to Block Attack Damage while Dual Wielding<br>16% increased Spell Damage while Dual Wielding<br>10% chance to gain a Frenzy Charge when you Block Attack Damage<br>10% chance to gain a Power Charge when you Block Spell Damage"
  },
  "20655": {
    "name": "Ballistic Mastery",
    "description": "20% increased Projectile Speed<br>15% increased Projectile Damage<br>+20 to Dexterity"
  },
  "10935": {
    "name": "Essence Extraction",
    "description": "15% increased Mana Regeneration Rate<br>15% increased Flask Charges gained<br>Mana Flasks gain 1 Charge every 3 seconds<br>Remove a random Elemental Ailment when you use a Mana Flask"
  },
  "21871": {
    "name": "Retribution",
    "description": "14% increased Damage<br>Minions deal 10% increased Damage<br>5% increased Attack and Cast Speed<br>+10 to Strength and Intelligence"
  },
  "13123": {
    "name": "Lethal Assault",
    "description": "18% increased Damage<br>10% increased Projectile Speed<br>10% increased Area of Effect"
  },
  "21873": {
    "name": "Soul Thief",
    "description": "18% increased Evasion Rating<br>12% increased maximum Energy Shield<br>0.3% of Spell Damage Leeched as Energy Shield"
  },
  "13125": {
    "name": "Sanctum of Thought",
    "description": "You take 20% reduced Extra Damage from Critical Strikes<br>30% increased Armour<br>20% reduced Effect of Curses on you"
  },
  "21879": {
    "name": "Command of Steel",
    "description": "25% increased Attack Damage while holding a Shield<br>6% increased Attack Speed while holding a Shield<br>Attack Skills deal 25% increased Damage with Ailments while holding a Shield<br>+3% Chance to Block Attack Damage while holding a Shield"
  },
  "13131": {
    "name": "Precision",
    "description": "10% increased Global Accuracy Rating<br>4% increased Movement Speed<br>5% increased Attack and Cast Speed<br>+20 to Dexterity"
  },
  "21141": {
    "name": "Hired Killer",
    "description": "6% increased maximum Life<br>+10 Life gained on Kill"
  },
  "21897": {
    "name": "Retaliation",
    "description": "20% increased Attack Damage while holding a Shield<br>8% increased Attack Speed while holding a Shield<br>40% increased Defences from Equipped Shield<br>Attack Skills deal 20% increased Damage with Ailments while holding a Shield"
  },
  "13149": {
    "name": "Righteous Army",
    "description": "Minions have 20% increased maximum Life<br>Regenerate 1% of Life per second<br>Minions deal 20% increased Damage<br>Minions Regenerate of 1% Life per second"
  },
  "21951": {
    "name": "Longshot",
    "description": "20% increased Projectile Speed<br>20% increased Projectile Attack Damage<br>Projectiles gain Damage as they travel farther, dealing up to 40% increased Damage with Hits to targets"
  },
  "13203": {
    "name": "Ribcage Crusher",
    "description": "18% increased Damage with Maces and Sceptres<br>6% increased Attack Speed with Maces and Sceptres<br>15% increased Area of Effect if you have Stunned an Enemy Recently<br>18% increased Damage with Ailments from Attack Skills while wielding a Mace or Sceptre"
  },
  "22113": {
    "name": "Dire Torment",
    "description": "+20% to Damage over Time Multiplier for Ailments from Critical Strikes<br>30% increased Critical Strike Chance"
  },
  "13365": {
    "name": "Gravepact",
    "description": "Minions deal 15% increased Damage<br>Minions have 8% increased Attack Speed<br>30% increased Minion Accuracy Rating<br>Minions have 5% chance to deal Double Damage"
  },
  "59051": {
    "name": "Arcing Blows",
    "description": "Damage with Weapons Penetrates 8% Lightning Resistance<br>30% increased Lightning Damage with Attack Skills<br>10% increased Effect of Shock"
  },
  "22599": {
    "name": "Disciple of the Unyielding",
    "description": "+1 to Minimum Endurance Charges<br>5% chance to gain an Endurance Charge on Kill<br>5% increased Damage per Endurance Charge"
  },
  "13851": {
    "name": "Disintegration",
    "description": "60% increased Critical Strike Chance with Wands<br>+30% to Critical Strike Multiplier with Wands<br>+20 to Intelligence"
  },
  "59053": {
    "name": "Blade Master",
    "description": "20% increased Physical Damage with Swords<br>8% increased Attack Speed with Swords<br>+200 to Accuracy Rating with Swords<br>20% increased Damage with Ailments from Attack Skills while wielding a Sword<br>+1 to Melee range with Swords"
  },
  "59055": {
    "name": "Fangs of Frost",
    "description": "Damage with Weapons Penetrates 8% Cold Resistance<br>30% increased Cold Damage with Attack Skills<br>10% increased Effect of Chill"
  },
  "59059": {
    "name": "Counterweight",
    "description": "60% increased Global Critical Strike Chance while wielding a Staff<br>+30% to Global Critical Strike Multiplier while wielding a Staff"
  },
  "59061": {
    "name": "Destructive Apparatus",
    "description": "20% increased Mine Damage<br>40% increased Mine Duration<br>10% increased Mine Throwing Speed<br>Each Mine applies 2% reduced Damage dealt to Enemies near it, up to 10%"
  },
  "59077": {
    "name": "Hunter's Gambit",
    "description": "+10% to Chaos Damage over Time Multiplier<br>24% increased Damage with Bows<br>10% increased Skill Effect Duration<br>24% increased Damage Over Time with Bow Skills<br>Poisons you inflict deal Damage 10% faster"
  },
  "59079": {
    "name": "Soul Raker",
    "description": "20% increased Damage with Claws<br>1.2% of Attack Damage Leeched as Life<br>0.8% of Attack Damage Leeched as Mana<br>50% increased total Recovery per second from Life Leech<br>20% increased Damage with Ailments from Attack Skills while wielding a Claw"
  },
  "59067": {
    "name": "Dirty Techniques",
    "description": "+10% to Damage over Time Multiplier<br>20% increased Poison Duration<br>20% increased Bleeding Duration<br>Bleeding you inflict deals Damage 5% faster<br>Poisons you inflict deal Damage 5% faster"
  },
  "59131": {
    "name": "Backstabbing",
    "description": "40% increased Critical Strike Chance with Daggers<br>+30% to Critical Strike Multiplier with Daggers<br>+40% to Critical Strike Multiplier against Enemies that are on Full Life<br>30% increased Critical Strike Chance against Enemies on Full Life"
  },
  "59085": {
    "name": "Tempest Blast",
    "description": "Gain 20% of Wand Physical Damage as Extra Lightning Damage"
  },
  "59133": {
    "name": "Winter Spirit",
    "description": "20% of Physical Damage Converted to Cold Damage<br>16% increased Cold Damage with Attack Skills"
  },
  "59103": {
    "name": "High Explosives",
    "description": "30% increased Mine Duration<br>30% increased Trap Trigger Area of Effect<br>Trap Damage Penetrates 10% Elemental Resistances<br>Mine Damage Penetrates 10% Elemental Resistances"
  },
  "59139": {
    "name": "Holy Fire",
    "description": "+12% to Fire Damage over Time Multiplier<br>20% increased Fire Damage<br>15% chance to Ignite"
  },
  "59293": {
    "name": "Shaman's Dominion",
    "description": "100% increased Global Critical Strike Chance if you've Summoned a Totem Recently<br>+20% to Critical Strike Multiplier with Totem Skills<br>50% increased Critical Strike Chance with Brand Skills<br>+20% to Critical Strike Multiplier with Brand Skills"
  },
  "59157": {
    "name": "Method to the Madness",
    "description": "+8% to Chaos Damage over Time Multiplier<br>22% increased Chaos Damage<br>+8% to Chaos Resistance"
  },
  "59295": {
    "name": "Blade of Cunning",
    "description": "20% increased Physical Damage with Swords<br>40% increased Critical Strike Chance with Swords<br>+15% to Critical Strike Multiplier with Swords<br>20% increased Damage with Ailments from Attack Skills while wielding a Sword"
  },
  "59301": {
    "name": "Searing Heat",
    "description": "+20% to Damage over Time Multiplier for Ignite from Critical Strikes<br>45% increased Critical Strike Chance for Spells<br>+20% to Critical Strike Multiplier against Burning Enemies"
  },
  "59211": {
    "name": "Devastating Devices",
    "description": "50% increased Critical Strike Chance with Traps<br>50% increased Critical Strike Chance with Mines<br>+30% to Critical Strike Multiplier with Traps<br>+30% to Critical Strike Multiplier with Mines"
  },
  "59319": {
    "name": "Forces of Nature",
    "description": "Damage with Weapons Penetrates 6% Elemental Resistance<br>20% increased Elemental Damage with Attack Skills"
  },
  "24057": {
    "name": "Singular Focus",
    "description": "4% additional Physical Damage Reduction while Channelling<br>Channelling Skills have 6% increased Attack and Cast Speed<br>Channelling Skills deal 15% increased Damage"
  },
  "15309": {
    "name": "Corruption",
    "description": "15% increased Damage over Time<br>+10% to Chaos Damage over Time Multiplier<br>15% increased Chaos Damage"
  },
  "26245": {
    "name": "Skull Cracking",
    "description": "30% increased Physical Damage with Maces and Sceptres<br>10% reduced Enemy Stun Threshold with Maces and Sceptres<br>Hits that Stun Enemies have Culling Strike<br>30% increased Damage with Ailments from Attack Skills while wielding a Mace or Sceptre"
  },
  "26247": {
    "name": "Adder's Touch",
    "description": "+15% to Damage over Time Multiplier for Poison from Critical Strikes<br>Critical Strikes with Daggers have a 40% chance to Poison the Enemy<br>+30% to Critical Strike Multiplier with Daggers<br>20% increased Damage with Poison"
  },
  "59779": {
    "name": "Fatal Toxins",
    "description": "+10% to Damage over Time Multiplier for Poison<br>+10% to Chaos Resistance<br>10% increased Poison Duration<br>30% increased Damage with Poison"
  },
  "59373": {
    "name": "Gladiator's Perseverance",
    "description": "20% increased Physical Damage with One Handed Melee Weapons<br>0.6% of Physical Attack Damage Leeched as Life<br>10% increased Maximum total Recovery per second from Life Leech<br>20% increased Damage with Ailments from Attack Skills while wielding a One Handed Weapon<br>20% increased Attack Damage while Leeching"
  },
  "59781": {
    "name": "Lethality",
    "description": "16% increased Damage with Bows<br>50% increased Critical Strike Chance with Bows<br>+30% to Critical Strike Multiplier with Bows<br>16% increased Damage Over Time with Bow Skills"
  },
  "26253": {
    "name": "Feller of Foes",
    "description": "30% increased Damage with Axes<br>+30% to Critical Strike Multiplier with Axes<br>+200 to Accuracy Rating with Axes<br>30% increased Damage with Ailments from Attack Skills while wielding an Axe"
  },
  "59787": {
    "name": "Lucidity",
    "description": "40% chance to Avoid being Stunned while Channelling<br>Channelling Skills deal 30% increased Damage<br>Channelling Skills have -3 to Total Mana Cost"
  },
  "26271": {
    "name": "Blacksmith's Clout",
    "description": "18% increased Physical Damage with Maces and Sceptres<br>40% increased Critical Strike Chance with Maces and Sceptres<br>+25% to Critical Strike Multiplier with Maces and Sceptres<br>18% increased Damage with Ailments from Attack Skills while wielding a Mace or Sceptre"
  },
  "59805": {
    "name": "King of the Hill",
    "description": "16% increased Damage with Bows<br>80% increased Critical Strike Chance with Bows<br>Knocks Back Enemies if you get a Critical Strike with a Bow<br>16% increased Damage Over Time with Bow Skills"
  },
  "59535": {
    "name": "Bloodletting",
    "description": "+8% to Damage over Time Multiplier for Bleeding<br>40% increased Attack Damage against Bleeding Enemies<br>25% increased Damage with Bleeding<br>5% reduced Damage taken from Bleeding Enemies<br>Bleeding you inflict deals Damage 10% faster"
  },
  "26325": {
    "name": "Master Sapper",
    "description": "30% increased Trap Damage<br>20% increased Trap Trigger Area of Effect<br>Can have up to 2 additional Traps placed at a time<br>15% chance to gain a Frenzy Charge when your Trap is triggered by an Enemy"
  },
  "59859": {
    "name": "Charging Offensive",
    "description": "Channelling Skills deal 16% increased Attack Damage<br>Channelling Skills have 6% increased Attack Speed<br>20% chance to gain an Endurance Charge when Hit while Channelling<br>20% chance to gain a Frenzy Charge when Hit while Channelling"
  },
  "26487": {
    "name": "Serpent Stance",
    "description": "40% increased Global Critical Strike Chance while wielding a Staff<br>+35% to Global Critical Strike Multiplier while wielding a Staff"
  },
  "60021": {
    "name": "Primeval Force",
    "description": "10% reduced Reflected Elemental Damage taken<br>Damage with Weapons Penetrates 5% Elemental Resistance<br>20% increased Elemental Damage during any Flask Effect<br>20% increased Elemental Damage with Attack Skills"
  },
  "61237": {
    "name": "Death Attunement",
    "description": "Minions have 8% increased Attack Speed<br>Minions have 8% increased Cast Speed<br>+1 to Maximum number of Spectres<br>+1 to Maximum number of Raised Zombies<br>+1 to Maximum number of Skeletons"
  },
  "61239": {
    "name": "Deadly Draw",
    "description": "20% increased Physical Damage with Bows<br>Bow Attacks have 10% chance to cause Bleeding<br>30% increased Damage Over Time with Bow Skills<br>Bleeding you inflict deals Damage 15% faster"
  },
  "26973": {
    "name": "Claws of the Hawk",
    "description": "40% increased Critical Strike Chance with Claws<br>+25% to Critical Strike Multiplier with Claws<br>10% chance to Blind Enemies on Critical Strike"
  },
  "61245": {
    "name": "Blast Cascade",
    "description": "+30% to Critical Strike Multiplier with Traps<br>+30% to Critical Strike Multiplier with Mines<br>15% chance to gain a Power Charge when your Trap is triggered by an Enemy<br>15% chance to gain a Power Charge when your Mine is Detonated targeting an Enemy"
  },
  "60507": {
    "name": "Swift Skewering",
    "description": "15% increased Attack Physical Damage<br>5% increased Attack Speed<br>15% chance to Impale Enemies on Hit with Attacks"
  },
  "61263": {
    "name": "Lord of the Dead",
    "description": "Minions have 10% increased maximum Life<br>Minions deal 15% increased Damage<br>30% increased Minion Accuracy Rating<br>+1 to Maximum number of Raised Zombies<br>+1 to Maximum number of Skeletons"
  },
  "61317": {
    "name": "Blunt Trauma",
    "description": "15% increased Accuracy Rating with Staves<br>40% increased Critical Strike Chance with Staves<br>+20% to Critical Strike Multiplier with Staves<br>Knocks Back Enemies if you get a Critical Strike with a Staff"
  },
  "61479": {
    "name": "Runesmith",
    "description": "You can Cast an additional Brand<br>Brand Skills deal 30% increased Damage to Enemies they're Attached to<br>Brand Skills have 10% increased Duration<br>12% increased Brand Activation frequency"
  },
  "28431": {
    "name": "Hex Master",
    "description": "40% increased Area of Effect of Curse Skills<br>5% increased Effect of your Curses<br>Curse Skills have 80% increased Skill Effect Duration"
  },
  "19683": {
    "name": "Disciple of the Forbidden",
    "description": "+1 to Minimum Power Charges<br>5% chance to gain a Power Charge on Kill<br>5% increased Damage per Power Charge"
  },
  "39367": {
    "name": "Avatar of the Hunt",
    "description": "24% increased Damage with Bows<br>+200 to Evasion Rating<br>6% increased Movement Speed<br>24% increased Damage Over Time with Bow Skills<br>20% increased Cooldown Recovery Speed of Movement Skills"
  },
  "39369": {
    "name": "Prism Weave",
    "description": "6% increased Attack Speed with Wands<br>24% increased Elemental Damage with Wands<br>Damage with Weapons Penetrates 5% Elemental Resistance"
  },
  "61965": {
    "name": "Indomitable Army",
    "description": "Minions have 15% increased maximum Life<br>Minions have 15% additional Physical Damage Reduction<br>Minions have +15% to all Elemental Resistances<br>Moving while Bleeding doesn't cause Minions to take extra Damage"
  },
  "39375": {
    "name": "Fatal Blade",
    "description": "10% increased Damage with Swords<br>60% increased Critical Strike Chance with Swords<br>+30% to Critical Strike Multiplier with Swords<br>10% increased Damage with Ailments from Attack Skills while wielding a Sword"
  },
  "177149": {
    "name": "Lava Lash",
    "description": "Damage with Weapons Penetrates 8% Fire Resistance<br>30% increased Fire Damage with Attack Skills"
  },
  "177151": {
    "name": "Atrophy",
    "description": "+10% to Chaos Damage over Time Multiplier<br>20% increased Chaos Damage<br>4% increased Cast Speed with Chaos Skills<br>+8% to Chaos Resistance"
  },
  "39393": {
    "name": "Ravenous Horde",
    "description": "Minions have 20% increased Movement Speed<br>Minions deal 20% increased Damage<br>Minions have 5% increased Attack Speed<br>Minions have 5% increased Cast Speed<br>Minions have 10% chance to gain Onslaught for 4 seconds on Kill"
  },
  "177153": {
    "name": "Spiritual Command",
    "description": "Minions have 8% increased Attack Speed<br>Minions have 8% increased Cast Speed<br>Increases and Reductions to Minion Attack Speed also affect you<br>20% increased Minion Accuracy Rating"
  },
  "177157": {
    "name": "Swift Venoms",
    "description": "+8% to Damage over Time Multiplier for Poison<br>8% increased Attack Speed<br>10% chance to Poison on Hit with Attacks<br>16% increased Damage with Poison<br>Poisons you inflict deal Damage 5% faster"
  },
  "177159": {
    "name": "Stun Mastery",
    "description": "10% reduced Enemy Stun Threshold<br>30% increased Stun and Block Recovery<br>10% chance to gain an Endurance Charge when you Stun an Enemy with a Melee Hit<br>10% chance to double Stun Duration"
  },
  "39447": {
    "name": "One with the River",
    "description": "30% increased Elemental Damage with Staves<br>Damage with Weapons Penetrates 5% Elemental Resistance<br>5% reduced Elemental Damage taken while stationary"
  },
  "177175": {
    "name": "Enduring Bond",
    "description": "15% increased Skill Effect Duration<br>Minions deal 20% increased Damage<br>Minions deal 20% increased Damage if you've used a Minion Skill Recently<br>15% increased Minion Duration"
  },
  "177177": {
    "name": "Brutal Blade",
    "description": "+4% Chance to Block Attack Damage while Dual Wielding or holding a Shield<br>20% increased Damage with Swords<br>8% increased Attack Speed with Swords<br>20% increased Damage with Ailments from Attack Skills while wielding a Sword<br>10% chance to gain a Frenzy Charge when you Block Attack Damage"
  },
  "177165": {
    "name": "Claws of the Falcon",
    "description": "16% increased Damage with Claws<br>12% increased Accuracy Rating with Claws<br>+30% to Critical Strike Multiplier with Claws<br>16% increased Damage with Ailments from Attack Skills while wielding a Claw"
  },
  "177229": {
    "name": "Growth and Decay",
    "description": "20% increased Damage over Time<br>+10% to Damage over Time Multiplier<br>Regenerate 1% of Life per second"
  },
  "177183": {
    "name": "Disciple of the Slaughter",
    "description": "+1 to Minimum Frenzy Charges<br>5% chance to gain a Frenzy Charge on Kill<br>5% increased Damage per Frenzy Charge"
  },
  "177231": {
    "name": "Nightstalker",
    "description": "20% increased Damage with Daggers<br>40% increased Critical Strike Chance with Daggers<br>+20% to Critical Strike Multiplier with Daggers<br>+150 to Accuracy Rating with Daggers<br>20% increased Damage with Ailments from Attack Skills while wielding a Dagger"
  },
  "39609": {
    "name": "Volatile Mines",
    "description": "20% increased Mine Damage<br>Can have up to 2 additional Remote Mines placed at a time<br>Mines have 20% increased Detonation Speed<br>Each Mine applies 2% increased Damage taken to Enemies near it, up to 10%"
  },
  "177201": {
    "name": "Insightfulness",
    "description": "10% increased maximum Energy Shield<br>10% increased maximum Mana<br>10% reduced Mana Cost of Skills while on Full Energy Shield<br>+10 to Intelligence"
  },
  "177237": {
    "name": "Arcane Chemistry",
    "description": "15% increased maximum Mana<br>25% increased Mana Recovery from Flasks<br>15% reduced Flask Charges used<br>Flasks applied to you have 8% increased Effect"
  },
  "177391": {
    "name": "Cleansed Thoughts",
    "description": "Chaos Resistance is doubled"
  },
  "177255": {
    "name": "Influence",
    "description": "14% increased effect of Non-Curse Auras from your Skills"
  },
  "177393": {
    "name": "Heart of Thunder",
    "description": "25% increased Lightning Damage<br>Damage Penetrates 6% Lightning Resistance<br>0.2% of Lightning Damage Leeched as Energy Shield"
  },
  "63423": {
    "name": "Devotion",
    "description": "8% increased maximum Life<br>3% increased effect of Non-Curse Auras from your Skills<br>+20 to Strength"
  },
  "65611": {
    "name": "Purity of Flesh",
    "description": "8% increased maximum Life<br>+8% to Chaos Resistance<br>+10 to Strength"
  },
  "177399": {
    "name": "Doom Cast",
    "description": "60% increased Critical Strike Chance for Spells<br>+15% to Critical Strike Multiplier for Spells"
  },
  "177309": {
    "name": "Quick Recovery",
    "description": "6% increased maximum Life<br>20% increased Mana Regeneration Rate<br>Regenerate 0.8% of Life per second"
  },
  "65613": {
    "name": "Crystal Skin",
    "description": "+5% to all Elemental Resistances<br>15% chance to Avoid Elemental Ailments<br>5% reduced Elemental Damage taken"
  },
  "40095": {
    "name": "Bravery",
    "description": "24% increased Evasion Rating and Armour<br>8% increased maximum Life"
  },
  "177417": {
    "name": "Breath of Flames",
    "description": "+10% to Fire Damage over Time Multiplier<br>20% increased Fire Damage<br>20% increased Ignite Duration on Enemies<br>20% chance to Ignite"
  },
  "65619": {
    "name": "Fervour",
    "description": "+1 to Maximum Frenzy Charges"
  },
  "177877": {
    "name": "Transcendence",
    "description": "-10 Physical Damage taken from Hits<br>-1 Physical Damage taken from Hits per Level"
  },
  "65637": {
    "name": "Profane Chemistry",
    "description": "6% increased maximum Life<br>30% increased Life Recovery from Flasks<br>Flasks applied to you have 8% increased Effect"
  },
  "177471": {
    "name": "Heart of Flame",
    "description": "25% increased Fire Damage<br>Damage Penetrates 6% Fire Resistance<br>0.2% of Fire Damage Leeched as Energy Shield"
  },
  "177879": {
    "name": "Written in Blood",
    "description": "10% increased maximum Energy Shield<br>8% increased maximum Life<br>+10 to Strength"
  },
  "177885": {
    "name": "Aqueous Accelerant",
    "description": "Flasks applied to you have 10% increased Effect<br>8% increased Attack and Cast Speed during Effect of any Mana Flask<br>10% increased Mana Recovery Rate during Effect of any Mana Flask"
  },
  "65691": {
    "name": "Cruel Preparation",
    "description": "10% increased maximum Life<br>+5% to all Elemental Resistances"
  },
  "177903": {
    "name": "Disemboweling",
    "description": "50% increased Melee Critical Strike Chance<br>+25% to Melee Critical Strike Multiplier"
  },
  "177633": {
    "name": "Cursed Concoction",
    "description": "15% increased maximum Mana<br>10% increased Effect of your Curses if you've spent 200 total Mana Recently<br>Remove a Curse when you use a Mana Flask"
  },
  "177957": {
    "name": "Soul Siphon",
    "description": "+10 to maximum Mana<br>18% increased maximum Mana<br>+5 Mana gained on Kill"
  },
  "65853": {
    "name": "Arcane Potency",
    "description": "30% increased Critical Strike Chance for Spells<br>+30% to Critical Strike Multiplier for Spells"
  },
  "178119": {
    "name": "Breath of Lightning",
    "description": "20% increased Lightning Damage<br>20% increased Shock Duration on Enemies<br>10% chance to Shock<br>15% increased Effect of Shock"
  },
  "41553": {
    "name": "Vigour",
    "description": "+1 to Maximum Endurance Charges"
  },
  "32805": {
    "name": "Master of Force",
    "description": "20% reduced Reflected Physical Damage taken<br>4% chance to deal Double Damage<br>+20 to Strength<br>20% increased Physical Damage"
  },
  "66339": {
    "name": "Hematophagy",
    "description": "1% of Physical Attack Damage Leeched as Life<br>15% increased Maximum total Recovery per second from Life Leech<br>20% increased total Recovery per second from Life Leech<br>30% increased Damage while Leeching"
  },
  "179335": {
    "name": "Druidic Rite",
    "description": "+15 to maximum Mana<br>15% increased maximum Mana<br>20% increased Flask Charges gained<br>20% increased Flask Effect Duration"
  },
  "179337": {
    "name": "Heart and Soul",
    "description": "8% increased maximum Life<br>12% increased maximum Mana"
  },
  "179343": {
    "name": "Bloodless",
    "description": "8% increased maximum Life<br>Enemies Cannot Leech Life From you"
  },
  "178605": {
    "name": "Born to Fight",
    "description": "4% increased Melee Attack Speed<br>+20 to Accuracy Rating<br>26% increased Melee Physical Damage<br>+20 to Strength"
  },
  "179361": {
    "name": "Heart of Oak",
    "description": "8% increased maximum Life<br>20% chance to Avoid being Stunned<br>20% increased Stun and Block Recovery<br>Regenerate 1% of Life per second"
  },
  "179415": {
    "name": "Champion of the Cause",
    "description": "12% increased Area of Effect of Aura Skills<br>4% reduced Mana Reserved<br>6% increased effect of Non-Curse Auras from your Skills"
  },
  "179577": {
    "name": "Survivalist",
    "description": "24% increased Evasion Rating<br>+8% to all Elemental Resistances<br>+1% to maximum Cold Resistance<br>+3% chance to Evade Attacks"
  },
  "67797": {
    "name": "Overcharge",
    "description": "+1 to Maximum Power Charges"
  },
  "78733": {
    "name": "Overcharged",
    "description": "8% chance to gain a Power, Frenzy or Endurance Charge on Kill"
  },
  "78735": {
    "name": "Master of the Arena",
    "description": "Regenerate 1% of Life per second<br>8% increased Melee Physical Damage<br>+2 to Melee Weapon and Unarmed Attack range<br>+20 to Strength"
  },
  "78741": {
    "name": "Mystic Talents",
    "description": "16% increased Spell Damage<br>+14 to maximum Energy Shield<br>25% increased Mana Regeneration Rate<br>+30 to Intelligence"
  },
  "180063": {
    "name": "Fingers of Frost",
    "description": "+10% to Cold Damage over Time Multiplier<br>12% increased Cold Damage<br>Enemies Become Chilled as they Unfreeze<br>10% chance to Freeze Enemies which are Chilled<br>10% increased Effect of Chill"
  },
  "78759": {
    "name": "Divine Fervour",
    "description": "25% increased Melee Critical Strike Chance<br>Damage with Weapons Penetrates 3% Elemental Resistance<br>24% increased Elemental Damage with Attack Skills<br>+10 to Strength and Intelligence"
  },
  "78813": {
    "name": "Herbalism",
    "description": "10% increased maximum Life<br>20% increased Life Recovery from Flasks<br>20% increased Flask Recovery rate"
  },
  "78975": {
    "name": "Blood Siphon",
    "description": "10% increased maximum Life<br>+5 Life gained on Kill<br>+20 to Strength"
  },
  "45927": {
    "name": "Crackling Speed",
    "description": "16% increased Lightning Damage<br>4% increased Cast Speed<br>+15% to Critical Strike Multiplier<br>10% increased Effect of Shock"
  },
  "79461": {
    "name": "Leadership",
    "description": "30% increased Area of Effect of Aura Skills<br>6% increased effect of Non-Curse Auras from your Skills"
  },
  "181521": {
    "name": "Arcane Expanse",
    "description": "15% increased Spell Damage<br>10% increased Area of Effect if you've Killed Recently<br>Spell Skills have 10% increased Area of Effect<br>+10 to Intelligence"
  },
  "183709": {
    "name": "Endurance",
    "description": "+1 to Maximum Endurance Charges"
  },
  "183711": {
    "name": "Faith and Steel",
    "description": "20% increased Armour<br>10% increased maximum Energy Shield<br>10% increased Energy Shield Recharge Rate<br>+8% to all Elemental Resistances"
  },
  "183717": {
    "name": "Way of the Warrior",
    "description": "16% increased Armour<br>+16 to maximum Life<br>16% increased Melee Damage<br>+30 to Strength"
  },
  "183735": {
    "name": "Deadly Inclinations",
    "description": "18% increased Evasion Rating<br>+12 to maximum Life<br>16% increased Projectile Damage<br>+30 to Dexterity"
  },
  "183789": {
    "name": "Hardened Scars",
    "description": "15% increased Life Recovery from Flasks<br>You have Fortify during Effect of any Life Flask"
  },
  "183951": {
    "name": "Rampart",
    "description": "8% increased Attack Speed while you have Fortify<br>5% increased Movement Speed while you have Fortify<br>10% increased Effect of Fortify on you<br>20% increased Attack Damage while you have Fortify"
  },
  "80919": {
    "name": "Inexorable",
    "description": "20% increased Armour<br>Regenerate 0.2% of Life per second per Endurance Charge<br>10% chance to gain an Endurance Charge when you are Hit<br>30% increased Armour while stationary"
  },
  "72171": {
    "name": "Stamina",
    "description": "+1 to Maximum Endurance Charges"
  },
  "184437": {
    "name": "Arcane Capacitor",
    "description": "15% increased maximum Mana<br>10% increased Effect of Arcane Surge on you per 200 Mana spent Recently, up to 50%<br>10% chance to gain Arcane Surge when you Kill an Enemy"
  },
  "59049": {
    "name": "Tireless",
    "description": "8% increased maximum Life<br>6% reduced Mana Cost of Skills"
  },
  "118099": {
    "name": "Arcane Swiftness",
    "description": "5% increased Cast Speed while holding a Shield<br>5% increased Spell Damage per 5% Chance to Block Attack Damage<br>20% chance to Avoid Elemental Ailments while holding a Shield<br>20% chance to Avoid being Stunned while holding a Shield<br>+3% Chance to Block Attack Damage while holding a Shield"
  },
  "118101": {
    "name": "Stabbing Thirst",
    "description": "24% increased Damage with Daggers<br>6% increased Attack Speed with Daggers<br>0.5% of Attack Damage Leeched as Life<br>0.5% of Attack Damage Leeched as Mana<br>24% increased Damage with Ailments from Attack Skills while wielding a Dagger"
  },
  "185895": {
    "name": "Savagery",
    "description": "+1 to Maximum Frenzy Charges"
  },
  "196831": {
    "name": "Mana Flows",
    "description": "+10 to maximum Mana<br>16% increased maximum Mana<br>40% increased Mana Regeneration Rate<br>+20 to Intelligence"
  },
  "118107": {
    "name": "Primal Spirit",
    "description": "15% increased maximum Mana<br>20% increased Mana Regeneration Rate<br>20% increased Flask Charges gained<br>+20 to Strength and Intelligence"
  },
  "196833": {
    "name": "Art of the Gladiator",
    "description": "12% increased Attack Speed<br>10% increased Global Accuracy Rating<br>Ignore all Movement Penalties from Armour<br>+20 to Dexterity"
  },
  "118125": {
    "name": "Instability",
    "description": "+1 to Maximum Power Charges"
  },
  "196839": {
    "name": "Arcane Will",
    "description": "20% increased maximum Mana<br>Regenerate 2 Mana per second<br>20% increased Mana Recovery from Flasks<br>Gain 4% of Maximum Mana as Extra Maximum Energy Shield"
  },
  "196857": {
    "name": "Foresight",
    "description": "+20 to maximum Energy Shield<br>14% increased maximum Energy Shield<br>10% increased Energy Shield Recharge Rate"
  },
  "118179": {
    "name": "Breath of Rime",
    "description": "+10% to Cold Damage over Time Multiplier<br>20% increased Cold Damage<br>20% increased Freeze Duration on Enemies<br>10% chance to Freeze<br>15% increased Effect of Chill"
  },
  "196911": {
    "name": "Lust for Carnage",
    "description": "12% increased Attack Speed<br>1.2% of Physical Attack Damage Leeched as Life<br>20% increased total Recovery per second from Life Leech"
  },
  "118341": {
    "name": "Frenetic",
    "description": "+1 to Maximum Frenzy Charges"
  },
  "197073": {
    "name": "Force Shaper",
    "description": "Gain 4% of Physical Damage as Extra Chaos Damage<br>4% increased Attack and Cast Speed<br>10% reduced Physical Damage taken over time<br>20% increased Physical Damage"
  },
  "85293": {
    "name": "Piercing Shots",
    "description": "Projectiles Pierce 2 additional Targets"
  },
  "118827": {
    "name": "Thick Skin",
    "description": "10% increased maximum Life<br>8% chance to Avoid Elemental Ailments"
  },
  "197559": {
    "name": "Dismembering",
    "description": "30% increased Melee Critical Strike Chance<br>+30% to Melee Critical Strike Multiplier<br>20% chance to Maim Enemies on Critical Strike with Attacks"
  },
  "120285": {
    "name": "Infused",
    "description": "+1 to Maximum Power Charges"
  },
  "199017": {
    "name": "Heart of Ice",
    "description": "25% increased Cold Damage<br>Damage Penetrates 6% Cold Resistance<br>0.2% of Cold Damage Leeched as Energy Shield"
  },
  "190269": {
    "name": "Swagger",
    "description": "+5% Chance to Block Attack Damage while Dual Wielding<br>20% increased Weapon Damage while Dual Wielding<br>10% chance to gain an Endurance Charge when you Block<br>Attack Skills deal 20% increased Damage with Ailments while Dual Wielding<br>10% chance to gain a Frenzy Charge when you Block"
  },
  "98415": {
    "name": "Blood Drinker",
    "description": "8% increased maximum Life<br>0.4% of Attack Damage Leeched as Life"
  },
  "236197": {
    "name": "Vitality Void",
    "description": "0.8% of Attack Damage Leeched as Life<br>15% increased Maximum total Recovery per second from Life Leech<br>20% increased total Recovery per second from Life Leech"
  },
  "236199": {
    "name": "Fangs of the Viper",
    "description": "20% increased Chaos Damage<br>5% increased Movement Speed<br>+20 to Dexterity<br>20% increased Physical Damage"
  },
  "236205": {
    "name": "Ethereal Feast",
    "description": "0.6% of Spell Damage Leeched as Energy Shield<br>30% increased Maximum total Recovery per second from Energy Shield Leech<br>6% increased Attack and Cast Speed while Leeching Energy Shield"
  },
  "236223": {
    "name": "Resourcefulness",
    "description": "15% increased Evasion Rating<br>10% increased maximum Energy Shield<br>5% increased maximum Life<br>Regenerate 0.5% of Life per second"
  },
  "236277": {
    "name": "Essence Surge",
    "description": "+30 to maximum Energy Shield<br>15% faster start of Energy Shield Recharge<br>10% increased Energy Shield Recharge Rate"
  },
  "236439": {
    "name": "Golem Commander",
    "description": "20% increased Damage while you have a Summoned Golem<br>30% increased Effect of Buffs granted by your Golems<br>Golems have 15% increased Maximum Life<br>+1 to maximum number of Golems"
  },
  "124659": {
    "name": "Discipline and Training",
    "description": "+30 to maximum Life<br>10% increased maximum Life"
  },
  "203391": {
    "name": "Assassination",
    "description": "+35% to Critical Strike Multiplier<br>30% increased Critical Strike Chance"
  },
  "236925": {
    "name": "Heart of the Warrior",
    "description": "+20 to maximum Life<br>10% increased maximum Life<br>+10 to Strength"
  },
  "238383": {
    "name": "Void Barrier",
    "description": "15% increased Evasion Rating<br>10% increased maximum Energy Shield<br>10% increased Energy Shield Recharge Rate<br>+8% to all Elemental Resistances"
  },
  "137781": {
    "name": "Skittering Runes",
    "description": "15% increased Effect of your Curses"
  },
  "216513": {
    "name": "Barbarism",
    "description": "6% increased maximum Life<br>+1% to maximum Fire Resistance<br>+8% to Fire Resistance"
  },
  "354295": {
    "name": "Crusader",
    "description": "8% increased maximum Mana<br>Transfiguration of Mind"
  },
  "354297": {
    "name": "Thunderous Salvos",
    "description": "30% increased Critical Strike Chance for Spells<br>Skills supported by Unleash have +1 to maximum number of Seals"
  },
  "354303": {
    "name": "Vengeant Cascade",
    "description": "15% increased Projectile Speed<br>Attack Projectiles Return to you from final Target<br>Returning Projectiles Pierce all Targets"
  },
  "354321": {
    "name": "Unnatural Calm",
    "description": "18% increased maximum Energy Shield<br>15% increased Energy Shield Recharge Rate<br>+1% to maximum Lightning Resistance"
  },
  "354375": {
    "name": "Golem's Blood",
    "description": "10% increased maximum Life<br>Regenerate 1.6% of Life per second"
  },
  "354537": {
    "name": "Tranquility",
    "description": "5% increased maximum Energy Shield<br>Transfiguration of Soul"
  },
  "242757": {
    "name": "Revenge of the Hunted",
    "description": "18% increased Evasion Rating<br>8% increased maximum Life<br>12% increased Physical Damage"
  },
  "355023": {
    "name": "Aspect of Stone",
    "description": "20% chance to Avoid Physical Damage from Hits"
  },
  "356481": {
    "name": "Tenacity",
    "description": "5% increased maximum Life<br>Transfiguration of Body"
  },
  "177147": {
    "name": "Sovereignty",
    "description": "6% reduced Mana Reserved<br>10% increased effect of Non-Curse Auras from your Skills"
  },
  "255879": {
    "name": "Tribal Fury",
    "description": "12% increased Melee Damage<br>Strike Skills target 1 additional nearby Enemy"
  },
  "360855": {
    "name": "Whispers of Doom",
    "description": "You can apply an additional Curse"
  },
  "295245": {
    "name": "Spiritual Aid",
    "description": "30% increased Global Accuracy Rating<br>Minions deal 15% increased Damage<br>Increases and Reductions to Minion Damage also affect you<br>30% increased Minion Accuracy Rating"
  },
  "373977": {
    "name": "Charisma",
    "description": "8% reduced Mana Reserved<br>6% increased effect of Non-Curse Auras from your Skills"
  },
  "413343": {
    "name": "Constitution",
    "description": "+20 to maximum Life<br>14% increased maximum Life"
  },
  "531441": {
    "name": "Soul of Steel",
    "description": "+150 to Armour<br>30% increased Armour<br>+1% to all maximum Elemental Resistances<br>5% additional Physical Damage Reduction"
  }
}