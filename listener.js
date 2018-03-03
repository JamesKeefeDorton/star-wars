const app = require('./5/server.js');
const port = process.env.PORT || process.argv[2] || 80;

app.listen(port, function() { 
        console.log(`A long time ago, on port ${port}...`); 
});
