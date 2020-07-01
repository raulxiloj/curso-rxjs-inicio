import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.warn('error:', error),
    complete: () => console.log('completed')
}

const intervalo$ = new Observable<number>(subscriber => {
    //Counter
    let i = 1;
    const interval = setInterval(() => {
        subscriber.next(i);
        i++;
    }, 1000);

    return () => {
        clearInterval(interval);
        console.log("Interval destroyed")
    }
});

const subscription = intervalo$.subscribe(res => console.log('Num: ', res));
const susbscription2 = intervalo$.subscribe(res => console.log('Num: ', res));
const susbscription3 = intervalo$.subscribe(res => console.log('Num: ', res));

subscription.add(susbscription2).add(susbscription3);

setTimeout(() => {
    subscription.unsubscribe();
    //susbscription2.unsubscribe();
    //susbscription3.unsubscribe();
}, 3000);