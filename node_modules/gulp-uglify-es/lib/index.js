"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const o_stream_1 = require("o-stream");
const PluginError = require("plugin-error");
const terser = require("terser");
const applySourceMap = require("vinyl-sourcemaps-apply");
const PLUGIN_NAME = "gulp-uglify-es";
function plugin(uglifyOptions) {
    return o_stream_1.default.transform({
        onEntered: (args) => __awaiter(this, void 0, void 0, function* () {
            let file = args.object;
            throwIfStream(file);
            if (file.isNull() || !file.contents) {
                args.output.push(file);
                return;
            }
            if (file.sourceMap) {
                uglifyOptions = setUglifySourceMapOptions(uglifyOptions, file);
            }
            let fileMap = {};
            fileMap[file.relative] = file.contents.toString();
            try {
                let result = yield terser.minify(fileMap, uglifyOptions);
                file.contents = Buffer.from(result.code);
                if (result.map) {
                    applySourceMap(file, result.map);
                }
                args.output.push(file);
            }
            catch (error) {
                throw new PluginError(PLUGIN_NAME, error);
            }
        })
    });
}
exports.default = plugin;
function setUglifySourceMapOptions(uglifyOptions, file) {
    uglifyOptions = uglifyOptions || {};
    uglifyOptions.sourceMap = uglifyOptions.sourceMap || {};
    let sourceMap = uglifyOptions.sourceMap;
    // console.log(file.sourceMap);
    sourceMap.filename = file.sourceMap.file;
    sourceMap.includeSources = true;
    if (sourceMap.url !== undefined && sourceMap.url !== null) {
        sourceMap.url = undefined;
        console.warn("Uglify options.sourceMap.url should not be set. Deleting it.");
    }
    if (file.sourceMap.mappings) {
        sourceMap.content = file.sourceMap;
    }
    return uglifyOptions;
}
function throwIfStream(file) {
    if (file.isStream()) {
        throw new PluginError(PLUGIN_NAME, 'Streams are not supported.');
    }
}
