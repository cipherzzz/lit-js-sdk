// THIS FILE IS AUTOMATICALLY GENERATED FROM tools/scripts/gen-nodejs.mjs 

import { hasItems } from './helper';
import { litNodeClientTest } from './lit-node-client';

import * as accessControlConditions from '@lit-protocol/access-control-conditions';
import * as authBrowser from '@lit-protocol/auth-browser';
import * as blsSdk from '@lit-protocol/bls-sdk';
import * as constants from '@lit-protocol/constants';
import * as contractsSdk from '@lit-protocol/contracts-sdk';
import * as crypto from '@lit-protocol/crypto';
import * as ecdsaSdk from '@lit-protocol/ecdsa-sdk';
import * as encryption from '@lit-protocol/encryption';
import * as litNodeClient from '@lit-protocol/lit-node-client';
import * as misc from '@lit-protocol/misc';
import * as miscBrowser from '@lit-protocol/misc-browser';
import * as nacl from '@lit-protocol/nacl';
import * as uint8arrays from '@lit-protocol/uint8arrays';

console.log("accessControlConditions:", hasItems(accessControlConditions));
console.log("authBrowser:", hasItems(authBrowser));
console.log("blsSdk:", hasItems(blsSdk));
console.log("constants:", hasItems(constants));
console.log("contractsSdk:", hasItems(contractsSdk));
console.log("crypto:", hasItems(crypto));
console.log("ecdsaSdk:", hasItems(ecdsaSdk));
console.log("encryption:", hasItems(encryption));
console.log("litNodeClient:", hasItems(litNodeClient));
console.log("misc:", hasItems(misc));
console.log("miscBrowser:", hasItems(miscBrowser));
console.log("nacl:", hasItems(nacl));
console.log("uint8arrays:", hasItems(uint8arrays));

litNodeClientTest();