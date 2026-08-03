import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import 'dotenv/config';

async function main() {
  const connectionString = process.env.DATABASE_URL;
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  console.log("Seeding admin user...");

  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@vgrecruitment.com" },
    update: {},
    create: {
      name: "Super Admin",
      email: "admin@vgrecruitment.com",
      password: hashedPassword,
      role: "SUPERADMIN",
    },
  });

  console.log("Admin user created/verified:", admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
