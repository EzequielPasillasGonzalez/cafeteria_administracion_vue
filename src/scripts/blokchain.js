const CryptoJS = require('crypto-js');


function getHash(prevBlock) {
    return CryptoJS.MD5(JSON.stringify(prevBlock)).toString();
}

function checkIntegrity(objetoDatos) {
    const results = [];
     
    let valores = Object.values(objetoDatos);
    for (let i = 0; i < valores.length; i++) {        
        const block = valores[i];        
        const prevBlock = valores[i - 1];
        // console.log(prevBlock);

        if (block.prevBlock) {
            const prevHash = block.prevBlock.hash;
            // console.log(prevHash);
            const actualHash = getHash(prevBlock.data);
            // console.log(actualHash);

            const res = prevHash === actualHash ? true : false;
            results.push({ blockNumber: i, result: res, blockInfo: valores[i]});
        } else {
            results.push({ blockNumber: i, result: 'No tiene block', blockInfo: valores[i] })
        }    
    }
        return(results);
    
}


module.exports = {    
    checkIntegrity
};