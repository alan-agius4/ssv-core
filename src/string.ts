﻿import {Dictionary} from "./collection";

export class StringExtensions {

	parseBoolConfig: Dictionary<boolean> = {
		// truthy
		"true": true,
		"1": true,
		"yes": true,
		"y": true,
		"on": true,
		// falsy
		"false": false,
		"0": false,
		"no": false,
		"n": false,
		"off": false
	};

	/**
	 * Interpolates the string with the data specified by using the prefix (:) default as token.
	 * e.g. 'api/:lang/games' => 'api/en/games'
	 * @param {string} value string template to interpolate
	 * @param {*} data data object to replace tokens
	 * @param {string} [interpolatePrefix=":"] interpolation token prefix
	 * @returns interpolated string
	 */
	interpolate(value: string, data: any, interpolatePrefix = ":") {
		data = data || {};
		let interpolatedValue = value.replace(/(\(\s*|\s*\)|\s*\|\s*)/g, "");

		for (const property in data) {
			if (data.hasOwnProperty(property)) {
				interpolatedValue = interpolatedValue.replace(`${interpolatePrefix}${property}`, data[property]);
			}
		}

		return interpolatedValue;
	}

	/**
	 * Parses a value to boolean "humanized", which can also be configured in order to add additional values. e.g.
	 * true => "true", "1", "yes", "y", "on"
	 * true => "false", "0", "no", "n", "off"
	 * @param {string} value string value to parse
	 * @returns {boolean} true or false
	 */
	parseBool(value: string): boolean {
		return this.parseBoolConfig[(String(value).toLowerCase())];
	}
}