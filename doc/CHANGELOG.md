<a name="0.3.3"></a>
## [0.3.3](https://github.com/sketch7/ssv-core/compare/0.3.2...v0.3.3) (2016-12-14)



<a name="0.3.2"></a>
## [0.3.2](https://github.com/sketch7/ssv-core/compare/0.3.1...0.3.2) (2016-12-14)



<a name="0.3.1"></a>
## [0.3.1](https://github.com/sketch7/ssv-core/compare/0.3.0...0.3.1) (2016-12-14)


### Features

* **bundle:** now also compiled as umd bundle under `dist/bundles` ([d90728d](https://github.com/sketch7/ssv-core/commit/d90728d))
* **lodash:** changed back lodash to lodash instead of `lodash-es` ([d6cc943](https://github.com/sketch7/ssv-core/commit/d6cc943))
* **package:** `main` is now using umd bundled, `module` using es2015 and typings updated accordingly ([1a84826](https://github.com/sketch7/ssv-core/commit/1a84826))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/sketch7/ssv-core/compare/0.2.1...0.3.0) (2016-12-12)


### Features

* **package:** changed `lodash` to `lodash-es` ([dd86281](https://github.com/sketch7/ssv-core/commit/dd86281))


### BREAKING CHANGES

* package: changed from `lodash` to `lodash-es`



<a name="0.2.1"></a>
## [0.2.1](https://github.com/sketch7/ssv-core/compare/0.2.0...0.2.1) (2016-11-20)


### Features

* **module:** package is now also being packaged as "umd" ([1582966](https://github.com/sketch7/ssv-core/commit/1582966))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/sketch7/ssv-core/compare/0.1.0...0.2.0) (2016-11-20)


### Features

* **package:** build is now change to es2015 ([6b31a73](https://github.com/sketch7/ssv-core/commit/6b31a73))
* **string:** change `StringExtension` to functions for easy treeshaking ([6c15e1a](https://github.com/sketch7/ssv-core/commit/6c15e1a))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/sketch7/ssv-core/compare/33dc8e4...0.1.0) (2016-11-14)


### Bug Fixes

* **package:** package has been changed from bundled to unbundled due to issues with jspm when installing ([eb076ac](https://github.com/sketch7/ssv-core/commit/eb076ac))


### Code Refactoring

* **collection:** renamed ISelectable to Selectable ([33dc8e4](https://github.com/sketch7/ssv-core/commit/33dc8e4))


### Features

* **collection:** add `Dictionary<T>` interface ([5029543](https://github.com/sketch7/ssv-core/commit/5029543))
* **conversion:** initial implementation of conversion which has time conversions ([a294e92](https://github.com/sketch7/ssv-core/commit/a294e92))
* **definition:** change definition witihin  package.json to use `typings` instead `typescript` to point to definition ([f70f97d](https://github.com/sketch7/ssv-core/commit/f70f97d))
* **math:** implemented `round` functionality to math which supports both string and numeric ([3730731](https://github.com/sketch7/ssv-core/commit/3730731))
* **string:** implemented `parseBool` which is more humanize friendly boolean parsing ([965f7f8](https://github.com/sketch7/ssv-core/commit/965f7f8))
* **string:** implemented `replaceAll` which replaces all string occurrences. ([4ddf58c](https://github.com/sketch7/ssv-core/commit/4ddf58c))
* **typings:** modified typings to include devDep ([3288822](https://github.com/sketch7/ssv-core/commit/3288822))


### BREAKING CHANGES

* collection: renamed `ISelectable` to `Selectable`



