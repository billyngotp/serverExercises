const express = require('express')
const app = express()
const port = 3000

const quotes = ["Speak up for those who cannot speak for themselves - Proverbs 31:8" , 
"2 Corinthians 12:9  But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me." ,
"1 Corinthians 13:4-7 4 Love is patient and kind; love does not envy or boast; it is not arrogant 5 or rude. It does not insist on its own way; it is not irritable or resentful;[a] 6 it does not rejoice at wrongdoing, but rejoices with the truth. 7 Love bears all things, believes all things, hopes all things, endures all things." ,
"Psalm 23:4 Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me." ,
"John 15:13  Greater love has no one than this, that someone lay down his life for his friends." ,
"1 Corinthians 13:13 So now faith, hope, and love abide, these three; but the greatest of these is love." ,
"Ephesians 4:1-3 I therefore, a prisoner for the Lord, urge you to walk in a manner worthy of the calling to which you have been called, 2 with all humility and gentleness, with patience, bearing with one another in love, 3 eager to maintain the unity of the Spirit in the bond of peace. " ,
"Romans 12:9-10 9 Let love be genuine. Abhor what is evil; hold fast to what is good. 10 Love one another with brotherly affection. Outdo one another in showing honor." ,
"Romans 11:1-3 Now faith is the assurance of things hoped for, the conviction of things not seen. 2 For by it the people of old received their commendation. 3 By faith we understand that the universe was created by the word of God, so that what is seen was not made out of things that are visible." ,
"1 Corinthians 6:9-20 9 Or do you not know that the unrighteous[a] will not inherit the kingdom of God? Do not be deceived: neither the sexually immoral, nor idolaters, nor adulterers, nor men who practice homosexuality,[b] 10 nor thieves, nor the greedy, nor drunkards, nor revilers, nor swindlers will inherit the kingdom of God. 11 And such were some of you. But you were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ and by the Spirit of our God." 
];
    
let randomQuote;
app.get('/', (req, res) => res.send(quotes[Math.floor(Math.random()*quotes.length)]));

app.post('/', (req, res) => res.send(quotes[Math.floor(Math.random()*quotes.length)]))
app.listen(port, () => console.log('Example app listening on port ${port}!'))