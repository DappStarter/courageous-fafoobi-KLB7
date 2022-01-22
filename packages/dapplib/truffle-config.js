require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant grid arctic orange tattoo'; 
let testAccounts = [
"0x933916aa2bf86a3131a3270ea322b7d1a1eb0b2a0bb1ae1a03a4d0d0e12cd876",
"0xf00eb81a8a1bef05d4d848da1ad9e075f5ab438d27e35f2724ab21789064b7c1",
"0xf00fa7e92f2668a818489f126e596c1f463de11430bbb46f5d3c95f6df5e0485",
"0xc33d0a1790a3afdb0723532de694c4cba5b121a1978c3b2641ecba48563d1a2d",
"0x34b94956b984cfaa4e6a1dd862a547276484d030ed6d9700f61f4d791d8194e7",
"0x53f263af0d42b013f7a72abb0bd603424dc0dc731999a6658b76f6e9b13510a6",
"0x5920a907fa0e429441be12106cde69dd17c1712b6623f8e69426964c8ba02083",
"0xb7bb18ee86edcf21c6e1da656f784d47befc4914edc7cca10eb4d5af3b0c92ea",
"0xaa1da824a2919ec3df0f0596463a66280cc443a1e6c2affc26a5c7b83b076b5a",
"0x03ce5970b320227819cc17dc49c1192046293c8c007d80a2d9e6f3ffe1e53aca"
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
            version: '^0.8.0'
        }
    }
};

