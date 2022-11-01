// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
    <h2 style={{borderBottom:"2px solid dark;"}}>What is NodeJs?</h2>
    <hr></hr>
    <ol>
      <li>Node.js is an open source server environment</li>
      <li>Non-blocking, Async</li>
      <li>Node.js uses JavaScript on the server</li>

    </ol>
    <br></br>
    <h2 style={{borderBottom:"2px solid dark;"}}>What is NPM?</h2>
    <hr></hr>
    <ol>
      <li>NPM stands for the node package manager, npm is used for node dependency management.</li>
      <li>Most of the time, we use npm as a server-side node dependency tool</li>
      <li>It is the default package manager for the JavaScript runtime environment Node.js. Help to manage a project’s dependencies. npm is installed with Node automatically.</li>

    </ol>
    <hr></hr>
    <h2 style={{borderBottom:"2px solid dark;"}}>What are the modules in Node.js?</h2>
    <hr></hr>
    <ol>
      <p>Modules are of three types: 1. Core Modules/Internal modules 2. Local Modules/Custom modules 3. Third-party Modules
Core Modules: Node.js has many built-in modules that are part of the platform and comes with Node.js installation. These modules can be loaded into the program by using the require function. The require() function will return a JavaScript type depending on what the particular module returns. ex:- http creates an HTTP server in Node.js.
Local Modules: Unlike built-in and external modules, local modules are created locally in your Node.js application. Let’s create a simple calculating module that calculates various operations. Another file can use its exported functionality using the require() function.
Third-party modules: Third-party modules are modules that are available online using the Node Package Manager(NPM). These modules can be installed in the project folder or globally. Some of the popular third-party modules are mongoose, express, angular, and react. Example: npm install express</p>
      <li>Node.js is an open source server environment</li>
      <li>Non-blocking, Async</li>
      <li>Node.js uses JavaScript on the server</li>

    </ol>
    <br></br>
  <h2>What is the purpose of the module.exports?</h2>
  <p>➔ The module.exports is actually a property of the module object in node.js. module. Exports is the object that is returned to the require() call.
➔ By module.exports, we can export functions, objects, and their references from one file and can use them in other files by importing them by require() method. easy to maintain and manage the code base in different modules.</p>
<h2>Difference between default export and named export?</h2>
<h4>default export:-</h4>
<p>Default exports are useful to export only a single object, function, variable.
During the import, we can use any name to import.
Exports without a default tag are Named exports. Exports with the default tag are Default exports
default export:- Using Named and Default Exports at the same time: It is possible to use Named and Default exports in the same file. It means both will be imported in the same file. Example: javascript.</p>
<h4>named export:-</h4>
<p>Named exports are useful to export several values.
During the import, it is mandatory to use the same name of the corresponding object.
Named exports allow us to share multiple objects, functions or variables from a single file and were introduced with the release of ES2015.
Named exports are imported with curly braces in various files and must be imported using the name of the object, function or variable that was exported.</p>
<br>
</br>
<h2>How do you import any module in Node.js?</h2>
<p>Importing a Module: We need to import the module to use the functions defined in the imported module in another file.
The result returned by require() is stored in a variable which is used to invoke the functions using the dot notation.</p>
    </div>
  );
}

export default App;
