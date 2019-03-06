## Simple, Fast, Reliable(SFR)
# sfr-datetime
extending of the date prototype

```
npm i sfr-datetime
```

## Usage

```
require('sfr-datetime');

const date = new Date();
const date1 = new Date("2019-5-1");
const unixTime = date.getTime();
const unixTimeSeconds = date.getUnixSeconds();
const unixTimeMilliseconds = date.getUnixMilliseconds();

console.log(unixTime);
console.log(unixTimeSeconds);
console.log(unixTimeMilliseconds);

console.log(date.format());
console.log(new Date(unixTime).format());
console.log(new Date(unixTimeMilliseconds).format());
console.log(date.format('MM/DD/YYYY'));
console.log(date.format('MM/DD/YY'));
console.log(date.format('MM/DD/YYYY HH:mm:ss'));
console.log(date.format('MM/DD/YYYY HH:mm'));
console.log(date.format('MM,DD YYYY'));
console.log(date.format('YYYY年MM月DD日'));
console.log(date.format('HH点mm分ss秒'));

console.log(date.dateDiff(date1) + ' days');
console.log(new Date(date.dateAdd(-365)).format());
console.log(new Date(date.dateAdd(730)).format());
```

Copyright (C) 2018 Jkin.feng. Licensed MIT. For more details, please see LICENSE.