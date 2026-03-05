// Mock Firebase services for local development
class MockAuth {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    this.users = JSON.parse(localStorage.getItem('mockUsers') || '{}');
  }

  createUserWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
      if (this.users[email]) {
        reject(new Error('User already exists'));
        return;
      }
      const uid = Date.now().toString();
      this.users[email] = { uid, email, password };
      localStorage.setItem('mockUsers', JSON.stringify(this.users));
      this.currentUser = { uid, email };
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      resolve({ user: this.currentUser });
    });
  }

  signInWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
      const user = this.users[email];
      if (!user || user.password !== password) {
        reject(new Error('Invalid credentials'));
        return;
      }
      this.currentUser = { uid: user.uid, email };
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      resolve({ user: this.currentUser });
    });
  }

  signOut() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }
}

class MockFirestore {
  constructor() {
    this.data = JSON.parse(localStorage.getItem('mockFirestore') || '{}');
  }

  setDoc(ref, data) {
    return new Promise((resolve) => {
      if (!this.data[ref.parent.id]) {
        this.data[ref.parent.id] = {};
      }
      this.data[ref.parent.id][ref.id] = data;
      localStorage.setItem('mockFirestore', JSON.stringify(this.data));
      resolve();
    });
  }

  async addDoc(ref, data) {
    const id = Date.now().toString();
    if (!this.data[ref.id]) {
      this.data[ref.id] = {};
    }
    this.data[ref.id][id] = data;
    localStorage.setItem('mockFirestore', JSON.stringify(this.data));
    return { id };
  }

  doc(collection, id) {
    return {
      parent: { id: collection },
      id: id
    };
  }

  collection(id) {
    return { id };
  }

  async getDocs(q) {
    // Mock query result
    const collectionId = q.collection.id;
    const docs = this.data[collectionId] || {};
    const results = Object.keys(docs).map(id => ({
      id,
      data: () => docs[id]
    }));
    return results;
  }

  query(collectionRef, ...conditions) {
    // Simple mock - return the collection ref with conditions
    return {
      collection: collectionRef,
      conditions: conditions
    };
  }

  where(field, op, value) {
    // Mock where clause
    return { field, op, value };
  }
}

const mockAuth = new MockAuth();
const mockDb = new MockFirestore();

// Mock Firebase SDK functions
export function createUserWithEmailAndPassword(auth, email, password) {
  return mockAuth.createUserWithEmailAndPassword(email, password);
}

export function signInWithEmailAndPassword(auth, email, password) {
  return mockAuth.signInWithEmailAndPassword(email, password);
}

export function setDoc(ref, data) {
  return mockDb.setDoc(ref, data);
}

export function doc(db, collection, id) {
  return mockDb.doc(collection, id);
}

export function addDoc(ref, data) {
  return mockDb.addDoc(ref, data);
}

export function collection(db, id) {
  return mockDb.collection(id);
}

export function getDocs(q) {
  return mockDb.getDocs(q);
}

export function query(collectionRef, ...conditions) {
  return mockDb.query(collectionRef, ...conditions);
}

export function where(field, op, value) {
  return mockDb.where(field, op, value);
}

export const auth = mockAuth;
export const db = mockDb;
