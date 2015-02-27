/*
 *  Module imports.
 */
import { Scheme }    from "./modules/Scheme";
import { Subdomain } from "./modules/Subdomain";
import { Domain }    from "./modules/Domain";
import { Username }  from "./modules/Username";
import { Password }  from "./modules/Password";
import { Port }      from "./modules/Port";
import { Path }      from "./modules/Path";
import { Query }     from "./modules/Query";
import { Fragment }  from "./modules/Fragment";

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