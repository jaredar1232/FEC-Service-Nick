var mongoose = require('mongoose');
const db = require('./index')


let samplePhotos = ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/aki5mq92ws4mdgfuijl5/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/pm2uiho39jtwm7ghdipa/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/jx4muj1n92xdld6zdd7n/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uxxu2pg3xqu50jvpiaih/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/mjihumk0i0yjvrxlmppq/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/to2h7zyw02fuhloqef0p/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg"]


let availSizesObj =  {
  '5': null,
  '5x5': null,
  '6': null,
  '6x5': null,
  '7': null,
  '7x5': null,
  '8': null,
  '8x5': null,
  '9': null,
  '9x5': null,
  '10': null,
  '10x5': null,
  '11': null,
  '11x5': null,
  '12': null,
  '12x5': null,
  '13': null,
  '13x5': null,
  '14': null,
  '15': null,
  '16': null,
  '17': null,
  '18': null
}






let generateRandomSizeAvail = () => {
  let randoSize = {}
  for(let size in availSizesObj){
    randoSize[size] = Math.random() >= 0.3
  }
  //console.log(randoSize)
  return randoSize
}



//return a random style ID
const randomStyleIDGenerator = () => {
  let letters = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2).toUpperCase();
  let fourcode = Math.floor(Number.parseFloat(Math.random()).toPrecision(4)*10000);
  let twocode = Math.floor(Number.parseFloat(Math.random()).toPrecision(2)*100);
  let id = `${letters}${fourcode} - ${twocode}`
  return id
}
//return a random Weigth
const randomWeight = () => {
  let weight = Number.parseFloat(Math.random() * (20 - 10) + 10).toPrecision(4);
  return weight
}
//return random offset
const randomOffset = () => {
  let num1 = Math.floor(Math.random() * 10)
  let num2 = Math.floor(Math.random() * ((num1*2)-num1) + num1)
  let num3 = Math.floor(Math.random() * ((num2*2)-num2) + num2)
  let string = `${num1}mm (${num2}mm forefoot, ${num3}mm heel)`
  return string
}
//return random LAST property
const randomLastID = () => {
  let letters = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2).toUpperCase();
  let twocode = Math.floor(Number.parseFloat(Math.random()).toPrecision(2)*100);
  let id = `${letters}${twocode}`
  return id
}

//return random color arrangement
let maleColor = [
["White","Black","Atomic Violet","Night Maroon"],
["Aura","Mint Foam", "Speed Yellow", "Blackened Blue"],
["Pistachio Frost","White","Black"],
["White","Washed Coral","Hyper Blue","Multi-Color"],
["Fossil","Black","Pistachio Frost","White"],
["Black","Cosmic Fuchsia","Limelight","Hyper Pink"],
["Laser Crimson","Light Smoke Grey","Photon Dust","White"],
["Atmosphere Grey","Thunder Grey","Vast Grey"],
["Aura","Light Armory Blue","Mint Foam","Blackened Blue"],
["Light Orewood Brown","Black","Villain Red","Hyper Crimson"],
["Beechtree","Cargo Khaki","Bright Crimson","Off Noir"],
["Oil Grey","Black","Wolf Grey","Barely Grey"],
["Dune Red","Mahogany","Team Orange","Burgundy Ash"],
["Black","Light Thistle","Pollen Rise","Magic Flamingo"],
["Anthracite","Barely Grey","White","Black"],
["Team Red","White","Gum Light Brown","Team Red"],
["Black","White","University Blue","Black"],
["Cosmic Clay","Blue Hero","Sail","Black"],
["Black","Racer Blue","Atmosphere Grey","Black"],
["Volt","White","Gum Light Brown","Volt"],
["Sky Grey","Vast Grey","Obsidian Mist","Particle Grey"],
["Phantom","Light Bone","Black"],
["Black","Thunder Grey","Light Carbon","Bright Ceramic"],
["Black","Red Orbit","Light Photo Blue","Metallic Gold"],
["Black","Anthracite","Pink Blast","Black"],
["Dark Grey","Pure Platinum","Anthracite","Bright Crimson"],
]

