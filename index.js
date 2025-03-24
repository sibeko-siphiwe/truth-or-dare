function adult(){
    alert("Ayy fede. Welcome to the adult section");
    window.location.href = "adult.html";
}

function teens(){
    alert("Enjoy ntuana maarn, then go watch abo Cocomelon after");
    window.location.href = "teen.html";
}

function ATruth(){
    document.getElementById("Question").style.display = "none";
    document.getElementById("H").style.display = "none";

    const truths = [ 
	"Have you ever had a wet dream about one of your friends ?",
    "On your group of friends, Who would you fuck ?",
    "Who you would never kiss, even if you were to kiss eveyone ?",
    "Who is your ugliest friend ?",
    "Where was the weirdest place you ever had sex in ?",
    "What's your biggest turn on when you think about the 4th person on your left ?",
    "When did you realise that you are attracted to your bestie ?",
    "Have you ever faked an orgasm ?",
    "When was the last time you were turned on ?",
    "Would you ever do a threesome ?",
    "What makes you horny ?",
    "What is the sexiest gift you would give one of your friends ?",
    "What is your deepest darkest secret ?",
    "When was the last time you masturbated ?",
    "How old were you when you had sex for the first time ?",
    "What was the most embbarassing thing that has happened during sex",
    "What is the dumbest thing someone has asked you to do ?",
    "What's your biggest turn off ?",
    "What's your best pick up line ?",
    "If you could do one sex position for the rest of your life, which one would it be ?",
    "Who would you rather kiss in this group ?",
    "What's the weirdest thing you would like someone to do to you ?",
    "What's your body count ?",
    "Have you ever been caught having sex or watching adult video's ?", ]

    document.getElementById("Result").innerHTML = truths[Math.floor(Math.random()*truths.length)];

}

function ADare(){
    document.getElementById("Question").style.display = "none";
    document.getElementById("H").style.display = "none";

    const dares = [ 
        "I dare you to flash us right now.",
        "I dare you to go home and leave us in peace.",
        "I dare you to call your crush and confess your love.",
        "I dare you to kiss the person you love the most and slap the person you love the least.",
        "I dare you to touch your self while we watch.",
        "I dare you to rizz up your favourite friend.",
        "I dare you to choose a person from your contact list you would like to have a threesome with.",
        "I dare you to play the rest of the game half naked or naked.",
        "I dare you to kiss someone right now for 60 seconds.",
        "I dare you to twerk for us.",
        "I dare you to hide something in your body and pick someone to find it.",
        "I dare you to moan for 20 seconds.",
        "I dare you to call your ex and moan when he or she answers.",
        "I dare you to spin the bottle and kiss who ever the bottle chooses.",
        "I dare you to act your favourite sex position with the person on your left.",
        "I dare you to swap your clothes you are wearing with the person on your right for the rest of the game.",
        "I dare you to send a text to someone else's partner.",
        "I dare you to transfer alcohol from your mouth to someone else's mouth.",
        "I dare you to approach anyone in here right now."
     ]

     document.getElementById("Result").innerHTML = dares[Math.floor(Math.random()*dares.length)];

}

function TTruth(){
    document.getElementById("Question").style.display = "none";
    document.getElementById("H").style.display = "none";

    const truths = [ 
        "What is your biggest fear?",
		"Whats that one thing you are glad you family doesnt know about you",
		"Whats the worst thing you've ever done",
		"Whats your biggest regret in life",
		"Whats your hidden talent?",
		"Who was your first celebrity crush",
		"What's your thought on polygramy?",
		"Have you ever cheated in an exam?",
		"If you were going to be on a reality TV show, which would it be?",
		"What have you did when you were drunk and regreted it when you were sober?",
		"What's your biggest insecurity?",
		"What's one thing you hate people knowing about you?",
		"What's the best thing anyone's ever done for you?",
		"What's your worst habit?",
		"What's the worst date you've been on?",
		"What's the best date you've been on?",
		"What's one thing you wish people knew about you?",
		"Have you ever lied to get out of a bad date?",
		"What was your worst meetup experience",
		"Have you ever had a bad kisser story",
		"If you had to get back with an ex, who would you choose?",
		"What's the strangest rumour you've heard about yourself?",
		"What's your favourite gross food combination?",
		"If you could swap lives with someone in this room, who would it be?",
		"What was your first kiss experience",
		"What was the most inappropriate time you farted?",
		"What's something you really hope your family never finds out about?",
		"How much would you rate our fashion sense?",
		"Have you ever practised kissing in the mirror?",
		"How would you rate your look in the scale of 1 to 10?",
		"Who in the group would you want by your side in a zombie apocalypse?"
     ]

     document.getElementById("Result").innerHTML = truths[Math.floor(Math.random()*truths.length)];

}

function TDare(){
    document.getElementById("Question").style.display = "none";
    document.getElementById("H").style.display = "none";

    const dares = [ 
	"I dare you to tell us something we don't know about you.",
    "I dare you to do a dance for 2 minutes.",
    "I dare you to make animal noises",
    "I dare you to create a short poem",
    "I dare you to do a specific accent",
    "I dare you to tell us a short story",
    "I dare you to make a funny face",
    "I dare you to feed someone a snack now",
    "I dare you to have a group hug",
    "I dare you to have a staring contest with the 3rd person",
	"I dare you to Show the most embarrassing photo on your phone",
	"I dare you to Put 5 different available liquids into a cup and drink it",
	"I dare you to Yell out the first word that comes to your mind",
	"I dare you to Like the first 15 posts on your Facebook newsfeed",
	"I dare you to Keep your eyes closed until it's your turn",
	"I dare you to Pretend to be anyone of us for 30 seconds",
	"I dare you to Try to make us laugh for 60 seconds",
	"I dare you to Talk in an American accent for the rest of the evening",
	"I dare you to Do your best celebrity impression",
	"I dare you to Post your oldest pic in any social media for 30 minutes",
	"I dare you to Dance in a quiet room for a minute(no music)",
	"I dare you to Sing your favourite song from start till end",
	"I dare you to Choose someone to tickle you and try not to laugh",
	"I dare you to Let someone select a random number, then go to WhatsApp and call or delete a person in that number",
	"I dare you to Try to make your self cry",
	"I dare you to Give a celebrity look alike to every person in the room",
	"I dare you to Tell us 2 truths and 2 lies and let us guess which one is a truth and which one is a lie",
	"I dare you to Choose a player to jump until its your turn again",
	"I dare you to Call 12th person in your phonebook and bark when they answer",
	"I dare you to Do a Facebook Live and say everything your friends tell you to",
	"I dare you to Show us the most embarrasing thing in your phone",
	"I dare you to I dare you to agree and say yes to everything for the next 10 minutes",
	"I dare you to tell us what you think everyone in the group will be up to in five years time",
     ]

     document.getElementById("Result").innerHTML = dares[Math.floor(Math.random()*dares.length)];

}