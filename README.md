# Verify Compendia Message

Usage:

```js
const verifyMessage = require("@compendia/verify-message").default;

// message should be a full multiline signed message output.
// For example:
/*
-----BEGIN COMPENDIA SIGNED MESSAGE-----
Test Message
-----BEGIN SIGNATURE-----
0203194c3a8ad5640540e97c53bff14d7d0e3c3a57fb3c548fcdbcd43fc8f315b6
30440220290471ad49ab963dfc2236f3e1c50d1370e5f5e25acba8c3457ae8585a812f810220649929a13eaf417b5a1cfee48a9c92a74c4d37b9de688e6a365e8f207d0817c6
-----END COMPENDIA SIGNED MESSAGE-----
*/


const result = verifyMessage(message);
// returns { valid: false } if invalid
// if valid, returns: { valid, message, publicKey, signature }
```
