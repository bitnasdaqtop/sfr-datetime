## Simple, Fast, Reliable(SFR)
# sfr-datetime
Extending the date prototype

```
npm i sfr-datetime
```

## Usage

```
require('sfr-datetime');

const date = new Date();
const unixTime = date.getTime();
const unixTimeSeconds = date.getTimeSeconds();
const unixTimeMilliseconds = date.getTimeMilliseconds();

console.log(unixTime);
console.log(unixTimeSeconds);
console.log(unixTimeMilliseconds);

console.log(date.format());
console.log(new Date(unixTime).format());
console.log(new Date(unixTimeMilliseconds).format());
console.log(new Date(date.calcDays(365)).format());

console.log(date.format('MM/DD/YYYY'));
console.log(date.format('MM/DD/YY'));
console.log(date.format('MM/DD/YYYY HH:mm:ss'));
console.log(date.format('MM/DD/YYYY HH:mm'));
console.log(date.format('MM,DD YYYY'));
console.log(date.format('YYYY年MM月DD日'));
console.log(date.format('HH点mm分ss秒'));
```

Copyright (C) 2018 Jkin.feng. Licensed MIT. For more details, please see LICENSE.