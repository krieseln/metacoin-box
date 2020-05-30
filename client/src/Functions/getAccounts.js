import React from 'react';

export default function getAccounts(web3){
    return web3.eth.getAccounts();
}