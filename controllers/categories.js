'use strict';

module.exports.index = (req, res) => {
 res.send('Index working')
};


module.exports.create = (req, res) => {
  res.send('create created')
};


module.exports.newCategorie = (req, res) => {
  res.send('new category done');
};