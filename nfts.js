const NFTs = []

function mintNFT (_name, _EyeColor, _ShirtType, _Bling) {
    const NFT = {
        "name": _name,
        "EyeColor": _EyeColor,
        "ShirtType" : _ShirtType,
        "Bling" : _Bling
    }

    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

function listNFTs() {
    for(let i = 0; i < NFTs.length ;i++){
        console.log("\nID : \t\t" + (i+1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("EyeColor: \t" + NFTs[i].EyeColor);
        console.log("ShirtType: " + NFTs[i].ShirtType);
        console.log("Bling: \t\t" + NFTs[i].Bling);

    }
}

function getTotalSupply() {
    console.log(NFTs.length);
}

mintNFT("Khushi", "Black", "Checked", "Silver Watch");
mintNFT("Khuc", "blue", "Plain", "Golden Watch");
listNFTs();
getTotalSupply();
