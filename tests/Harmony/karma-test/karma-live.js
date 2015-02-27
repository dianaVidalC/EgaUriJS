(function (root, System, expect, undefined) {
  "use strict";

  /*
   *  SystemJS config paths.
   */
  System.config({
    "paths": {
      "lib/*": "/base/tests/lib/*.js",
      "test/*": "/base/tests/Harmony/karma-test/*.js",
      "es6/*": "/base/src/main/Harmony/*.js",
      "harmony/*": "/base/src/main/Harmony/*.js",
      "typescript/*": "/base/src/main/TypeScript/*.js",
      "ts/*": "/base/src/main/TypeScript/*.js",
      "module/*": "/base/src/main/Harmony/modules/*.js"
    }
  });

  var
    SubModules = ["Scheme", "Subdomain", "Domain", "Username", "Password", "Port", "Path", "Query", "Fragment"],
    SubModulesLength = SubModules.length,
    i = 0,
    ModuleName,
    Module;

  /*
   *  Mocha test.
   */
  describe("EgaUri namespace creation", function () {

    /*
     *  Imports the library using different ways to create the global namespace.
     */
    describe("Library loading", function () {

      /*
       *  Before each test-case we must clean the global scope namespace to check if it was correctly imported.
       */
      beforeEach(function () {
        if (!!root.EgaUri) root.EgaUri = undefined;
      });

      /*
       *  Uses SystemJS to load a file that creates the namespace using the ES6 import reserved keyword.
       */
      it("should be created with ES6 import keyword", function (done) {
        System.import("test/sync-loading").then(function () {
          done();
        }).catch(function (e) {
          done(e);
        });
      });

      /*
       *  Loads the library namespace directly using systemJS.
       */
      it("should be created with SystemJS import (async)", function (done) {
        System.import("harmony/EgaUri").then(function (mod) {
          root.EgaUri = mod.EgaUri;
          done();
        }).catch(function (e) {
          done(e);
        });
      });

    });

    /*
     *  Library functionality.
     */
    describe("Library functionality", function () {

      /*
       *  Check modules existence.
       */
      describe("Modules existence", function () {

        /*
         *  Do a loop to check every (sub)module.
         */
        for (i = 0; i < SubModulesLength; i++) {
          ModuleName = SubModules[i];
          Module = root.EgaUri[ModuleName];
          it(ModuleName, function () {
            expect(Module).to.exist;
            expect(Module).to.be.a("function");
          });
        }
      });

    });

  });
  mocha.run();
})(this, System, chai.expect);