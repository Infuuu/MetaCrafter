var NFT_collection = [];

function mintNFT(nameNFT, styleNFT, moodNFT, superpowerNFT, auraNFT){
  const NFT_metadata = {
    name : nameNFT,
    style: styleNFT,
    mood: moodNFT,
    superpower: superpowerNFT,
    aura: auraNFT,
  }
  NFT_collection.push(NFT_metadata);
}

function listNFTs(){
  for (let i = 0; i < NFT_collection.length; i++){  
    console.log("NFT No." + (i+1));
    console.log("Name: " + NFT_collection[i].name);
    console.log("Style: " + NFT_collection[i].style);
    console.log("Mood: " + NFT_collection[i].mood);
    console.log("Superpower: " + NFT_collection[i].superpower);
    console.log("Aura: " + NFT_collection[i].aura);
    console.log("\n")
  }
}


function getTotalSupply(){
  console.log("Total Supply: " + NFT_collection.length);
}

console.log("Minting First NFT...");
mintNFT("Quantum Enigma Omega", "Holographic Harmonics", "Paradoxical Pulsation", "Gravity Distortion", "Cosmic Convergence");

console.log("Minting Second NFT...");
mintNFT("Astral Ascension", "Neutrino Nebula", "Hyperdimensional Harmony", "Chronokinetic Control", "Ethereal Emanation");

console.log("Minting Third NFT...");
mintNFT("Luminous Lattice", "Prismatic Pentagram", "Entropic Eclipse", "Plasmonic Pulse", "Fractal Frontier");

console.log("\nListing all the Minted NFT's\n");
listNFTs();

console.log("Checking total supply...");
getTotalSupply();
