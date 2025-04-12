import getCurrentUser from "@/app/action/getCurrentUser";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

interface IParams {
  id?: string;
}

export async function POST(
  request: Request,
  props: { params: Promise<IParams> }
) {
  const params = await props.params;
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { id } = params;

  if (!id || typeof id !== "string") {
    throw new Error("Invalid ID");
  }

  const favoriteIds = [...(currentUser.favoriteIds || [])];

  console.log("Adding to favorites:", id);
  console.log("Existing favorites:", currentUser.favoriteIds);

  favoriteIds.push(id);

  console.log(favoriteIds);

  const client = await clientPromise;
  const db = await client.db("moov");
  const usersCollection = await db.collection("User");

  const user = await usersCollection.updateOne(
    { _id: new ObjectId(currentUser._id) },
    { $set: { favoriteIds } }
  );

  return NextResponse.json(user);
}

export async function DELETE(
  request: Request,
  props: { params: Promise<IParams> }
) {
  const params = await props.params;
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { id } = params;

  if (!id || typeof id !== "string") {
    throw new Error("Invalid ID");
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  favoriteIds = favoriteIds.filter((existsId) => existsId !== id);

  const client = await clientPromise;
  const db = await client.db("moov");
  const usersCollection = await db.collection("User");

  const user = await usersCollection.updateOne(
    { _id: new ObjectId(currentUser._id) },
    { $set: { favoriteIds } }
  );

  return NextResponse.json(user);
}
