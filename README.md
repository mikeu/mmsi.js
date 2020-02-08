[![Build Status](https://travis-ci.org/mikeu/mmsi.js.svg?branch=master)](https://travis-ci.org/mikeu/mmsi.js)

# mmsi.js
A small javascript library for parsing MMSI numbers (Maritime Mobile Service Identities) to validate format and extract
information such as country of registration.

## Usage
```js
import { MMSI } from 'mmsi.js';

const mmsi = new MMSI("1234567890");
console.log(mmsi.isValid); // false

mmsi.identity = "316123456";
console.log(mmsi.isValid); // true
console.log(mmsi.MID); // "316"
console.log(mmsi.country); // { commonName: "Canada", fullName: "Canada", countryCode: "CA" }
```
