import { EgaUri } from "es6/EgaUri";

(function (root, System, mocha, expect, undefined) {
  "use strict";

  mocha.setup("bdd");

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
          Module = EgaUri[ModuleName];
          it(ModuleName + ": ", function () {
            expect(Module).to.exist;
            expect(Module).to.be.a("function");
          });
        }
      });

    });

  });
  mocha.run();
})(this, System, mocha, chai.expect);