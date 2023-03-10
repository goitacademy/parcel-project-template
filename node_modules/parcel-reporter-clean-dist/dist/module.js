import {sep as $73nkc$sep, posix as $73nkc$posix, extname as $73nkc$extname} from "path";
import {Reporter as $73nkc$Reporter} from "@parcel/plugin";
import {readFile as $73nkc$readFile, rmdir as $73nkc$rmdir, unlink as $73nkc$unlink, stat as $73nkc$stat, readdir as $73nkc$readdir} from "fs/promises";
import {isDynamicPattern as $73nkc$isDynamicPattern, stream as $73nkc$stream} from "fast-glob";

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire31fc"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire31fc"] = parcelRequire;
}
var $7a4dd06e40774cad$exports = {};


var $7a4dd06e40774cad$require$Reporter = $73nkc$Reporter;
var $2984c37e9344dbc1$exports = {};
const $2984c37e9344dbc1$var$utils = {
};
$2984c37e9344dbc1$var$utils.await = (promise)=>promise.then((data)=>[
            null,
            data
        ]
    ).catch((err)=>[
            err
        ]
    )
;
$2984c37e9344dbc1$var$utils.isArray = Array.isArray;
$2984c37e9344dbc1$var$utils.isNumber = (obj)=>typeof obj === 'number' && Number.isFinite(obj)
;
$2984c37e9344dbc1$var$utils.isString = (str)=>typeof str === 'string'
;
$2984c37e9344dbc1$var$utils.isPlainObject = (obj)=>typeof obj === 'object' && obj !== null && obj.toString() === '[object Object]'
;
$2984c37e9344dbc1$var$utils.isEmpty = (obj)=>{
    if ($2984c37e9344dbc1$var$utils.isNumber(obj)) return false;
    if ($2984c37e9344dbc1$var$utils.isArray(obj)) return !obj.length;
    if ($2984c37e9344dbc1$var$utils.isPlainObject(obj)) return !Object.keys(obj).length;
    if ($2984c37e9344dbc1$var$utils.isString(obj)) return !obj.length;
    return true;
};
$2984c37e9344dbc1$exports = $2984c37e9344dbc1$var$utils;


var $84aed4f820c8f8ca$exports = {};




const $84aed4f820c8f8ca$var$rootPath = process.cwd().split($73nkc$sep).join($73nkc$posix.sep);
/**
 * Parses file paths for removal.
 * @param {String} projectPath root directory of the project
 * @param {String[]} distPaths unique dist paths of the current build
 * @param {String[]} filesToExclude dist files of the current bundle
 * @returns {Promise<String[]>} file paths to remove
 */ const $84aed4f820c8f8ca$var$getFilesToRemove = async (projectPath, distPaths, filesToExclude = [])=>{
    const packageJson = JSON.parse(await $73nkc$readFile($73nkc$posix.join(projectPath, 'package.json')));
    const cleanDistFiles = [];
    if ($2984c37e9344dbc1$exports.isArray(packageJson.cleanDistFiles) && packageJson.cleanDistFiles.length) {
        // files to be excluded should be processed first
        const sortedFiles = packageJson.cleanDistFiles.sort((a)=>a.startsWith('!') ? -1 : 1
        );
        cleanDistFiles.push(...sortedFiles);
    }
    const filesToRemove = new Set([]);
    /**
   * Checks is path contains any of dist folders
   * @param {String} p file path to be checked
   * @returns {Boolean} boolean result of the check
   */ const isFileInsideDist = (p)=>distPaths.some((distPath)=>p.includes(distPath)
        )
    ;
    /**
   * Checks is path should be excluded from removal(skipping path if matching exact path or parent folder)
   * @param {String} filePath file path to be checked
   * @returns {Boolean} boolean result of the check
   */ const isFileExcluded = (fp)=>filesToExclude.includes(fp) || filesToExclude.some((p)=>fp.includes(p) || p.includes(fp)
        )
    ;
    // when no config provided or configuration contains only files to exclude, we assume all other files must be removed
    if ($2984c37e9344dbc1$exports.isEmpty(cleanDistFiles) || cleanDistFiles.every((p)=>p.startsWith('!')
    )) {
        const relativeDistPaths = distPaths.map((p)=>$73nkc$posix.normalize(`${p.replace($84aed4f820c8f8ca$var$rootPath, '')}/**/*`)
        );
        cleanDistFiles.push(...relativeDistPaths);
    }
    for (const itemToRemove of cleanDistFiles){
        if (!$2984c37e9344dbc1$exports.isString(itemToRemove)) continue; // eslint-disable-line no-continue
        let filePath = $73nkc$posix.join($84aed4f820c8f8ca$var$rootPath, itemToRemove);
        if ($73nkc$isDynamicPattern(itemToRemove)) {
            let filesToBeExcluded = false;
            const globResults = [];
            if (itemToRemove.startsWith('!')) {
                filesToBeExcluded = true;
                filePath = filePath.replace('!', '');
            }
            for await (const finalPath1 of $73nkc$stream(filePath, {
                onlyFiles: false
            }))// excluding entity inside block list or file outside of dist folder
            if (!isFileExcluded(finalPath1) && isFileInsideDist(finalPath1)) {
                if (filesToBeExcluded) filesToExclude.push(finalPath1);
                else globResults.push(finalPath1);
            }
            globResults.forEach((finalPath)=>{
                const dirAlreadyIncluded = globResults.some((p)=>p !== finalPath && finalPath.includes(p)
                );
                if (!dirAlreadyIncluded) {
                    filesToRemove.add(finalPath);
                    if ([
                        '.js',
                        '.css'
                    ].includes($73nkc$extname(finalPath))) filesToRemove.add(`${finalPath}.map`);
                }
            });
        } else if (isFileInsideDist(filePath)) filesToRemove.add(filePath);
    }
    return Array.from(filesToRemove);
};
$84aed4f820c8f8ca$exports = $84aed4f820c8f8ca$var$getFilesToRemove;


