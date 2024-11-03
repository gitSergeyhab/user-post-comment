

## Example building docker image

```bash
docker build -t next-app-image .
```


## Example running docker container

```bash
docker run -d --name next-app-container -e NEXT_PUBLIC_LOCAL_URL=http://localhost:3000/api/ -p 4000:3000 next-app-image
```

## Open browser

```bash
http://localhost:4000/
```
