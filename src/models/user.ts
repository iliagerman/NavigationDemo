/**
 * Created by iliagerman on 21/05/2017.
 */
export class User{
  public username:string;
  public password:string;


  public clean(){
    this.username = '';
    this.password = '';
  }


}
