Items.allow({
  'insert': function(userId, doc) {
    return userId;
  },
  'update': function(userId, doc, fields, modifier) {
    return userId;
  },
  'remove': function(userId, doc) {
    return userId;
  }
});


Events.allow({
  'insert': function(userId, doc) {
    return userId;
  },
  'update': function(userId, doc, fields, modifier) {
    return userId;
  },
  'remove': function(userId, doc) {
    return userId;
  }
});

Images.allow({
  insert: function() {
    return true;
  },
  'update': function(userId, doc, fields, modifier) {
    return userId;
  },
  download: function() {
    return true;
  }
});