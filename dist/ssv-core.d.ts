declare module "collection.svc" {
    export interface Selectable {
        /**
         * Gets or sets whether the item is selected or not.
         */
        isSelected: boolean;
    }
    export class CollectionService {
        /**
         * Unselect all collection items and select only the item specified.
         * @param {ISelectable[]} collection collection to unselect.
         * @param {ISelectable} selectItem item to select.
         */
        mutualExclusiveSelect(collection: Selectable[], selectItem: Selectable): void;
    }
}
declare module "enum.svc" {
    export class EnumService {
        /**
         * Gets all names of the enum as an array.
         * @param {any} e enum to get data of.
         * @returns enum definition names as a string array e.g. ["Elite", "Boss", "Normal", "RaidBoss"].
         */
        getNames(e: any): string[];
        /**
         * Gets all names of the enum as an array with values kebab'ed cased characters e.g. "raid-boss"
         * @param {any} e enum to get data of.
         * @returns enum definition names as a string array with kebab case e.g. ["elite", "boss", "normal", "raid-boss"].
         */
        getNamesKebab(e: any): string[];
        /**
         * Gets all values of the enum as an array.
         * @param {any} e enum to get data of.
         * @returns enum values as number array e.g. [1, 2, 3, 4]
         */
        getValues(e: any): number[];
    }
}
declare module "keycode" {
    /**
    * Keyboard key codes.
    * @see http://www.javascripter.net/faq/keycodes.htm
    */
    export const enum KeyCode {
        Backspace = 8,
        Tab = 9,
        Enter = 13,
        Shift = 16,
        Ctrl = 17,
        Alt = 18,
        Pause = 19,
        CapsLock = 20,
        Escape = 27,
        Space = 32,
        PageUp = 33,
        PageDown = 34,
        End = 35,
        Home = 36,
        LeftArrow = 37,
        UpArrow = 38,
        RightArrow = 39,
        DownArrow = 40,
        Insert = 45,
        Delete = 46,
        Key0 = 48,
        Key1 = 49,
        Key2 = 50,
        Key3 = 51,
        Key4 = 52,
        Key5 = 53,
        Key6 = 54,
        Key7 = 55,
        Key8 = 56,
        Key9 = 57,
        KeyA = 65,
        KeyB = 66,
        KeyC = 67,
        KeyD = 68,
        KeyE = 69,
        KeyF = 70,
        KeyG = 71,
        KeyH = 72,
        KeyI = 73,
        KeyJ = 74,
        KeyK = 75,
        KeyL = 76,
        KeyM = 77,
        KeyN = 78,
        KeyO = 79,
        KeyP = 80,
        KeyQ = 81,
        KeyR = 82,
        KeyS = 83,
        KeyT = 84,
        KeyU = 85,
        KeyV = 86,
        KeyW = 87,
        KeyX = 88,
        KeyY = 89,
        KeyZ = 90,
        LeftMeta = 91,
        RightMeta = 92,
        Select = 93,
        Numpad0 = 96,
        Numpad1 = 97,
        Numpad2 = 98,
        Numpad3 = 99,
        Numpad4 = 100,
        Numpad5 = 101,
        Numpad6 = 102,
        Numpad7 = 103,
        Numpad8 = 104,
        Numpad9 = 105,
        Multiply = 106,
        Add = 107,
        Subtract = 109,
        Decimal = 110,
        Divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        NumLock = 144,
        ScrollLock = 145,
        Semicolon = 186,
        Equals = 187,
        Comma = 188,
        Dash = 189,
        Period = 190,
        ForwardSlash = 191,
        GraveAccent = 192,
        OpenBracket = 219,
        BackSlash = 220,
        CloseBracket = 221,
        SingleQuote = 222,
    }
}
declare module "math.svc" {
    export class MathService {
        add(value: number, valueB: number): number;
    }
}
declare module "string.svc" {
    export class StringService {
        interpolate(value: string, data: any, interpolatePrefix?: string): string;
    }
}
declare module "utils.svc" {
    import { MathService } from "math.svc";
    import { StringService } from "string.svc";
    import { CollectionService } from "collection.svc";
    import { EnumService } from "enum.svc";
    export class Utils {
        math: MathService;
        string: StringService;
        collection: CollectionService;
        enum: EnumService;
    }
    export let utils: Utils;
    export default utils;
}
declare module "ssv-core" {
    export * from "collection.svc";
    export * from "enum.svc";
    export * from "keycode";
    export * from "math.svc";
    export * from "string.svc";
    export * from "utils.svc";
}
