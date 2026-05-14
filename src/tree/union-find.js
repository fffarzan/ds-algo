class UnionFind {
  constructor(n) {
    this.parent = new Map();
    this.height = new Map();

    for (let i = 1; i < n + 1; i++) {
      this.parent.set(i, i);
      this.height.set(i, 0);
    }
  }

  find(n) {
    let currentParent = this.parent.get(n);

    while (currentParent !== this.parent.get(currentParent)) {
      // path compression to make node closer to the parent
      this.parent.set(
        currentParent,
        this.parent.get(this.parent.get(currentParent))
      );
      currentParent = this.parent.get(currentParent);
    }

    return currentParent;
  }

  union(n1, n2) {
    let parentN1 = this.find(n1);
    let parentN2 = this.find(n2);

    if (parentN1 == parentN2) {
      return false; // if already connected
    }

    if (this.height.get(parentN1) > this.height.get(parentN2)) {
      this.parent.set(parentN2, parentN1);
    }

    if (this.height.get(parentN1) < this.height.get(parentN2)) {
      this.parent.set(parentN1, parentN2);
    }

    if (this.height.get(parentN1) === this.height.get(parentN2)) {
      this.parent.set(parentN1, parentN2);
      this.height.set(parentN2, this.height.get(parentN2) + 1);
    }

    return true;
  }
}

const unionFind = new UnionFind(5);
unionFind.union(2, 4);
console.log(unionFind.parent, unionFind.height);
