import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
   res.send('Chat The World!');
});

app.listen(port, () => {
 console.log('Express app listening on port ' + port);
});
