import { CriptService } from './../core/cript.service';
import { HttpParams } from '@angular/common/http';

export class AuthFactory {

  private userName = '';
  private password = '';
  private clientId = 'help-bot-client-id';
  private grantType = 'password';
  private scope = 'read_write';
  private clientSecret = '84fd657fg2f4g5r8ty2cd6xs5e74';

  public setUsername(username: string): AuthFactory {
    this.userName = username;
    return this;
  }

  public setPassword(password: string): AuthFactory {
    this.password = password;
    return this;
  }

  public setClientId(clientId: string): AuthFactory {
    this.clientId = clientId;
    return this;
  }

  public setGrantType(grantType: string): AuthFactory {
    this.grantType = grantType;
    return this;
  }

  public setScope(scope: string): AuthFactory {
    this.scope = scope;
    return this;
  }

  public setClientSecret(clientSecret: string): AuthFactory {
    this.clientSecret = clientSecret;
    return this;
  }

  public generateData(): string {
    // const data = new HttpParams();
    // data.set('username', encodeURIComponent(this.userName));
    // data.set('password', encodeURIComponent(this.password));
    // data.set('grant_type', this.grantType);
    // data.set('scope', this.scope);
    // data.set('client_secret', this.clientSecret);
    // data.set('client_id', this.clientId);
    // console.log(data.toString());
    let data = '';
    data += 'username=' + encodeURIComponent(this.userName);
    data += '&';
    data += 'password=' + encodeURIComponent(this.password);
    data += '&';
    data += 'grant_type=' + this.grantType;
    data += '&';
    data += 'scope=' + this.scope;
    data += '&';
    data += 'client_secret=' + this.clientSecret;
    data += '&';
    data += 'client_id=' + this.clientId;

    return data;
  }

  public generateAuthorization(): string {
    return 'Basic ' + CriptService.encode(this.clientId + ':' + this.clientSecret);
  }

}