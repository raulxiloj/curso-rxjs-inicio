import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[Next]', value),
    error: error => console.warn('[Error]:', error),
    complete: () => console.log('Completed')
}

//const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.complete();
});

//obs$.subscribe(console.log);

//obs$.subscribe(
//    res => console.log('next: ', res),
//    error => console.log('error: ', error),
//    () => console.info('Commpleted')
//)

obs$.subscribe(observer);