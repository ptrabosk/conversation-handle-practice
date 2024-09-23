let score = 0;
let attempts = 0;
const maxAttempts = 20;
const userChoices = [];
const usedIndexes = [];  // Track used indexes to ensure uniqueness

// Example texts array (replace this with your actual questions and answers)
const texts = [
    { text: "Yes please discontinue messages for now.. this is my third request to your company to possibly expand your sizes ... thank you", correct: "Unsubscribe" },
    { text: "(attn) Hey, I need help with something: please unsubscribe me from texts - thanks", correct: "Unsubscribe" },
    { text: "@remove", correct: "Unsubscribe" },
    { text: "STOO", correct: "Unsubscribe" },
    { text: ". . . in the day. Then \"nope can't get you that \" Anyway no more HD's for me ! Stop 🛑 texting Thought I already stopped these one e to be honest. Fuck hey Dudes !", correct: "Unsubscribe" },
    { text: "79084 STOP", correct: "Unsubscribe" },
    { text: "Again stop please", correct: "Unsubscribe" },
    { text: "Ah, that's a bummer. Yeah go ahead and opt me out. Sorry!", correct: "Unsubscribe" },
    { text: "Ahhh that's too bad. Unsubscribe me then", correct: "Unsubscribe" },
    { text: "Alright no problem can you remove me from the alerts", correct: "Unsubscribe" },
    { text: "Also can you not text this number no more please", correct: "Unsubscribe" },
    { text: "Bruh get off my phone", correct: "Unsubscribe" },
    { text: "Exit", correct: "Unsubscribe" },
    { text: "I wish to unsubscribe from your text messages..thank you", correct: "Unsubscribe" },
    { text: "Would no longer like to receive these. Thanks", correct: "Unsubscribe" },
    { text: "Okay then cancel this texting for me", correct: "Unsubscribe" },
    { text: "Sto", correct: "Unsubscribe" },
    { text: "I understand that! apologize but I don't have the time to explain how ur system is not working properly.  Plz accept this as official notification to remove me from all email campaigns and text alerts.  Thank you", correct: "Unsubscribe" },
    { text: "Can you remove ve my info.  I only signed up for the discount.", correct: "Unsubscribe" },
    { text: "Please don't text this number again", correct: "Unsubscribe" },
    { text: "I would like to unsubscribe from texts and emails from this company.", correct: "Unsubscribe" },
    { text: "STOP ALL", correct: "Unsubscribe" },
    { text: "YOU HAVE MY EMAIL ADDRESS ALREADY...STOP SUBSCRIPTION AND ALL COMMUNICATIONS!!!", correct: "Unsubscribe" },
    { text: "/unsubscribe", correct: "Unsubscribe" },
    { text: "I'm unsubscribing😔", correct: "Unsubscribe" },
    { text: "Yes they are getting quite annoying.  Please remove me from all text!", correct: "Unsubscribe" },
    { text: "And stop texting me", correct: "Unsubscribe" },
    { text: "Was that truly of relevance to once again interrupt my workday??? Stop it right now!!", correct: "Unsubscribe" },
    { text: "Stop phone communications at once I'm tired I'm getting texts from you every day I will not buy anything from you until it stops in", correct: "Unsubscribe" },
    { text: "Never text me again, please😡😡😡", correct: "Unsubscribe" },
    { text: "I have done that several time over the past 3 weeks! Yes, please remove my number from your system.", correct: "Unsubscribe" },
    { text: "Yes stop texting me pls", correct: "Unsubscribe" },
    { text: "Thank you.   Unsubscribe please", correct: "Unsubscribe" },
    { text: "No more texts please", correct: "Unsubscribe" },
    { text: "Remove me from ANY of your lists and datas. NOW.", correct: "Unsubscribe" },
    { text: "Leave me alone!", correct: "Unsubscribe" },
    { text: "No more mailing.. thank you", correct: "Unsubscribe" },
    { text: "No more texts please", correct: "Unsubscribe" },
    { text: "Remove me from ANY of your lists and datas. NOW.", correct: "Unsubscribe" },
    { text: "Leave me alone!", correct: "Unsubscribe" },
    { text: "No more mailing.. thank you", correct: "Unsubscribe" },
    { text: "Please stop sending me messages. It's too much and I don't like it. Thank you.", correct: "Unsubscribe" },
    { text: "how do I unsubscribe", correct: "Unsubscribe" },
    { text: "Well then sadly I guess stop", correct: "Unsubscribe" },
    { text: "No need to further contact… Have a great week", correct: "Unsubscribe" },
    { text: "If you could unsubscribe me i would appreciate it", correct: "Unsubscribe" },
    { text: "How do I stop receiving texts as that the only reason I signed up was for the 10 off.", correct: "Unsubscribe" },
    { text: "STP", correct: "Unsubscribe" },
    { text: "Then please remove my information from your email and text blasts", correct: "Unsubscribe" },
    { text: "Take me off your i taxing list!", correct: "Unsubscribe" },
    { text: "Cancel sms service", correct: "Unsubscribe" },
    { text: "Stapp", correct: "Unsubscribe" },
    { text: "U send me a 40 percent off code your company is a scam trying to get me to buy something please delete my number", correct: "Unsubscribe" },
    { text: "Zero texts then. Thanks.", correct: "Unsubscribe" },
    { text: "some people work and it happens to be my day off and I just got woke up so go ahead and put a stop to all texts", correct: "Unsubscribe" },
    { text: "Inscribe me", correct: "Unsubscribe" },
    { text: "Then just cancel me. Thank you!  Too many texts offering the same thing!", correct: "Unsubscribe" },
    { text: "Can you remove me from your text messaging?", correct: "Unsubscribe" },
    { text: "Yes please stop texts. Thank you", correct: "Unsubscribe" },
    { text: "No wrong number", correct: "Unsubscribe" },
    { text: "REMOVE ALL TEXT MESSAGE COMMUNICATION", correct: "Unsubscribe" },
    { text: "Opt out", correct: "Unsubscribe" },
    { text: "Please take me off your contacts list", correct: "Unsubscribe" },
    { text: "Not helpful. STOP", correct: "Unsubscribe" },
    { text: "Leave me alone", correct: "Unsubscribe" },
    { text: "Please quit bothering me.", correct: "Unsubscribe" },
    { text: "Stop texting me or I will report you", correct: "Unsubscribe" },
    { text: "Yes please remove me, I didn't mind text on sales but this is invasive and wrong", correct: "Unsubscribe" },
    { text: "No, leave me alone!!", correct: "Unsubscribe" },
    { text: "Sorry mistake However can you please take me off your text msg list?", correct: "Unsubscribe" },
    { text: "Thank you. No more texts please.", correct: "Unsubscribe" },
    { text: "Then please take me off your mailing and text list", correct: "Unsubscribe" },
    { text: "YOU HAVE THE WRONG NUMBER", correct: "Unsubscribe" },
    { text: "Ok cut them off then please", correct: "Unsubscribe" },
    { text: "Out", correct: "Unsubscribe" },
    { text: "Remove me from this site", correct: "Unsubscribe" },
    { text: "Quit texting me unless you lower your price", correct: "Unsubscribe" },
    { text: "I can't find the place where I need to unsubscribe. Please take me off your mailing list and your texting list please please please please please stop texting me.", correct: "Unsubscribe" },
    { text: "I'm not interested- please do not contact me again", correct: "Unsubscribe" },
    { text: "PLEASE DELETE MY ℹ️", correct: "Unsubscribe" },
    { text: "No more. Please!", correct: "Unsubscribe" },
    { text: "So shut up and stop texting me ok?", correct: "Unsubscribe" },
    { text: "I gave the number because it was mandatory, I don't want marketing text please remove", correct: "Unsubscribe" },
    { text: "Do not text me again I am not interested", correct: "Unsubscribe" },
    { text: "Ok thank you STOP 🥲❤️", correct: "Unsubscribe" },
    { text: "Take me off your text list for advertisement", correct: "Unsubscribe" },
    { text: "Yes please unsubscribe me from texts. I get plenty of emails from you guys. Love your products but don't need any more at this time.", correct: "Unsubscribe" },
    { text: "Yes can u eliminate texts I look when I can but I'll go ahead n opt out thank you", correct: "Unsubscribe" },
    { text: "Thank you . Stop", correct: "Unsubscribe" },
    { text: "Yes. Please take me off auto texts. Much appreciated!", correct: "Unsubscribe" },
    { text: "Yes remove me", correct: "Unsubscribe" },
    { text: "Bro stop fucking texting my phone", correct: "Unsubscribe" },
    { text: "Take me off mailing list", correct: "Unsubscribe" },
    { text: "Ok. How do I unsubscribe?", correct: "Unsubscribe" },
    { text: "Sure, don't contact me again unless you can give me a code for 50% off.", correct: "Unsubscribe" },
    { text: "There is no discounted item. Please remove us from your text list then - we do not want to do business like this anymore.", correct: "Unsubscribe" },
    { text: "Please, no more texts.", correct: "Unsubscribe" },
    { text: "Yes, please remove me.   The aggressive texting has caused me to look to other sources for stocking stuffers.  I can't imagine many of your customers enjoy this level of text barrage.  Thank you.", correct: "Unsubscribe" },
    { text: "PLEASE STOP TEXTING", correct: "Unsubscribe" },
    { text: "I'd prefer just receiving email messages if that's possible", correct: "Unsubscribe" },
    { text: "Liked “You're welcome! I'll keep you posted.”", correct: "Close" },
    { text: "(I’m not receiving notifications. If this is urgent, reply “urgent” to send a notification through with your original message.)", correct: "Close" },
    { text: "I’m driving with Do Not Disturb While Driving turned on. I’ll see your message when I get where I’m going.", correct: "Close" },
    { text: "(I’m not receiving notifications. If this is urgent, reply “urgent” to send a notification through with your original message.)", correct: "Close" },
    { text: "Laughed at “No problem. Feel free to reach out anytime, I'm al…”", correct: "Close" },
    { text: "Sorry at work", correct: "Close" },
    { text: "Liked “Awesome! We're looking forward to your purchase.”", correct: "Close" },
    { text: "(I’m not receiving notifications. If this is urgent, reply “urgent” to send a notification through with your original message.)", correct: "Close" },
    { text: "Liked “johnnie-O: Time to rep your school with our NCAA Gear! Whether you're cheering from the stands or the couch. https://johnnie-o.attn.tv/l/oma/gfL15”", correct: "Close" },
    { text: "I would tell him that Addison hasn't finished his pt and hasn't been great at doing it home, but that it's still happening", correct: "Close" },
    { text: "I pl as wwwaEeeeekokkkkkkkkkkkkkkoopppppppppplllmkqqqqqqqaaaaaaknbvc", correct: "Close" },
    { text: "Shfbdjdhjfjfjfnfjfjfjjfnfjfjfjfjekfmfjgkkfmfkdmfkf", correct: "Close" },
    { text: "Oops that was for someone else", correct: "Close" },
    { text: "👍🏻", correct: "Close" },
    { text: "Removed a laugh from “ALOHA Collection: A special offer for our SMS ʻoha…”", correct: "Close" },
    { text: "Loved an image", correct: "Close" },
    { text: "c1TWO", correct: "Close" },
    { text: "Fgx c dd a", correct: "Close" },
    { text: "👏", correct: "Close" },
    { text: "I’m driving with Focus turned on. I’ll see your message when I get where I’m going.", correct: "Close" },
    { text: "Y", correct: "Close" },
    { text: "Questioned an image", correct: "Close" },
    { text: "https://elemis.attn.tv/l/yLK/UG3gv", correct: "Close" },
    { text: "😊", correct: "Close" },
    { text: "👍🏼", correct: "Close" },
    { text: "Loved “So sorry about that! We can't apply multiple disco…”", correct: "Close" },
    { text: "Send this text to subscribe to recurring automated personalized mar", correct: "Close" },
    { text: "Yifjdbrhsjcbf fjcfjrngj", correct: "Close" },
    { text: "The", correct: "Close" },
    { text: "�", correct: "Close" },
    { text: "Driving, can't text Sent from MY ROGUE", correct: "Close" },
    { text: "N", correct: "Close" },
    { text: "Removed a question mark from “SNIPES: Polo Ralph Lauren classic crew tees, socks and more accessories are now on sale! Shop wardrobe basics for all now: https://snipes.attn.tv/l/apB/ACZw1”", correct: "Close" },
    { text: "​👍​ to “ Have a great evening, and always feel free to get back in touch if any questions come up ”", correct: "Close" },
    { text: "Ccc C m", correct: "Close" },
    { text: "mom.mp3", correct: "Close" },
    { text: "https://temu.com/s/TnRlqeWUcwZyq", correct: "Close" },
    { text: "I’m driving with Focus turned on. I’ll see your message when I get where I’m going. If you are experiencing a psychiatric or medical emergency, please hang up and call 911. If it is not an emergency, you may call me back in a few minutes using the same phone number. I will see that you have called me twice and I will return your call as soon as possible.", correct: "Close" },
    { text: "B", correct: "Close" },
    { text: "May the renewal of life at Easter bring blessings of love, hope, peace, good health and happiness to you and your loved ones.", correct: "Close" },
    { text: "What's time will you be home form church. I mes Toyo. To flcjoms over here please", correct: "Close" },
    { text: "Liked “Sorry for the late reply and I'm so sorry for the …”", correct: "Close" },
    { text: "Liked “Awesome! Feel free to select the Silver color and …”", correct: "Close" },
    { text: "Liked “You're welcome and have a great day!”", correct: "Close" },
    { text: "Removed a like from “Birkenstock: Extra glossy styles in your favorite …”", correct: "Close" },
    { text: "K in mini", correct: "Close" },
    { text: "Ughhh", correct: "Close" },
    { text: "In", correct: "Close" },
    { text: "(I’m not receiving notifications. If this is urgent, reply “urgent” to send a notification through with your original message.)", correct: "Close" },
    { text: "I’m driving with Focus turned on. I’ll see your message when I get where I’m going.", correct: "Close" },
    { text: "ARION payroll", correct: "Close" },
    { text: "(I’m not receiving notifications. If this is urgent, reply “urgent” to send a notification through with your original message.)", correct: "Close" },
    { text: "I’m driving with Focus turned on. I’ll see your message when I get where I’m going.", correct: "Close" },
    { text: ",ggbhbhhhghbgbgbhhjgggcgvbv", correct: "Close" },
    { text: "Cuatro ocho", correct: "Close" },
    { text: "It's three jokes in one!   Kirk on a Birk. Spock on a Stock. Kirk n' Spock.", correct: "Close" },
    { text: "Vjh", correct: "Close" },
    { text: "I’m listening to Landslide by Fleetwood Mac. I’m listening to Landslide by Fleetwood Mac.", correct: "Close" },
    { text: "Liked “Got it. I'll check this now with the team and get …”", correct: "Close" },
    { text: "🙏", correct: "Close" },
    { text: "Removed a question mark from “Shady Rays: Get ready for the slopes with our Wint…”", correct: "Close" },
    { text: "(I’m not receiving notifications. If this is urgent, reply “urgent” to send a notification through with your original message.)", correct: "Close" },
    { text: "(I’m not receiving notifications. If this is urgent, reply “urgent” to send a notification through with your original message.)", correct: "Close" },
    { text: "Loved “Thank you for reaching out! I'll be sure to pass y…”", correct: "Close" },
    { text: "👍", correct: "Close" },
    { text: "👌", correct: "Close" },
    { text: "(I’m not receiving notifications. If this is urgent, reply “urgent” to send a notification through with your original message.)", correct: "Close" },
    { text: "Loved “Have a great evening, and always feel free to get …”", correct: "Close" },
    { text: "Eula", correct: "Close" },
    { text: "FOR. & YOU DIDNT BUY A DOLLAR WORTH OF FUEL.", correct: "Close" },
    { text: "MOUR", correct: "Close" },
    { text: "800 960 4778 ext 0052 Vanessa", correct: "Close" },
    { text: "Reinforce box", correct: "Close" },
    { text: "Liked “You're welcome! Have a great day and if you have a…”", correct: "Close" },
    { text: "🔒❤️💙🩷🩵💞💙💕❤️🤎🔏🟠☑️☑️🔜🔈🔈🟪🟪⬛️🟪🔹🔺🟢🟡✔️☑️✔️🟠🔲◼️◻️🔉📣🔕🗯️🕜🕙🇩🇲🇩🇲🇪🇭hhfhnfbfktjrkdkdfkkgmfmahnd.   Nrcomdalkfkdksfiskcjfjsmjfsjgkehfbgfbndndnfjjfuajdjrakskjjaejzjfjmhikxk", correct: "Close" },
    { text: "Anne-Marie Provost", correct: "Close" },
    { text: "I'm Driving - Sent from My Car", correct: "Close" },
    { text: "Removed a dislike from “Bonobos: 30% OFF SALE!! *cough cough* sorry for sh…”", correct: "Close" },
    { text: "Loved “You're welcome! That sounds like a great plan. Als…”", correct: "Close" },
    { text: "Bout to send u ya money too", correct: "Close" },
    { text: "Laughed at “HEYDUDE: Big news - The Hudson just dropped🙌 It'…”", correct: "Close" },
    { text: "As a.  X  sx  w.   W saws as. _|.[[[[[[[. Zzzz zà 2", correct: "Close" },
    { text: "Laughed at “  Z”", correct: "Close" },
    { text: "Zzz", correct: "Close" },
    { text: "​😡​ to “ Rykä: 👟 Just slip-on and go! https://ryka.attn.tv/l/ntS/EB5LD ”", correct: "Close" },
    { text: "(I’m not receiving notifications. If this is urgent, reply “urgent” to send a notification through with your original message.)", correct: "Close" },
    { text: "You’ll be making 20% on the first orders and then re orders it depends on what level you’re at.", correct: "Close" },
    { text: "GIRL!", correct: "Close" },
    { text: "Laughed at “HAMMITT: Sleek, structured + soft? The perfect bag…”", correct: "Close" },
    { text: "SSTOP", correct: "Close" },
    { text: "You’re a real game-changer and an MVP in our eyes. Your hard work and dedication have paid off, and our hats are off to you! Keep hitting those goals and soaring to new heights. Congrats on your sports achievement!", correct: "Close" },
    { text: "Removed an exclamation from “Omaha Steaks: T.G.I Filet Friday! Snag hot deals o…”", correct: "Close" },
    { text: "..", correct: "Close" },
    { text: "Half the vendors aren't here today", correct: "Close" },
    { text: "Loved “Birkenstock: The Gizeh Summer Edit. Shop Big Buckl…”", correct: "Close" },
    { text: "8884901703", correct: "Close" },
    { text: "As I was doing inspection on trailer for 25 units I noticed that some gate wire hase been cut and left on top of the trailer We move all the wire so it doesn't get to road and domage other car behind us", correct: "Close" },
    { text: "memeries😇🕊️🕊️o", correct: "Close" },
    { text: "Y", correct: "Close" },
    { text: "Removed an exclamation from an image", correct: "Close" },
    { text: "It won't allow me to send you a pic on your end", correct: "Reply" },
    { text: "I tried pajamas shorts a sweater it won't work on any of them", correct: "Reply" },
    { text: "Can I see men's pants", correct: "Reply" },
    { text: "I went through the return process and it denied me so I sent an email", correct: "Reply" },
    { text: "Thank you", correct: "Reply" },
    { text: "No, Thank you", correct: "Reply" },
    { text: "You told me they were available and I placed the order and now they say it's unavailable", correct: "Reply" },
    { text: "Thank you I hope there here before my nieces 21st birthday", correct: "Reply" },
    { text: "(attn) Hey, I need help with something:", correct: "Reply" },
    { text: "Can I send back and get new ones sent?", correct: "Reply" },
    { text: "I like it a lot. Do you have any others?", correct: "Reply" },
    { text: "If stock e mail me", correct: "Reply" },
    { text: "All set thanks", correct: "Reply" },
    { text: "Yes!", correct: "Reply" },
    { text: "I bought lots of stuff from cal but I don't see points my daughter just asked me about it", correct: "Reply" },
    { text: "I was trying to find points", correct: "Reply" },
    { text: "Hi Taylor,  can you please explain why  this calculation don't make sense?", correct: "Reply" },
    { text: "Bad customer service", correct: "Reply" },
    { text: "Looks like it's on hold due to my address", correct: "Reply" },
    { text: "Ok. Thank you for your time", correct: "Reply" },
    { text: "I should be able to use both but its not working.", correct: "Reply" },
    { text: "Can you use the rewards or sale code on Amazon with prime?", correct: "Reply" },
    { text: "Hello.....", correct: "Reply" },
    { text: "This is what I ordered🔝", correct: "Reply" },
    { text: "Looking for a good sale/price", correct: "Reply" },
    { text: "Thanks", correct: "Reply" },
    { text: "But these cosmetic bags are not discounted prices. They are original prices and your company has given me discount to use on these cosmetic bags before.", correct: "Reply" },
    { text: "Ok. I am trying it on my iPad. I will try on my laptop and see.", correct: "Reply" },
    { text: "Is still not working", correct: "Reply" },
    { text: "I love the products no question and I've had good customer service results in the past", correct: "Reply" },
    { text: "Received the notification well into the afternoon and had until end of day to use it...", correct: "Reply" },
    { text: "Btw that $10 discount counter offer is disrespectful", correct: "Reply" },
    { text: "I order a cooler but it's getting here tomorrow", correct: "Reply" },
    { text: "This is my order# SNP11440429  I thought I did pick up from store on Westchester square", correct: "Reply" },
    { text: "That's it! Have a great day", correct: "Reply" },
    { text: "SUPPORT", correct: "Reply" },
    { text: "How do I get them changed for the right size?", correct: "Reply" },
    { text: "How do I change them?", correct: "Reply" },
    { text: "I see the transaction as pending on my bank statement but it never goes through", correct: "Reply" },
    { text: "I purchased that sonic screwdriver and I thought the quality would be a whole lot better that what I got it barely makes any sound and honestly I'm just not really satisfied with it", correct: "Reply" },
    { text: "Hello", correct: "Reply" },
    { text: "Ok.  That's what I thought.  You can see how I was confused", correct: "Reply" },
    { text: "And just a critique- your company sends far too many sales texts.", correct: "Reply" },
    { text: "That's the one!  Thank you!  I just received it and am getting ready to swatch it. Thank you!", correct: "Reply" },
    { text: "I did. Thank you !", correct: "Reply" },
    { text: "I like them but I really wanted the bamboo pajama set with the button down top. Do you know when they will be available ?", correct: "Reply" },
    { text: "Oh no, it's been at least a month since I got the order. I just finished the bedroom this weekend and open the packages to find what I told you - two fitted sheets no flat sheets. I would appreciate receiving the flat sheet.", correct: "Reply" },
    { text: "I did not receive the bottle", correct: "Reply" },
    { text: "Will it let me print a return label?", correct: "Reply" },
    { text: "Thanks!", correct: "Reply" },
    { text: "What is the best way to measure my finger?", correct: "Reply" },
    { text: "Thank u for ur help!", correct: "Reply" },
    { text: "Ok thanks. Yes I did sign up for the loyalty program.", correct: "Reply" },
    { text: "I dont have an order #", correct: "Reply" },
    { text: "I need men 10.5", correct: "Reply" },
    { text: "I'll wait for a 25% code. Thank you!", correct: "Reply" },
    { text: "This is looking like a scam", correct: "Reply" },
    { text: "It's on the screen shot", correct: "Reply" },
    { text: "Can you replace the insoles after long time usage?", correct: "Reply" },
    { text: "It says - no shipping rate found for this location.  I cannot proceed.", correct: "Reply" },
    { text: "Are these canned AI messages?  I have been receiving the same message for weeks now. Whitney Pearson Sotheby's Realty", correct: "Reply" },
    { text: "Can I send it back for refund", correct: "Reply" },
    { text: "I can't thank you enough of how much you have helped me with what i needed help looking for!! Thank you so so much:)", correct: "Reply" },
    { text: "Perfect I'll be looking out for those", correct: "Reply" },
    { text: "No they looked just like that but they were heels", correct: "Reply" },
    { text: "Thanks, but sold out!", correct: "Reply" },
    { text: "There's also no ship date for the bed", correct: "Reply" },
    { text: "I am a first time customer?", correct: "Reply" },
    { text: "can i just have free shipping please ?", correct: "Reply" },
    { text: "i have a quick question. or maybe 2", correct: "Reply" },
    { text: "Are those mary jane heels I like coming back? In more colours? Please say YES!", correct: "Reply" },
    { text: "If you could add the codes on your end, you could call me and I'll make the payment over the phone", correct: "Reply" },
    { text: "I placed order number 6099507 and did not receive it but I think I need support instead of you.", correct: "Reply" },
    { text: "Forget it   I'll order from another site   Thank you", correct: "Reply" },
    { text: "Nothing  else today", correct: "Reply" },
    { text: "A double checked that's the correct address. So now what is the next step? This is my first time ordering with your company. I'm disappointed", correct: "Reply" },
    { text: "Can I wash this in a washing machine?", correct: "Reply" },
    { text: "Aw thanks. I was looking at a fringe extra large plus dress and also the woman with the sequins but that's okay, as long as I stick with the $6 jumper, I mean that's less than a cup of coffee.... I think I'll take the risk🎲🎲", correct: "Reply" },
    { text: "Thank you I may have to go back to my new place and measure but I definitely will order pomegranate fabric from my very favorite spoonflower!", correct: "Reply" },
    { text: "Tried and still did not work", correct: "Reply" },
    { text: "No prob. The pics show the error and items", correct: "Reply" },
    { text: "Thank you- may I call in an hour or so?", correct: "Reply" },
    { text: "No, thank you so much. I'll be waiting for my package🫶🏻", correct: "Reply" },
    { text: "Thanks for responding so quickly.", correct: "Reply" },
    { text: "Are you a person or AI?", correct: "Reply" },
    { text: "I got an email saying I could reorder to have it shipped instead of in store pickupBut now my $15 off coupon is gone", correct: "Reply" },
    { text: "Will it come in a nice gift box?", correct: "Reply" },
    { text: "Do you guys have maybe hair growth serum or something similar?", correct: "Reply" },
    { text: "HELP", correct: "Reply" },
    { text: "I'm wondering if the color is black or more of an iron (dark grey) color?", correct: "Reply" },
    { text: "Do u have a way of seeing a delivery date?", correct: "Reply" },
    { text: "I just wanted to make sure bc I was only charged once", correct: "Reply" },
    { text: "Thanks it was figured out, thanks again", correct: "Reply" },
    { text: "If I design it do I have to draw it?", correct: "Reply" },
    { text: "Ok what is the difference between all the Diamond options? Seems to be many versions", correct: "Reply" },
    { text: "Thanks for the update. I appreciate your help", correct: "Reply" },
    { text: "I was sent a $40 gift card to use for whatever I want and when I tried putting it in my cart it says it's not eligible", correct: "Reply" },
    { text: "And why dont you have them in the chicken print?", correct: "Reply" },
    { text: "Yes actually, I'm confused as to the dimensions for sale. Not sure what to buy.", correct: "Reply" },
    { text: "Doesn't give me option to pick free shipping", correct: "Reply" }
        // Add more texts and correct responses here
    ];

