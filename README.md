
Small service to route Direct Line communication on localhost
=============================================================

Clone the repo and run:
> npm install

To run:
> npm start

Webchat configuration to use the localhost domain should be:
```
App({
    directLine: {
        secret: 'not needed',
        domain: 'http://localhost:3000/directline',
        webSocket: false
    },
    user: {
        id: 'my-user-id'
    },
    bot: {
        id: 'bot'
    },
    resize: 'detect'
}, this.botWindowElement.nativeElement);
```


