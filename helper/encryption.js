import crypto from "crypto";

const algorithm = 'aes-256-cbc';
const key = process.env.ENCRYPTION_KEY;

// TODO: Store IV in database
function encrypt(data, iv) {
    // Create cipher
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    // Encrypt Data
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(data, iv) {
    // Create cipher
    const decipher = crypto.createDecipheriv(algorithm, key, iv);

    // Encrypt data
    let decrypted = decipher.update(data, 'utf8', 'hex');
    decrypted += decipher.final('hex');
    return decrypted;
}

export { encrypt, decrypt };