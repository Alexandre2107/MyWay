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

  // Criação de atividades com horário (scheduled)
  const activity1 = await prisma.activity.create({
    data: {
      routine_id: routine1.routine_id,
      title: "Math Study Session",
      description: "Study session for math",
      activity_type: "scheduled",
    },
  })

  // Criação de atividades do tipo tarefa (task)
  const activity2 = await prisma.activity.create({
    data: {
      routine_id: routine2.routine_id,
      title: "Morning Exercise",
      description: "Morning exercise routine",
      activity_type: "task",
    },
  })

  // Criação de horários de atividades (scheduled)
  await prisma.activitySchedule.create({
    data: {
      activity_id: activity1.activity_id,
      has_time: true,
      start_time: new Date("2024-07-25T08:00:00Z"),
      end_time: new Date("2024-07-25T10:00:00Z"),
      day_of_week: "Mon",
    },
  })

  // Criação de horários de atividades (task)
  await prisma.activitySchedule.create({
    data: {
      activity_id: activity2.activity_id,
      has_time: false,
      day_of_week: "Tue",
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
