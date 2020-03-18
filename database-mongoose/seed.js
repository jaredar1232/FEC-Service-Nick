var mongoose = require('mongoose');

// Fill in the definition of insertMockData so that when
// this file is run in the terminal with `node seed.js`,
// all 10 products are inserted into the database

const adjectives = ['Used', 'New', 'Refurbished', "PARTS ONLY"];
const brand = ['Sonny', 'Ninetendo', 'Microhard', 'Azeus', 'Sansong', 'Apull', 'Wowhey', 'Illogitech'];
const noun = ['Smartphone', 'Monitor', 'Headphones', 'Earbuds', 'Trashcan', 'Laptop', 'Gaming System', 'TV', 'Personal Air Conditioning Unit', 'Gaming Mouse', 'Tablet', 'Flip Phone', 'Pager'];

const createProduct = () => {
  let product = {};
  product.item = `${adjectives[Math.floor(Math.random() * Math.floor(adjectives.length))]} ${brand[Math.floor(Math.random(brand.length) * Math.floor(4))]} ${noun[Math.floor(Math.random() * Math.floor(noun.length))]}`;



  product.cost = parseFloat(Math.ceil(Math.random() * Math.ceil(1000)));
  product.curr_bid = parseFloat(Math.ceil(Math.random() * Math.ceil(10000)));
  product.ends_in = Math.ceil(Math.random() * Math.ceil(3));
  // the lorempixel images render very slowly for some reason.
  // don't worry too much if some images load while the others don't.
  // it's probably not your fault
  product.image = `http://lorempixel.com/400/400/technics/${Math.ceil(Math.random() * Math.ceil(10))}`;
  console.log(JSON.stringify(product))
};

const createProducts = () => {
  let productsArr = [];
  for(let i = 0; i < 10; i++){
    productsArr.push(createProduct())
  }
  return productsArr
}

const seedMockData = function() {
  // Complete me please
  let products = createProducts()

  Product.insertMany(products)
    .then((e) => console.log('Products Were Inserted'))
    .catch((err) => console.log('We fucked Up Inserting'))

};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with

//insertMockData()
//createProduct()













/*

quickInfo: ["LIGHTWEIGHT COMFORT.", "MODERN STYLE"],
productDescription: "The Nike Air Max 270 React uses lightweight, layered, no-sew materials to create a modern style that looks as good as it feels."

["All-Day Comfort", "Max Air 270 unit and full Nike React foam midsole deliver unrivaled, all-day comfort from heel to toe."]

["Light as Air", "Nike React technology delivers an extremely smooth ride, reduces weight and adds flexibility. Woven fabric provides a lightweight fit and feel."]

["Responsive Cushioning", "Phylon foam helps to absorb body weight and improve transition."]

["Maximum Durability", "Full heel-to-toe rubber coverage enhances durability."]

["Elevated Materials", "The synthetic material that resembles bubble wrap on the tongue, eyestay and collar areas adds playful style with texture and depth."]

Product Details
    Speed lacing system with traditional tongue
    Soft, minimal collar
    Pull tab loop for easy entry




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


Product Details

    Leather, synthetic and textile upper
    Shown: White/Washed Coral/Hyper Blue/Multi-Color
    Style: CT3623-100











    BIG COMFORT. BIGGER PERSONALITY.

The Nike React Presto Premium features an innovative React foam midsole that delivers a futuristic look and bouncy, lightweight feel for all-day comfort with a whole lot of personality.

Benefits

    Nike React technology delivers an extremely smooth ride.
    Stretchy mesh upper provides breathability and a relaxed feel.
    Numerous lacing options let you customize the look.
    Stretchy textile sleeve for a sock-like fit and lets you take the shoe on and off easily.
    TPU cage reimagines the classic Presto cage in a more organic shape, providing a contoured fit to your foot.
    Rubber toe tip enhances durability.


Product Details

    Not intended for use as Personal Protective Equipment
    Shown: Pistachio Frost/White/Black
    Style: CN7664-300
*/
