/**
*  Subscribing inside a subscribe
*/
const somethingAsync$ = Rx.Observable.of({ result: 'ok' });
const fromR = (result) => Rx.Observable.of(result + ' ...not');

somethingAsync$
  .subscribe((response) => {
      fromR(response.result).subscribe(x => {
          console.log(x);
      });
  });


/**
* OPTIONS:
*
* - somethingAsync$.flatMap(r => fromR(r)).subscribe()
*
*/

