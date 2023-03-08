import { getFirestore } from 'firebase-admin/firestore'
import {initializeApp, getApps, cert} from "firebase-admin/app"

const apps = getApps()

if (!apps.length) {
  initializeApp({
    credential: cert('./tec-whatsapp-firebase-adminsdk-qei58-dfa66bbcb1.json')
  })
}

export default defineEventHandler(async (event) => {
  const db = getFirestore()
  const querySnap = await db.collection('categories')
  .where("slug", "==", event.context.params.category)
  .get()

  const productsData = querySnap.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  })
  
  return productsData
})