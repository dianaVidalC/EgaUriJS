###
 #  Module imports.
###
Scheme    = require("modules/Scheme.coffee");
Subdomain = require("modules/Subdomain.coffee");
Domain    = require("modules/Domain.coffee");
Username  = require("modules/Username.coffee");
Password  = require("modules/Password.coffee");
Port      = require("modules/Port.coffee");
Path      = require("modules/Path.coffee");
Query     = require("modules/Query.coffee");
Fragment  = require("modules/Fragment.coffee");

class exports.EgaUri

  @Scheme: Scheme
  @Subdomain: Subdomain
  @Domain: Domain
  @Username: Username
  @Password: Password
  @Port: Port
  @Path: Path
  @Query: Query
  @Fragment: Fragment