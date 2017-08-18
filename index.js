module.exports = {
  getKeys: function(obj, root, keys) {
    if(typeof obj !== 'object') throw new Error('Item to check must be an object.')
    
    for(let prop in obj) {
        let curr = root !== null ? root+'.'+prop : prop
        if(typeof obj[prop] === 'object') {
            this.getKeys(obj[prop], curr, keys)
        }
        keys.push(curr)
    }
  },
  hasRequiredProperties: function(obj, keys) {
    if(typeof obj !== 'object') throw new Error('Item to check must be an object.')
    
    let objKeys = []
    this.getKeys(obj, null, objKeys)
    
    let hasKeys = true
    for(let i=0, l=keys.length; i<l; i++) {
      let key = keys[i]
      hasKeys = hasKeys && objKeys.indexOf(key) !== -1
    }
    
    return hasKeys;
  }
};