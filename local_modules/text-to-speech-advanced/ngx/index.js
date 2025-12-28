import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var TextToSpeechAdvanced = /** @class */ (function (_super) {
    __extends(TextToSpeechAdvanced, _super);
    function TextToSpeechAdvanced() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextToSpeechAdvanced.prototype.speak = function (textOrOptions) { return cordova(this, "speak", { "otherPromise": true }, arguments); };
    TextToSpeechAdvanced.prototype.stop = function () { return cordova(this, "stop", { "otherPromise": true }, arguments); };
    TextToSpeechAdvanced.prototype.getVoices = function () { return cordova(this, "getVoices", { "otherPromise": true }, arguments); };
    TextToSpeechAdvanced.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TextToSpeechAdvanced, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    TextToSpeechAdvanced.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TextToSpeechAdvanced });
    TextToSpeechAdvanced.pluginName = "Text To Speech Advanced";
    TextToSpeechAdvanced.plugin = "cordova-plugin-tts-advanced";
    TextToSpeechAdvanced.pluginRef = "TTS";
    TextToSpeechAdvanced.repo = "https://github.com/spasma/cordova-plugin-tts-advanced";
    TextToSpeechAdvanced.platforms = ["Android", "iOS"];
    TextToSpeechAdvanced = __decorate([], TextToSpeechAdvanced);
    return TextToSpeechAdvanced;
}(AwesomeCordovaNativePlugin));
export { TextToSpeechAdvanced };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TextToSpeechAdvanced, decorators: [{
            type: Injectable
        }], propDecorators: { speak: [], stop: [], getVoices: [] } });
