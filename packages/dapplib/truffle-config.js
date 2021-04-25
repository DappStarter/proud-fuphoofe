require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign stool deny script assume hunt creek equal gather'; 
let testAccounts = [
"0x1d86d75fdb4548f2118feb45d88609d80630133bbdada61c5c304d15866d52ea",
"0x9267347c667979c66b18e98c9fb21714c371233df73a6ee9501af91254b3c9d9",
"0x5ad8ea83d6e92046d6ec1c65a1ba3cee68988e2f485a014bced06ff6c6d7ff64",
"0x002d8677b5fd24186af0f2fcac1ab9bb9a463e9d1388977b23d52891035eb346",
"0xfb9754620a005a1d367aaaf4ee89b0ca53c17c4a70d917557a7fbc3e250c3662",
"0x5fd44ab59b117f66bf77f32b7c587943d7c860fa07be6fb2b29b964219c93978",
"0x54fac9b0531d2beed9911cc659bf74ffa8e88d0434c4d3950e5a63530a552a6e",
"0xdd52820f6581ebd0eeb713c97be3aacd33ca3e95318e2555bf5231df170dcea9",
"0x71ab1f4f89459fa46139faf4c41914e479ba426fb6bba7361ca322b6db11e3c8",
"0x568605ad3c90c0b9eef567852c6c11685603be873cba6e277c1d888e5c9e4835"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
