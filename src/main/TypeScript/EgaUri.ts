/*
 *  EgaUri.ts 0.0.1
 *  http://www.github.com/EgaTuts/EgaUriJS
 *  (c) 2015 Esaú García Sánchez-Torija (aka EgaTuts) & contributors
 *  EgaUriJS may be freely distributed under the MIT license.
 */

import Scheme    = require("./modules/Scheme");
import Subdomain = require("./modules/Subdomain");
import Domain    = require("./modules/Domain");
import Username  = require("./modules/Username");
import Password  = require("./modules/Password");
import Port      = require("./modules/Port");
import Path      = require("./modules/Path");
import Query     = require("./modules/Query");
import Fragment  = require("./modules/Fragment");

export class EgaUri {

  public static Scheme    = Scheme;
  public static Subdomain = Subdomain;
  public static Domain    = Domain;
  public static Username  = Username;
  public static Password  = Password;
  public static Port      = Port;
  public static Path      = Path;
  public static Query     = Query;
  public static Fragment  = Fragment;

}