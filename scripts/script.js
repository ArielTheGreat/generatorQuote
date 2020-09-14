let list = new Map();
list.set('Charles Darwin','A man who dares to waste one hour of time has not discovered the value of life.');
list.set('Albert Einstein','Insanity: doing the same thing over and over again and expecting different results.');
list.set('Albert Einstein',"If you can't explain it simply, you don't understand it well enough.");
list.set('Oscar Wilde','Be yourself; everyone else is already taken.');
list.set('Mae West','You only live once, but if you do it right, once is enough.');
list.set('Mark Twain',"If you tell the truth, you don't have to remember anything.");
list.set('Walt Disney','The way to get started is to quit talking and begin doing.');
list.set('Woody Allen',"I don't know the question, but sex is definitely the answer.");
list.set('Marilyn Monroe',"We are all born sexual creatures,thank God, but it's a pity so many people despise and crush this natural gift.");
list.set('George Carlin',"THINGS YOU NEVER HEAR: 'Please stop sucking my dick or I'll call the police.");
list.set('Vitaly Zdorovesky','Do not be afraid. Do not be afraid of life and taking chances.');

const iterator1 = list[Symbol.iterator]();

function generate()
{
    let bodyPosition = document.getElementById("quoteGenerated");
    let authorQuote = document.getElementById("author");
    let splits = iterator1.next().value;
    let author = splits[0];
    let value = splits[1];
    bodyPosition.innerHTML = value;
    authorQuote.innerHTML = author; 
}