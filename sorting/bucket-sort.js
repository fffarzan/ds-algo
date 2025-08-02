const problemArray = [2, 1, 2, 0, 0, 2];
const problemBucketSize = 3;

function bucketSort (arr, bucketSize) {
  const result = [];
  const counts = new Array(bucketSize);

  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]]++;
      continue;
    }

    counts[arr[i]] = 1;
  }

  for (let i = 0; i < counts.length; i++) {
    for (let j = 0; j < counts[i]; j++) {
      result.push(i);
    }
  }
  
  return result;
}

console.log(bucketSort(problemArray, problemBucketSize));