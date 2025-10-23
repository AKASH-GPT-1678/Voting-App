import * as z from "zod";

export const candidateSchema = z.object({
    name: z.string().min(5, "Name is required"),
    description: z.string().min(5, "Description is required"),
    feature: z.string().min(5, "Feature is required"),
});

export type Candidate = z.infer<typeof candidateSchema>;