function getRandomUniqueIndex() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * texts.length);
    } while (usedIndexes.includes(randomIndex));
    usedIndexes.push(randomIndex);
    return randomIndex;
}

function displayText() {
    if (attempts < maxAttempts) {
        const randomIndex = getRandomUniqueIndex();
        const textBox = document.getElementById('text-box');
        textBox.innerText = texts[randomIndex].text;
        textBox.style.display = 'block';
    } else {
        showResults();
    }
}

function handleChoice(choice) {
    const text = texts[usedIndexes[attempts]];
    userChoices.push({
        text: text.text,
        correct: text.correct,
        userChoice: choice
    });

    if (text.correct === choice) {
        score++;
    }
    attempts++;
    displayText();
}

function showResults() {
    const textBox = document.getElementById('text-box');
    textBox.classList.add('results');  // Add the results class for larger height and scrolling

    if (score === maxAttempts) {
        textBox.innerText = `Perfect score! You got all ${maxAttempts} answers correct.\n`;
    } else {
        const wrongAnswers = userChoices.filter(choice => choice.userChoice !== choice.correct);
        textBox.innerText = `Your score: ${score}/${maxAttempts}\n\nHere are the questions you got wrong:\n`;

        wrongAnswers.forEach((choice, index) => {
            const result = document.createElement('div');
            result.innerText = `${index + 1}. Text: "${choice.text}"\nYour Answer: ${choice.userChoice}\nCorrect Answer: ${choice.correct}\n`;
            textBox.appendChild(result);
        });

        if (wrongAnswers.length === 0) {
            textBox.innerText += "You got all the questions correct!";
        }
    }

    document.querySelector('.buttons').style.display = 'none';
}

