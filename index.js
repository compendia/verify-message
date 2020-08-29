const crypto = require("@arkecosystem/crypto");
exports.default = (message) => {
  let valid;
  try {
    const array = message.split("\n");
    const signatureIndex =
      array.lastIndexOf("-----END COMPENDIA SIGNED MESSAGE-----") - 1;
    const publicKeyIndex = signatureIndex - 1;
    const messageIndexStart =
      array.indexOf("-----BEGIN COMPENDIA SIGNED MESSAGE-----") + 1;
    const messageIndexEnd = array.lastIndexOf("-----BEGIN SIGNATURE-----");
    if (
      signatureIndex > -1 &&
      publicKeyIndex > -1 &&
      messageIndexStart > -1 &&
      messageIndexEnd > -1
    ) {
      const sliced = array.slice(messageIndexStart, messageIndexEnd);
      const message = sliced.join("\n");
      const signature = array[signatureIndex];
      const publicKey = array[publicKeyIndex];
      const signedObj = { message, publicKey, signature };
      valid = crypto.Crypto.Message.verify(signedObj);
      return { valid, data: signedObj }
    } else {
      valid = false;
    }
  } catch (e) {
    valid = false;
  }
  return { valid };
};