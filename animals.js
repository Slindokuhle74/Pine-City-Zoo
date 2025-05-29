
const urlParams = new URLSearchParams(window.location.search);
const animalName = urlParams.get("animal");

const animalData = {
  elephant: {
    title: "ELEPHANTS",
    image: "img/elephant.jpg",
    description: `Elephants are large mammals of the family Elephantidae and the order Proboscidea. Two species are traditionally recognised, the African elephant (Loxodonta africana) and the Asian elephant (Elephas maximus).<br><br>
     Elephants are scattered throughout sub-Saharan Africa, South Asia, and Southeast Asia. Male African elephants are the largest extant terrestrial animals and can reach a height of 4 m (13 ft) and weigh 7,000 kg (15,000 lb).
All elephants have several distinctive features the most notable of which is a long trunk or proboscis, used for many purposes, particularly breathing, lifting water and grasping objects. <br><br>
Their incisors grow into tusks, which can serve as weapons and as tools for moving objects and digging. Elephants' large ear flaps help to control their body temperature. Their pillar-like legs can carry their great weight. 
African elephants have larger ears and concave backs while Asian elephants have smaller ears and convex or level backs.
Elephants are herbivorous and can be found in different habitats including savannahs, forests, deserts and marshes. They prefer to stay near water.
<br>
<br>
<strong>WHERE WILL YOU FIND THEM?</strong>
   <br><br>
 You will find the elephants at pen E22, right next to the amphitheatre.`,
  },
  giraffe: {
    title: "GIRAFFE",
    image: "img/giraffe-large.jpg",

    description: `The giraffe (Giraffa camelopardalis) is an African even-toed ungulate mammal, the tallest living terrestrial animal and the largest ruminant.
Its species name refers to its camel-like shape and its leopard-like colouring. <br><br>
Its chief distinguishing characteristics are its extremely long neck and legs, its horn-like ossicones, 
and its distinctive coat patterns. It is classified under the family Giraffidae, along with its closest extant relative, the okapi. 
The nine subspecies are distinguished by their coat patterns.<br><br>
The giraffe's scattered range extends from Chad in the north to South Africa in the south, and from Niger in the west to Somalia in the east. 
Giraffes usually inhabit savannahs, grasslands, and open woodlands. Their primary food source is acacia leaves, which they browse at heights most other herbivores cannot reach.
Giraffes are preyed on by lions; their calves are also targeted by leopards, spotted hyenas, and African wild dogs.<br><br> Adult giraffes do not have strong social bonds, though they
do gather in loose aggregations if they happen to be moving in the same general direction. Males establish social hierarchies through necking, which are combat bouts where the neck
is used as a weapon. Dominant males gain mating access to females, which bear the sole responsibility for raising the young.<br><br>
<strong>WHERE WILL YOU FIND THEM?</strong>
<br><br>
You will find the giraffes at G15, just beyond the research centre.`,
  },

  koala: {
    title: "KOALA",
    image: "img/koala.jpg",
    description: `The koala (Phascolarctos cinereus, or, inaccurately, koala bear[a]) is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the 
    family Phascolarctidae and its closest living relatives are the wombats. <br><br>The koala is found in coastal areas of the mainland's eastern and southern regions, inhabiting Queensland, New South Wales, Victoria, and South Australia.
     It is easily recognisable by its stout, tailless body and large head with round, fluffy ears and large, spoon-shaped nose. The koala has a body length of 60 to 85cm (24 to 33 in) and weighs 4 to 15 kg (9 to 33 lb).<br><br>
      Pelage colour ranges from silver grey to chocolate brown. Koalas from the northern populations are typically smaller and lighter in colour than their counterparts further south. These populations possibly are separate subspecies, but this is disputed.
Koalas typically inhabit open eucalypt woodlands, and the leaves of these trees make up most of their diet. Because this eucalypt diet has limited nutritional and caloric content, koalas are largely sedentary and sleep up to 20 hours a day. 
<br><br>They are asocial animals, and bonding exists only between mothers and dependent offspring. Adult males communicate with loud bellows that intimidate rivals and attract mates. Males mark their presence with secretions from scent glands located on their chests.
 Being marsupials, koalas give birth to underdeveloped young that crawl into their mothers' pouches, where they stay for the first six to seven months of their lives. These young koalas, known as joeys, are fully weaned around a year old. Koalas have few natural predators and parasites, but are threatened by various pathogens, such as Chlamydiaceae bacteria and the koala retrovirus, as well as by bushfires and droughts.
   <br><br> <strong>WHERE WILL YOU FIND THEM?</strong><br><br>
    You will find the koalas next to the giraffe enclosure.`,
  },

  panda: {
    title: "PANDA",
    image: "img/panda.jpg",
    description: `The giant panda (Ailuropoda melanoleuca) also known as panda bear or simply panda, is a bear native to south central China. 
    It is easily recognized by the large, distinctive black patches around its eyes, over the ears, and across its round body.
    <br><br> The name "giant panda" is sometimes used to distinguish it from the unrelated red panda. Though it belongs to the order Carnivora,
     the giant panda's diet is over 99% bamboo. Giant pandas in the wild will occasionally eat other grasses, wild tubers, or even meat in the form of birds, rodents or carrion.<br><br>
     <br> In captivity, they may receive honey, eggs, fish, yams, shrub leaves, oranges, or bananas along with specially prepared food.
The giant panda lives in a few mountain ranges in central China, mainly in Sichuan province, but also in neighbouring provinces, namely Shaanxi and Gansu. 
As a result of farming, deforestation, and other development, the giant panda has been driven out of the lowland areas where it once lived.
The giant panda is a conservation reliant endangered species.<br><br>

<strong>WHERE WILL YOU FIND THEM?</strong>
<br><br>

You will find the pandas at Panda Canyon.
`,
  },

  monkey: {
    title: "MONKEY",
    image: "img/monkey.jpg",
    description: `The dusky leaf monkey, spectacled langur, or spectacled leaf monkey (Trachypithecus obscurus) is a species of primate in the family Cercopithecidae. It is found in Malaysia, Burma, and Thailand.
<br><br>
   <strong> WHERE WILL YOU FIND THEM?</strong>
    <br><br>
    You will find the monkeys at the monkey cage near the Monkey Trail.,`,
  },

  lion: {
    title: "LION",
    image: "img/lion.jpg",
    description: `The lion (Panthera leo) is one of the five big cats in the genus Panthera and a member of the family Felidae. The commonly used term African lion collectively denotes the several subspecies found in Africa. With some males exceeding 250 kg (550 lb) in weight, it is the second-largest living cat after the tiger.
<br><br>
Wild lions currently exist in sub-Saharan Africa and in Asia (where an endangered remnant population resides in Gir Forest National Park in India) while other types of lions have disappeared from North Africa and Southwest Asia in historic times. Until the late Pleistocene, about 10,000 years ago, the lion was the most widespread large land mammal after humans. They were found in most of Africa, across Eurasia from western Europe to India, and in the Americas from the Yukon to Peru.
    <br><br>
    The lion is a vulnerable species, having seen a major population decline in its African range of 30 to 50% per two decades during the second half of the twentieth century. Lion populations are untenable outside designated reserves and national parks. Although the cause of the decline is not fully understood, habitat loss and conflicts with humans are currently the greatest causes of concern. Within Africa, the West African lion population is particularly endangered.
    <br><br>
    <strong>WHERE WILL YOU FIND THEM?</strong>
    <br><br>
    
    You will find the lions at the Northern Frontier,`,
  },

  gemsbok: {
    title: "GEMSBOK",
    image: "img/gemsbok.jpg",
    description: `The gemsbok or gemsbuck (Oryx gazella) is a large antelope in the Oryx genus. It is native to the arid regions of Southern Africa, such as the Kalahari Desert. Some authorities formerly included the East African oryx as a subspecies.
<br><br>
    The gemsbok is depicted on the coat of arms of Namibia, where the current population of the species is estimated at 373,000 individuals.
    <br><br>
    The name "gemsbok" in English is derived from Afrikaans gemsbok, which itself is derived from the Dutch name of the male chamois, gemsbok. Although some superficial similarities in appearance (especially in the facial pattern) are noticed, the chamois and the oryx are not closely related.
    <br><br>
    <strong>WHERE WILL YOU FIND THEM?</strong>
    <br><br>
    You will find the gemsboks just beyond panda canyon.`,
  },

  gorilla: {
    title: "gorilla",
    image: "img/gorilla.jpg",
    description: `Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Africa. The eponymous genus Gorilla is divided into two species: the eastern gorillas and the western gorillas, and either four or five subspecies. They are the largest living primates by physical size. The DNA of gorillas is highly similar to that of humans, from 95 to 99% depending on what is counted, and they are the next closest living relatives to humans after the chimpanzees and bonobos.
<br><br>
    Gorillas' natural habitats cover tropical or subtropical forests in Africa. Although their range covers a small percentage of Africa, gorillas cover a wide range of elevations. The mountain gorilla inhabits the Albertine Rift montane cloud forests of the Virunga Volcanoes, ranging in altitude from 2,200 to 4,300 metres (7,200 to 14,100 ft). Lowland gorillas live in dense forests and lowland swamps and marshes as low as sea level, with western lowland gorillas living in Central West African countries and eastern lowland gorillas living in the Democratic Republic of the Congo near its border with Rwanda.
    <br><br>
    <strong>WHERE WILL YOU FIND THEM?</strong>
    <br><br>
    You will find the gorilla cage at GO12.`,
  },

  warthog: {
    title: "warthog",
    image: "img/warthog.jpg",
    description: `Phacochoerus is a genus of wild pigs in the family Suidae, known as warthogs. It is the sole genus of subfamily Phacochoerinae. They are found in open and semiopen habitats, even in quite arid regions, in sub-Saharan Africa. The two species were formerly considered conspecific under the scientific name Phacochoerus aethiopicus, but today this is limited to the desert warthog, while the best-known and most widespread species, the common warthog (or simply warthog) is Phacochoerus africanus.
<br><br>
    Although covered in bristly hairs, their bodies and heads appear largely naked from a distance, with only the crest along the back, and the tufts on their cheeks and tails being obviously haired. The English name refers to their facial wattles, which are particularly distinct in males. They also have very distinct tusks, which reach a length of 25.5 to 63.5 cm (10.0 to 25.0 in) in the males, but are always smaller in the females. They are largely herbivorous, but occasionally also eat small animal food. While both species remain fairly common and widespread, and therefore are considered to be of Least Concern by the IUCN, the nominate subspecies of the desert warthog, commonly known as the Cape warthog, became extinct around 1865.
    <br><br>
    <strong>WHERE WILL YOU FIND THEM?</strong>
    <br><br>
    You will find the warthogs at WA11, near the elephant enclosure.,`,
  },
};

const data = animalData[animalName];

if (data) {
  document.getElementById("animal-title").textContent = data.title;
  document.getElementById("animal-image").src = data.image;
  document.getElementById("animal-image").alt = data.title;
  document.getElementById("animal-description").innerHTML = data.description;
} else {
  document.getElementById("animal-title").textContent = "Animal not found";
}