var $21ce46c797792157$exports = {};



/**
 * Remove of target directory/file.
 * @param {String} filePath directory of file path
 * @param {Boolean} isFile determine is it a file or not
 * @returns {Promise<void>}
 */ const $21ce46c797792157$var$rmFn = async (filePath, isFile = true)=>{
    if (!isFile) {
        await $73nkc$rmdir(filePath);
        return;
    }
    await $73nkc$unlink(filePath);
};
const $21ce46c797792157$var$recursiveFilesRemoval = async (targetPath)=>{
    const [err, mainStats] = await $2984c37e9344dbc1$exports.await($73nkc$stat(targetPath));
    if (err) {
        if (err.code !== 'ENOENT') throw err;
        return;
    }
    if (mainStats.isFile()) {
        await $21ce46c797792157$var$rmFn(targetPath);
        return;
    }
    const fileNames = await $73nkc$readdir(targetPath);
    await Promise.all(fileNames.map(async (fileName)=>{
        const filePath = $73nkc$posix.join(targetPath, fileName);
        const stats = await $73nkc$stat(filePath);
        if (stats.isDirectory()) {
            await $21ce46c797792157$var$recursiveFilesRemoval(filePath);
            return;
        }
        await $21ce46c797792157$var$rmFn(filePath);
    }));
    await $21ce46c797792157$var$rmFn(targetPath, false); // after all files removed, we finally purge the target dir
};
/**
 * Recursively removes all folders & files on specified path.
 * @param {String} _targetPath root directory/file to start from
 * @returns {Promise<void>}
 */ const $21ce46c797792157$var$removeFiles = (_targetPath)=>{
    const targetPath = $73nkc$posix.normalize(_targetPath);
    return $21ce46c797792157$var$recursiveFilesRemoval(targetPath);
};
$21ce46c797792157$exports = $21ce46c797792157$var$removeFiles;


parcelRequire.register("h0AyS", function(module, exports) {
module.exports = ()=>({
        queue: [],
        async exec (limit = 5) {
            const currentOps = this.queue.splice(0, limit);
            await Promise.all(currentOps.map((op)=>op()
            ));
            if (this.queue.length <= 0) return;
            await this.exec(limit);
        }
    })
;

});


const $7a4dd06e40774cad$var$opsLimiter = (parcelRequire("h0AyS"))();
const $7a4dd06e40774cad$var$normalizePath = (p)=>p.split($73nkc$sep).join($73nkc$posix.sep)
;
const $7a4dd06e40774cad$var$removeFileReporter = new $7a4dd06e40774cad$require$Reporter({
    async report ({ event: event , options: options  }) {
        if (event.type === 'buildSuccess') {
            const bundles = event.bundleGraph.getBundles();
            const distPaths = [];
            const filesToExclude = [];
            bundles.forEach((b)=>{
                const distPath = b.target && b.target.distDir ? $7a4dd06e40774cad$var$normalizePath(b.target.distDir) : null;
                if ($2984c37e9344dbc1$exports.isString(distPath) && !distPaths.includes(distPath)) distPaths.push(distPath);
                const filePath = $7a4dd06e40774cad$var$normalizePath(b.filePath);
                if (!filesToExclude.includes(filePath)) {
                    filesToExclude.push(filePath);
                    // excluding .map files as well
                    if ([
                        '.js',
                        '.css'
                    ].includes($73nkc$extname(filePath))) filesToExclude.push(`${filePath}.map`);
                }
            });
            const projectPath = $7a4dd06e40774cad$var$normalizePath(options.projectRoot);
            const filesToRemove = await $84aed4f820c8f8ca$exports(projectPath, distPaths, filesToExclude);
            if (!$2984c37e9344dbc1$exports.isArray(filesToRemove)) return; // if no files to remove, there is nothing to do for us
            filesToRemove.forEach((fileToRemove)=>{
                const cleanDistFile = ()=>$21ce46c797792157$exports(fileToRemove)
                ;
                $7a4dd06e40774cad$var$opsLimiter.queue.push(cleanDistFile);
            });
            await $7a4dd06e40774cad$var$opsLimiter.exec(); // executing operations by chunks
        }
    }
});
$7a4dd06e40774cad$exports = $7a4dd06e40774cad$var$removeFileReporter;


export {$7a4dd06e40774cad$exports as default};
//# sourceMappingURL=module.js.map
