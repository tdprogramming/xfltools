# xfltools
Open source tools for legacy Flash Projects with Apache Royale

Rationale:

Apache Royale has opened up many possibilities for rapid application development for the web using Actionscript 3 and MXML. However, it is not yet a "drop-in" solution that can be used to deploy legacy Flash Apps and games to HTML/CSS/Javascript.

The XFL Tools project is an open-source research project aimed at helping to develop tools to revive legacy Flash apps and games. It consists of:

1. An implementation of the subset of the Flash AS 3 API, compatible with Royale 0.9.2+. This mainly wraps similar functionality provided by Grant Skinner's Create JS framework.
2. A parser for the uncompressed XFL file format which can be exported from the Adobe Flash/Animate authoring tool. 

You can view a basic demo of what can be done at http://tdprogramming.com/demos/xfltools. This shows a chessboard related animation created entirely in the animated authoring environment. The symbols and tweens are parsed at run time and animated using Greensock's TimelineLite package, which can compile under Royale having had its dependencies satisifed by the Flash API clone described above.

How to build the demo.

This is a pre-alpha project and is mainly being put up here so that I can pick the brains of the Apache Royale community to iron out the rough edges of the build process and improve the work flow.

You will need the Moonshine IDE, Apache Royale SDK 0.9.2 or higher, and python installed.

Create a new "JS Royale Browser" project in Royale and you can use a "Loader" instance to load up the saved XFL Chess demo document. Note that the XFL file itself should be inside a folder which is also named [filename].xfl. The Loader will automatically parse the various files and folders in here to spin up the symbol library etc.

Right-click the project in the explorer window at the top-left, and click "Settings" the choose "Paths".

You'll need the "as-src" folder from your checkout for a source folder, and "js-src" and "xfls" need to be added to resources so they get copied to the output folder.

Create an application from the main mxml class that is created using the ApplicationFactory class. This is shown in the included project in the repo.

Click "Project" then "Build As Javascript".

Once the build is complete, you need to open a terminal or power shell window at the js-src folder in the generated bin/js-debug folder and run python patchIndex.py.

This script is currently too hard-coded and will be updated, but what it's doing is:

1. Before any of the js includes or dependencies added by the Falcon JX compiler, it adds includes for the create JS libs and for the javascript required to wrap calls to create JS.
2. Adds a canvas to the body of the HTML document to be used by create JS.
3. Uses find and replace to add missing dependencies. Create JS doesn't seem to add everything that's actually needed, probably because it's trying to avoid circular dependencies at run time.
4. Note that to insert the JS headers at the right place, the script is looking for the CSS include for a CSS filename associated with the project, if your project isn't called XFL Tools you'll need to change this.

I am seeking assistance from the maintainers at Royale for the issues that cause this patch to be needed. Hopefully soon it'll just build straight off and run normally.


