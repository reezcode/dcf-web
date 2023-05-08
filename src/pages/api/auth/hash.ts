import bcrypt from 'bcryptjs';

async function verifyPassword(password: string, hashedPassword: string) {
  const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
  return isPasswordCorrect;
}

async function hashPassword(password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

export { verifyPassword, hashPassword }