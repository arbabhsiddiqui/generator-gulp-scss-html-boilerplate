const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  welcome() {
    this.log(
      "Welcome To Gulp-scss-html boilerplate please wait while we are generating your boilerplate"
    );
  }

  writing() {
    this.fs.copy(
      this.templatePath("_gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(
      this.templatePath("gulpfile.js"),
      this.destinationPath("gulpfile.js")
    );
    this.fs.copy(
      this.templatePath("package.json"),
      this.destinationPath("package.json")
    );

    this.fs.copy(
      this.templatePath("package-lock.json"),
      this.destinationPath("package-lock.json")
    );
    this.fs.copy(this.templatePath("src"), this.destinationPath("src"));
  }

  end() {
    this.log(" ");
    this.log(
      "Finished generating! All you need to do is to  run npm init then copy all content of _devDependencies into package.json after author and run command npm i then run gulp command"
    );
    this.log(" ");
  }
};
