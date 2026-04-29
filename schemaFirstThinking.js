import { z } from "zod";

const BookSchema = z.object({
    id: z.string().min(1),
    title: z.string().min(1),
    author: z.string(),
    year: z.number().int().min(1).max(new Date().getFullYear()),
    tags: z.array(z.string()),
    inStock: z.boolean(),
});

// throws a detailed error if invalid.
const book = BookSchema.parse(incomingBook);

// or get a result you can branch on:
const result = BookSchema.safeParse(incomingBook);
