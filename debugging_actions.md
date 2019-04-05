# Debugging Helix actions deployed in Adobe I/O Runtime

```bash
docker run -p 8080:8080 -p 9229:9229 -it adobeapiplatform/adobe-action-nodejs-v10:3.0.17 node --inspect=0.0.0.0:9229 app.js
```

```bash
brew install httpie jq
```

```bash
hlx deploy --dry-run
cd .hlx/build
base64 html.zip | tr -d '\n' | jq -sR '{value: {main: "main", binary: true, code: .}}' > html.json
# deploy
http post localhost:8080/init < html.json
# invoke action
echo '{ "value": { "owner": "adobe", "repo": "project-helix.io", "ref": "master", "path": "index.md", "extension": "html", "branch": "master", "strain": "default" } }' > params.json
http post localhost:8080/run < params.json
# or, alternatively, using curl
curl -v -H "Content-Type: application/json" --data @params.json http://localhost:8080/run
```

To modify your action code:

```bash
unzip html.zip -d html
cd html
# make changes to extracted action code
# ...
# recreate archive
zip -r ../html.zip .
```

## Some Links

[Adobe I/O Runtime Developer Guide](https://git.corp.adobe.com/rstewart/runtime-documentation/blob/master/README.md)
[Debugging Node.js OpenWhisk Actions](https://medium.com/openwhisk/debugging-node-js-openwhisk-actions-3da3303e6741)