let femaleColor = [
  ["Black","True Berry","White","Pink Blast"],
  ["Laser Crimson","Platinum Tint","Track Red","White"],
  ["Black","Thunder Grey","White"],
  ["Echo Pink","Metallic Red Bronze","Oil Grey","Metallic Red Bronze"],
  ["Phantom","Barely Volt","Spruce Aura","Bio Beige"],
  ["White","Summit White","Laser Fuchsia","Psychic Purple"],
  ["Pumice","Vast Grey","Celestial Gold","Pink Quartz"],
  ["Ocean Cube","Pure Platinum","White","Metallic Cool Grey"],
  ["Black","Half Blue","White","Light Blue"],
  ["Plum Chalk","Infinite Gold","Silver Lilac","Metallic Gold"],
  ["True Berry","Vast Grey","Pink Blast","Black"],
  ["Stone Mauve","Barely Rose","Smokey Mauve","Metallic Red Bronze"],
  ["White","Black","Iced Lilac","Noble Red"],
  ["Black","Photon Dust","Valerian Blue","Vivid Purple"],
  ["Light Redwood","Pink Quartz","White"],
  ["Cool Grey","Wolf Grey","White","Metallic Platinum"],
  ["Wolf Grey","Cool Grey","Ocean Cube","Metallic Cool Grey"],
  ["Black","Valerian Blue","Vivid Purple"],
  ["Ocean Cube", "Pure Platinum","Metallic Cool Grey"],
  ["Half Blue","White","Black"],
  ["Pure Platinum","Lava Glow","Summit White"],
  ["Pure Platinum","White","Yellow Pulse","Psychic Purple"],
  ["Half Blue","White","Black"],
]



let additionals = ['Trail', 'FlyKnit', 'Shield', 'Rise']

/* REACT SHOE ____________________________________________________ */
// [Epic[Phantom], Odyssey, Legend]React[A.I.R, ENG, Vision, Presto, HyperSet, Element 55, Sertu, Ianga, Terra Globe, HyperSet, Infinity Run, ][Shield[2, 3], FlyKnit[2, 3]][SE]
let reactVariants = ['A.I.R', 'ENG', 'Vision', 'Element 55', 'Element 87', 'Presto', 'HyperSet', 'Element 55', 'Sertu', 'Ianga', 'Terra Globe', 'HyperSet', 'Infinity Run', 'Joy Ride Run', 'Type GTX']
let reactVersion = ['2', '3', '4']
let reactPrefixs = {
  'Epic': ['Phantom', ''],
  'Odyssey': [''],
  'Legend': [''],
}
const generateReactShoeName = () => {
  //2% change of getting a Jordan
  if(Math.random() >= 0.98){
    return 'Jordan React Havoc'
  }
  let shoe = `React`
  //get a suffix 20% of time
  if(Math.random() >= 0.8){
    let reactPrefixsArray = Object.keys(reactPrefixs)
    let randomReactPrefix = reactPrefixsArray[Math.floor(Math.random() * reactPrefixsArray.length)]
    let randomReactSubPrefix = reactPrefixs[randomReactPrefix][Math.floor(Math.random() * reactPrefixs[randomReactPrefix].length)]
    shoe = `${randomReactPrefix} ${randomReactSubPrefix} ${shoe}`
  }

  //95 of the time there will be a variant added
  if(Math.random() >= 0.05){
    let randomReactVariant = reactVariants[Math.floor(Math.random() * reactVariants.length)]
    shoe = `${shoe} ${randomReactVariant}`
  }

  //50% of the time there will be an random additional suffix added
  if(Math.random() >= 0.4){
    let randomAdditive = additionals[Math.floor(Math.random() * additionals.length)]
    shoe = `${shoe} ${randomAdditive}`
  }

  //70% of the time there is something added
  if(Math.random() >= 0.3){
    let versions = ['2', '3', '4']
    shoe = `${shoe} ${versions[Math.floor(Math.random() * versions.length)]}`
  }

  //10% of being special edition
  if(Math.random() >= 0.90){
    shoe = `${shoe} (SE)`
  }




  //console.log(shoe)
  return `Nike ${shoe}`
}



