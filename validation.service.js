const nameRegex = /^[a-zA-Z\s]{3,30}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{6,}$/;
const idRegex = /^\d+$/;

const nameValidator = (name) => {
  if (!nameRegex.test( name )) {
    throw new Error( 'Name must be between 3 and 30 characters and contain only letters and spaces.' );
  }
};

const emailValidator = (email) => {
  if (!emailRegex.test( email )) {
    throw new Error( 'Invalid email format.' );
  }
};

const passwordValidator = (password) => {
  if (!passwordRegex.test( password )) {
    throw new Error( 'Password must be at least 6 characters long.' );
  }
};

const idValidator = (userId) => {
  if (!idRegex.test( userId )) {
    throw new Error( 'ID is not valid.' );
  }
};

const userValidator = (index) => {
  if (index === -1) {
    throw new Error( 'User not found.' );
  }
};

module.exports = { nameValidator, emailValidator, passwordValidator, idValidator, userValidator };