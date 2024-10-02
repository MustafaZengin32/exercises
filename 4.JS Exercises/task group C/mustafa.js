function transcribeDNAtoRNA(dna) {
if (!(/^[ACGT]+$/i.test(dna))||dna.length >= 1000) {
        return "Invalid DNA string. Only include 'A', 'C', 'G' ve 'T' OR the length must be smaller than 1000";
         }
    return dna.replace(/T/g,'U');
}
let dna=" ";

do {
    dna = prompt('Write a DNA string: ').toUpperCase(); 
    if (/^[ACGT]+$/i.test(dna)&&dna.length<1000) { 
        let rnaString = transcribeDNAtoRNA(dna);
        console.log(rnaString); 
        break;
    } else {
        console.log("UNVALID DNA PLEASE ENTER ONLY 'A', 'C', 'G', 'T' .");
    }
} while (true); 
 console.log("very good"); 

 /**
An RNA string is a string formed from the alphabet containing 'A', 'C', 'G', and 'U'.

Given a DNA string t corresponding to a coding strand, its transcribed RNA string u is formed by replacing all occurrences of 'T' in t with 'U' in u.

Given: A DNA string t having length at most 1000 nt.

Return: The transcribed RNA string of t.

 */