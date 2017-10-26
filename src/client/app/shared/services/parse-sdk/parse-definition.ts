
export class ParseUser{
  private _user = {
    id: '',
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    avatar: '',
    cover: ''
  };
  private _parseUser: any;

  get user(): any{
    return this._user;
  }

  set user(user: any){
    this._user = user;
  }

  constructor(user: any){
    // if(user){
    //   this._parseUser = user;
    //   this._user.id = user.id;
    //   this._user.username = user.get('username');
    //   this._user.email = user.get('email');
    //   this._user.firstName = user.get('firstName');
    //   this._user.lastName = user.get('lastName');
    //   this._user.avatar = user.get('avatar');
    //   this._user.cover = user.get('cover');
    // }
    this._parseUser = user;
  }

  get(key: string){
    return this._parseUser.get(key);
  }

  fetch(){
    return new Promise((resolve: Function, reject: Function)=>{
      if(this._parseUser){
        this._parseUser.fetch().then((user: any)=>{
          resolve(new ParseUser(user));
        }).catch((err: any)=>{
          reject({
            error: err
          })
        })
      }else{
        reject({
          error: true,
          message: 'Parse User not found'
        })
      }
    })
  }

}
