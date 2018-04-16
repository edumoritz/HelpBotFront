export class CriptService {

  public static encode(input): string {
    const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      'abcdefghijklmnopqrstuvwxyz' +
      '0123456789+/=';
    let output = '';
    let enc1: any = '';
    let enc2: any = '';
    let enc3: any = '';
    let enc4: any = '';
    let chr1: any = '';
    let chr2: any = '';
    let chr3: any = '';
    let i = 0;

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      /* tslint:disable:no-bitwise */
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      /* tslint:enable:no-bitwise */

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output +
        keyStr.charAt(enc1) +
        keyStr.charAt(enc2) +
        keyStr.charAt(enc3) +
        keyStr.charAt(enc4);
      chr1 = chr2 = chr3 = '';
      enc1 = enc2 = enc3 = enc4 = '';
    }

    return output;
  }

  public static decode(input) {
    const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      'abcdefghijklmnopqrstuvwxyz' +
      '0123456789+/=';

    let output = '';
    let enc1: any = '';
    let enc2: any = '';
    let enc3: any = '';
    let enc4: any = '';
    let chr1: any = '';
    let chr2: any = '';
    let chr3: any = '';
    let i = 0;

    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

    while (i < input.length) {
      enc1 = keyStr.indexOf(input.charAt(i++));
      enc2 = keyStr.indexOf(input.charAt(i++));
      enc3 = keyStr.indexOf(input.charAt(i++));
      enc4 = keyStr.indexOf(input.charAt(i++));

      /* tslint:disable:no-bitwise */
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      /* tslint:enable:no-bitwise */

      output = output + String.fromCharCode(chr1);

      if (enc3 !== 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 !== 64) {
        output = output + String.fromCharCode(chr3);
      }

      chr1 = chr2 = chr3 = '';
      enc1 = enc2 = enc3 = enc4 = '';
    }

    return output;
  }

}