// Handle button clicks for choices
document.getElementById('reply-btn').addEventListener('click', () => handleChoice('Reply'));
document.getElementById('close-btn').addEventListener('click', () => handleChoice('Close'));
document.getElementById('unsubscribe-btn').addEventListener('click', () => handleChoice('Unsubscribe'));

// Handle the email input and showing the form
document.addEventListener('DOMContentLoaded', () => {
    const emailContainer = document.getElementById('email-container');
    const questionsContainer = document.getElementById('questions-container');
    const emailInput = document.getElementById('email-input');
    const emailHidden = document.getElementById('email-hidden');
    const startBtn = document.getElementById('start-btn');
    const form = document.getElementById('questions-form');

    // Show the questions after email is submitted
    startBtn.addEventListener('click', () => {
        const email = emailInput.value;
        if (validateEmail(email)) {
            // Hide email container and show the questions
            emailContainer.style.display = 'none';
            questionsContainer.style.display = 'block';

            // Automatically fill the hidden email field in the form
            emailHidden.value = email;

            // Start displaying the first question
            displayText();
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // Function to validate email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Handle form submission to Google Sheets
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Prepare data for submission
        const formData = new FormData(form);
        formData.append('score', score);
        formData.append('attempts', attempts);
        formData.append('userChoices', JSON.stringify(userChoices));

        // Send form data to Google Sheets using the Web App URL
        fetch(form.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(result => {
            alert('Form submitted successfully!');
            // Optionally, you can hide the form or show a success message here
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
        });
    });
});

// Initial display of text when the page loads
window.onload = () => {
    // The text box can be displayed only after email is entered
};

document.getElementById('start-btn').addEventListener('click', function() {
    const emailInput = document.getElementById('email-input').value;
    if (emailInput) {
        document.getElementById('email-hidden').value = emailInput; // Set hidden email field
        document.getElementById('email-container').style.display = 'none'; // Hide email container
        document.getElementById('questions-container').style.display = 'block'; // Show questions container
        window.onload = displayText; // Call displayText function to start showing questions
    } else {
        alert('Please enter a valid email.');
    }
});
