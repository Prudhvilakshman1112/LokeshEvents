import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
};

/* Initialise only once */
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

/* ---------- Review helpers ---------- */

export interface Review {
  id?: string;
  name: string;
  rating: number; // 1-5
  comment: string;
  createdAt: Timestamp | null;
}

const REVIEWS_COLLECTION = "reviews";

/** Save a new review to Firestore */
export async function submitReview(review: Omit<Review, "id" | "createdAt">): Promise<boolean> {
  try {
    await addDoc(collection(db, REVIEWS_COLLECTION), {
      ...review,
      createdAt: serverTimestamp(),
    });
    return true;
  } catch (err) {
    console.error("Failed to submit review:", err);
    return false;
  }
}

/** Fetch the latest reviews */
export async function fetchReviews(count = 20): Promise<Review[]> {
  try {
    const q = query(
      collection(db, REVIEWS_COLLECTION),
      orderBy("createdAt", "desc"),
      limit(count)
    );
    const snap = await getDocs(q);
    return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Review));
  } catch (err) {
    console.error("Failed to fetch reviews:", err);
    return [];
  }
}

export { db };
