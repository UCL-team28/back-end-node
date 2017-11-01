'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//actual
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  created_at: Date,
  updated_at: Date
});

//embedded
var noteSchema = new Schema(
  {
    title: String,
    content: String,
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    }/*,
      created_by: userSchema,
    updated_by: userSchema*/
  });

//actual
var notebookSchema = new Schema(
  {
    title: {
      type: String,
      required: 'Kindly enter the name of the notebook'
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    },
    /*created_by: userSchema,
    updated_by: userSchema,
    user_group: {
      type: [userSchema],
      required: 'Kindly specify the users of the notebook'
    },*/
    notes: {
      type: [noteSchema],
      default: []
    }
  });

module.exports = mongoose.model('Notebook', notebookSchema);
module.exports = mongoose.model('Note', noteSchema);
module.exports = mongoose.model('User', userSchema);