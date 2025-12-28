var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var TextToSpeechAdvancedOriginal = /** @class */ (function (_super) {
    __extends(TextToSpeechAdvancedOriginal, _super);
    function TextToSpeechAdvancedOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextToSpeechAdvancedOriginal.prototype.speak = function (textOrOptions) { return cordova(this, "speak", { "otherPromise": true }, arguments); };
    TextToSpeechAdvancedOriginal.prototype.stop = function () { return cordova(this, "stop", { "otherPromise": true }, arguments); };
    TextToSpeechAdvancedOriginal.prototype.getVoices = function () { return cordova(this, "getVoices", { "otherPromise": true }, arguments); };
    TextToSpeechAdvancedOriginal.pluginName = "Text To Speech Advanced";
    TextToSpeechAdvancedOriginal.plugin = "cordova-plugin-tts-advanced";
    TextToSpeechAdvancedOriginal.pluginRef = "TTS";
    TextToSpeechAdvancedOriginal.repo = "https://github.com/spasma/cordova-plugin-tts-advanced";
    TextToSpeechAdvancedOriginal.platforms = ["Android", "iOS"];
    return TextToSpeechAdvancedOriginal;
}(AwesomeCordovaNativePlugin));
var TextToSpeechAdvanced = new TextToSpeechAdvancedOriginal();
export { TextToSpeechAdvanced };
