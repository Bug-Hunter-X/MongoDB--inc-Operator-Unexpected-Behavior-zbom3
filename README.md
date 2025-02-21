# MongoDB $inc Operator Bug

This repository demonstrates a common error when using the `$inc` operator in MongoDB.  The `$inc` operator is used to increment a numerical field by a specific value.  However, if used incorrectly, unexpected results can occur.

## Bug
The bug lies in incorrectly using non-numeric values with the `$inc` operator which will result in an error. The correct usage expects numerical values only.

## Solution
The solution involves ensuring that the values provided to the `$inc` operator are always numerical.  Proper type checking before using the `$inc` operator is recommended.
