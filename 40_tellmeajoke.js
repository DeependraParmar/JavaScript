let myjoke = [
        {
            "category": "Programming",
            "type": "single",
            "joke": "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 3,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "\"Honey, go to the store and buy some eggs.\"\n\"OK.\"\n\"Oh and while you're there, get some milk.\"\nHe never returned.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 18,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "What do you call a developer who doesn't comment code?",
            "delivery": "A developer.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 14,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Why are modern programming languages so materialistic?",
            "delivery": "Because they are object-oriented.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 21,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 12,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "\"Knock, knock.\"\n\"Who's there?\"\n\n[very long pause]\n\n\"Java.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 36,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Why do programmers wear glasses?",
            "delivery": "Because they need to C#",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 50,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Hey baby I wish your name was asynchronous...",
            "delivery": "... so you'd give me a callback.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 54,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Why did the web developer walk out of a resturant in disgust?",
            "delivery": "The seating was laid out in tables.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 6,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Why is 6 afraid of 7 in hexadecimal Canada?",
            "delivery": "Because 7 8 9 A?",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 7,
            "safe": true,
            "lang": "en"
        }
    ]

let div = document.getElementById("joke");
let index = Math.floor(Math.random() * (myjoke.length-1));

div.innerHTML = myjoke[index].joke;