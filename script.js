var html = '';
var lose = false
var wordlength = 0;
var bglist = ["red","blue","yellow","green","black"]
   var c;
   for (var i = 65; 90 >= i; i++) {// A-65, Z-90
   c = String.fromCharCode(i);
   html += '<button onclick="setLetter(\'' + c + '\');">' + c + '</button>';
   }
    // name = Peter
    // "My name is " + name 
    // <button onclick="setLetter(C)">C</button>
   document.getElementById('box').innerHTML = html;

   document.getElementById('box').style.display = 'none';


   var setLetter = function(x) {
    if (document.getElementById('name').innerHTML.length < word.length){
       document.getElementById('name').innerHTML += x;
       }
    } 


   // var setLetter = function(x) {
   // document.getElementById('name').innerHTML += x;
   // };

 

 //<div><p>2134</p></div>
// innerHTML  == "<p>2134</p>"
 // Another way to addEventListener
var word;
var blanks;
var attempts = 0;

var match =[];
var lose = false;

function easyword(){
  wordlength = 5;
  for (var i = 0; i < wordlist.length; i++) {
   if (wordlist[i].length <= wordlength ) {
      match.push(wordlist[i]);     
      }
    }
 
  genword()
  document.getElementById('easybtn').style.display = 'none';
  document.getElementById('middlebtn').style.display = 'none';
  document.getElementById('diffbtn').style.display = 'none';
  document.getElementById('box').style.display ="inline-block"
}

function middleword(){
  wordlength = 8;
  for (var i = 0; i < wordlist.length; i++) {
   if (6 <= wordlist[i].length && wordlist[i].length <= wordlength ) {
      match.push(wordlist[i]);     
      }
    }

  genword()

  document.getElementById('easybtn').style.display = 'none';
  document.getElementById('middlebtn').style.display = 'none';
  document.getElementById('diffbtn').style.display = 'none';
  document.getElementById('box').style.display ="inline-block"
}

function diffword(){
  wordlength = 10;
   for (var i = 0; i < wordlist.length; i++) {
   if (9 <= wordlist[i].length && wordlist[i].length <= wordlength ) {
      match.push(wordlist[i]);     
      }
    }
  genword()
  document.getElementById('easybtn').style.display = 'none';
  document.getElementById('middlebtn').style.display = 'none';
  document.getElementById('diffbtn').style.display = 'none';
  document.getElementById('box').style.display = "inline-block";
}


function genword(){

    const pickno = Math.floor(Math.random() * match.length);
    word = match[pickno].toUpperCase();
    blanks = "";
    for (let i = 0; i < word.length; i++){
      blanks += "-";
   } 
  document.getElementById('word').innerHTML = blanks;
  document.getElementById('word1').innerHTML = word;
}


function checkAns(){
  console.log(document.getElementById('name').innerHTML.length)
  attempts += 1;
  console.log(attempts)
  
if (attempts < 5){
if (word == document.getElementById('name').innerHTML){
   document.getElementById('msgtoplayer').innerHTML = "Bravo!! End Game!";
   document.getElementById('winshow').style.display = "block";
    attempts = 0;
  document.getElementById('correctWord').innerHTML = word
    } else{
        var guesslist ='';
          for (i=0; i<word.length; i++){
            if (word[i] == document.getElementById('name').innerHTML[i]){
              guesslist += word[i];
            } else {
              guesslist += "-";
            }  
          }
         
          document.getElementById('msgtoplayer').innerHTML = "You have 5 attempts, now is: " + attempts;
          
          document.getElementById('correctWord').innerHTML = guesslist;
        } 
  } else if (attempts == 5){
      document.getElementById('msgtoplayer').innerHTML = "Good try!! End Game!";
      attempts = 0;
      document.getElementById('checkans').disabled = true;
  lose = true
      // loseBG()
      document.getElementById('looseshow').style.display = "block";
    }
    document.getElementById('name').innerHTML = ""
  }


function clearinput(){
  document.getElementById('name').innerHTML = ""
}

function clearLastChar(){
  var cleanword = document.getElementById('name').innerHTML;
  cleanword = cleanword.slice(0 , cleanword.length -1)
  console.log(cleanword.length -1)
  document.getElementById('name').innerHTML = cleanword ;
  // w123.pop()
  // document.getElementById('name').innerHTML = w123
  //w123[w123.length-1] = null
  //console.log(w123[w123.length-1])
  //document.getElementById('name').innerHTML = w123
}

function reStart(){
 // var start = document.getElementByTagName("button");
 // for(var i=0; i < start.length; i++)
 // start[i].disabled=false;
  clearinput()
  match= [];
  document.body.style.backgroundColor = "white"
  lose = false
  document.getElementById('word').innerHTML="";
  document.getElementById('word1').innerHTML=""; 
  document.getElementById('correctWord').innerHTML=""

  document.getElementById('easybtn').style.display = 'inline-block';
  document.getElementById('middlebtn').style.display = 'inline-block';
  document.getElementById('diffbtn').style.display = 'inline-block';

  document.getElementById('msgtoplayer').innerHTML = "Select level of difficulty:"
  document.getElementById('checkans').disabled = false;
  document.getElementById('box').style.display = 'none';
  document.getElementById('winshow').style.display = 'none';
  document.getElementById('looseshow').style.display = 'none';
}

