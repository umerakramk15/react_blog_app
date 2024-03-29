import bcrypt from "bcrypt";

export const hashingpassword = (password) => {
  const salt = 10;
  const hashedpassword = bcrypt.hash(password, salt);

  return hashedpassword;
};

export const comparepassword = (password, hashedpassword) => {
  
  const comparepassword = bcrypt.compare(password, hashedpassword);

  return comparepassword;
};
