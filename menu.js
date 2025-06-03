const urlParams = new URLSearchParams(window.location.search);
const menuName = urlParams.get("menu");

const menuData = {
  amphitheatre: {
    title: "Amphitheatre",
    image: "img/garden-amphitheater.jpg",
    description: `Learn and be entertained.
    <br>
    Come and catch daily educational and entertaining shows, talks and demonstrations at the amphitheatre.
<br>
Today's program:
<br>
<ul>
9h00am : A Bug's Life - play
<br>
11h00am : Penny and her Penguins
<br>
14h00pm : Bigs Cats of Africa - a Documentary
</ul>
<strong>WHERE WILL YOU FIND IT?</strong>
<br><br>
The Amphitheatre is to the west of the main entrance.`,
  },

  insect: {
    title: "Insect House",
    image: "img/rhino-beetle.jpg",

    description: `The Insect House is home to one of the largest and most diverse insect collections in the world. Here you will see creepy crawlies from all over the world, in every shape and size.
<br>
<br>
<strong>WHERE WILL YOU FIND IT?</strong>
<br><br>
Insect House is at the eastern side of the zoo, next to the Monkey Trail.
`,
  },

  monkey: {
    title: "Monkey",
    image: "img/monkey-trail.jpg",
    description: `Whether you choose to walk or ride, you will find the monkey trail very challenging. Take the 30 minute or 1 hour trail.
<br>
Be prepared to get dirty!
<br>
<br>
<strong>WHERE WILL YOU FIND IT?</strong>
<br>
<br>
Monkey Trail is at the eastern side of the zoo.
`,
  },

  coffee: {
    title: "Coffee Shop",
    image: "img/coffee-shop.jpg",
    description: `Come and relax with a fragrant, freshly-brewed cuppa at Wild Things
<br>
They also serve a variety of sandwiches, confectionery and desserts, in case you're peckish!
<br>
<br
<strong>WHERE WILL YOU FIND IT?</strong>
<br>
<br>
Wild Things is at the main Food Court
`,
  },

  forest: {
    title: "Forest",
    image: "img/lost-forest.jpg",
    description: `Relax and enjoy a picnic with your family and friends in this shady picnic spot by the edge of the lake.
<br>
Picnic tables and clean bathrooms are provided.
<br>
<br>
<strong>WHERE WILL YOU FIND IT?</strong>
<br>
<br>
The Lost Forest to the east of the zoo, beyond Monkey Trail.
`,
  },

  pizza: {
    title: "Pizza",
    image: "img/mos-pizza.jpg",
    description: `Grab a delicious, authentic Italian meal at Mo's Pizza.
<br>
They serve the most delicious thick-crust pizzas and delicious pastas.
<br>
<br>
<strong>WHERE WILL YOU FIND IT?</strong>
<br>
<br>
Mo's Pizza is at the main food court.
`,
  },

  restaurant: {
    title: "Restaurant",
    image: "img/outdoor_restaurant.jpg",
    description: `Gourmet meals, a serene atmosphere, live music and good company - sometimes that's all you need.
<br>
Dine @The Zoo gives you all this.
<br>
<br>
<strong>WHERE WILL YOU FIND IT?</strong>
<br>
<br>
Dine @The Zoo is located just behind the Amphitheatre.`,
  },
};

const data = menuData[menuName];

if (data) {
  document.getElementById("menu-title").textContent = data.title;
  document.getElementById("menu-image").src = data.image;
  document.getElementById("menu-image").alt = data.title;
  document.getElementById("menu-description").innerHTML = data.description;
} else {
  document.getElementById("menu-title").textContent = "Menu not found";
}
