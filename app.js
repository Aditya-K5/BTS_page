Vue.component('album-item',{
data:function(){
    return {
    innerWidth: window.innerWidth
    }
},
props:['album'],
template:
'<li :class=album.type><figure><img :src="album.artwork" :alt="album.title"><figcaption><h2>{{ album.title }} <span class="release-year">({{album.released.getFullYear()}})</span></h2></figcaption></figure><div class="more-info"><ol class="songs"><li v-for="song in album.songs">{{song}}</li></ol><a class="spotify-link" target="_blank" rel="noreferrer noopener" :href="album.spotify">Listen on Spotify</a></div></li>'
})

var albums = [
{
    "type":"mini",
    "title":"Map of the Soul: Persona",
    "artwork": "http://bts.ibighit.com/images/bts/discography/map_of_the_soul-persona/album-cover.jpg",
    "released":new Date("2019,04,12"),
    "spotify": "https://open.spotify.com/album/1AvXa8xFEXtR3hb4bgihIK",
    "songs":[
    "Intro : Persona",
    "Boy With Luv feat. Halsey",
    "Mikrokosmos",
    "Make It Right",
    "HOME",
    "Jamais Vu",
    "Dionysus"
    ],
    "showSongs":false
},
{
    "type":"repackage",
    "title":"Love Yourself: Answer",
    "artwork": "http://bts.ibighit.com/images/bts/discography/love_yourself-answer/album-cover.jpg",
    "released":new Date("2018,08,24"),
    "spotify": "https://open.spotify.com/album/2lATw9ZAVp7ILQcOKPCPqp",
    "songs":[
    "Euphoria",
    "Trivia 起 : Just Dance",
    "Serendipity (Full Length Edition)",
    "DNA",
    "Dimple",
    "Trivia 承 : Love",
    "Her",
    "Singularity",
    "FAKE LOVE",
    "The Truth Untold (Feat. Steve Aoki)",
    "Trivia 轉 : Seesaw",
    "Tear",
    "Epiphany",
    "I'm Fine",
    "IDOL",
    "Answer : Love Myself",
    "Magic Shop",
    "Best Of Me",
    "Airplane pt.2",
    "Go Go",
    "Anpanman",
    "MIC Drop",
    "DNA (Pedal 2 LA Mix)",
    "FAKE LOVE (Rocking Vibe Mix)",
    "MIC Drop (Steve Aoki Remix)(Full Length Edition)"
    ],
    "showSongs":false
},
{
    "type":"full",
    "title":"Love Yourself: Tear",
    "artwork": "http://bts.ibighit.com/images/bts/discography/love_yourself-tear/album-cover.jpg",
    "released":new Date("2018,05,18"),
    "spotify": "https://open.spotify.com/album/2jJfnAZE6IG3oYnUv2eCj4",
    "songs":[
    "Intro: Singularity",
    "FAKE LOVE",
    "The Truth Untold",
    "134340",
    "Paradise",
    "Love Maze",
    "Magic Shop",
    "Airplane pt.2",
    "Anpanman",
    "So What",
    "Outro: Tear"
    ],
    "showSongs":false
},
{
    "type":"mini",
    "title":"Love Yourself: Her",
    "artwork": "http://bts.ibighit.com/images/bts/discography/love_yourself-her/album-cover.jpg",
    "released":new Date("2017,09,18"),
    "spotify": "https://open.spotify.com/album/2FTS6a6DLXMNp8flyA0HGO",
    "songs":[
    "Intro: Serendipity",
    "DNA",
    "Best of Me",
    "Dimple (Illegirl)",
    "Pied Piper",
    "MIC Drop",
    "Go Go",
    "Outro: Her"
    ],
    "showSongs":false
},
{
    "type":"repackage",
    "title":"You Never Walk Alone",
    "artwork": "http://bts.ibighit.com/images/bts/discography/you_never_walk_alone/album-cover.jpg",
    "released":new Date("2017,02,13"),
    "spotify": "https://open.spotify.com/album/7LF4N7lvyDhrPBuCJ1rplJ",
    "songs":[
    "Intro: Boy Meets Evil",
    "Blood, Sweat, & Tears",
    "Begin (Jungkook Solo)",
    "Lie (Jimin Solo)",
    "Stigma (V Solo)",
    "First Love (SUGA Solo)",
    "Reflection (RM Solo)",
    "MAMA (j-hope Solo)",
    "Awake (Jin Solo)",
    "Lost",
    "BTS Cypher pt. 4",
    "Am I Wrong",
    "21st Century Girl",
    "2! 3!",
    "Spring Day",
    "Not Today",
    "Outro: Wings",
    "A Supplementary Story: You Never Walk Alone"
    ],
    "showSongs":false
},
{
    "type":"full",
    "title":"Wings",
    "artwork": "http://bts.ibighit.com/images/bts/discography/wings/album-cover.jpg",
    "released":new Date("2016,10,10"),
    "spotify": "https://open.spotify.com/album/17FnTn4P3Bkyf6mbNQDhhy",
    "songs":[
    "Intro: Boy Meets Evil",
    "Blood, Sweat, & Tears",
    "Begin (Jungkook Solo)",
    "Lie (Jimin Solo)",
    "Stigma (V Solo)",
    "First Love (SUGA Solo)",
    "Reflection (RM Solo)",
    "MAMA (j-hope Solo)",
    "Awake (Jin Solo)",
    "Lost",
    "BTS Cypher pt. 4",
    "Am I Wrong",
    "21st Century Girl",
    "2! 3!",
    "Interlude: Wings"
    ],
    "showSongs":false
},
{
    "type":"repackage",
    "title":"The Most Beautiful Moment In Life: Young Forever",
    "artwork": "http://bts.ibighit.com/images/bts/discography/young_forever/album-cover.jpg",
    "released":new Date("2016,05,02"),
    "spotify": "https://open.spotify.com/album/7qvA0kf1dkmR1As2gOnBPn",
    "songs":[
    "Intro: The Most Beautiful Moment in Life",
    "I NEED U",
    "Hold Me Tight",
    "Dead Leaves",
    "Butterfly prologue mix",
    "RUN",
    "Ma City",
    "Silver Spoon",
    "DOPE",
    "FIRE",
    "Save ME",
    "Epilogue: Young Forever",
    "Converse High",
    "Moving On",
    "Whalien 52",
    "Butterfly",
    "House of Cards (full length edition)",
    "Love is Not Over (full length edition)",
    "I NEED U urban mix",
    "I NEED U remix",
    "RUN ballad mix",
    "RUN (alternative mix)",
    "Butterfly (alternative mix)"
    ],
    "showSongs":false
},
{
    "type":"mini",
    "title":"The Most Beautiful Moment In Life pt.2",
    "artwork": "http://bts.ibighit.com/images/bts/discography/hwayangyeonhwa-pt2/album-cover.jpg",
    "released":new Date("2015,11,30"),
    "spotify": "https://open.spotify.com/album/4frjaGAtuBmm8CPuYPY4oG",
    "songs":[
    "Intro: Never Mind",
    "RUN",
    "Butterfly",
    "Whalien 52",
    "Ma City",
    "Silver Spoon",
    "Dead Leaves",
    "Outro: House of Cards"
    ],
    "showSongs":false
},
{
    "type":"mini",
    "title":"The Most Beautiful Moment In Life pt.1",
    "artwork": "http://bts.ibighit.com/images/bts/discography/hwayangyeonhwa-pt1/album-cover.jpg",
    "released":new Date("2015,04,29"),
    "spotify": "https://open.spotify.com/album/0Gv6nwfgk6Cy62j0GGITQc",
    "songs":[
    "Intro: The Most Beautiful Moment in Life",
    "I NEED U",
    "Hold Me Tight",
    "DOPE",
    "Boyz with Fun",
    "Converse High",
    "Moving On",
    "Outro: Love is Not Over"
    ],
    "showSongs":false
},
{
    "type":"full",
    "title":"Dark & Wild",
    "artwork": "http://bts.ibighit.com/images/bts/discography/dark_and_wild/album-cover.jpg",
    "released":new Date("2014,08,19"),
    "spotify": "https://open.spotify.com/album/7FxxU3EP37uMsZf8FilkDR",
    "songs":[
    "Intro: What Am I To You",
    "Danger",
    "War of Hormone",
    "Hip Hop Phile",
    "Let Me Know",
    "Rain",
    "BTS Cypher pt.3 Killer (ft. Supreme Boi)",
    "Interlude: What Are You Doing",
    "Would You Turn Off Your Cell Phone?",
    "Blanket Kick",
    "24/7=Heaven",
    "Look Here",
    "2nd Grade",
    "Outro: Does That Make Sense?"
    ],
    "showSongs":false
},
{
    "type":"mini",
    "title":"Skool Luv Affair",
    "artwork": "http://bts.ibighit.com/images/bts/discography/skool_luv_affair/album-cover.jpg",
    "released":new Date("2014,02,12"),
    "spotify": "https://open.spotify.com/album/5DIb84mvBHZnYFpIsdt2tL",
    "songs":[
    "Intro: Skool Luv Affair",
    "Boy In Luv",
    "Where Are You From?",
    "Just One Day",
    "Tomorrow",
    "BTS Cypher pt.2 Triptych",
    "Spine Breaker",
    "Jump",
    "Outro: Propose"
    ],
    "showSongs":false
},
{
    "type":"mini",
    "title":"O!RUL8,2?",
    "artwork": 
    "https://bts.ibighit.com/images/bts/discography/o_rul8_2/album-cover.jpg",
    "released":new Date("2013,09,11"),
    "spotify": "https://open.spotify.com/album/7xp8NlqiWjtSJ8oFvyShB2",
    "songs":[
    "Intro: O!RUL8,2?",
    "N.O",
    "We On",
    "If I Ruled The World",
    "Coffee",
    "BTS Cypher pt.1",
    "Attack of Bangtan",
    "Satoori Rap",
    "Outro: Luv in Skool"
    ],
    "showSongs":false
},
{
    "type":"single",
    "title":"2 Cool 4 Skool",
    "artwork": "https://bts.ibighit.com/images/bts/discography/2_cool_4_school/album-cover.jpg",
    "released":new Date("2013,06,12"),
    "spotify": "https://open.spotify.com/album/26z5WolFltYgVMuuJ3c0Am",
    "songs":[
    "Intro: 2 Cool 4 Skool (ft. DJ Friz)",
    "We Are Bulletproof pt.2",
    "No More Dream",
    "Interlude",
    "Like",
    "Outro: Circle Room Cypher"
    ],
    "showSongs":false
}
];

var app = new Vue({
el:"#app",
data:{
    albums:albums,
    title:"BTS Discography",
    subtitle:"Updated June 2024"
}
})
