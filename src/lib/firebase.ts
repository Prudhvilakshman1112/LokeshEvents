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

/*
 * Firebase client config — these are PUBLIC browser keys, not secrets.
 * They are safe to commit. Firebase security is enforced by Firestore Rules,
 * not by keeping these keys private.
 */
const firebaseConfig = {
  apiKey: "AIzaSyDyZbl8hfeHVbFrXRdE1ywO-rJf45TjkLI",
  authDomain: "lokeshevents-f60c8.firebaseapp.com",
  projectId: "lokeshevents-f60c8",
  storageBucket: "lokeshevents-f60c8.firebasestorage.app",
  messagingSenderId: "892944754174",
  appId: "1:892944754174:web:0f7e85e4658f18ec628caf",
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
