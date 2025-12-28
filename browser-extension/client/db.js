import Dexie from "dexie";
export const db = new Dexie("OutfitGrabberDb");

db.version(2).stores({
    outfits: "++id, itemName, quantity, cost, link, image, createdAt"
})