import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import notify from 'devextreme/ui/notify';
// import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { custom } from 'devextreme/ui/dialog';

@Injectable({
  providedIn: 'root',
})

export class BaseService {

  constructor(
    // private http: HttpClient,
    // private storageService: StorageService,
    // private platform: Platform,
    // private device: Device,
    // private alertCtrl: AlertController,
  ) {
    // devextremeAjax.inject({ sendRequest: sendRequestFactory(http) };
  }

  // get authenticated() { if (this.storageService.Token) { return true; } else { return false; } }

  public pageUrl(router: Router) {
    return router?.url?.startsWith('/') ? router.url.substring(1) : router.url;
  }

  enToFa(num: any): string {
    if (!num) {
      return '';
    } else {
      return num
        .toString()
        .replace(/0/g, '۰')
        .replace(/1/g, '۱')
        .replace(/2/g, '۲')
        .replace(/3/g, '۳')
        .replace(/4/g, '۴')
        .replace(/5/g, '۵')
        .replace(/6/g, '۶')
        .replace(/7/g, '۷')
        .replace(/8/g, '۸')
        .replace(/9/g, '۹')
        .replace(/0/g, '٠')
        .replace(/1/g, '۱')
        .replace(/2/g, '۲')
        .replace(/3/g, '۳')
        .replace(/4/g, '۴')
        .replace(/5/g, '۵')
        .replace(/6/g, '۶')
        .replace(/7/g, '۷')
        .replace(/8/g, '۸')
        .replace(/9/g, '۹');
    }
  }

  public notify(message: string, type: string) {
    notify({ message: message, type: type, width: '300px', displayTime: 2500, shading: true }, { position: "top center", direction: "down-stack" });
  }

  playSound(type: string) {
    var audio = new Audio();
    if (type === 'error') {
      audio.src = "../../assets/sounds/error.mp3";
    }
    else {
      audio.src = "../../assets/sounds/success.mp3";
    }
    audio.load();
    audio.play();
  }

  public get loading() {
    return this.loading;
  }

  public set loading(status: boolean) {
    if (status === true && !document.getElementById('loading-box')) {
      const el = document.createElement('div');
      el.id = 'loading-box';
      el.innerHTML = `
      <div class="bg-loader"> 
        <div class="custom-loader"></div>
      </div>
      `;
      document.getElementsByTagName('body')[0].appendChild(el);
    } else {
      const loadingElement = document.getElementById('loading-box');
      if (loadingElement) {
        setTimeout(() => {
          document.getElementById('loading-box')?.remove();
        }, 600);
      }
    }
  }

  async dialog(title: string, text: string) {
    return new Promise(async (resolve, reject) => {
      const myDialog = await custom({
        title: title,
        messageHtml: text,
        buttons: [{
          text: "تایید",
          onClick: (e) => {
            resolve(true);
          }
        }, {
          text: "انصراف",
          onClick: (e) => {
            resolve(false);
          }
        }
        ]
      });
      await myDialog.show();
    });
  }

  // private getHttpHeader() {
  //   return {
  //     // 'Content-Type': 'application/json',
  //     // 'Content-Type': 'multipart/form-data',
  //     'accept': 'text/plain',
  //     // 'Cookie' : ,
  //     // 'Access-Control-Allow-Origin': '*',
  //     // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
  //     // 'Access-Control-Allow-Headers': 'Content-Type',
  //   };
  // }

  // httpGET(serviceUrl: string, body: any = null, showLoading: boolean = false, apiRootUrl: string = environment.apiUrl) {
  //   return new Promise(async (resolve, reject) => {
  //     let loading: any; if (showLoading) {
  //       this.loading = true;
  //     }
  //     if (body) {
  //       let dataParams = new HttpParams().set('serviceData', JSON.stringify(body));
  //       this.http.get(apiRootUrl + serviceUrl, { headers: this.getHttpHeader(), params: dataParams, }).subscribe((res: any) => {
  //         if (showLoading && loading) {
  //           this.loading = false;
  //         } resolve(res.Result);
  //       }, (err) => {
  //         if (showLoading && loading) {
  //           this.loading = false;
  //         } reject(err);
  //       });
  //     }
  //     else {
  //       this.http.get(apiRootUrl + serviceUrl, { headers: this.getHttpHeader(), }).subscribe((res: any) => {
  //         if (showLoading && loading) {
  //           this.loading = false;
  //         } resolve(res);
  //       }, (err) => {
  //         if (showLoading && loading) {
  //           this.loading = false;
  //         } reject(err);
  //       });
  //     }
  //   });
  // }

  // httpPOST(serviceUrl: string, body: any, showLoading: boolean = false) {
  //   return new Promise(async (resolve, reject) => {
  //     let loading: any;
  //     if (showLoading) {
  //       this.loading = true;
  //     }
  //     this.http
  //       .post(
  //         environment.apiUrl + serviceUrl,
  //         body,
  //         { headers: this.getHttpHeader() }
  //       )
  //       .subscribe(
  //         (res: any) => {
  //           if (showLoading && loading) {
  //             this.loading = false;
  //           }
  //           resolve(res);
  //         },
  //         (err) => {
  //           if (showLoading && loading) {
  //             this.loading = false;
  //           }
  //           reject(err);
  //         }
  //       );
  //   });
  // }

  // httpPUT(serviceUrl: string, body: any, showLoading: boolean = false) {
  //   return new Promise(async (resolve, reject) => {
  //     let loading: any;
  //     if (showLoading) {
  //       this.loading = true;
  //     }
  //     this.http
  //       .put(
  //         environment.apiUrl + serviceUrl,
  //         body ? JSON.stringify(body) : {},
  //         { headers: this.getHttpHeader() }
  //       )
  //       .subscribe(
  //         (res: any) => {
  //           if (showLoading && loading) {
  //             this.loading = false;
  //           }
  //           resolve(res.Result);
  //         },
  //         (err) => {
  //           if (showLoading && loading) {
  //             this.loading = false;
  //           }
  //           reject(err);
  //         }
  //       );
  //   });
  // }

  // httpDELETE(serviceUrl: string, showLoading: boolean = false) {
  //   return new Promise(async (resolve, reject) => {
  //     let loading: any;
  //     if (showLoading) {
  //       this.loading = true;
  //     }
  //     this.http
  //       .delete(environment.apiUrl + serviceUrl, {
  //         headers: this.getHttpHeader(),
  //       })
  //       .subscribe(
  //         (res: any) => {
  //           if (showLoading && loading) {
  //             this.loading = false;
  //           }
  //           resolve(res.Result);
  //         },
  //         (err) => {
  //           if (showLoading && loading) {
  //             this.loading = false;
  //           }
  //           reject(err);
  //         }
  //       );
  //   });
  // }

  // stringToBinary = (str: string) => {
  //   let binary = '';
  //   for (let i = 0; i < str.length; i++) {
  //     const charBinary = str.charCodeAt(i).toString(2);
  //     // Pad with leading zeros to ensure 8-bit representation
  //     binary += charBinary.padStart(8, '0');
  //   }
  //   return binary;
  // };

  // async API(body: any) {
  //   try {
  //     let result: any = await this.httpPOST('ApiBase/modification', body, true);
  //     return result
  //   } catch { }
  //   return null;
  // }

  // async FileUpload(body: any) {
  //   try {
  //     let result: any = await this.httpPOST('ApiBase/file', body, true);
  //     return result
  //   } catch { }
  //   return null;
  // }
}
