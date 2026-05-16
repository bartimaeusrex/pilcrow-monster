
// If I can get this working how I want it to at all, can I come up with a universal file with my highly customized vocabulary choices? 

// Another option is just to learn how to implement regular ass TRACERY into your basic HTML. That might even be simpler. Seems like there should be a tutorial out there to do that.

// or maybe I'll just have to have a separate .js file
// I've found a possible answer on stackoverflow: https://stackoverflow.com/questions/62292111/javascript-random-word-from-a-list-generator
// and that would be outside of ink or tracery. Just a separate .js

LIST names = (Patricia), (Arjun), (Yuuma), (Darcy), (Mia), (Chiaki), (Izzi), (Azra), (Lina)
LIST animals = (unicorn), (raven), (sparrow), (scorpion), (coyote), (eagle), (owl), (lizard), (zebra), (duck), (kitten)
LIST moods = (vexed),(indignant),(impassioned),(wistful),(astute),(courteous)


VAR name = ""
~ name = getName()
VAR animal = ""
~ animal = getAnimal()
VAR mood = ""
~ mood = getMood()

// {name} traveled with her {animal}. {name} was never {mood}, for the {animal} was always too {mood}.

=== function getName() ===
~ return LIST_RANDOM(names)

=== function getAnimal() ===
~ return LIST_RANDOM(animals)

=== function getMood() ===
~ return LIST_RANDOM(moods)	