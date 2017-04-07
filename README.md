html | css | es5 all-in-one-html Strava club run distance badge for Bjørgvin Indremosjonistforening 


# hosting production
http://bjorgvin-strava.netlify.com

administration: https://app.netlify.com/sites/bjorgvin-strava

# development
```shell
yarn global add gulp-cli
yarn install
gulp
```

# push to production
```
npm version major|minor|patch
git push
```

# versions & todo 
__1.2.0__ feature requests
? 
__1.1.0__ selectable event types  
introduce react w/react-router v4
hot reload for dev
redesign
versioning of API
__1.0.4__ push to publish
- _master/HEAD_


# wish list
* Event types - radio selection All | Run | Cycling 
 

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
