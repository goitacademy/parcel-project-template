const Bundler = require("parcel-bundler");
const path = require("path");
const fs = require("fs");
const rimraf = require("rimraf");
const mkdirp = require("mkdirp");
const nukeDistPlugin = require("../index.js");

describe("Nuke Dist Plugin", () => {
  const dummyFileName = "dummy.txt";
  let bundler;

  beforeEach(() => {
    bundler = new Bundler(path.join(__dirname, "./index.html"), {
      outDir: path.join(__dirname, "dist"),
      watch: false,
      cache: false,
      hmr: false,
      logLevel: 0
    });

    mkdirp.sync(path.join(__dirname, "dist"));

    // Dummy artefact generated outside current build
    fs.closeSync(fs.openSync(path.join(__dirname, "dist", dummyFileName), "w"));
  });

  test("external artefacts are present in build dir", async () => {
    const bundle = await bundler.bundle();
    const assets = fs.readdirSync(path.join(__dirname, "dist"));

    expect(assets).toContain(dummyFileName);
  });

  test("plugin removes external artefacts from build dir", async () => {
    nukeDistPlugin(bundler);

    const bundle = await bundler.bundle();
    const assets = fs.readdirSync(path.join(__dirname, "dist"));

    expect(assets).not.toContain(dummyFileName);
  });

  afterEach(done => {
    rimraf(path.join(__dirname, "dist/*"), done);
  });
});
