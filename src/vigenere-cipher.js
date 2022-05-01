const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (type=true) {
    this.type=type;
    this.Dictionary='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let Key = key.toUpperCase();
    let OutText = '';
    //j - counter in Key
    let j=0;
    let TextToEncrypt=message.toUpperCase();
    
    for (let i = 0; i < TextToEncrypt.length; i++) {
      if (this.Dictionary.indexOf(TextToEncrypt[i]) != -1) {
          let numberEnc = this.Dictionary.indexOf(TextToEncrypt[i]) + this.Dictionary.indexOf(Key[j]);
          numberEnc = numberEnc % (this.Dictionary.length);
          OutText += this.Dictionary[numberEnc];
          j++;
          if (j === Key.length) {
              j = 0;
          }
      }
      else {
          OutText += TextToEncrypt[i];
      }
    }
    return this.type?OutText:OutText.split('').reverse().join('');
  }


  decrypt(encryptedMessage, key) {

    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let Key = key.toUpperCase();
    let OutText='';
    let j=0;
    let TextToDecrypt = encryptedMessage.toUpperCase();

    for (let i=0; i< TextToDecrypt.length; i++) {
      if (this.Dictionary.indexOf(TextToDecrypt[i]) !=-1) {
        let numberDec = (this.Dictionary.indexOf(TextToDecrypt[i])+this.Dictionary.length-this.Dictionary.indexOf(Key[j]))%this.Dictionary.length;
        OutText+=this.Dictionary[numberDec];
        j++;
        if (j===Key.length) {
          j=0;
        }
      }
      else {
        OutText+=TextToDecrypt[i];
      }
    }
    return this.type?OutText:OutText.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};


