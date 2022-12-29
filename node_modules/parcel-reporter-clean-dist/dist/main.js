var $27MRU$path = require("path");
var $27MRU$parcelplugin = require("@parcel/plugin");
var $27MRU$fspromises = require("fs/promises");
var $27MRU$fastglob = require("fast-glob");

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


var $7bf850358914b7ff$require$Reporter = $27MRU$parcelplugin.Reporter;
var $93fdee7582e6e023$exports = {};
const $93fdee7582e6e023$var$utils = {
};
$93fdee7582e6e023$var$utils.await = (promise)=>promise.then((data)=>[
            null,
            data
        ]
    ).catch((err)=>[
            err
        ]
    )
;
$93fdee7582e6e023$var$utils.isArray = Array.isArray;
$93fdee7582e6e023$var$utils.isNumber = (obj)=>typeof obj === 'number' && Number.isFinite(obj)
;
$93fdee7582e6e023$var$utils.isString = (str)=>typeof str === 'string'
;
$93fdee7582e6e023$var$utils.isPlainObject = (obj)=>typeof obj === 'object' && obj !== null && obj.toString() === '[object Object]'
;
$93fdee7582e6e023$var$utils.isEmpty = (obj)=>{
    if ($93fdee7582e6e023$var$utils.isNumber(obj)) return false;
    if ($93fdee7582e6e023$var$utils.isArray(obj)) return !obj.length;
    if ($93fdee7582e6e023$var$utils.isPlainObject(obj)) return !Object.keys(obj).length;
    if ($93fdee7582e6e023$var$utils.isString(obj)) return !obj.length;
    return true;
};
$93fdee7582e6e023$exports = $93fdee7582e6e023$var$utils;


var $1b74867dea2a330b$exports = {};




const $1b74867dea2a330b$var$rootPath = process.cwd().split($27MRU$path.sep).join($27MRU$path.posix.sep);
/**
 * Parses file paths for removal.
 * @param {String} projectPath root directory of the project
 * @param {String[]} distPaths unique dist paths of the current build
 * @param {String[]} filesToExclude dist files of the current bundle
 * @returns {Promise<String[]>} file paths to remove
 */ const $1b74867dea2a330b$var$getFilesToRemove = async (projectPath, distPaths, filesToExclude = [])=>{
    const packageJson = JSON.parse(await $27MRU$fspromises.readFile($27MRU$path.posix.join(projectPath, 'package.json')));
    const cleanDistFiles = [];
    if ($93fdee7582e6e023$exports.isArray(packageJson.cleanDistFiles) && packageJson.cleanDistFiles.length) {
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
    if ($93fdee7582e6e023$exports.isEmpty(cleanDistFiles) || cleanDistFiles.every((p)=>p.startsWith('!')
    )) {
        const relativeDistPaths = distPaths.map((p)=>$27MRU$path.posix.normalize(`${p.replace($1b74867dea2a330b$var$rootPath, '')}/**/*`)
        );
        cleanDistFiles.push(...relativeDistPaths);
    }
    for (const itemToRemove of cleanDistFiles){
        if (!$93fdee7582e6e023$exports.isString(itemToRemove)) continue; // eslint-disable-line no-continue
        let filePath = $27MRU$path.posix.join($1b74867dea2a330b$var$rootPath, itemToRemove);
        if ($27MRU$fastglob.isDynamicPattern(itemToRemove)) {
            let filesToBeExcluded = false;
            const globResults = [];
            if (itemToRemove.startsWith('!')) {
                filesToBeExcluded = true;
                filePath = filePath.replace('!', '');
            }
            for await (const finalPath1 of $27MRU$fastglob.stream(filePath, {
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
                    ].includes($27MRU$path.extname(finalPath))) filesToRemove.add(`${finalPath}.map`);
                }
            });
        } else if (isFileInsideDist(filePath)) filesToRemove.add(filePath);
    }
    return Array.from(filesToRemove);
};
$1b74867dea2a330b$exports = $1b74867dea2a330b$var$getFilesToRemove;


var $9ae9ad588cdd39fa$exports = {};



