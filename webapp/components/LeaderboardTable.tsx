import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { db2 } from "@/db"
import {
  leaderboard, leaderboard_m1, leaderboard_m2, leaderboard_m3,
  Leaderboard, Leaderboard_m1, Leaderboard_m2, Leaderboard_m3
} from "@/db/schema2"
import { desc, asc } from "drizzle-orm"

export const LeaderboardTable = async () => {
  let users = await db2
    .select()
    .from(leaderboard)
    .limit(5)
    .orderBy(desc(leaderboard.score), asc(leaderboard.username))

  return (
    <Table className="w-full justify-center">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40px] text-center">#</TableHead>
          <TableHead className="w-[200px]">Username</TableHead>
          <TableHead className="w-[100px] text-end">Score</TableHead>
        </TableRow>
        {users.map((user: Leaderboard, index: number) => (
          <TableRow key={user.id}>
            <TableCell className="w-[40px] text-center">{index + 1}</TableCell>
            <TableCell className="w-[200px]">{user.username}</TableCell>
            <TableCell className="w-[100px] text-end">{user.score}</TableCell>
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
      </TableBody>
    </Table>
  )
}

export const LeaderboardTable_m1 = async () => {
  let users_m1 = await db2
    .select()
    .from(leaderboard_m1)
    .limit(3)
    .orderBy(asc(leaderboard_m1.score), asc(leaderboard_m1.username))

  return (
    <Table className="w-full justify-center">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40px] text-center">#</TableHead>
          <TableHead className="w-[200px]">Username</TableHead>
          <TableHead className="w-[100px] text-end">Score</TableHead>
        </TableRow>
        {users_m1.map((user_m1: Leaderboard_m1, index: number) => (
          <TableRow key={user_m1.id}>
            <TableCell className="w-[40px] text-center">{index + 1}</TableCell>
            <TableCell className="w-[200px]">{user_m1.username}</TableCell>
            <TableCell className="w-[100px] text-end">{user_m1.score}</TableCell>
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
      </TableBody>
    </Table>
  )
}

export const LeaderboardTable_m2 = async () => {
  let users_m2 = await db2
    .select()
    .from(leaderboard_m2)
    .limit(3)
    .orderBy(asc(leaderboard_m2.score), asc(leaderboard_m2.username))

  return (
    <Table className="w-full justify-center">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40px] text-center">#</TableHead>
          <TableHead className="w-[200px]">Username</TableHead>
          <TableHead className="w-[100px] text-end">Score</TableHead>
        </TableRow>
        {users_m2.map((user_m2: Leaderboard_m2, index: number) => (
          <TableRow key={user_m2.id}>
            <TableCell className="w-[40px] text-center">{index + 1}</TableCell>
            <TableCell className="w-[200px]">{user_m2.username}</TableCell>
            <TableCell className="w-[100px] text-end">{user_m2.score}</TableCell>
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
      </TableBody>
    </Table>
  )
}

export const LeaderboardTable_m3 = async () => {
  let users_m3 = await db2
    .select()
    .from(leaderboard_m3)
    .limit(3)
    .orderBy(asc(leaderboard_m3.score), asc(leaderboard_m3.username))

  return (
    <Table className="w-full justify-center">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40px] text-center">#</TableHead>
          <TableHead className="w-[200px]">Username</TableHead>
          <TableHead className="w-[100px] text-end">Score</TableHead>
        </TableRow>
        {users_m3.map((user_m3: Leaderboard_m3, index: number) => (
          <TableRow key={user_m3.id}>
            <TableCell className="w-[40px] text-center">{index + 1}</TableCell>
            <TableCell className="w-[200px]">{user_m3.username}</TableCell>
            <TableCell className="w-[100px] text-end">{user_m3.score}</TableCell>
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
      </TableBody>
    </Table>
  )
}
