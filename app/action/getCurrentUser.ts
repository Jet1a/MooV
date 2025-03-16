import clientPromise from "@/lib/mongodb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

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

    const currentUser = await usersCollection.findOne({
      email: session?.user?.email as string,
    });

    if (!currentUser) return null;

    const { _id, ...userWithoutId } = currentUser;

    return { ...userWithoutId, id: _id.toString() };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error(String(error));
  }
}