/* ZOOM SHOEEEE_____________________________________________ */
// [Air] Zoom[X] [Freak, Vomero[14,15], WildHorse[4, 5], Terra Kiger[5, 6], Fly 3[Premium], Pegasus[35, 36][FlyEase, Turbo[2, 3], Vaporfly[4%, NEXT%]]] [Trail, FlyKnit, Shield, Rise][SE]
let zoomVariants = {
  '': ['1', '2', ''],
  'Freak': [''],
  'Vomero': ['', 14, 15],
  'WildHorse': ['', 4, 5],
  'Terra Kiger': ['', 5, 6],
  'Fly 3': ['', 'Premium'],
  'Pegasus': [35, 36, ''],
}

let pegasusVariants = {
  'FlyEase': [''],
  'Turbo': [2, 3, ''],
  'Vaporfly': ['', '4%', 'NEXT%']
}

let generateZoomShoeName = () => {
  let shoe = `Zoom`
  Math.random() >= 0.4 ? shoe = `Air ${shoe}` : '';
  Math.random() >= 0.9 ? shoe = `${shoe}X` : '';


  //Choose A Zoom Varient 80% of time
  let variants = Object.keys(zoomVariants)
  let randomVariant = variants[Math.floor(Math.random() * variants.length)];
  //Choose a varient Version
  let randomVarientVersion = `${zoomVariants[randomVariant][Math.floor(Math.random() * zoomVariants[randomVariant].length)]}`
  shoe = `${shoe} ${randomVariant} ${randomVarientVersion}`;

  //If varient is pegasus add
  if(randomVariant == 'Pegasus'){
  let pegasusVariantArray = Object.keys(pegasusVariants)
  let randomPegasusVariant = pegasusVariantArray[Math.floor(Math.random() * pegasusVariantArray.length)]
  shoe = `${shoe} ${randomPegasusVariant}`
  let randomPegasusVariantVersion = pegasusVariants[randomPegasusVariant][Math.floor(Math.random() * pegasusVariants[randomPegasusVariant].length)]
  shoe = `${shoe} ${randomPegasusVariantVersion}`
  }

  //add ending suffixs 70% of tim
  if(Math.random() >= 0.3){
    shoe = `${shoe} ${additionals[Math.floor(Math.random() * additionals.length)]}`
  }

  //console.log(shoe)
  return `Nike ${shoe}`
}



/* FREE RUN SHOE */
let generateRandomFreeRunName = () => {
  let nums = ['3.0', '5.0'];
  let shoe = `Free RN`;

  if(Math.random() >= 0.8){
    shoe = `${shoe} Motion`
  }
   if(Math.random() >= 0.8){
    shoe = `${shoe} FlyKnit`
  }
  if(Math.random() >= 0.2){
    shoe = `${shoe} ${nums[Math.floor(Math.random() * nums.length)]}`
  }
  if(Math.random() >= 0.1){
    shoe = `${shoe} NRG`
  }
  if(Math.random() >= 0.6){
    shoe = `${shoe} 2018`
  }

  //console.log(shoe)
  return `Nike ${shoe}`
}


