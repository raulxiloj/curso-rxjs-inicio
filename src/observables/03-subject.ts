import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.warn('error:', error),
    complete: () => console.log('completed')
}

const interval$ = new Observable<number>(subs => {

    const interval = setInterval(() => {
        subs.next(Math.random())
    }, 1000);

    return () => clearInterval(interval);

});

/*
    1. Casteo multiple
    2. Tambien es un observer
    3. Next, error y complete
*/
const subject$ = new Subject()
interval$.subscribe(subject$);

//const subs1 = interval$.subscribe(res => { console.log('subs1', res) });
//const subs2 = interval$.subscribe(res => { console.log('subs2', res) });

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {

    subject$.next(10);
    subject$.complete();

}, 3500);

/*
Cuando la data es producida por el observable en si mismo,
es consdierado un "Cold observable". Pero cuando la data es
producida fuera del observable es llamado "Hot observable"
 */

