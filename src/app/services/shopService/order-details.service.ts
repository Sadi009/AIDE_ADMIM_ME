import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderDetailsService {
  constructor(private firestore: AngularFirestore) { }

  getOrders() {
    return this.firestore.collection("orders").get();
  }
  getShop(id) {
    return this.firestore.collection("shops", ref => ref.where('id', '==', id)).get();
  }
}
