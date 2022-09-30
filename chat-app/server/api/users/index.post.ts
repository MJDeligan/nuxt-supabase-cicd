import { Prisma } from "@prisma/client";
import { prisma } from "~~/prisma/client";


export default defineEventHandler(async (event) => {
  const user = await useBody<Prisma.UserBaseCreateInput>(event);
  const userRet = await prisma.userBase.create({ data: user });
  return userRet;
});