const loseBG = () =>{
  if (lose == true){
    var rn = Math.floor(Math.random() * bglist.length)
    document.body.style.backgroundColor = bglist[rn]
    setInterval(loseBG, 500)
  }
}


var wordlist = ["ability", "able", "about", "above", "accept", "according", "account", "across", "act", "action", "activity", "actually", "add", "address", "administration", "admit", "adult", "affect", "after", "again", "against", "age", "agency", "agent", "ago", "agree", "agreement", "ahead", "air", "all", "allow", "almost", "alone", "along", "already", "also", "although", "always", "American", "among", "amount", "analysis", "and", "animal", "another", "answer", "any", "anyone", "anything", "appear", "apply", "approach", "area", "argue", "arm", "around", "arrive", "art", "article", "artist", "as", "ask", "assume", "at", "attack", "attention", "attorney", "audience", "author", "authority", "available", "avoid", "away", "baby", "back", "bad", "bag", "ball", "bank", "bar", "base", "be", "beat", "beautiful", "because", "become", "bed", "before", "begin", "behavior", "behind", "believe", "benefit", "best", "better", "between", "beyond", "big", "bill", "billion", "bit", "black", "blood", "blue", "board", "body", "book", "born", "both", "box", "boy", "break", "bring", "brother", "budget", "build", "building", "business", "but", "buy", "by", "call", "camera", "campaign", "can", "cancer", "candidate", "capital", "car", "card", "care", "career", "carry", "case", "catch", "cause", "cell", "center", "central", "century", "certain", "certainly", "chair", "challenge", "chance", "change", "character", "charge", "check", "child", "choice", "choose", "church", "citizen", "city", "civil", "claim", "class", "clear", "clearly", "close", "coach", "cold", "collection", "college", "color", "come", "commercial", "common", "community", "company", "compare", "computer", "concern", "condition", "conference", "Congress", "consider", "consumer", "contain", "continue", "control", "cost", "could", "country", "couple", "course", "court", "cover", "create", "crime", "cultural", "culture", "cup", "current", "customer", "cut", "dark", "data", "daughter", "day", "dead", "deal", "death", "debate", "decade", "decide", "decision", "deep", "defense", "degree", "Democrat", "democratic", "describe", "design", "despite", "detail", "determine", "develop", "development", "die", "difference", "different", "difficult", "dinner", "direction", "director", "discover", "discuss", "discussion", "disease", "do", "doctor", "dog", "door", "down", "draw", "dream", "drive", "drop", "drug", "during", "each", "early", "east", "easy", "eat", "economic", "economy", "edge", "education", "effect", "effort", "eight", "either", "election", "else", "employee", "end", "energy", "enjoy", "enough", "enter", "entire", "environment", "environmental", "especially", "establish", "even", "evening", "event", "ever", "every", "everybody", "everyone", "everything", "evidence", "exactly", "example", "executive", "exist", "expect", "experience", "expert", "explain", "eye", "face", "fact", "factor", "fail", "fall", "family", "far", "fast", "father", "fear", "federal", "feel", "feeling", "few", "field", "fight", "figure", "fill", "film", "final", "finally", "financial", "find", "fine", "finger", "finish", "fire", "firm", "first", "fish", "five", "floor", "fly", "focus", "follow", "food", "foot", "for", "force", "foreign", "forget", "form", "former", "forward", "four", "free", "friend", "from", "front", "full", "fund", "future", "game", "garden", "gas", "general", "generation", "get", "girl", "give", "glass", "go", "goal", "good", "government", "great", "green", "ground", "group", "grow", "growth", "guess", "gun", "guy", "hair", "half", "hand", "hang", "happen", "happy", "hard", "have", "he", "head", "health", "hear", "heart", "heat", "heavy", "help", "her", "here", "herself", "high", "him", "himself", "his", "history", "hit", "hold", "home", "hope", "hospital", "hot", "hotel", "hour", "house", "how", "however", "huge", "human", "hundred", "husband", "I", "idea", "identify", "if", "image", "imagine", "impact", "important", "improve", "in", "include", "including", "increase", "indeed", "indicate", "individual", "industry", "information", "inside", "instead", "institution", "interest", "interesting", "international", "interview", "into", "investment", "involve", "issue", "it", "item", "its", "itself", "job", "join", "just", "keep", "key", "kid", "kill", "kind", "kitchen", "know", "knowledge", "land", "language", "large", "last", "late", "later", "laugh", "law", "lawyer", "lay", "lead", "leader", "learn", "least", "leave", "left", "leg", "legal", "less", "let", "letter", "level", "lie", "life", "light", "like", "likely", "line", "list", "listen", "little", "live", "local", "long", "look", "lose", "loss", "lot", "love", "low", "machine", "magazine", "main", "maintain", "major", "majority", "make", "man", "manage", "management", "manager", "many", "market", "marriage", "material", "matter", "may", "maybe", "me", "mean", "measure", "media", "medical", "meet", "meeting", "member", "memory", "mention", "message", "method", "middle", "might", "military", "million", "mind", "minute", "miss", "mission", "model", "modern", "moment", "money", "month", "more", "morning", "most", "mother", "mouth", "move", "movement", "movie", "Mr", "Mrs", "much", "music", "must", "my", "myself", "name", "nation", "national", "natural", "nature", "near", "nearly", "necessary", "need", "network", "never", "new", "news", "newspaper", "next", "nice", "night", "no", "none", "nor", "north", "not", "note", "nothing", "notice", "now", "n't", "number", "occur", "of", "off", "offer", "office", "officer", "official", "often", "oh", "oil", "ok", "old", "on", "once", "one", "only", "onto", "open", "operation", "opportunity", "option", "or", "order", "organization", "other", "others", "our", "out", "outside", "over", "own", "owner", "page", "pain", "painting", "paper", "parent", "part", "participant", "particular", "particularly", "partner", "party", "pass", "past", "patient", "pattern", "pay", "peace", "people", "per", "perform", "performance", "perhaps", "period", "person", "personal", "phone", "physical", "pick", "picture", "piece", "place", "plan", "plant", "play", "player", "PM", "point", "police", "policy", "political", "politics", "poor", "popular", "population", "position", "positive", "possible", "power", "practice", "prepare", "present", "president", "pressure", "pretty", "prevent", "price", "private", "probably", "problem", "process", "produce", "product", "production", "professional", "professor", "program", "project", "property", "protect", "prove", "provide", "public", "pull", "purpose", "push", "put", "quality", "question", "quickly", "quite", "race", "radio", "raise", "range", "rate", "rather", "reach", "read", "ready", "real", "reality", "realize", "really", "reason", "receive", "recent", "recently", "recognize", "record", "red", "reduce", "reflect", "region", "relate", "relationship", "religious", "remain", "remember", "remove", "report", "represent", "Republican", "require", "research", "resource", "respond", "response", "responsibility", "rest", "result", "return", "reveal", "rich", "right", "rise", "risk", "road", "rock", "role", "room", "rule", "run", "safe", "same", "save", "say", "scene", "school", "science", "scientist", "score", "sea", "season", "seat", "second", "section", "security", "see", "seek", "seem", "sell", "send", "senior", "sense", "series", "serious", "serve", "service", "set", "seven", "several", "sex", "sexual", "shake", "share", "she", "shoot", "short", "shot", "should", "shoulder", "show", "side", "sign", "significant", "similar", "simple", "simply", "since", "sing", "single", "sister", "sit", "site", "situation", "six", "size", "skill", "skin", "small", "smile", "so", "social", "society", "soldier", "some", "somebody", "someone", "something", "sometimes", "son", "song", "soon", "sort", "sound", "source", "south", "southern", "space", "speak", "special", "specific", "speech", "spend", "sport", "spring", "staff", "stage", "stand", "standard", "star", "start", "state", "statement", "station", "stay", "step", "still", "stock", "stop", "store", "story", "strategy", "street", "strong", "structure", "student", "study", "stuff", "style", "subject", "success", "successful", "such", "suddenly", "suffer", "suggest", "summer", "support", "sure", "surface", "system", "table", "take", "talk", "task", "tax", "teach", "teacher", "team", "technology", "television", "tell", "ten", "tend", "term", "test", "than", "thank", "that", "the", "their", "them", "themselves", "then", "theory", "there", "these", "they", "thing", "think", "third", "this", "those", "though", "thought", "thousand", "threat", "three", "through", "throughout", "throw", "thus", "time", "to", "today", "together", "tonight", "too", "top", "total", "tough", "toward", "town", "trade", "traditional", "training", "travel", "treat", "treatment", "tree", "trial", "trip", "trouble", "true", "truth", "try", "turn", "TV", "two", "type", "under", "understand", "unit", "until", "up", "upon", "us", "use", "usually", "value", "various", "very", "victim", "view", "violence", "visit", "voice", "vote", "wait", "walk", "wall", "want", "war", "watch", "water", "way", "we", "weapon", "wear", "week", "weight", "well", "west", "western", "what", "whatever", "when", "where", "whether", "which", "while", "white", "who", "whole", "whom", "whose", "why", "wide", "wife", "will", "win", "wind", "window", "wish", "with", "within", "without", "woman", "wonder", "word", "work", "worker", "world", "worry", "would", "write", "writer", "wrong", "yard", "yeah", "year", "yes", "yet", "you", "young", "your", "yourself"]    
