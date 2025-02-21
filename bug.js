```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("651234567890")}, {$inc: {field1: value1, field2: value2}});
```