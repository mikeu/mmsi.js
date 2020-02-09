[![Build Status](https://img.shields.io/travis/mikeu/mmsi.js)](https://travis-ci.org/mikeu/mmsi.js)
[![Code coverage](https://img.shields.io/codecov/c/github/mikeu/mmsi.js)](https://codecov.io/github/mikeu/mmsi.js)
[![Open issues](https://img.shields.io/github/issues/mikeu/mmsi.js)](https://github.com/mikeu/mmsi.js/issues)

# mmsi.js
A javascript library for parsing MMSI numbers (Maritime Mobile Service Identities) to validate format and extract
information such as country of registration.

## About
From [Wikipedia](https://en.wikipedia.org/wiki/Maritime_Mobile_Service_Identity):

> A Maritime Mobile Service Identity (MMSI) is a series of nine digits which are sent in digital form
> over a radio frequency channel in order to uniquely identify ship stations, ship earth stations,
> coast stations, coast earth stations, and group calls.

With mmsi.js you can determine whether a given number or string is in the format of a valid MMSI and,
if so, extract the
[Maritime Identification Digits](https://en.wikipedia.org/wiki/Maritime_identification_digits)
from it, along with the corresponding country name and code.

## Usage
```js
import { MMSI } from 'mmsi.js';

const mmsi = new MMSI("1234567890");
console.log(mmsi.isValid); // false

mmsi.identity = "410123456";
console.log(mmsi.isValid); // true
console.log(mmsi.MID); // "410"
console.log(mmsi.country); // { commonName: "Bhutan", fullName: "Bhutan (Kingdom of)", countryCode: "BT" }
```