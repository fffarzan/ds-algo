# 1

We cannot import "../utils" in the other files: This error occurs because ECMAScript Modules (ESM) in Node.js do not support directory imports. Unlike CommonJS, ESM requires explicit file extensions and specific paths to resolve modules.

Q: So why in using with bundlers there is no need to add exact files via imports? Because they implement automated resolution algorithms during their build step
