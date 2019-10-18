console.log("The gas station attendant probably is a better guitarist than you");
/* 
Your job is to sign each of these promising young music stars to the appropriate label.
*/
// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.
const jumpStopRecords = [];
const chattenRecords = [];
const polarRecords = [];

// Create a factory function for each possible genre (e.g. createBluegrassArtist()).
const createArtist = (name, age, genre) => {
    return {
        name: name,
        age: age,
        genre: genre
    }
}

const addArtist = artist => {
    const { genre } = artist
    // console.log(genre)
    if (genre === "Country" || genre === "Bluegrass"){
        chattenRecords.push(artist);
    }
    else if (genre === "Pop"){
        polarRecords.push(artist);
    }
    else if (genre === "Funk" || genre === "Rap"){
        jumpStopRecords.push(artist);
    }
}
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
const bart = createArtist("Bartholomew Danielson", 23, "Bluegrass");
addArtist(bart);
// Bruce Atikins is a Country artist and is 23 years old
const bruce = createArtist("Bruce Atkins", 23, "Country");
addArtist(bruce);
// Jensen Brown is a Pop artist and is 20 years old
const jensen = createArtist("Jensen Brown", 20, "Pop");
addArtist(jensen);
// Dre Funkz is a Funk artist and is 25 years old
const dre = createArtist("Dre Funkz", 25, "Funk");
addArtist(dre);
// Dusta Grimes is a Rap artist and is 21 years old
const dusta = createArtist("Dusta Grimes", 21, "Rap");
addArtist(dusta);
// Avilee Dallas is a Country artist and is 19 years old
const avilee = createArtist("Avilee Dallas", 19, "Country");
addArtist(avilee);
// Austin Kinkaid is a Pop artist and is 22 years old
const austin = createArtist("Austin Kinkaid", 22, "Pop");
addArtist(austin);
// Loyoncé Branis is a Rap artist and is 27 years old
const loyonce = createArtist("Loyoncé Branis", 27, "Rap");
addArtist(loyonce);

// place the resulting object in the corresponding label array.
// Then invoke the appropriate function for each of the following artists and 