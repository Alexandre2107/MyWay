import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Criação de usuários
  const user1 = await prisma.user.create({
    data: {
      full_name: "John Doe",
      document: "12345678901",
      email: "john.doe@example.com",
      password: "password",
      type_of_user: "student",
      has_full_permission: false,
    },
  })

  const user2 = await prisma.user.create({
    data: {
      full_name: "Jane Smith",
      document: "10987654321",
      email: "jane.smith@example.com",
      password: "password",
      type_of_user: "guardian",
      has_full_permission: true,
    },
  })

  // Criação de rotinas
  const routine1 = await prisma.routine.create({
    data: {
      user_id: user1.user_id,
      guardian_id: user2.user_id,
      description: "Routine 1 for John Doe",
    },
  })

  const routine2 = await prisma.routine.create({
    data: {
      user_id: user2.user_id,
      guardian_id: user1.user_id,
      description: "Routine 2 for Jane Smith",
    },
  })

  // Criação de atividades
  const activity1 = await prisma.activity.create({
    data: {
      routine_id: routine1.routine_id,
      type: "study",
      description: "Study session for math",
    },
  })

  const activity2 = await prisma.activity.create({
    data: {
      routine_id: routine2.routine_id,
      type: "exercise",
      description: "Morning exercise routine",
    },
  })

  // Criação de horários de atividades
  await prisma.activitySchedule.create({
    data: {
      activity_id: activity1.activity_id,
      start_time: new Date("2024-07-25T08:00:00Z"),
      end_time: new Date("2024-07-25T10:00:00Z"),
      day_of_week: "Monday",
    },
  })

  await prisma.activitySchedule.create({
    data: {
      activity_id: activity2.activity_id,
      start_time: new Date("2024-07-26T06:00:00Z"),
      end_time: new Date("2024-07-26T07:00:00Z"),
      day_of_week: "Tuesday",
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
