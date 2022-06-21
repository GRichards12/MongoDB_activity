const yargs = require("yargs");
const { addFilm, listFilms } = require("./utils");
//looks for index.js by default, require("./utils") = require("./utils/index.js");
const app = yargsObj => {
    if (yargsObj.add) {
        addFilm({ title: yargsObj.title, actor: yargsObj.actor });
    } else if (yargsObj.list) {
        listFilms();
    }
    else {
        console.log("invalid command");
    };
};

app(yargs.argv);