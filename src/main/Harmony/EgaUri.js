/*
 *  EgaUri.js 0.0.1
 *  http://www.github.com/EgaTuts/EgaUriJS
 *  (c) 2015 Esaú García Sánchez-Torija (aka EgaTuts) & contributors
 *  EgaUriJS may be freely distributed under the MIT license.
 */

import { Scheme }    from "./modules/Scheme.js";
import { Subdomain } from "./modules/Subdomain.js";
import { Domain }    from "./modules/Domain.js";
import { Username }  from "./modules/Username.js";
import { Password }  from "./modules/Password.js";
import { Port }      from "./modules/Port.js";
import { Path }      from "./modules/Path.js";
import { Query }     from "./modules/Query.js";
import { Fragment }  from "./modules/Fragment.js";

class EgaUri {

}

EgaUri.Scheme    = Scheme;
EgaUri.Subdomain = Subdomain;
EgaUri.Domain    = Domain;
EgaUri.Username  = Username;
EgaUri.Password  = Password;
EgaUri.Port      = Port;
EgaUri.Path      = Path;
EgaUri.Query     = Query;
EgaUri.Fragment  = Fragment;

export { EgaUri };