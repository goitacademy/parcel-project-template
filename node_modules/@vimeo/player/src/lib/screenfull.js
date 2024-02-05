/* MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Terms */

export function initializeScreenfull() {

    const fn = (function() {
        let val;

        const fnMap = [
            [
                'requestFullscreen',
                'exitFullscreen',
                'fullscreenElement',
                'fullscreenEnabled',
                'fullscreenchange',
                'fullscreenerror'
            ],
            // New WebKit
            [
                'webkitRequestFullscreen',
                'webkitExitFullscreen',
                'webkitFullscreenElement',
                'webkitFullscreenEnabled',
                'webkitfullscreenchange',
                'webkitfullscreenerror'

            ],
            // Old WebKit
            [
                'webkitRequestFullScreen',
                'webkitCancelFullScreen',
                'webkitCurrentFullScreenElement',
                'webkitCancelFullScreen',
                'webkitfullscreenchange',
                'webkitfullscreenerror'

            ],
            [
                'mozRequestFullScreen',
                'mozCancelFullScreen',
                'mozFullScreenElement',
                'mozFullScreenEnabled',
                'mozfullscreenchange',
                'mozfullscreenerror'
            ],
            [
                'msRequestFullscreen',
                'msExitFullscreen',
                'msFullscreenElement',
                'msFullscreenEnabled',
                'MSFullscreenChange',
                'MSFullscreenError'
            ]
        ];

        let i = 0;
        const l = fnMap.length;
        const ret = {};

        for (; i < l; i++) {
            val = fnMap[i];
            if (val && val[1] in document) {
                for (i = 0; i < val.length; i++) {
                    ret[fnMap[0][i]] = val[i];
                }
                return ret;
            }
        }

        return false;
    }());

    const eventNameMap = {
        fullscreenchange: fn.fullscreenchange,
        fullscreenerror: fn.fullscreenerror
    };

    const screenfull = {
        request(element) {
            return new Promise((resolve, reject) => {
                const onFullScreenEntered = function() {
                    screenfull.off('fullscreenchange', onFullScreenEntered);
                    resolve();
                };

                screenfull.on('fullscreenchange', onFullScreenEntered);

                element = element || document.documentElement;

                const returnPromise = element[fn.requestFullscreen]();
                if (returnPromise instanceof Promise) {
                    returnPromise.then(onFullScreenEntered).catch(reject);
                }
            });
        },
        exit() {
            return new Promise((resolve, reject) => {
                if (!screenfull.isFullscreen) {
                    resolve();
                    return;
                }

                const onFullScreenExit = function() {
                    screenfull.off('fullscreenchange', onFullScreenExit);
                    resolve();
                };

                screenfull.on('fullscreenchange', onFullScreenExit);

                const returnPromise = document[fn.exitFullscreen]();
                if (returnPromise instanceof Promise) {
                    returnPromise.then(onFullScreenExit).catch(reject);
                }
            });
        },
        on(event, callback) {
            const eventName = eventNameMap[event];
            if (eventName) {
                document.addEventListener(eventName, callback);
            }
        },
        off(event, callback) {
            const eventName = eventNameMap[event];
            if (eventName) {
                document.removeEventListener(eventName, callback);
            }
        }
    };

    Object.defineProperties(screenfull, {
        isFullscreen: {
            get() {
                return Boolean(document[fn.fullscreenElement]);
            }
        },
        element: {
            enumerable: true,
            get() {
                return document[fn.fullscreenElement];
            }
        },
        isEnabled: {
            enumerable: true,
            get() {
                // Coerce to boolean in case of old WebKit
                return Boolean(document[fn.fullscreenEnabled]);
            }
        }
    });

    return screenfull;
}
