qa-api
WQ!

#### make workspace 
In your local hard disk use CMD or GitBash
```cmd
mkdir qa-local
cd qa-local
git init
```

> You may do some settings which like `git config user.name xxx ` or `git config user.email xx@xxx.com `

#### clone remote repo and init nodejs
```cmd
git clone git@github.com:RocGit/qa-api.git
cd qa-api
```

#### install serverless for gloabl
```cmd
npm install -g serverless (npm i -g serverless)
```

#### create severless service
```cmd
serverless create --template aws-nodejs --path qa-service
cd qa-service
npm init
```
#### install modules
```cmd
npm install --save serverless-dynamodb-local
npm install --save serverless-offline 
```

#### Add both plugins to your serverless.yml file:
```yml
plugins:
  - serverless-dynamodb-local
  - serverless-offline
```

#### install dynamodb by serverless 
```cmd
serverless dynamodb install (sls dynamodb install)
```
> the dynamodb package will installed in the same path .dynamodb
> see node_modules\serverless-dynamodb-local\index.js line:16 
> `localPath: serverless.config && path.join(serverless.config.servicePath, '.dynamodb')`
> in the `serverless.yml` maybe like :
> ```yml
> custom:
>   dynamodb:  
>     start:
>       ......
>     install:
>       localPath: ./.dynamodb
>         ......
> ```

#### In your project root run:

`serverless offline start or sls offline start`

#### modify the port of serverless offline in `serverless.yml`
```yml
custom:
  serverless-offline:
    port: 4000
  dynamodb:  
    start:
      ......
```
> serverless-offline's option must before the dynamodb'option in `serverless.yml`