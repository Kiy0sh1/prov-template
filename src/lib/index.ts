// place files you want to import through the `$lib` alias in this folder.
import { PrismaClient } from 'prisma/prisma-client'
export const prisma = new PrismaClient();