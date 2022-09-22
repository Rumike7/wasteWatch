export interface Cat{
  title:string;
  sum:number;
  final:number;
  subs:Sub[];
  addSub?:boolean;

}
export interface Sub{
    sum:number;
    title:string;
    final:number;
    beginInputNewAmount?:boolean;
    newAmount?:string;
}
export interface Account{
    amount?:string;
    title?:string;
    finalsum?:string;
    waste?:string;
}
// [
//   {
//     "title":"logement",
//     "sum":300,
//     "final":400,
//     "subs":[
//       {
//         "title":"wifi",
//         "sum":300,
//         "final":400,
//         "beginInputNewAmount":false,
//         "newAmount":"0"
//       },
//       {
//         "title":"facture",
//         "sum":300,
//         "final":400,
//         "beginInputNewAmount":false,
//         "newAmount":"0"
//       }
//     ]
//   },
//   {
//     "title":"nourritue",
//     "sum":300,
//     "final":400,
//     "subs":[
//       {
//         "title":"feculent",
//         "sum":0,
//         "final":150,
//         "beginInputNewAmount":false,
//         "newAmount":"0"
//       },
//       {
//         "title":"the",
//         "sum":0,
//         "final":100,
//         "beginInputNewAmount":false,
//         "newAmount":"0"
//       },
//       {
//         "title":"collation",
//         "sum":0,
//         "final":50,
//         "beginInputNewAmount":false,
//         "newAmount":"0"
//       },
//       {
//         "title":"sauce",
//         "sum":0,
//         "final":100,
//         "beginInputNewAmount":false,
//         "newAmount":"0"
//       },
//       {
//         "title":"viande",
//         "sum":0,
//         "final":100,
//         "beginInputNewAmount":false,
//         "newAmount":"0"
//       }
//     ]
//   }

// ]
