// load express
const express = require('express');

// create the express app; required
const app = express();

// built in method to utilize the filesystem
const fs = require('fs');

// tell the app to listen on port 3000 for HTTP requests
app.listen(3000, () => console.log('hello i am listening on port 3000'));


// view engine
app.engine('john', (filePath, options, callback) => {
  //
  fs.readFile(filePath, (err, content) => {
    //
    if (err) {
      return callback(err);
    };
    //
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#header#', '<h1>' + options.header + '</h1>')
      .replace('#content#', '<div>' + options.content + '</div>')
    //
    return callback(null, rendered);
  });
});

// set location of templates
app.set('views', './views');
// set name of engine/file extension
app.set('view engine', 'john');


// serve pages via routes
app.get('/one', (reg, res) => {
  res.render('left', { title: 'Fact One', header: 'First Fact:', content: 'I like Jazz' })
});

app.get('/two', (reg, res) => {
  res.render('right', { title: 'Fact Two', header: 'First Fact:', content: 'Coltrane is my fav' })
});

app.get('/three', (reg, res) => {
  res.render('left', { title: 'Fact Three', header: 'Third Fact:', content: 'A Love Supreme' })
});

app.get('/four', (reg, res) => {
  res.render('right', { title: 'Fact Four', header: 'Fourth Fact:', content: 'Whiskey, not Scotch' })
});

app.get('/five', (reg, res) => {
  res.render('left', { title: 'Fact Five', header: 'Fifth Fact:', content: 'Belgian over IPAs' })
});

app.get('/six', (reg, res) => {
  res.render('right', { title: 'Fact Six', header: 'Sixth Fact:', content: 'Never sours. Never.' })
});

app.get('/seven', (reg, res) => {
  res.render('left', { title: 'Fact Seven', header: 'Seventh Fact:', content: 'Pizza is a food group' })
});

app.get('/eight', (reg, res) => {
  res.render('right', { title: 'Fact Eight', header: 'Eighth Fact:', content: 'Leafy greens are a waste' })
});

app.get('/nine', (reg, res) => {
  res.render('left', { title: 'Fact Nine', header: 'Ninth Fact:', content: 'NBA is still the G.O.A.T.' })
});

app.get('/ten', (reg, res) => {
  res.render('right', { title: 'Fact Ten', header: 'Tenth Fact:', content: 'NFL is a snoozefest' })
});