let createRandomShoe = () => {

  /* STILL NEED A RANDOM PRICE */
  let isMale = Math.random() >= 0.45

  let shoe = {}
  let shoeGeneratorArray = [generateZoomShoeName, generateReactShoeName, generateRandomFreeRunName]
  shoe.name = shoeGeneratorArray[Math.floor(Math.random() * shoeGeneratorArray.length)]()
  shoe.availSizes = generateRandomSizeAvail()

  shoe.productDetails = {}
  shoe.productDetails.weight = randomWeight()
  shoe.productDetails.style = randomStyleIDGenerator()
  shoe.productDetails.offset = randomOffset()
  shoe.productDetails.last = randomLastID()

  isMale === true ? shoe.colorStyles = maleColor[Math.floor(Math.random() * maleColor.length)] :
                    shoe.colorStyles = femaleColor[Math.floor(Math.random() * femaleColor.length)]

  shoe.productPictures = samplePhotos
  shoe.price = 123
  //console.log(shoe)
  return shoe
}



const createShoesArray = () => {
  let shoesArr = [];
  for(let i = 0; i < 10; i++){
    shoesArr.push(createRandomShoe())
  }
  return shoesArr
}

const seedMockData = function() {
  // Complete me please
  let products = createShoesArray()

  db.insertMany(products)
    .then((e) => console.log('Products Were Inserted'))
    .catch((err) => console.log('We fucked Up Inserting', err))
 // console.log(products)
};

seedMockData()






// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with

//insertMockData()
//createProduct()






//Nike-zoom-black

// nike-zoom-pink
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/n2aj43jru2uemxzf7kxe/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/moo93xefvfwdczevq7gb/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/mqwkuzuzdni842lo0vr6/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c18zt6wzkr1xpxmlyyog/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/v3pxdt6cgxrggudebdeh/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg
// https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/eudkesttujgt6t8ikhbi/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg


















