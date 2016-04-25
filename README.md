# insekai-server

Tag based forum software for hentai (API part).

![wow](http://i.giphy.com/UNpeAPM67tZMA.gif)

## Generating RSA keys

```bash
$ openssl genrsa -out demo.rsa 1024 # the 1024 is the size of the key we are generating
$ openssl rsa -in demo.rsa -pubout > demo.rsa.pub
```

## License

MIT © [EGOIST](https://github.com/egoist)
