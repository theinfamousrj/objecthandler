# object-handler
[![Build Status](https://travis-ci.org/theinfamousrj/objecthandler.svg?branch=master)](https://travis-ci.org/theinfamousrj/objecthandler)
[![Coverage Status](https://coveralls.io/repos/github/theinfamousrj/objecthandler/badge.svg?branch=master)](https://coveralls.io/github/theinfamousrj/objecthandler?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/theinfamousrj/objecthandler/badge.svg)](https://snyk.io/test/github/theinfamousrj/objecthandler)
[![Bless](https://cdn.rawgit.com/LunaGao/BlessYourCodeTag/master/tags/ramen.svg)](http://lunagao.github.io/BlessYourCodeTag/)

A simple object handler for handling objects. Allows searching for required properties and things of that nature. Works really well with requests in express.

# Install

```{r, engine='bash'}
$ npm install object-handler
```

# Use

Check an object for properties in an intuitive sort of way.

```javascript
const objHandler = require('object-handler');

let objectToCheck = { 
  someString: "Certainly a string.", 
  horse: true, 
  potion: 1, 
  obby: {
  
    deeper: true, 
    deepness: { 
      stophere: false, 
      evenDeeper: { 
        wow: 'that is deep', 
        right: { nope: 'we can go deeper' }
      }
    }
    
  }
};

let requiredProperties = ['someString', 'obby', 'obby.deepness.evenDeeper.wow'];

if( objHandler.hasRequiredProperties(objectToCheck, requiredProperties) ) {
  //do stuff with confidence 
};
```

# License
MIT License

Copyright (c) 2017 [Raymond John Hill](http://www.raymondjohnhill.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