/*

Zoom-Ultra-light Nike ZoomX foam delivers Nike Running's greatest energy return yet.
    -Engineered heel collar tapers away from your foot for comfort around your Achilles tendon.
    -Angled heel supports initial touchdown and provides a smooth transition.


ZoomX- Nike ZoomX foam delivers Nike Running’s greatest energy return yet, and NEXT%-NEXT% adds more ZoomX for responsive comfort on race day.
Trail-Outsole lugs optimize traction when running uphill.
Vaporfly- VaporWeave material up top is an engineered woven mesh that’s light and breathable while giving a secure, comfortable fit.
FlyKnit - Flyknit constructed upper provides lightweight breathability and support.



Nike React Vision
SURREAL COMFORT. BORN FROM DREAMS.
The Nike React Vision is a story of surreal comfort. Layered textures, shapes and vivid colors combine in a design influenced by the exaggerated world of our dreams, while React foam and an ultraplush tongue provide surreal comfort. DIMSIX on the tongue tab rises high off the collar to add just a touch of Nike’s own origin story.
Dreamworld Extravagance
The colors are inspired by Mexico City's famous Casa Gilardi. Richly textured fabrics add to the continuously shifting sensation. In combination with a transparent heel clip and distorted sides, they create a unique layered look.
Futuristic Materials
The revolutionary seamless mesh on the upper allows for color pops and surreal textures. Its subtle pattern, which was inspired by poison dart frogs, adds the perfect amount of bite to your look.
Dreamlike Comfort
Nike React foam delivers unrivaled all-day comfort while the ultra plush tongue combines with the padded heel for a soft, dreamlike feel.
DIY Style
Exposed stitching on the heel and tongue combines with the patchwork eyestays for a multi-dimensional, DIY look.
Product Details
    Rubber pods on sole add traction and durability
    D/MS/X label on pull tabs and insole
    Outlined Swoosh is printed on side





Nike Air Zoom  Pegasus 36 Trail
FIND YOUR WINGS.
An icon trades pavement for path with the Nike Air Zoom Pegasus 36 Trail. Give your feet some fresh air in a perforated mesh upper, as double Zoom Air units underfoot cushion your stride. Opposing lugs on outsole optimize traction on your uphill climbs.

Benefits

    Perforated mesh and synthetic upper lets your foot breathe.
    Zoom Air units in heel and forefoot cushion your stride.
    Outsole lugs optimize traction on roads and trails alike.
    Widened forefoot gives you a roomier fit.
    Overlay forms around the eyelet and integrates with a traditional lacing system for secure lockdown.
    Cushlon foam cushions your foot and offers a supportive feel.





Nike Air Zoom Terra Kiger 6
TOUGH TERRAIN TACKLER.
The Nike Air Zoom Terra Kiger 6 is built to take on wet and rocky trails. Lightweight in design, it features a sleeker look with a woven heel for a secure fit and feel.
Faster, Sleeker, Stronger
Mesh at the forefoot feels lightweight and enhances ventilation. A woven heel delivers a secure, stable fit.
Cushioned Responsiveness
Nike React technology delivers a smooth, responsive ride. A Zoom Air unit in the heel provides extra cushioning.
Multi-Surface Traction
Multidirectional traction lugs in the forefoot and heel are made from high-abrasion rubber for enhanced grip on descents and ascents. A rubber pod at the midfoot helps deliver wet-surface traction.
More Benefits
    Padded tongue helps relieve pressure caused by foot swelling over long mileage runs.
    Segmented rock plate in the forefoot helps shield your foot on rough terrain without sacrificing flexibility or ground feel.
    Midfoot lacing system helps provide snug support.


Product Details
    Weight: 10.26oz (Men's size 10)
    Offset: 4mm (Forefoot: 10.5mm, Heel: 14.5mm)
    Synthetic leather and textiles materials in upper
    Updated collar
    Shown: Aura/Mint Foam/Speed Yellow/Blackened Blue
    Style: CJ0219-400





Nike Wildhorse 6
STABLE COMFORT FOR THE TRAILS.
The Nike Wildhorse 6 keeps it stable, secure and lightweight on the trail. An updated outsole delivers the traction you need, while a foam midsole keeps you cushioned on your run.
Trail-Ready Traction
A full-rubber outsole features abrasion-resistant materials in the forefoot and heel, with sticky rubber in the middle for grip. An anti-clog coating across the outsole helps keep dirt out.
Responsive Cushioning
Nike React foam provides a soft, smooth ride that adds a little spring to your step. Extra cushioning in the heel creates stability and helps keep your foot on the platform.
Breathable and Long-lasting
Mesh at the forefoot enhances ventilation and combines with materials along the toe to help prevent abrasion.
More Benefits
    Collar around the ankle hugs your foot while helping prevent dirt and debris from entering the shoe.
    Thin tongue features segmented padding to help cut down on lace pressure.
    Utility tab in the back for easy on and off.


Product Details
    Weight: 11.39oz (Men's size 10)
    Offset: 8mm (Forefoot 14.5mm, Heel: 22.5mm)
    Synthetic and textile materials in upper
    Shown: Aura/Mint Foam/Speed Yellow/Blackened Blue
    Style: BV7106-400




Nike CruzrOne
MADE TO KEEP YOU MOVING.
Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.
Rocker-Shaped Design
The outsole is angled to create an incredibly smooth heel-to-toe transition during use.
Made to Move
Stacked Nike React foam in the heel feels incredibly soft and tapers to the toe, allowing you to move freely.
All-Day Wear
The low-cut collar adds a sleek, streamlined look. Thick padding and super-soft wool lining add to the comfort.
Supportive And Ventilated
No-sew details combine with stitched overlays for added durability, while mesh and perforations on the sides help your foot breathe.

More Benefits
    Rubber sole adds traction and durability.
    Wool lining is quick-drying and can be worn with or without socks.
    Midsole design mimics circular pattern on the heel for a unified look.


Product Details
    Last: MR-44
    Offset: 14mm (28mm heel, 14mm forefoot)
    Traditional lacing
    Shown: Speed Yellow/Sail/Game Royal
    Style: CD7307-700



Nike React Infinity Run Flyknit
DESIGNED TO KEEP RUNNING, FEARLESSLY.


The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road.
A Lightweight Fit
An all-new version of Flyknit is stronger and more durable than previous versions. Lightweight and flexible, it features 3 distinct layers to help keep your foot secure.
A Stable Feel
Higher foam stack heights provide a softer feel. A wider shape provides a more stable ride, helping release energy with every step.
A Smooth Ride
The shape of the Nike React foam midsole provides support for the 3 phases of a runner's stride. It helps create flexibility at toe-off, a smooth ride at mid-stance and cushioning at contact.
More Benefits
    Less material in the shoe means you're closer to the foam, creating a softer, more responsive experience.
    Increased rubber at the outsole helps deliver traction and durability.


Product Details
    Weight: 10.27oz (Men's size 10)
    Offset: 9mm (Forefoot: 24mm, Heel: 33mm)
    Shown: Black/Red Orbit/Photo Blue/White
    Style: CD4371-005


Testing
In testing*, the Nike React Infinity Run reduced injuries by 52% compared to the Nike Air Zoom Structure 22. *The Nike React Infinity Run reduced running injuries by 52% compared to the Nike Air Zoom Structure 22 in a study of 226 men and women during a 12 week run training program (injury = missing 3 or more consecutive runs due to running related pain). Our study found that 30.3% of Nike Air Zoom Structure 22 runners experienced an injury but only 14.5% of Nike React Infinity Run runners experienced an injury.




LIGHTWEIGHT COMFORT. MODERN STYLE.
Nike's first lifestyle Air Max meets the softest, smoothest and most resilient foam yet in the Nike Air Max 270 React. The design draws from the Air Max pantheon, showcasing Nike's greatest innovation with its large window. Details on the upper take inspiration from bubble wrap and add a playful, modern style that looks as good as it feels.
All-Day Comfort The eye-catching Max Air 270 unit and full Nike React foam midsole deliver all-day comfort from heel to toe.
Light as Air Nike React technology delivers an extremely smooth ride, reduces weight and adds flexibility. Fabric on the upper provides lightweight comfort.
Product Details
    Synthetic and fabric upper
    Swoosh keychain inspired by air freshener


["MAX AIR.", "MAX COMFORT."]
Inspired by energy patterns radiating from Earth—like the flow of lava and ocean waves—the Nike Air Max 200 offers a springy Air Max unit for flawless comfort. With exceptional cushioning and modern detailing, this shoe radiates cool.
["Maximum Air", "Visible from the side, the brand-new Max Air unit provides more Air underfoot while the lightweight, breathable mesh in the upper contours the foot. Rubber under the Max Air unit creates a larger profile."]
["All-Day Comfort", "Cushlon foam offers remarkable underfoot cushioning for all-day comfort. Exposed foam in the sole helps to reduce weight and adds flexibility."]
["Modern Look", "Lightweight TPU frame and no-sew skins skins create a modern, sporty aesthetic."]
["Added Durability", "Full heel-to-toe rubber coverage on the outsole increases durability."]

Fossil/Black/Pistachio Frost/White
Black/Cosmic Fuchsia/Limelight/Hyper Pink


["OG STYLE MEETS", "MODERN COMFORT."]


Redesigned for casual wear, the Nike Air Max 90 SE stays true to its '90s running roots. Bold colors combine with Max Air cushioning for all-day comfort while iconic details like the rubber Waffle outsole, stitched overlays and TPU counter nod to heritage style.
Benefits
    Removable logo at tongue lets you switch up your look.
    Max Air cushioning in the heel provides all-day comfort.
    Padded collar feels soft and comfortable.
    Rubber Waffle sole adds traction and durability.
    Foam midsole offers durable cushioning.


    BIG COMFORT. BIGGER PERSONALITY.
The Nike React Presto Premium features an innovative React foam midsole that delivers a futuristic look and bouncy, lightweight feel for all-day comfort with a whole lot of personality.
Benefits
    Nike React technology delivers an extremely smooth ride.
    Stretchy mesh upper provides breathability and a relaxed feel.
    Numerous lacing options let you customize the look.
    Stretchy textile sleeve for a sock-like fit and lets you take the shoe on and off easily.
    TPU cage reimagines the classic Presto cage in a more organic shape, providing a contoured fit to your foot.
    Rubber toe tip enhances durability.



TOUGH TERRAIN TACKLER.
The Nike Air Zoom Terra Kiger 6 is built to take on wet and rocky trails. Lightweight in design, it features a sleeker look with a woven heel for a secure fit and feel.
Faster, Sleeker, Stronger
Mesh at the forefoot feels lightweight and enhances ventilation. A woven heel delivers a secure, stable fit.
Cushioned Responsiveness
Nike React technology delivers a smooth, responsive ride. A Zoom Air unit in the heel provides extra cushioning.
Multi-Surface Traction
Multidirectional traction lugs in the forefoot and heel are made from high-abrasion rubber for enhanced grip on descents and ascents. A rubber pod at the midfoot helps deliver wet-surface traction.
More Benefits
    Padded tongue helps relieve pressure caused by foot swelling over long mileage runs.
    Segmented rock plate in the forefoot helps shield your foot on rough terrain without sacrificing flexibility or ground feel.
    Midfoot lacing system helps provide snug support.




LIGHTWEIGHT SUPPORT. SLEEK DESIGN.
The Nike Air Zoom Structure 22 Men's Running Shoe looks fast and feels secure. Engineered mesh, a heel overlay and dynamic support throughout the midfoot all work together to provide a smooth, stable ride.
Benefits
    Flywire cables secure the top of your foot.
    Engineered mesh provides targeted ventilation and support.
    Dynamic Support provides a smooth, stable transition.
    Partial bootie wraps the foot for a snug, comfortable fit. Notches at the tongue provide easy on and off.
    Zoom Air unit in the forefoot delivers responsive, low-profile cushioning.
    Duralon blown rubber in the forefoot enhances cushioning.




FIND YOUR WINGS.
An icon trades pavement for path with the Nike Air Zoom Pegasus 36 Trail. Give your feet some fresh air in a perforated mesh upper, as double Zoom Air units underfoot cushion your stride. Opposing lugs on outsole optimize traction on your uphill climbs.

Benefits

    Perforated mesh and synthetic upper lets your foot breathe.
    Zoom Air units in heel and forefoot cushion your stride.
    Outsole lugs optimize traction on roads and trails alike.
    Widened forefoot gives you a roomier fit.
    Overlay forms around the eyelet and integrates with a traditional lacing system for secure lockdown.
    Cushlon foam cushions your foot and offers a supportive feel.




Mesh Breathability

The lofted mesh and synthetic upper is lighter than its predecessor, and the translucent material makes it look as breathable as it feels.

Comfortable for Distance

A partial inner sleeve from toe to midfoot, combined with a more traditional shape from midfoot to heel is designed to help you train faster, longer.

Absorbs Impact

The rubber outsole helps absorb impact and provide multi-surface traction.

More Benefits
    An ultralight Nike ZoomX midsole delivers Nike Running's greatest energy return yet.
    The engineered heel collar tapers away from foot for comfort around your Achilles tendon.
    An angled heel optimizes initial touchdown and provides a smooth transition.


Zoom
React



FreeNR





list of colors :

Aura/Mint Foam/Speed Yellow/Blackened Blue
Pistachio Frost/White/Black
White/Washed Coral/Hyper Blue/Multi-Color
Fossil/Black/Pistachio Frost/White
Black/Cosmic Fuchsia/Limelight/Hyper Pink
Laser Crimson/Light Smoke Grey/Photon Dust/White
Atmosphere Grey/Thunder Grey/Vast Grey
Aura/Light Armory Blue/Mint Foam/Blackened Blue
Light Orewood Brown/Black/Villain Red/Hyper Crimson
Beechtree/Cargo Khaki/Bright Crimson/Off Noir
Oil Grey/Black/Wolf Grey/Barely Grey
Dune Red/Mahogany/Team Orange/Burgundy Ash
*/





