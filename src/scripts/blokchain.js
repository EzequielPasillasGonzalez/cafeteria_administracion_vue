const CryptoJS = require('crypto-js');

let BLOCKCHAIN = [];

function getHash(prevBlock) {
    return CryptoJS.MD5(JSON.stringify(prevBlock)).toString();
}

function checkIntegrity(objetoDatos) {
    const results = [];

    for (const clave in objetoDatos) {
        if (Object.hasOwnProperty.call(objetoDatos, clave)) {
            BLOCKCHAIN.push(clave);
        }
    }    

    
        // for (let i = 1; i < BLOCKCHAIN.length; i++) {
        //     const block = BLOCKCHAIN[i];
        //     const prevBlock = BLOCKCHAIN[i - 1];


        //     if (block.prevBlock){
        //         const prevHash = block.prevBlock.hash;
        //         const actualHash = getHash(prevBlock);

        //         const res = prevHash === actualHash ? 'Ok' : 'Fue cambiado';
        //         results.push({ block: i, result: res });
        //     }else{
        //         results.push({block: i, results: 'No tiene block'})
        //     }                                
        // }    

        // objetoDatos.forEach(element => {
        //     console.log(element);
        // });         
    let valores = Object.values(objetoDatos);
    for (let i = 0; i < valores.length; i++) {        
        const block = valores[i];
        console.log(block);
        const prevBlock = valores[i - 1];
        console.log(prevBlock);

        if (block.prevBlock) {
            const prevHash = block.prevBlock.hash;
            console.log(prevHash);
            const actualHash = getHash(prevBlock);
            console.log(actualHash);

            const res = prevHash === actualHash ? 'Ok' : 'Fue cambiado';
            results.push({ block: i, result: res });
        } else {
            results.push({ block: i, results: 'No tiene block' })
        }    
    }
        // console.log(BLOCKCHAIN);
        
        console.log(results);
    
}

function writeBlock(pedido, objetoDatos) {   
    for (const clave in objetoDatos) {
        if (Object.hasOwnProperty.call(objetoDatos, clave)) {
            BLOCKCHAIN.push(clave);
        }
    }
    
    const prevBlock = BLOCKCHAIN[BLOCKCHAIN.length - 1] || {}; // Tomamos el último bloque como prevBlock
    
    const prevHash = getHash(prevBlock);    

    const data = {        
        pedido,        
        prevBlock: {
            hash: prevHash,
            data: prevBlock,
        },
    };

    return data
}

module.exports = {
    writeBlock,
    checkIntegrity
};