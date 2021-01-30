To start json-server (holds the data for fetch protocol):
npx json-server --watch data/db.json --port 8000

To start react project (by default runs on port 3000, so not conflicting with json-server):
npm run start

Currently includes fake loading time, create, read, and delete functions.

Thanks to the Net Ninja: https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d
