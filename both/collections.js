Items = new Mongo.Collection('items');


Items.allow({
  'insert': () => true,
  'update': () => true,
  'remove': () => true
});