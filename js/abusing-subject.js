/**
*  Using a behavior subject to update state
*/

const isLoaded$ = new Rx.BehaviorSubject(false);
const somethingAsync$ = Rx.Observable.of({ result: 'ok' });

somethingAsync$
  .subscribe(() => isLoaded$.next(true));


/**
* OPTIONS:
*
* - isLoaded$ = somethingAsync$.mapTo(true).startWith(false)
*
*/






