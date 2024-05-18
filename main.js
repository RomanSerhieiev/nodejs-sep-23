const express = require( 'express' );
const { reader, writer } = require( './fs.servise' );
const { idValidator, passwordValidator, emailValidator, nameValidator, userValidator } = require( './validation.service' );

const app = express();

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

app.get( '/', (req, res) => {
  res.json( 'Hello!' );
} );

app.get( '/users', async (req, res) => {
  try {
    const users = await reader();

    res.status( 200 ).json( users );
  } catch (e) {
    res.status( 400 ).json( e.message );
  }
} );

app.post( '/users', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    nameValidator( name );
    emailValidator( email );
    passwordValidator( password );

    const users = await reader();
    const newUser = { id: users[users.length - 1].id + 1, name, email, password };

    users.push( newUser );

    await writer( users );

    res.status( 201 ).json( newUser );
  } catch (e) {
    res.status( 400 ).json( e.message );
  }
} );

app.get( '/users/:userId', async (req, res) => {
  try {
    const userId = Number( req.params.userId );

    idValidator( userId );

    const users = await reader();
    const index = users.findIndex( (user) => user.id === userId );

    userValidator( index );

    res.json( users[index] );
  } catch (e) {
    res.status( 400 ).json( e.message );
  }
} );

app.patch( '/users/:userId', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userId = Number( req.params.userId );

    idValidator( userId );

    const users = await reader();
    const index = users.findIndex( (user) => user.id === userId );

    userValidator( index );

    if (name !== undefined) {
      nameValidator( name );
      users[index].name = name;
    }

    if (email !== undefined) {
      emailValidator( email );
      users[index].email = email;
    }

    if (password !== undefined) {
      passwordValidator( password );
      users[index].password = password;
    }

    await writer( users );

    res.status( 201 ).json( users[index] );
  } catch (e) {
    res.status( 400 ).json( e.message );
  }
} );

app.delete( '/users/:userId', async (req, res) => {
  try {
    const userId = Number( req.params.userId );

    idValidator( userId );

    const users = await reader();
    const index = users.findIndex( (user) => user.id === userId );

    userValidator( index );

    users.splice( index, 1 );

    await writer( users );

    res.json( 'User is deleted.' );
  } catch (e) {
    res.status( 400 ).json( e.message );
  }
} );

const PORT = 8;

app.listen( PORT, '0.0.0.0', () => {
  console.log( `Server is running at http://0.0.0.0:${PORT}/` );
} );