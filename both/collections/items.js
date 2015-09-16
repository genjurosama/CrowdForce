
Items = new Mongo.Collection('items');


Events = new Meteor.Collection('events');

Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {})]
});

Items.helpers({

});

Items.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Events.attachSchema(new SimpleSchema({
  name: {
    type: String,
    max: 200
  },
  description: {
    type: String,
    optional: true,
    max: 1000,
    autoform: {
      type: 'textarea'
    }
  },
  startDate: {
    type: Date,
    autoform: {
      type: 'pickadate'
    }
  },
  endDate: {
    type: Date,
    autoform: {
      type: 'pickadate'
    }
  },
  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        label: 'Choose file',
        accept: 'image/*'
      }
    }
  },
  location: {
  type: String,
  autoform: {
    type: 'map',
    afFieldInput: {
      geolocation: true,
      searchBox: true,
      autolocate: true
    }
  }
}
  ,
  creatorID: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoform: {
      type: "hidden",
      label: false
    },
    autoValue: function () { return this.userId }
  }
}));
