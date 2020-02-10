# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2020-02-10
### Changed
- Instead of having `identity` as a getter on the `MMSI` class for a "private" backing
field, that property is now used directly and the `formatted` getter has been added to
retrieve its zero-padded form, when required.

## [0.1.0] - 2020-02-09
### Changed
- Package now uses `mmsi.js` as its entrypoint, instead of the non-existent `index.js`.

## [0.0.1] - 2020-02-09
### Added
- Initial version.