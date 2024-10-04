/*let d;

d = new Date();
d = new Date(2020, 11, 24, 10, 33, 30, 0);
d = new Date('2020-11-24T10:33:00');
d = new Date('2020-11-24');
d = new Date('11/24/2020');
d = new Date('Nov 24 2020');
d = new Date('24 Nov 2020');

d = Date.now();

d = new Date('2020-11-24T10:33:00');
d= d.getTime()

d = new Date(d)
d = Math.floor(d/1000/60/60/24/365) // years

console.log(d);*/

//Date object methods

let x;
let d = new Date();

x = d.getFullYear();
x = d.getMonth();
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();
x = d.getTime();

x = Intl.DateTimeFormat('pt-BR').format(d);
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-US', {month: 'long'}).format(d);
x = Intl.DateTimeFormat('en-US', {month: 'short'}).format(d);
x = Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    }).format(d);

console.log(x);