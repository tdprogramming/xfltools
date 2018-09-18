# xfltools
Open source tools for legacy Flash Projects with Apache Royale

Rationale:

Apache Royale has opened up many possibilities for rapid application development for the web using Actionscript 3 and MXML. However, it is not yet a "drop-in" solution that can be used to deploy legacy Flash Apps and games to HTML/CSS/Javascript.

The XFL Tools project is an open-source research project aimed at helping to develop tools to revive legacy Flash apps and games. It consists of:

1. An implementation of the subset of the Flash AS 3 API, compatible with Royale 0.9.2+. This mainly wraps similar functionality provided by Grant Skinner's Create JS framework.
2. A parser for the uncompressed XFL file format which can be exported from the Adobe Flash/Animate authoring tool. 

The eventual aim is to develop a set of tools that can be used to resurrect very old Flash code (for example, lots of frame scripts, code in library symbols, vector art etc.) as working, performant HTML 5 with a "fire-and-forget" solution. While a lot of these projects used very bad programming practices which we don't really want to bring back, a lot of interesting games and cartoons from the "Golden Age" of Flash are currently being lost to the sands of time. For games with script in the timeline, we will probably need to transpile from AS1 and AS2 to AS3, then in some cases make the transpiled script cross-scriptable (in cases where a SWF was previously loaded at run time containing code). Practicality and security questions remain over whether this is even possible, but the investigation itself should yield some useful findings. Using the XFL file format means we can work with the raw Actionscript, rather than creating an entire virtual machine to handle AVM bytecode (as with Shumway). I intend to build a packaging tool that transpiles the timeline code into javascript that can then be cross-scripted to from the hosting page.

Other projects exist such as Shumway and SpriteFlexJS - this is intended as a complimentary approach that can eventually be mixed and matched with them.

You can view a basic demo of what can be done at http://tdprogramming.com/demos/xfltools. This shows a chessboard related animation created entirely in the animated authoring environment. The symbols and tweens are parsed at run time and animated using Greensock's TimelineLite package, which can compile under Royale having had its dependencies satisifed by the Flash API clone described above.

Note that at present it takes a while to get going with the tween. 

How to build the demo.

This is a pre-alpha project and is mainly being put up here so that I can pick the brains of the Apache Royale community to iron out the rough edges of the build process and improve the work flow. Currently only a "debug" Javascript build is supported.

You will need the Moonshine IDE, Apache Royale SDK 0.9.2 or higher, and python installed.

Create a new "JS Royale Browser" project in Royale and you can use a "Loader" instance to load up the saved XFL Chess demo document. Note that the XFL file itself should be inside a folder which is also named [filename].xfl. The Loader will automatically parse the various files and folders in here to spin up the symbol library etc.

Right-click the project in the explorer window at the top-left, and click "Settings" the choose "Paths".

You'll need the "as-src" folder from your checkout for a source folder, and "js-src" and "xfls" need to be added to resources so they get copied to the output folder.

Add the following to additional compiler options: -html-template=js-src/html-template.html

Create an application from the main mxml class that is created using the ApplicationFactory class. This is shown in the included project in the repo.

Click "Project" then "Build As Javascript".

Once the build is complete, you need to open a terminal or power shell window at the js-src folder in the generated bin/js-debug folder and run python dependency_assistant.py.

This script adds missing javascript dependencies to the output. If you've been having any issues in this area, this may help with a stop gap solution to keep you going while we investigate further with the Royale team.

I am seeking assistance from the maintainers at Royale for the issues that cause this patch to be needed. Hopefully soon it'll just build straight off and run normally.

Troubleshooting:

If you get an issue where the compiler says that it can't find the playerglobal.swc file, you need to download it from here:

https://helpx.adobe.com/flash-player/kb/archived-flash-player-versions.html

Download the version the compiler is complaining about, then rename just to "playerglobal.swc" (it'll come with the version number in the file name), then put it in the folder in your SDK directory where the compiler is looking. 