/**
 * Remove of target directory/file.
 * @param {String} filePath directory of file path
 * @param {Boolean} isFile determine is it a file or not
 * @returns {Promise<void>}
 */ const $9ae9ad588cdd39fa$var$rmFn = async (filePath, isFile = true)=>{
    if (!isFile) {
        await $27MRU$fspromises.rmdir(filePath);
        return;
    }
    await $27MRU$fspromises.unlink(filePath);
};
const $9ae9ad588cdd39fa$var$recursiveFilesRemoval = async (targetPath)=>{
    const [err, mainStats] = await $93fdee7582e6e023$exports.await($27MRU$fspromises.stat(targetPath));
    if (err) {
        if (err.code !== 'ENOENT') throw err;
        return;
    }
    if (mainStats.isFile()) {
        await $9ae9ad588cdd39fa$var$rmFn(targetPath);
        return;
    }
    const fileNames = await $27MRU$fspromises.readdir(targetPath);
    await Promise.all(fileNames.map(async (fileName)=>{
        const filePath = $27MRU$path.posix.join(targetPath, fileName);
        const stats = await $27MRU$fspromises.stat(filePath);
        if (stats.isDirectory()) {
            await $9ae9ad588cdd39fa$var$recursiveFilesRemoval(filePath);
            return;
        }
        await $9ae9ad588cdd39fa$var$rmFn(filePath);
    }));
    await $9ae9ad588cdd39fa$var$rmFn(targetPath, false); // after all files removed, we finally purge the target dir
};
/**
 * Recursively removes all folders & files on specified path.
 * @param {String} _targetPath root directory/file to start from
 * @returns {Promise<void>}
 */ const $9ae9ad588cdd39fa$var$removeFiles = (_targetPath)=>{
    const targetPath = $27MRU$path.posix.normalize(_targetPath);
    return $9ae9ad588cdd39fa$var$recursiveFilesRemoval(targetPath);
};
$9ae9ad588cdd39fa$exports = $9ae9ad588cdd39fa$var$removeFiles;


parcelRequire.register("8azo1", function(module, exports) {
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


const $7bf850358914b7ff$var$opsLimiter = (parcelRequire("8azo1"))();
const $7bf850358914b7ff$var$normalizePath = (p)=>p.split($27MRU$path.sep).join($27MRU$path.posix.sep)
;
const $7bf850358914b7ff$var$removeFileReporter = new $7bf850358914b7ff$require$Reporter({
    async report ({ event: event , options: options  }) {
        if (event.type === 'buildSuccess') {
            const bundles = event.bundleGraph.getBundles();
            const distPaths = [];
            const filesToExclude = [];
            bundles.forEach((b)=>{
                const distPath = b.target && b.target.distDir ? $7bf850358914b7ff$var$normalizePath(b.target.distDir) : null;
                if ($93fdee7582e6e023$exports.isString(distPath) && !distPaths.includes(distPath)) distPaths.push(distPath);
                const filePath = $7bf850358914b7ff$var$normalizePath(b.filePath);
                if (!filesToExclude.includes(filePath)) {
                    filesToExclude.push(filePath);
                    // excluding .map files as well
                    if ([
                        '.js',
                        '.css'
                    ].includes($27MRU$path.extname(filePath))) filesToExclude.push(`${filePath}.map`);
                }
            });
            const projectPath = $7bf850358914b7ff$var$normalizePath(options.projectRoot);
            const filesToRemove = await $1b74867dea2a330b$exports(projectPath, distPaths, filesToExclude);
            if (!$93fdee7582e6e023$exports.isArray(filesToRemove)) return; // if no files to remove, there is nothing to do for us
            filesToRemove.forEach((fileToRemove)=>{
                const cleanDistFile = ()=>$9ae9ad588cdd39fa$exports(fileToRemove)
                ;
                $7bf850358914b7ff$var$opsLimiter.queue.push(cleanDistFile);
            });
            await $7bf850358914b7ff$var$opsLimiter.exec(); // executing operations by chunks
        }
    }
});
module.exports = $7bf850358914b7ff$var$removeFileReporter;


//# sourceMappingURL=main.js.map
