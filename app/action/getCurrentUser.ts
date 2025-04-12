import clientPromise from "@/lib/mongodb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import {  ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

interface CurrentUser {
  _id: ObjectId;
  name: string;
  email: string;
  hashedPassword: string;
  favoriteIds: string[];
  createdAt: Date;
}

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) return null;

    const client = await clientPromise;
    const db = client.db("moov");
    const usersCollection = db.collection("User");

    const currentUser = await usersCollection.findOne<CurrentUser>({
      email: session?.user?.email as string,
    });

    if (!currentUser) return null;

    return { ...currentUser, _id: currentUser._id.toString() };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error(String(error));
  }
}
