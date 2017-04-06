# hosting production
http://bjorgvin-strava.netlify.com
administration: https://app.netlify.com/sites/bjorgvin-strava

# development
```shell
yarn install gulp-cli
yarn install
gulp
```

# push to production
```
npm version major|minor|patch
git push
```

# embed code
```html
<iframe src="http://bjorgvin-strava.netlify.com" 
        name="Bjørgvin IF" 
        scrolling="no" 
        frameborder="no" 
        align="center" 
        height="60px" 
        width="300px"></iframe>
```