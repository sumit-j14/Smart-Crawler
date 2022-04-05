let pattern= "test";
//regex in js are written within /.../
let num_occurences=0;
let total_links=0;
// this basically is used to iterate over all the websites present in the web page
Array.from(document.links).forEach(function(element){
    // this is the checking condition 
    total_links++;
    if(/test/.exec(element))
    {
    console.log(element.href)
    num_occurences++;
    }
})
// calcuating percentage occurence
let percentage = ( num_occurences*100 )/total_links;
console.log(pattern+" is present "+ num_occurences + " times");
console.log("Your search crawled and found "+percentage+ " % matching results") 
