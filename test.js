const dhive = require('@hiveio/dhive');
const key = '5JkktiNG3xG6oPtgPNXYPicUfw95Jc3VuKKgYET6CVEmm7mziqk';
try {
  const privateKey = dhive.PrivateKey.fromString(key);
  console.log('Key is valid:', privateKey.toString());
} catch (error) {
  console.error('Key is invalid:', error);
}